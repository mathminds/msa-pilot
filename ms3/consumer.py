from kafka.structs import TopicPartition
import json
from kafka import KafkaConsumer, KafkaProducer
from dotenv import load_dotenv, find_dotenv
import os
# from ms3.db_handler.db_handler import engine
# from db_handler.db_handler import add_active_services, add_new_services, add_revoked_data_providers


load_dotenv(find_dotenv())

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

# Subscribe to a specific topic
# consumer.subscribe()
tps = [TopicPartition(topic, 0) for topic in [NEW_SERVICES_TOPIC, ACTIVE_SERVICES_TOPIC, REVOKED_DATA_PROVIDERS_TOPIC]]

consumer.assign(tps)
consumer.seek_to_beginning()
# Poll for new messages
while True:
    msg = consumer.poll(timeout_ms=1000)

    if msg:
        print("[MS3] New messages received from MS2")
        # if msg.topic == NEW_SERVICES_TOPIC:
        #     new_services_msg=msg[TopicPartition(topic=NEW_SERVICES_TOPIC, partition=0)]
        #     for key, value in new_services_msg.items():
        #         d = value[0].value['data']
        #         for new_service in d:
        #             print(new_service['title'])
        #             # add_new_services(new_service)
            
                

            
        # elif msg.topic == ACTIVE_SERVICES_TOPIC:
        #     active_services_msg=msg[TopicPartition(topic=ACTIVE_SERVICES_TOPIC, partition=0)]
        #     for key, value in active_services_msg.items():
        #         d = value[0].value['data']
        #         for active_service in d:
        #             print(active_service['title'])
        #             # add_active_services(active_service)
                    

        # elif msg.topic == REVOKED_DATA_PROVIDERS_TOPIC:
        #     revoked_data_providers_msg=msg[TopicPartition(topic=REVOKED_DATA_PROVIDERS_TOPIC, partition=0)]
        #     for key, value in revoked_data_providers_msg.items():
        #         d = value[0].value['data']
        #         for revoked_data_provider in d:
        #             print(revoked_data_provider['service_code'], revoked_data_provider['share_request_data']['request_msg_id'])
        #             # add_revoked_data_providers(revoked_data_provider)

        # else:
        #     print("[MS3] Unknown topic", msg.topic)

    else:
        pass
        # print("[MS3]")
