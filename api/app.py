from fastapi import FastAPI, Header, Body
from pydantic import BaseModel
from typing import Optional, List
from services_list import example_services

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

# Run with: uvicorn filename:app --reload


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)