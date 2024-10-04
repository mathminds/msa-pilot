import json
import pandas as pd
from fastapi import FastAPI, Header, Body
from pydantic import BaseModel
from typing import Optional, List


df_services = pd.read_csv('data/services_map.csv', header=[0])
df_data_providers = pd.read_csv('data/dp_map.csv', header=[0])
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

use_test_data = True

@app.post("/test_data_activate")
async def add_services(activate_test_data: Optional[bool] = False):
    global example_services, df_services, df_data_providers, use_test_data
    if activate_test_data:
        use_test_data = True
        return {"message": "Test data activated"}
    else:
        use_test_data = False
        return {"message": "Test data deactivated"}
    
@app.get("/test_data_status")
async def get_test_data_status():
    global use_test_data
    return use_test_data

# Mock endpoint for `/support/request/history`
@app.post("/support/request/history")
async def mock_api():
    global use_test_data
    if not use_test_data:
        return {
        "X_Api_Tx_Id": "TEST-123456",
        "rsp_code": "00000",  # Example response code
        "rsp_msg": "Request successful",  # Example success message
        "service_cnt": 0,
        "service_list": []}
    
    # Return a mock response
    return {
        "X_Api_Tx_Id": "TEST-123456",
        "rsp_code": "00000",  # Example response code
        "rsp_msg": "Request successful",  # Example success message
        "service_cnt": 10,
        "service_list": example_services}

@app.get("/service_mapping")
async def get_service_mapping():
    global use_test_data
    if not use_test_data:
        return []
    result = df_services.to_dict('records')
    # print(result)
    return result

@app.get('/data_provider_mapping')
async def get_data_provider_mapping():
    global use_test_data
    if not use_test_data:
        return []
    # df = pd.read_csv('data/dp_map.csv', header=[0])
    # df['data_provided'] = df['data_provided'].apply(lambda x: json.dumps(x.split(',')))
    result = df_data_providers.to_dict('records')
    # print(result)
    return result

@app.get("/service_third_party_details/{service_id}")
async def get_service_third_party_details(service_id):
    global use_test_data
    if not use_test_data:
        return []
    
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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)