from db_handler.db_handler import to_sql, read_sql
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import json
from kafka import KafkaConsumer, TopicPartition
import asyncio
import json
from dotenv import load_dotenv
import os

NEW_SERVICES_TOPIC=os.getenv("NEW_SERVICES_TOPIC")
ACTIVE_SERVICES_TOPIC=os.getenv("ACTIVE_SERVICES_TOPIC")
REVOKED_DATA_PROVIDERS_TOPIC=os.getenv("REVOKED_DATA_PROVIDERS_TOPIC")

print(NEW_SERVICES_TOPIC, ACTIVE_SERVICES_TOPIC, REVOKED_DATA_PROVIDERS_TOPIC)

# Create a KafkaConsumer instance
consumer = KafkaConsumer(
    bootstrap_servers=['kafka:9092'], 
    auto_offset_reset='earliest', 
    enable_auto_commit=False,
    value_deserializer=json.loads,
)
tps = [TopicPartition(topic, 0) for topic in [NEW_SERVICES_TOPIC, ACTIVE_SERVICES_TOPIC, REVOKED_DATA_PROVIDERS_TOPIC]]

consumer.assign(tps)
# consumer.subscribe(tps)

# Dictionary to store the latest message
message_data = {}

def consume_messages():
    global message_data
    while True:
        try:
            msg = consumer.poll(timeout_ms=100)
            if msg is None:
                continue

            # Assume the message value is JSON
            if msg=={}:
                # print(f"[MS4] No new messages")
                continue

            # print(type(msg))
            # print(msg)
            topics = [t.topic for t in list(msg.keys())]
            # print(topics)
            for i,topic in enumerate(topics):
                if topic not in message_data:
                    message_data[topic] = []
                value_items=msg[list(msg.keys())[i]]
                for v in value_items:
                    # print(type(v.value['data']))
                    # print(v.value['data'])
                    # print(v.keys())
                    message_data[topic]=v.value['data']
                
                if topic==NEW_SERVICES_TOPIC:
                    df_new_services=pd.DataFrame(message_data[topic])
                    # df_new_services.set_index('service_code', inplace=True)

                    df_new_services.drop_duplicates(keep='last', inplace=True)
                    message_data[topic]=df_new_services.to_dict(orient='records')
                    to_sql(df_new_services, 'new_services')
                elif topic==ACTIVE_SERVICES_TOPIC:
                    # records  = []
                    # for d in :
                    #     # data = {}
                    #     # for k,v in d.items():
                    #     #     if type(v)==(str|bool):
                    #     #         data[k]=v
                    #     #     elif k=='data_providers':
                    #     #         df_data_providers = pd.DataFrame(v)
                    #     #         df_data_providers['service_code'] = d['service_code']
                    #     #         to_sql(df_data_providers, 'data_providers')
                    #     #         continue
                    #     #     elif k=='share_requests':
                    #     #         df_share_requests = pd.DataFrame(v)
                    #     #         df_share_requests['service_code'] = d['service_code']
                    #     #         to_sql(df_share_requests, 'share_requests')
                    #     #         continue
                        
                    #     records.append(d)
                    df_active_services=pd.DataFrame(message_data[topic])
                    # df_active_services.set_index('service_code', inplace=True)
                    print(df_active_services.shape)
                    df_active_services.drop_duplicates(keep='last', inplace=True)
                    print(df_active_services.shape)
                    # df_active_services=df_active_services.apply(lambda x: json.dumps(x) if type(x)==(dict|list) else x)
                    # print(df_active_services)
                    # df_active_services.drop_duplicates(subset=['service_code'], keep='last', inplace=True)
                    # print(df_active_services.dtypes)
                    message_data[topic]=df_active_services.to_dict(orient='records')
                    to_sql(df_active_services, 'active_services')
                elif topic==REVOKED_DATA_PROVIDERS_TOPIC:
                    # records = []
                    # for d in message_data[topic]:
                    #     d['id']=d['consent_id']+d['data_provider_code']
                    #     records.append(d)
                    df_revoked_data_providers=pd.DataFrame(message_data[topic])
                    df_revoked_data_providers.set_index('id', inplace=True)
                    df_revoked_data_providers.drop_duplicates(keep='last', inplace=True)
                    # print(df_revoked_data_providers.dtypes)
                    message_data[topic]=df_revoked_data_providers.to_dict(orient='records')
                    to_sql(df_revoked_data_providers, 'revoked_data_providers')
                

                print(f"[MS4] New messages received from {topic}")
        except Exception as e:
            print(f"[MS4] Error consuming message: {e}")

# Run Kafka consumer in an asyncio event loop
async def consume_loop():
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(None, consume_messages)

# Start the consumer loop
asyncio.ensure_future(consume_loop())


app = FastAPI()

# class MessageResponse(BaseModel):
#     key: Optional[str] = None
#     value: Optional[str] = None
# from fastapi import FastAPI


# app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow the frontend's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/latest_message")#, response_model=MessageResponse)
async def get_latest_message():
    global message_data
    # Return the latest message as a JSON response
    return message_data

@app.get("/new_services")#, response_model=MessageResponse)
async def get_new_services():
    # return message_data['new_services']
    try:
        df=read_sql('new_services')
        services = df.to_dict(orient='records')

        for s in services:
            s['data_providers']=json.loads(s['data_providers'])
            s['share_requests']=json.loads(s['share_requests'])
        return services
    except:
        return []

    
    
    # Return the latest message as a JSON response

@app.get("/active_services")#, response_model=MessageResponse)
async def get_active_services():
    # return message_data['active_services']
    try:
        df=read_sql('active_services')
        services = df.to_dict(orient='records')

        for s in services:
            s['data_providers']=json.loads(s['data_providers'])
            s['share_requests']=json.loads(s['share_requests'])
        return services
    except:
        # df=pd.DataFrame()
        return []
    
    # Return the latest message as a JSON response

@app.get("/revoked_data_providers")#, response_model=MessageResponse)
async def get_revoked_data_providers():
    try:
        df=read_sql('revoked_data_providers')
    except:
        df=pd.DataFrame()
    return df.to_dict(orient='records')
    # Return the latest

# @app.get("/service_details")
# async def get_service_details(service_id: int):
#     producer=KafkaProducer(bootstrap_servers=['kafka:9092'], value_serializer=lambda v: json.dumps(v).encode('utf-8'))

@app.get("/service_third_party_details/{service_id}")
async def get_service_third_party_details(service_id):
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
