from pydantic import BaseModel
import requests
import json
from kafka import KafkaProducer
import time
from dotenv import load_dotenv, find_dotenv
import os
from db_handler.db_handler import delete_tables, to_sql, read_sql
import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

class MS1Service:
    def __init__(self):
        load_dotenv(find_dotenv())
        
        self.KAFKA_TOPIC = os.getenv("COLLECTION_KAFKA_TOPIC")
        self.SERVICE_MAPPER_TOPIC = os.getenv("SERVICE_MAPPER_KAFKA_TOPIC")
        self.DATA_PROVIDER_MAPPER_KAFKA_TOPIC = os.getenv("DATA_PROVIDER_MAPPER_KAFKA_TOPIC")
        self.API_SERVER = os.getenv("API_SERVER")

        self.producer = KafkaProducer(
            bootstrap_servers=["kafka:9092"],
            value_serializer=lambda v: json.dumps(v).encode("utf-8"),
            max_block_ms=1000,
            acks="all"
        )

        self.start_time = time.time()
        self.last_data = {}
        self.last_data['service_mapper'] = []
        self.last_data['data_provider_mapper'] = []
        self.last_data['personal_data'] = []

        self.userDeleted = True

    def fetch_data(self, url, topic=None):
        if topic == "personal_data":
            try:
                api_response = requests.post(f"{self.API_SERVER}/support/request/history")
                current_personal_data = api_response.json().get('service_list', [])
                return current_personal_data
            except Exception as e:
                print(f"[MS1] Error fetching data from {url}")
                print(e)
        try:
            response = requests.get(url)
            return response.json()
        except Exception as e:
            print(f"[MS1] Error fetching data from {url}")
            print(e)
            # return []
    
    def send_data(self, topic, data):
        if data == []:
            # print(f"[MS1] No {topic.upper()} to send")
            return True
        try:
            self.producer.send(topic, value={"data": data})
            self.producer.flush()
            print(f"[MS1] {topic.upper()} sent successfully")
            return True
        except Exception as e:
            print(f"[MS1] {topic.upper()} Failed to send message")
            print(e)
            return False

    def fetch_and_send_data(self, url, topic):
        
        try:
            current_data = self.fetch_data(url, topic)
            if current_data != self.last_data[topic]:
                self.last_data[topic] = current_data
                if self.last_data[topic] == []:
                    self.delete_user_data()
                    
                    return True
                self.userDeleted=False
                try:
                    event_published = self.send_data(topic, self.last_data[topic])
                    if event_published:
                        self.start_time = time.time()
                        return True
                except Exception as e:
                    print(f"[MS1-79] {topic.upper()} Failed to send message")
                    print(e)
                    return False
            else:
                return True

        except Exception as e:
            print(f"[MS1-68] {topic.upper()} Failed to send message")
            print(e)
        return False
    
    def delete_user_data(self):
        if self.userDeleted:
            return True
        for topic in ["service_mapper", "data_provider_mapper", "personal_data"]:
            try:
                delete_tables(topic)
                self.last_data[topic] = []
            except Exception as e:
                print(f"DELETE ERROR: {topic}")
                return False
        print("[MS1] All user data deleted successfully.")
        self.producer.send("ms2-delete", value={"data": "delete"})
        self.producer.flush()
        self.userDeleted=True
        return True

    def run(self):
        while True:
            test_data_status = self.fetch_data(f"{self.API_SERVER}/test_data_status")
            if not test_data_status:
                if self.userDeleted:
                    time.sleep(0.5)
                    continue
                else:
                    self.delete_user_data()
                    continue
            
            self.userDeleted=False

            # Try to fetch service mapping data and send it to Kafka if it has changed
            try:
                response = self.fetch_and_send_data(f"{self.API_SERVER}/service_mapping", self.SERVICE_MAPPER_TOPIC)
                if response:
                    self.start_time = time.time()
            except Exception as e:
                print("[MS1-58] Error fetching service mapping data")
                print(e)

            # Try to fetch data provider mapping data and send it to Kafka if it has changed
            try:
                response = self.fetch_and_send_data(f"{self.API_SERVER}/data_provider_mapping", self.DATA_PROVIDER_MAPPER_KAFKA_TOPIC)
                if response:
                    self.start_time = time.time()
            except Exception as e:
                print("[MS1-67] Error fetching data provider mapping data")
                print(e)

            # Try to fetch personal data and send it to Kafka if it has changed
            try:
                response = self.fetch_and_send_data(f"{self.API_SERVER}/support/request/history", self.KAFKA_TOPIC)
                if response:
                    self.start_time = time.time()
            except Exception as e:
                print("[MS1-76] Error fetching personal data")
                print(e)

            time.sleep(2)


    async def consume_loop(self):
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None, self.run)

    async def stop_loop(self):
        loop = asyncio.get_event_loop()
        loop.stop()
    

app = FastAPI()

ms1_service = MS1Service()
ms1_service.producer.send("ms2-delete", value={"data": "delete"})
ms1_service.producer.flush()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestBody(BaseModel):
    user_id: str

@app.post("/start_service")
async def get_new_services(request_body: RequestBody):
    new_user_id = request_body.user_id
    response = requests.post(f"{os.getenv('API_SERVER')}/test_data_activate?activate_test_data=true")
    asyncio.ensure_future(ms1_service.consume_loop())


    return {"status": "service started"}

@app.get("/stop_service")
async def get_active_services():
    response = requests.post(f"{os.getenv('API_SERVER')}/test_data_activate?activate_test_data=false")

    ms1_service.producer.send("ms2-delete", value={"data": "delete"})
    ms1_service.producer.flush()
    return {"status": "user data deleted"}

