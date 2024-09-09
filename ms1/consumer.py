from kafka import KafkaConsumer

consumer = KafkaConsumer('log_event',
                         bootstrap_servers=['localhost:9092'],
                        #  auto_offset_reset='earliest',
                        #  enable_auto_commit=False,
                        #  group_id='my_group_id',
                         value_deserializer=lambda x: x.decode('utf-8')
                        )
while True:
    for message in consumer:
        print("Received message: ", message.value)