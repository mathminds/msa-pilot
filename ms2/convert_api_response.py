import json 
def convert_api_response(services_list, service_mapper):

    def get_service_name(service_cd):
        df = service_mapper[service_mapper.service_code==service_cd]
        return df.title.values[0]
    
    def get_service_provider(service_cd):
        df = service_mapper[service_mapper.service_code==service_cd]
        return df.serviceProvider.values[0]

    converted_services = []
    for i,s in enumerate(services_list):
        collected_service_dict={}
        
        requests = s['request_list']
        last_consent_date = ''
        third_party_sharing = False
        data_providers = []
        share_requests = []
        for r in requests:
            data_providers.append({
                "provider":r['prv_inst_cd'],
                "providedData":[f"PROVIDED_DATA_{r['prv_inst_cd']}"]
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
