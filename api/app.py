import json
import pandas as pd
from fastapi import FastAPI, Header, Body
from pydantic import BaseModel
from typing import Optional, List


df_services = pd.read_csv('data/services_map.csv', header=[0])
df_data_providers = pd.read_csv('data/data_providers_map.csv', header=[0])
app = FastAPI()



# Request Body Model
class RequestBody(BaseModel):
    user_id: str
    from_date: str
    to_date: str

# Response Body Model
class ServiceList(BaseModel):
    service_cd: Optional[str]
    request_cnt: Optional[str]
    request_list: Optional[List[dict]]

class ResponseBody(BaseModel):
    X_Api_Tx_Id: str
    rsp_code: str
    rsp_msg: str
    service_cnt: int
    service_list: List[ServiceList]

class NewServiceRequestBody(BaseModel):
    services: Optional[List[ServiceList]]
    services_mapping: Optional[List[dict]]
    data_providers_mapping: Optional[List[dict]]


from data.services_list import example_services



@app.post("/services")
async def add_services(request_body: NewServiceRequestBody):
    global example_services, df_services, df_data_providers
    # current_services = example_services 
    # add services in the request body to the example_services list while making sure to update existing services
    new_services = request_body.services
    print(new_services)
    services_mapping = pd.DataFrame(request_body.services_mapping)
    # add service_mapping to df_services
    cur_service_mapping_list = df_services.to_dict('records')
    cur_service_mapping_list = cur_service_mapping_list + services_mapping.to_dict('records')
    df_services = pd.DataFrame(cur_service_mapping_list)
    df_services.drop_duplicates(subset=['service_code'], keep="last", inplace=True)



    data_providers_mapping = pd.DataFrame(request_body.data_providers_mapping)
    # add data_providers_mapping to df_data_providers
    cur_data_providers_mapping_list = df_data_providers.to_dict('records')
    cur_data_providers_mapping_list = cur_data_providers_mapping_list + data_providers_mapping.to_dict('records')
    df_data_providers = pd.DataFrame(cur_data_providers_mapping_list)
    df_data_providers.drop_duplicates(subset=['data_provider_code','service_code'], keep="last", inplace=True)


    for service in new_services:
        service_code = service.service_cd
        service_request_list = service.request_list
        print(type(service_request_list))
        print(service_request_list)
        service_cnt = str(len(service.request_list)) if not service.request_cnt else service.request_cnt
        cur_service = {
            "service_cd": service_code,
            "request_cnt": service_cnt,
            "request_list": service_request_list
        }

        if service_code in [s['service_cd'] for s in example_services]:
            print(f"Service {service_code} already exists... updating...")  
            for s in example_services:
                if s['service_cd'] == service_code:
                    example_services.remove(s)
            
        example_services=[cur_service]+example_services
        

    
    
    return {"message": "Services added successfully", "services": example_services}
        # if df_services[df_services['service_cd'] == service['service_cd']].shape[0] == 0:
        #     try:
        #         title = services_mapping[services_mapping['service_cd'] == service['service_cd']]['title'].values[0]
        #         serviceProvider = services_mapping[services_mapping['service_cd'] == service['service_cd']]['serviceProvider'].values[0]
        #         df_services = df_services.append({'service_cd': service['service_cd'], 'title': title, 'serviceProvider':serviceProvider }, ignore_index=True)

        #     except Exception as e:
        #         print(e)
        #         raise Exception("Service not found in services mapping")
        # else:
        #     print(f"Service {service['service_cd']} already exists... updating...")
        #     cur_request_list = service['request_list']
            
        #     for s in example_services:
        #         if s['service_cd'] == service['service_cd']:
        #             example_services.remove(s)
        #             example_services.append(service)
            





# Mock endpoint for `/support/request/history`
@app.post("/support/request/history")
async def mock_api():
    
    # Log incoming request details (optional for debugging)
    # print(f"Authorization: {authorization}")
    # print(f"X_Src_Inst_Cd: {X_Src_Inst_Cd}")
    # print(f"X_Dst_Inst_Cd: {X_Dst_Inst_Cd}")
    # print(f"X_Api_Tx_Id: {X_Api_Tx_Id}")
    # print(f"Request Body: {request_body}")
    
    # Return a mock response
    return {
        "X_Api_Tx_Id": "TEST-123456",
        "rsp_code": "00000",  # Example response code
        "rsp_msg": "Request successful",  # Example success message
        "service_cnt": 10,
        "service_list": example_services}


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

@app.get("/service_mapping")
async def get_service_mapping():
    result = df_services.to_dict('records')
    # print(result)
    return result

@app.get('/data_provider_mapping')
async def get_data_provider_mapping():
    # df = pd.read_csv('data/dp_map.csv', header=[0])
    # df['data_provided'] = df['data_provided'].apply(lambda x: json.dumps(x.split(',')))
    result = df_data_providers.to_dict('records')
    # print(result)
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)