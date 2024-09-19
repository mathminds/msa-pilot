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
    max_block_ms=1000
)


# service_mapper = requests.get(f"{API_SERVER}/service_mapping")
# print(service_mapper.json())
# print(api_response.json())
#TODO fetch data to map api_response to e_data
# from convert_api_response import convert_api_response
# e_data = convert(api_response.json())
# e_data = convert_api_response(services_raw)




# from example_data import e_data



while True:
    try:

        service_mapper = requests.get(f"{API_SERVER}/service_mapping")
        producer.send(SERVICE_MAPPER_TOPIC, value={"data":service_mapper.json()})
        producer.flush()
        print("[MS1] SERVICE_MAPPER sent successfully")
    except Exception as e:
        print("[MS1] SERVICE_MAPPER Failed to send message")
        print(e)

    
    try:

        data_provider_mapper = requests.get(f"{API_SERVER}/data_provider_mapping")
        producer.send(DATA_PROVIDER_MAPPER_KAFKA_TOPIC, value={"data":data_provider_mapper.json()})
        producer.flush()
        print("[MS1] DATA_PROVIDER_MAPPER sent successfully")
    except Exception as e:
        print("[MS1] DATA_PROVIDER_MAPPER Failed to send message")
        print(e)

    try:

        api_response = requests.post(f"{API_SERVER}/support/request/history")
        services_raw = api_response.json()['service_list']
        producer.send(KAFKA_TOPIC, value={"data":services_raw})
        producer.flush()
        print("[MS1] PERSONAL_DATA sent successfully")
    except Exception as e:
        print("[MS1] PERSONAL_DATA Failed to send message")
        print(e)

    time.sleep(10)