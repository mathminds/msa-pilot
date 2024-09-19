import pandas as pd
from time import sleep
from db_handler.db_handler import to_sql, read_sql
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
    auto_offset_reset='earliest', 
    enable_auto_commit=False,
    value_deserializer=json.loads,
)

# Subscribe to a specific topic
consumer.subscribe(topics=[LISTENING_KAFKA_TOPIC, SERVICE_MAPPER_KAFKA_TOPIC, DATA_PROVIDER_MAPPER_KAFKA_TOPIC])

service_mapper = None
data_provider_mapper = None
# Poll for new messages
while True:
    msg = consumer.poll(timeout_ms=1000)
    try:
        if msg:
            print("[MS2] New messages received from MS1")
            for topic_partition, messages in msg.items():
                print(f"Topic: {topic_partition.topic}")
            # print(msg.keys())
                if topic_partition.topic == SERVICE_MAPPER_KAFKA_TOPIC:
                    print("[MS2] Service Mapper data received")
                    df_service_mapper=pd.DataFrame(messages[0].value['data'])
                    print(df_service_mapper.columns)
                    to_sql(df_service_mapper, "service_mapper")
                    service_mapper=read_sql("service_mapper")

                    # print(service_mapper_data)
                elif topic_partition.topic == DATA_PROVIDER_MAPPER_KAFKA_TOPIC:
                    print("[MS2] Data Provider Mapper data received")
                    df_data_provider_mapper=pd.DataFrame(messages[0].value['data'])
                    print(df_data_provider_mapper.columns)
                    to_sql(df_data_provider_mapper, "data_provider_mapper")
                    data_provider_mapper=read_sql("data_provider_mapper")


                    # print(msg[TopicPartition(topic=SERVICE_MAPPER_KAFKA_TOPIC, partition=0)])
                elif topic_partition.topic == LISTENING_KAFKA_TOPIC:
                    print("[MS2] Personal Data received")
                    # inner_msg=msg[TopicPartition(topic=LISTENING_KAFKA_TOPIC, partition=0)]
                    # for key, value in msg.items():
                    # while service_mapper is None:
                    #     try:
                    #         service_mapper = read_sql("service_mapper")
                    #     except Exception as e:
                    #         sleep(1)
                    #         print("[MS2] Service Mapper data not yet available")
                    # print(messages)
                                               
                    d = messages[0].value['data']

                    new_services = []
                    active_services = []
                    revoked_data_providers_list = []
                    try:
                        converted_services=convert_api_response(d)
                    except Exception as e:

                        print("CONVERTING",e)
                        continue
                    
                    print("[MS2] Analyzing data...")
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
                                                                "service_code":revoked_data_providers['service_cd'],
                                                                "consent_id":consent_id,
                                                                "data_provider_code":data_provider_code,
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
                    producer.send(ACTIVE_SERVICES_TOPIC, value=active_services)
                    producer.send(REVOKED_DATA_PROVIDERS_TOPIC, value=revoked_data_providers_list)
                    producer.flush()

                    print("[MS2] Analyzed data sent")

        else:
            pass
            # print("[MS2]")
    except Exception as e:
        print("[MS2] Failed to process message")
        print(e)
        # consumer.commit()
        break