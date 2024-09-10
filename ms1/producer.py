import requests
import json 
from kafka import KafkaProducer
import time
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

KAFKA_TOPIC=os.getenv("COLLECTION_KAFKA_TOPIC")
API_SERVER=os.getenv("API_SERVER")



producer = KafkaProducer(
    bootstrap_servers=["kafka:9092"],
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
    max_block_ms=1000
)

api_response = requests.post(f"{API_SERVER}/support/request/history")
services_raw = api_response.json()['service_list']
# print(api_response.json())
#TODO fetch data to map api_response to e_data
from convert_api_response import convert_api_response
# e_data = convert(api_response.json())
e_data = convert_api_response(services_raw)




# from example_data import e_data



while True:
    try:
        producer.send(KAFKA_TOPIC, value={"data":e_data})
        producer.flush()
        print("Message sent successfully")
    except Exception as e:
        print("Failed to send message")
        print(e)

    time.sleep(5)