from fastapi import FastAPI, Header, Body
from pydantic import BaseModel
from typing import Optional, List


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

# Mock endpoint for `/support/request/history`
@app.post("/support/request/history")
async def mock_api():
    from data.services_list import example_services
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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)