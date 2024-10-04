import os
import json
import asyncio
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from kafka import KafkaConsumer, TopicPartition
from dotenv import load_dotenv
from db_handler.db_handler import to_sql, read_sql, delete_tables

class MS3Service:
    def __init__(self):
        load_dotenv()
        self.NEW_SERVICES_TOPIC = os.getenv("NEW_SERVICES_TOPIC")
        self.ACTIVE_SERVICES_TOPIC = os.getenv("ACTIVE_SERVICES_TOPIC")
        self.REVOKED_DATA_PROVIDERS_TOPIC = os.getenv("REVOKED_DATA_PROVIDERS_TOPIC")

        print(self.NEW_SERVICES_TOPIC, self.ACTIVE_SERVICES_TOPIC, self.REVOKED_DATA_PROVIDERS_TOPIC)

        self.consumer = KafkaConsumer(
            bootstrap_servers=['kafka:9092'], 
            group_id='ms3',
            auto_offset_reset='earliest', 
            enable_auto_commit=True,
            value_deserializer=lambda m: json.loads(m.decode('utf-8')),
        )

        self.tps = [TopicPartition(topic, 0) for topic in [self.NEW_SERVICES_TOPIC, self.ACTIVE_SERVICES_TOPIC, self.REVOKED_DATA_PROVIDERS_TOPIC, 'ms3-delete']]
        self.consumer.assign(self.tps)

        self.message_data = {}

    async def consume_loop(self):
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None, self.consume_messages)

    def consume_messages(self):
        while True:
            try:
                msg = self.consumer.poll(timeout_ms=100)
                if not msg:
                    continue
                for topic_partition, messages in msg.items():
                    if topic_partition.topic == "ms3-delete":
                        self.handle_delete()
                        self.consumer.commit()
                        continue

                    elif topic_partition.topic == self.NEW_SERVICES_TOPIC:
                        self.handle_new_services(messages)
                    elif topic_partition.topic == self.ACTIVE_SERVICES_TOPIC:
                        self.handle_active_services(messages)
                    elif topic_partition.topic == self.REVOKED_DATA_PROVIDERS_TOPIC:
                        self.handle_revoked_providers(messages)

                self.consumer.commit()

            except Exception as e:
                print(f"[MS3] Error consuming message: {e}")


    def handle_new_services(self, messages):
        df_new_services = pd.DataFrame(messages[0].value['data'])
        df_new_services.drop_duplicates(keep='last', inplace=True)
        self.message_data[self.NEW_SERVICES_TOPIC] = df_new_services.to_dict(orient='records')
        to_sql(df_new_services, 'new_services')
        print(f"[MS3] New messages received from {self.NEW_SERVICES_TOPIC}... API access enabled for new services")
        # for m in messages:
        #     # print(f"[MS3] New messages received from {self.REVOKED_DATA_PROVIDERS_TOPIC}")
        #     m.acknowledge()

    
    def handle_active_services(self, messages):
        df_active_services =  pd.DataFrame(messages[0].value['data'])
        df_active_services.drop_duplicates(keep='last', inplace=True)
        self.message_data[self.ACTIVE_SERVICES_TOPIC] = df_active_services.to_dict(orient='records')
        to_sql(df_active_services, 'active_services')
        print(f"[MS3] New messages received from {self.ACTIVE_SERVICES_TOPIC}... API access enabled for active services")
        # for m in messages:
        #     # print(f"[MS3] New messages received from {self.REVOKED_DATA_PROVIDERS_TOPIC}")
        #     m.acknowledge()

    def handle_revoked_providers(self, messages):
        df_revoked_data_providers = pd.DataFrame(messages[0].value['data'])
        df_revoked_data_providers.set_index('id', inplace=True)
        df_revoked_data_providers.drop_duplicates(keep='last', inplace=True)
        self.message_data[self.REVOKED_DATA_PROVIDERS_TOPIC] = df_revoked_data_providers.to_dict(orient='records')
        to_sql(df_revoked_data_providers, 'revoked_data_providers')
        print(f"[MS3] New messages received from {self.REVOKED_DATA_PROVIDERS_TOPIC}... API access revoked for data providers")
        # for m in messages:
        #     # print(f"[MS3] New messages received from {self.REVOKED_DATA_PROVIDERS_TOPIC}")
        #     m.acknowledge()

    def handle_delete(self):
        delete_tables("new_services")
        delete_tables("active_services")
        delete_tables("revoked_data_providers")
        print("[MS3] All user data deleted successfully")



                # for topic in topics:
                #     if topic not in self.message_data:
                #         self.message_data[topic] = []
                #     value_items = msg[TopicPartition(topic, 0)]
                #     for v in value_items:
                #         self.message_data[topic] = v.value['data']

                #     if topic == self.NEW_SERVICES_TOPIC:
                #         df_new_services = pd.DataFrame(self.message_data[topic])
                #         df_new_services.drop_duplicates(keep='last', inplace=True)
                #         self.message_data[topic] = df_new_services.to_dict(orient='records')
                #         to_sql(df_new_services, 'new_services')
                #     elif topic == self.ACTIVE_SERVICES_TOPIC:
                #         df_active_services = pd.DataFrame(self.message_data[topic])
                #         df_active_services.drop_duplicates(keep='last', inplace=True)
                #         self.message_data[topic] = df_active_services.to_dict(orient='records')
                #         to_sql(df_active_services, 'active_services')
                #     elif topic == self.REVOKED_DATA_PROVIDERS_TOPIC:
                #         df_revoked_data_providers = pd.DataFrame(self.message_data[topic])
                #         df_revoked_data_providers.set_index('id', inplace=True)
                #         df_revoked_data_providers.drop_duplicates(keep='last', inplace=True)
                #         self.message_data[topic] = df_revoked_data_providers.to_dict(orient='records')
                #         to_sql(df_revoked_data_providers, 'revoked_data_providers')
                #     print(f"[MS3] New messages received from {topic}")
                
            #     # self.consume_messages()
            # except Exception as e:
            #     print(f"[MS3] Error consuming message: {e}")


app = FastAPI()

ms3_service = MS3Service()
asyncio.ensure_future(ms3_service.consume_loop())

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/new_services")
async def get_new_services():
    try:
        df = read_sql('new_services')
        services = df.to_dict(orient='records')
        for s in services:
            s['data_providers'] = json.loads(s['data_providers'])
            s['share_requests'] = json.loads(s['share_requests'])
        return services
    except:
        return []

@app.get("/active_services")
async def get_active_services():
    try:
        df = read_sql('active_services')
        services = df.to_dict(orient='records')
        for s in services:
            s['data_providers'] = json.loads(s['data_providers'])
            s['share_requests'] = json.loads(s['share_requests'])
        return services
    except:
        return []

@app.get("/revoked_data_providers")
async def get_revoked_data_providers():
    try:
        df = read_sql('revoked_data_providers')
    except:
        df = pd.DataFrame()
    return df.to_dict(orient='records')

@app.get("/service_third_party_details/{service_id}")
async def get_service_third_party_details(service_id):
    #TODO 내부 API로부터 실제 제3자 제공내역을 가져와야 함
    return [
        {
            'recipient': '트립어드바이저',
            'sharedData': ['여행 일정']
        },
        {
            'recipient': '에어비앤비',
            'sharedData': ['예약 내역']
        },
        {
            'recipient': '여행스케줄러',
            'sharedData': ['일정 내역']
        }
    ]
