import datetime as dt

def determine_if_service_is_new(service):
    most_recent_request_date=''
    for r in service['request_list']:
        if most_recent_request_date=='':
            most_recent_request_date=r['request_ymd']
        else:
            if r['request_ymd']>most_recent_request_date:
                most_recent_request_date=r['request_ymd']
    today = dt.datetime.now()
    request_date=dt.datetime.strptime(most_recent_request_date, '%Y%m%d')
    if today-request_date<=dt.timedelta(days=30):
        return True
    else:
        return False
    
def determine_if_service_is_active(service):
    for r in service['request_list']:
        if r['request_stcd']=='0':
            return True
    return False

def extract_revoked_data_providers(service):
    revoked_data_providers=[]
    for r in service['request_list']:
        if r['request_stcd']=='1':
            revoked_data_providers.append(r)
    return {"service_cd":service['service_cd'], "revoked_data_providers":revoked_data_providers}
