import json 
from kafka import KafkaProducer

from example_data import e_data


producer = KafkaProducer(
    bootstrap_servers=["localhost:9094"],
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
    max_block_ms=1000
)

try:
    producer.send("data_collection", value={"data":e_data})
    producer.flush()
    print("Message sent successfully")
except Exception as e:
    print("Failed to send message")
    print(e)