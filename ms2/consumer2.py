from kafka.structs import TopicPartition
import json
from kafka import KafkaConsumer
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

LISTENING_KAFKA_TOPIC=os.getenv("COLLECTION_KAFKA_TOPIC")
PRODUCING_KAFKA_TOPIC=os.getenv("ANALYSIS_KAFKA_TOPIC")

# Create a KafkaConsumer instance
consumer = KafkaConsumer(
    bootstrap_servers=['kafka:9092'], 
    auto_offset_reset='earliest', 
    enable_auto_commit=False,
    value_deserializer=json.loads,
)

# Subscribe to a specific topic
consumer.subscribe(topics=[LISTENING_KAFKA_TOPIC])

# Poll for new messages
while True:
    msg = consumer.poll(timeout_ms=1000)

    if msg:
        inner_msg=msg[TopicPartition(topic=LISTENING_KAFKA_TOPIC, partition=0)]
        for key, value in msg.items():
            d = value[0].value['data']
            for e in d:
                print(e)
                print()
            # print(f"Key: {key}")
            # print()
            # print(f"Value: {value}")
            print()
            print()

        # print("Received message: ", msg.items() )
        # for topic, partition, offset, key, value in msg.items():
        #     print("Topic: {} | Partition: {} | Offset: {} | Key: {} | Value: {}".format(
        #         topic, partition, offset, key, value.decode("utf-8")
        #     ))
    else:
        print("No new messages")