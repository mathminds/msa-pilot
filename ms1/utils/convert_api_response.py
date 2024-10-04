def convert_api_response(services_list):
    converted_services = []
    for i,s in enumerate(services_list):
        collected_service_dict={}
        service_name = s['service_cd']
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
            share_requests.append(r)
            if r['prov_consent_yn'] == 'Y':
                third_party_sharing = True
            if last_consent_date == '':
                last_consent_date = r['request_ymd']
            else:
                if r['request_ymd'] > last_consent_date:
                    last_consent_date = r['request_ymd']
        collected_service_dict['id']=str(i)
        collected_service_dict['service_cd'] = service_name
        collected_service_dict['title'] = f'TITLE_{service_name}'
        collected_service_dict['serviceProvider'] = f'SERVICE_PROVIDER_{service_name}'
        collected_service_dict['data_providers'] = data_providers
        collected_service_dict['last_consent_date'] = last_consent_date
        collected_service_dict['third_party_sharing'] = third_party_sharing
        collected_service_dict['share_requests'] = share_requests
        converted_services.append(collected_service_dict)
        
    return converted_services
