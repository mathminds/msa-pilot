import requests
import json 
from kafka import KafkaProducer
import time
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

KAFKA_TOPIC=os.getenv("COLLECTION_KAFKA_TOPIC")
SERVICE_MAPPER_TOPIC=os.getenv("SERVICE_MAPPER_KAFKA_TOPIC")
DATA_PROVIDER_MAPPER_KAFKA_TOPIC=os.getenv("DATA_PROVIDER_MAPPER_KAFKA_TOPIC")
API_SERVER=os.getenv("API_SERVER")



producer = KafkaProducer(
    bootstrap_servers=["kafka:9092"],
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
    max_block_ms=1000,
    acks="all"
)

start_time = time.time()
last_service_mapper = {}
last_data_provider_mapper = {}
last_personal_data = []
isDeleted = None
while True:
    time.sleep(2)
    print()
    # print("[MS1] Checking API for new data")

    try:

        service_mapper = requests.get(f"{API_SERVER}/service_mapping")
        if service_mapper.json() == {}:
            last_service_mapper={}
            cur_time = time.time()
            if cur_time - start_time > 10:
                if int(cur_time-start_time)%10 == 0:
                    print(f"[MS1] No data provided by API for {int(cur_time-start_time)} seconds")
            # print("[MS1] No data provided by API")
            
            
        elif service_mapper.json() == last_service_mapper:
            print("[MS1] No new data to publish")
            # continue
        else:
            current_service_mapper = service_mapper.json()
            producer.send(SERVICE_MAPPER_TOPIC, value={"data":current_service_mapper})
            producer.flush()
            print("[MS1] SERVICE_MAPPER sent successfully")
            last_service_mapper = current_service_mapper
            start_time = time.time()
            isDeleted = False
    except Exception as e:
        print("[MS1] SERVICE_MAPPER Failed to send message")
        print(e)

    
    try:

        data_provider_mapper = requests.get(f"{API_SERVER}/data_provider_mapping")
        if data_provider_mapper.json() == {}:
            last_data_provider_mapper={}
            

        elif data_provider_mapper.json()==last_data_provider_mapper:
            print("[MS1] No data provider mapping to publish")

            # continue
        else:
            current_data_provider_mapper = data_provider_mapper.json()
            producer.send(DATA_PROVIDER_MAPPER_KAFKA_TOPIC, value={"data":current_data_provider_mapper})
            producer.flush()
            last_data_provider_mapper = current_data_provider_mapper
            print("[MS1] DATA_PROVIDER_MAPPER sent successfully")
            start_time = time.time()
            isDeleted = False
    except Exception as e:
        print("[MS1] DATA_PROVIDER_MAPPER Failed to send message")
        print(e)

    try:
        api_response = requests.post(f"{API_SERVER}/support/request/history")
        current_personal_data = api_response.json()['service_list']
        if current_personal_data == []:
            # print("[MS1] No new service info to publish")
            last_personal_data = current_personal_data
            # continue

        elif current_personal_data == last_personal_data:
            print("[MS1] No new service info to publish")
            # continue
            
        else:
            producer.send(KAFKA_TOPIC, value={"data":current_personal_data})
            producer.flush()
            last_personal_data = current_personal_data
            print("[MS1] PERSONAL_DATA sent successfully")
            start_time = time.time()
            isDeleted = False



    except Exception as e:
        print("[MS1] PERSONAL_DATA Failed to send message")
        print(e)


    if last_service_mapper=={} and last_data_provider_mapper=={} and last_personal_data==[]:
        if isDeleted == True or isDeleted is None:
            continue
        else:
            producer.send("delete", value={"data":"delete"})
            producer.flush()
            isDeleted = True
            start_time=time.time()
            print("[MS1] User data delete initiated.")
    