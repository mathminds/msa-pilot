import json 
from db_handler.db_handler import read_sql

def convert_api_response(services_list):
    try:
        service_mapper=read_sql("service_mapper")
    except Exception as e:
        service_mapper = None
    try:
        data_provider_mapper=read_sql("data_provider_mapper")
    except Exception as e:
        data_provider_mapper = None
    
    
    def get_data_provider_name(data_provider_cd):
        # print("GETTING DATA PROVIDER NAME")
        try:
            df = data_provider_mapper[data_provider_mapper.data_provider_code==data_provider_cd]
            return df.data_provider_name.values[0]
        except Exception as e:
            return f"DATA_PROVIDER_NAME_{data_provider_cd}"
    
    def get_data_provided(data_provider_cd):
        try:
            df = data_provider_mapper[data_provider_mapper.data_provider_code==data_provider_cd]
            return df.data_provided.values[0]
        except Exception as e:
            return f"DATA-PROVIDED-{data_provider_cd}"

    def get_service_name(service_cd):
        try:
            # print("GETTING SERVICE NAME")
            df = service_mapper[service_mapper.service_code==service_cd]
            return df.title.values[0]
        except Exception as e:
            return f"SERVICE_TITLE_{service_cd}"
    
    def get_service_provider(service_cd):
        try:
            # print("GETTING SERVICE PROVIDER")
            df = service_mapper[service_mapper.service_code==service_cd]
            return df.serviceProvider.values[0]
        except Exception as e:
            return f"SERVICE_PROVIDER_{service_cd}"

    converted_services = []
    for i,s in enumerate(services_list):
        collected_service_dict={}
        
        requests = s['request_list']
        last_consent_date = ''
        third_party_sharing = False
        data_providers = []
        share_requests = []
        for r in requests:
            data_provider_name=get_data_provider_name(r['prv_inst_cd'])
            data_provided=get_data_provided(r['prv_inst_cd']).split('_')
            data_providers.append({
                "provider":data_provider_name,
                "providedData":data_provided
            }
            )
           
            consent_id=r["request_msg_id"]
            data_provider_code=r["prv_inst_cd"]

            if r["request_stcd"] == "0":
                consent_status = "ACTIVE"
            elif r["request_stcd"] == "1":
                consent_status = "REVOKED"
            elif r["request_stcd"] == "2":
                consent_status = "EXPIRED"
            else:
                consent_status = "UNKNOWN"

            third_party_sharing_allowed = True if r["prov_consent_yn"]=="Y" else False
            expires_at = r["request_end_ymd"]
            started_at = r["request_ymd"]
            revoked_at = r["request_revoke_ymd"] if "request_revoke_ymd" in r else ""
            share_requests.append({"consent_id":consent_id,
                                                    "data_provider_code":data_provider_code,
                                                    "data_provider":data_provider_name,
                                                    'data_provided':data_provided,
                                                    "consent_status":consent_status,
                                                    "third_party_sharing_allowed":third_party_sharing_allowed,
                                                    "expires_at":expires_at,
                                                    "started_at":started_at,
                                                    "revoked_at":revoked_at
                                                    })

            if r['prov_consent_yn'] == 'Y':
                third_party_sharing = True
            if last_consent_date == '':
                last_consent_date = r['request_ymd']
            else:
                if r['request_ymd'] > last_consent_date:
                    last_consent_date = r['request_ymd']
        collected_service_dict['id']=str(i)
        collected_service_dict['service_code'] = s['service_cd']
        collected_service_dict['title'] = get_service_name(s['service_cd'])
        collected_service_dict['serviceProvider'] = get_service_provider(s['service_cd'])
        collected_service_dict['data_providers'] = json.dumps(data_providers)
        collected_service_dict['last_consent_date'] = last_consent_date
        collected_service_dict['third_party_sharing'] = third_party_sharing
        collected_service_dict['share_requests'] = json.dumps(share_requests)
        converted_services.append(collected_service_dict)
        
    return converted_services
