import pandas as pd
from time import sleep
from db_handler.db_handler import to_sql, read_sql, delete_tables
from analyze_services import determine_if_service_is_active, determine_if_service_is_new, extract_revoked_data_providers
from convert_api_response import convert_api_response
from kafka.structs import TopicPartition
import json
from kafka import KafkaConsumer, KafkaProducer
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

LISTENING_KAFKA_TOPIC=os.getenv("COLLECTION_KAFKA_TOPIC")
SERVICE_MAPPER_KAFKA_TOPIC=os.getenv("SERVICE_MAPPER_KAFKA_TOPIC")
DATA_PROVIDER_MAPPER_KAFKA_TOPIC=os.getenv("DATA_PROVIDER_MAPPER_KAFKA_TOPIC")
PRODUCING_KAFKA_TOPIC=os.getenv("ANALYSIS_KAFKA_TOPIC")

NEW_SERVICES_TOPIC=os.getenv("NEW_SERVICES_TOPIC")
ACTIVE_SERVICES_TOPIC=os.getenv("ACTIVE_SERVICES_TOPIC")
REVOKED_DATA_PROVIDERS_TOPIC=os.getenv("REVOKED_DATA_PROVIDERS_TOPIC")


# Create a KafkaConsumer instance
consumer = KafkaConsumer(
    bootstrap_servers=['kafka:9092'], 
    group_id='ms2',
    auto_offset_reset='earliest', 
    enable_auto_commit=False,
    value_deserializer=json.loads,
)

# Subscribe to a specific topic

consumer.subscribe(topics=[LISTENING_KAFKA_TOPIC, SERVICE_MAPPER_KAFKA_TOPIC, DATA_PROVIDER_MAPPER_KAFKA_TOPIC, "delete"])

    
def get_service_name(service_cd):
    try:
        service_mapper=read_sql("service_mapper")
        # print("GETTING SERVICE NAME")
        df = service_mapper[service_mapper.service_code==service_cd]
        return df.title.values[0]
    except Exception as e:
        print("[MS2] get_service_name ERROR:", e)
        return f"TITLE_{service_cd}"
    
def get_data_provider_name(data_provider_cd):
    try:
        data_provider_mapper=read_sql("data_provider_mapper")
        # print("GETTING DATA PROVIDER NAME")
        df = data_provider_mapper[data_provider_mapper.data_provider_code==data_provider_cd]
        return df.data_provider_name.values[0]
    except Exception as e:
        print("[MS2] get_data_provider_name ERROR:", e, "data_provider_cd", data_provider_cd)
        return f"DATA_PROVIDER_{data_provider_cd}"
    
def process_personal_data():
    global personal_data, service_mapper, data_provider_mapper
    
    if service_mapper is None or data_provider_mapper is None or personal_data is None:
        # if service_mapper is None:
        #     print("service_mapper is None")
        # if data_provider_mapper is None:
        #     print('data mapper is None')
        # if personal_data is None:
        #     print("personal_data is None")

        return False
    
    if service_mapper.shape[0]==0 or data_provider_mapper.shape[0]==0 or len(personal_data)==0:
        # print("service_mapper shape", service_mapper.shape, "data_provider_mapper shape", data_provider_mapper.shape, "personal_data len", len(personal_data))
        return False
    
    d=personal_data
    new_services = []
    active_services = []
    revoked_data_providers_list = []
    try:
        converted_services=convert_api_response(d)
    except Exception as e:

        print("CONVERTING",e)
        return False
    
    # print("[MS2] Analyzing data...")
    for i,s in enumerate(d):
        if determine_if_service_is_new(s):
            new_services.append(converted_services[i])

        if determine_if_service_is_active(s):
            active_services.append(converted_services[i])

        revoked_data_providers = extract_revoked_data_providers(s)
        for r in revoked_data_providers['revoked_data_providers']:
            consent_id=r["request_msg_id"]
            data_provider_code=r["prv_inst_cd"]

            if r["request_stcd"] == "0":
                consent_status = "ACTIVE"
            elif r["request_stcd"] == "1":
                consent_status = "REVOKED"
            elif r["request_stcd"] == "2":
                consent_status = "EXPIRED"
            else:
                consent_status = "UNKNOWN"

            third_party_sharing_allowed = True if r["prov_consent_yn"]=="Y" else False
            expires_at = r["request_end_ymd"]
            started_at = r["request_ymd"]
            revoked_at = r["request_revoke_ymd"] if "request_revoke_ymd" in r else ""

            
            revoked_data_providers_list.append({"id":consent_id+data_provider_code,
                                                "service_code":get_service_name(revoked_data_providers['service_cd']),
                                                "consent_id":consent_id,
                                                "data_provider_code":get_data_provider_name(data_provider_code),
                                                
                                                "consent_status":consent_status,
                                                "third_party_sharing_allowed":third_party_sharing_allowed,
                                                "expires_at":expires_at,
                                                "started_at":started_at,
                                                "revoked_at":revoked_at
                                                })
        
        producer = KafkaProducer(
            bootstrap_servers=['kafka:9092'],
            value_serializer=lambda x: json.dumps({"data":x}).encode('utf-8'),
            max_block_ms=100
        )

    producer.send(NEW_SERVICES_TOPIC, value=new_services)
    # print("[MS2] NEW SERVICES event published")
    producer.send(ACTIVE_SERVICES_TOPIC, value=active_services)
    # print("[MS2] ACTIVE SERVICES event published")
    producer.send(REVOKED_DATA_PROVIDERS_TOPIC, value=revoked_data_providers_list)
    # print("[MS2] REVOKED DATA PROVIDERS event published")
    producer.flush()
    personal_data=[]
    # print("[MS2] Analyzed data sent")

service_mapper = None
data_provider_mapper = None
personal_data=None
# Poll for new messages
import time
start_time = time.time()
while True:
    msg = consumer.poll(timeout_ms=100)
    try:
        if msg:
            
            start_time = time.time()
            # print("[MS2] New messages received from MS1")
            for topic_partition, messages in msg.items():
                # print(f"Topic: {topic_partition.topic}")
                if topic_partition.topic == "delete":
                    try:
                        delete_tables("service_mapper")
                    except Exception as e:
                        print("DELETE ERROR:", "service_mapper")
                    try:
                        delete_tables("data_provider_mapper")
                    except Exception as e:
                        print("DELETE ERROR:", "data_provider_mapper")
                    try:
                        delete_tables("personal_data")
                    except Exception as e:
                        print("DELETE ERROR:", "personal_data")
                    
                    service_mapper = None
                    data_provider_mapper = None
                    personal_data=None
                    print("[MS2] All user data deleted successfully.")
                    new_services = []
                    active_services = []
                    revoked_data_providers_list = []
                    producer = KafkaProducer(
                        bootstrap_servers=['kafka:9092'],
                        value_serializer=lambda x: json.dumps({"data":x}).encode('utf-8'),
                        max_block_ms=1000
                    )
                    producer.send(NEW_SERVICES_TOPIC, value=new_services)
                    # print("[MS2] NEW SERVICES event published")
                    producer.send(ACTIVE_SERVICES_TOPIC, value=active_services)
                    # print("[MS2] ACTIVE SERVICES event published")
                    producer.send(REVOKED_DATA_PROVIDERS_TOPIC, value=revoked_data_providers_list)
                    # print("[MS2] REVOKED DATA PROVIDERS event published")
                    producer.flush()
                    
                    continue
                        



                elif topic_partition.topic == SERVICE_MAPPER_KAFKA_TOPIC:
                    df_service_mapper=pd.DataFrame(messages[0].value['data'])
                    to_sql(df_service_mapper, "service_mapper")
                    service_mapper=read_sql("service_mapper")
                    print("[MS2] Service Mapper data received and saved to DB")
                    consumer.commit()
                    

                elif topic_partition.topic == DATA_PROVIDER_MAPPER_KAFKA_TOPIC:
                    df_data_provider_mapper=pd.DataFrame(messages[0].value['data'])
                    to_sql(df_data_provider_mapper, "data_provider_mapper")
                    data_provider_mapper=read_sql("data_provider_mapper")
                    print("[MS2] Data Provider Mapper data received and saved to DB")
                    consumer.commit()
                    


                elif topic_partition.topic == LISTENING_KAFKA_TOPIC:
                    # print("[MS2] Personal Data received")
                    d=personal_data if personal_data else []                    
                    d += messages[0].value['data']
                    try:
                        
                        personal_data_for_df = []
                        for item in d:
                            new_item={}
                            for k,v in item.items():
                                if k=='request_list':
                                    new_item[k]=json.dumps(v)
                                else:
                                    new_item[k]=v
                            personal_data_for_df.append(new_item)
                        to_sql(pd.DataFrame(personal_data_for_df), "personal_data")
                        df_personal_data=read_sql("personal_data")
                        print("[MS2] Personal Data received and saved to DB")
                        df_personal_data['request_list']=df_personal_data['request_list'].apply(lambda x: json.loads(x))
                        personal_data=df_personal_data.to_dict('records')
                        consumer.commit()
                    except Exception as e:
                        print("[MS2] Personal Data to DB error:",e)
                        # personal_data=pd.DataFrame(d)
                        continue
                    
                    try:
                        # dp_mapper= read_sql("data_provider_mapper")
                        # service_mapper= read_sql("service_mapper")
                        if data_provider_mapper is None or service_mapper is None:
                            personal_data=d
                            continue

                        if data_provider_mapper.shape[0]==0 or service_mapper.shape[0]==0:
                            personal_data=d
                            continue
                    except Exception as e:
                        # print(e)
                        personal_data=d
                        continue


                    new_services = []
                    active_services = []
                    revoked_data_providers_list = []
                    try:
                        converted_services=convert_api_response(d)
                        
                    except Exception as e:

                        print("CONVERTING",e)
                        continue
                    
                    # print("[MS2] Analyzing data...")
                    for i,s in enumerate(d):
                        if determine_if_service_is_new(s):
                            new_services.append(converted_services[i])

                        if determine_if_service_is_active(s):
                            active_services.append(converted_services[i])

                        revoked_data_providers = extract_revoked_data_providers(s)
                        for r in revoked_data_providers['revoked_data_providers']:
                            consent_id=r["request_msg_id"]
                            data_provider_code=r["prv_inst_cd"]

                            if r["request_stcd"] == "0":
                                consent_status = "ACTIVE"
                            elif r["request_stcd"] == "1":
                                consent_status = "REVOKED"
                            elif r["request_stcd"] == "2":
                                consent_status = "EXPIRED"
                            else:
                                consent_status = "UNKNOWN"

                            third_party_sharing_allowed = True if r["prov_consent_yn"]=="Y" else False
                            expires_at = r["request_end_ymd"]
                            started_at = r["request_ymd"]
                            revoked_at = r["request_revoke_ymd"] if "request_revoke_ymd" in r else ""

                            
                            revoked_data_providers_list.append({"id":consent_id+data_provider_code,
                                                                "service_code":get_service_name(revoked_data_providers['service_cd']),
                                                                "consent_id":consent_id,
                                                                "data_provider_code":get_data_provider_name(data_provider_code),
                                                                
                                                                "consent_status":consent_status,
                                                                "third_party_sharing_allowed":third_party_sharing_allowed,
                                                                "expires_at":expires_at,
                                                                "started_at":started_at,
                                                                "revoked_at":revoked_at
                                                                })
                        
                        producer = KafkaProducer(
                            bootstrap_servers=['kafka:9092'],
                            value_serializer=lambda x: json.dumps({"data":x}).encode('utf-8'),
                            max_block_ms=1000
                        )

                    producer.send(NEW_SERVICES_TOPIC, value=new_services)
                    # print("[MS2] NEW SERVICES event published")
                    producer.send(ACTIVE_SERVICES_TOPIC, value=active_services)
                    # print("[MS2] ACTIVE SERVICES event published")
                    producer.send(REVOKED_DATA_PROVIDERS_TOPIC, value=revoked_data_providers_list)
                    # print("[MS2] REVOKED DATA PROVIDERS event published")
                    producer.flush()
                    personal_data=[]
                    # print("[MS2] Analyzed data sent")

            
        else:
            cur_time = time.time()
            if cur_time - start_time > 10:
                if int((cur_time-start_time)*10)%100==0:
                    pd_response = process_personal_data()
                    if not pd_response:
                        # print("[MS2] Personal Data not processed")
                        print()
                        print(f"[MS2] No events received for {int(cur_time-start_time)} seconds..")
                    else:
                        print("[MS2] Personal Data processed")
            else:
                # consumer.subscribe(topics=[LISTENING_KAFKA_TOPIC, SERVICE_MAPPER_KAFKA_TOPIC, DATA_PROVIDER_MAPPER_KAFKA_TOPIC])
                # print("[MS2] No events received. Subscribed to topics again")
                continue
            # print("[MS2]")
    except Exception as e:
        print("[MS2] Failed to process message")
        print(e)
        # consumer.commit()
        break