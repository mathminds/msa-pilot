import pandas as pd
from time import sleep, time
from db_handler.db_handler import to_sql, read_sql, delete_tables
from utils.analyze_services import determine_if_service_is_active, determine_if_service_is_new, extract_revoked_data_providers
from utils.convert_api_response import convert_api_response
from kafka import KafkaConsumer, KafkaProducer, TopicPartition
from dotenv import load_dotenv, find_dotenv
import json
import os

class MS2Service:
    def __init__(self):
        load_dotenv(find_dotenv())

        self.LISTENING_KAFKA_TOPIC = os.getenv("COLLECTION_KAFKA_TOPIC")
        self.SERVICE_MAPPER_KAFKA_TOPIC = os.getenv("SERVICE_MAPPER_KAFKA_TOPIC")
        self.DATA_PROVIDER_MAPPER_KAFKA_TOPIC = os.getenv("DATA_PROVIDER_MAPPER_KAFKA_TOPIC")

        self.NEW_SERVICES_TOPIC = os.getenv("NEW_SERVICES_TOPIC")
        self.ACTIVE_SERVICES_TOPIC = os.getenv("ACTIVE_SERVICES_TOPIC")
        self.REVOKED_DATA_PROVIDERS_TOPIC = os.getenv("REVOKED_DATA_PROVIDERS_TOPIC")

        self.producer=producer = KafkaProducer(
            bootstrap_servers=['kafka:9092'],
            value_serializer=lambda x: json.dumps({"data": x}).encode('utf-8'),
            max_block_ms=1000
        )

        self.consumer = KafkaConsumer(
            bootstrap_servers=['kafka:9092'], 
            group_id='ms2',
            auto_offset_reset='earliest', 
            enable_auto_commit=True,
            value_deserializer=json.loads,
        )

        self.consumer.subscribe(topics=[self.LISTENING_KAFKA_TOPIC, self.SERVICE_MAPPER_KAFKA_TOPIC, self.DATA_PROVIDER_MAPPER_KAFKA_TOPIC, "ms2-delete"])

        self.service_mapper = None
        self.data_provider_mapper = None
        self.personal_data = []
        self.updateRequired=False
        self.unprocess_messages=[]

    def get_service_name(self, service_cd):
        try:
            service_mapper = read_sql("service_mapper")
            df = service_mapper[service_mapper.service_code == service_cd]
            return df.title.values[0]
        except Exception as e:
            # print("[MS2] get_service_name ERROR:", e)
            print("[MS2] SERVICE_MAPPER needs to be updated")
            self.updateRequired=True
            return f"TITLE_{service_cd}"

    def get_data_provider_name(self, data_provider_cd):
        try:
            data_provider_mapper = read_sql("data_provider_mapper")
            df = data_provider_mapper[data_provider_mapper.data_provider_code == data_provider_cd]
            return df.data_provider_name.values[0]
        except Exception as e:
            print("[MS2] DATA_PROVIDER_MAPPER needs to be updated")
            # print("[MS2] get_data_provider_name ERROR:", e, "data_provider_cd", data_provider_cd)
            self.updateRequired=True
            return f"DATA_PROVIDER_{data_provider_cd}"

    def process_messages(self):
        while True:
            if self.updateRequired:
                self.handle_personal_data(self.unprocess_messages) 
            msg = self.consumer.poll(timeout_ms=100)
            try:
                if msg:
                    for topic_partition, messages in msg.items():
                        if topic_partition.topic == "ms2-delete":
                            self.handle_delete()
                            self.consumer.commit()

                        elif topic_partition.topic == self.SERVICE_MAPPER_KAFKA_TOPIC:
                            self.handle_service_mapper(messages)
                        elif topic_partition.topic == self.DATA_PROVIDER_MAPPER_KAFKA_TOPIC:
                            self.handle_data_provider_mapper(messages)
                        elif topic_partition.topic == self.LISTENING_KAFKA_TOPIC:
                            self.handle_personal_data(messages)
                else:
                    continue
            except Exception as e:
                print("[MS2] Failed to process message")
                print(e)
                break

    def handle_delete(self):
        for table in ["service_mapper", "data_provider_mapper", "personal_data"]:
            try:
                delete_tables(table)
            except Exception as e:
                print(f"DELETE ERROR: {table}")

        self.service_mapper =  None
        self.data_provider_mapper = None
        self.personal_data = []

        print("[MS2] All user data deleted successfully.")
        
        self.producer.send('ms3-delete', value={"data": "delete"})
        self.producer.flush()

    def handle_service_mapper(self, messages):
        df_service_mapper = pd.DataFrame(messages[0].value['data'])
        to_sql(df_service_mapper, "service_mapper")
        self.service_mapper = read_sql("service_mapper")
        print("[MS2] Service Mapper data received and saved to DB")

    def handle_data_provider_mapper(self, messages):
        df_data_provider_mapper = pd.DataFrame(messages[0].value['data'])
        to_sql(df_data_provider_mapper, "data_provider_mapper")
        self.data_provider_mapper = read_sql("data_provider_mapper")
        print("[MS2] Data Provider Mapper data received and saved to DB")

    def handle_personal_data(self, messages):
        self.updateRequired=False
        self.personal_data = self.personal_data or []
        self.personal_data += messages[0].value['data']
        try:
            personal_data_for_df = [
                {k: json.dumps(v) if k == 'request_list' else v for k, v in item.items()}
                for item in self.personal_data
            ]
            to_sql(pd.DataFrame(personal_data_for_df), "personal_data")
            df_personal_data = read_sql("personal_data")
            df_personal_data['request_list'] = df_personal_data['request_list'].apply(json.loads)
            self.personal_data = df_personal_data.to_dict('records')
            print("[MS2] Personal Data received and saved to DB")
        except Exception as e:
            print("[MS2] Personal Data to DB error:", e)
            return


        new_services, active_services, revoked_data_providers_list = [], [], []
        try:
            converted_services = convert_api_response(self.personal_data)
        except Exception as e:
            print("CONVERTING", e)
            return

        for i, s in enumerate(self.personal_data):
            if determine_if_service_is_new(s):
                new_services.append(converted_services[i])
            if determine_if_service_is_active(s):
                active_services.append(converted_services[i])

            revoked_data_providers = extract_revoked_data_providers(s)
            for r in revoked_data_providers['revoked_data_providers']:
                consent_id = r["request_msg_id"]
                data_provider_code = r["prv_inst_cd"]
                consent_status = {
                    "0": "ACTIVE",
                    "1": "REVOKED",
                    "2": "EXPIRED"
                }.get(r["request_stcd"], "UNKNOWN")
                third_party_sharing_allowed = r["prov_consent_yn"] == "Y"
                expires_at = r["request_end_ymd"]
                started_at = r["request_ymd"]
                revoked_at = r.get("request_revoke_ymd", "")

                revoked_data_providers_list.append({
                    "id": consent_id + data_provider_code,
                    "service_code": self.get_service_name(revoked_data_providers['service_cd']),
                    "consent_id": consent_id,
                    "data_provider_code": self.get_data_provider_name(data_provider_code),
                    "consent_status": consent_status,
                    "third_party_sharing_allowed": third_party_sharing_allowed,
                    "expires_at": expires_at,
                    "started_at": started_at,
                    "revoked_at": revoked_at
                })

        if self.updateRequired:
            self.unprocess_messages=messages
            print("[MS2] Personal Data awaiting mapper updates to process fully")
            return

        else:
            print("[MS2] Personal Data processed successfully")
            self.producer.send(self.NEW_SERVICES_TOPIC, value=new_services)
            print("[MS2] NEW SERVICES event published")
            self.producer.send(self.ACTIVE_SERVICES_TOPIC, value=active_services)
            print("[MS2] ACTIVE SERVICES event published")
            self.producer.send(self.REVOKED_DATA_PROVIDERS_TOPIC, value=revoked_data_providers_list)
            print("[MS2] REVOKED DATA PROVIDERS event published")
            self.producer.flush()
            self.unprocess_messages=[]

if __name__ == "__main__":
    processor = MS2Service()
    processor.process_messages()
