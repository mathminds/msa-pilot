import React from 'react';
import './DataPage.css'; // Ensure you have the CSS for styling the grid

const Details = ({ serviceName, infoReceiver, transmissionDate, requestNumber }) => {
    return (
        <div className="grid grid-rows-12 grid-cols-12">
            {/* Header Section */}
            <div className="flex justify-between w-full br">
            <div className="grid-item row-start-1 row-end-2 col-start-1 col-end-7">
            서비스명: {serviceName}
            </div>

            {/* Service Information Section */}
            <div className="grid-item row-start-1 row-end-2 col-start-7 col-end-13 sub-header">
            정보수신자: {infoReceiver} {/* Example: 스패머리 분석 서비스 */}
            </div>
            </div>
            
            <div className="grid-item row-start-3 row-end-4 col-start-1 col-end-13">
                전송요구서ID: {requestNumber} {/* Example: 2024070915454683214465 */}
            </div>
            
            <div className="grid-item row-start-4 row-end-5 col-start-1 col-end-13">
                정보전송자: {infoReceiver} {/* Example: 신한은행 */}
            </div>

            <div className="grid-item row-start-5 row-end-6 col-start-1 col-end-7">
                전송요구 시작일자: {transmissionDate} {/* Example: 2024-08-02 */}
            </div>
            
            <div className="grid-item row-start-5 row-end-6 col-start-7 col-end-13">
                전송요구 만료일자: {/* Placeholder for this field */}
            </div>

            {/* Cancellation Section */}
            <div className="grid-item row-start-7 row-end-8 col-start-1 col-end-13 sub-header">
                전송요구서 철회
            </div>
            <div className="grid-item row-start-8 row-end-9 col-start-1 col-end-13">
                <p>
                    <input type="radio" name="withdrawal" /> (필수) 전송요구 철회에 동의하며 안내사항을 확인하였습니다
                </p>
            </div>

            {/* Personal Information Deletion Section */}
            <div className="grid-item row-start-9 row-end-10 col-start-1 col-end-13 sub-header">
                개인신용정보 삭제
            </div>
            <div className="grid-item row-start-10 row-end-11 col-start-1 col-end-13">
                <p>
                    <input type="radio" name="deletePersonalInfo" /> (선택) 개인신용정보 삭제에 동의합니다
                </p>
            </div>

            {/* Buttons Section */}
            <div className="grid-item row-start-12 row-end-13 col-start-10 col-end-13">
                <button className="action-button">철회</button>
            </div>
            <div className="grid-item row-start-12 row-end-13 col-start-8 col-end-10">
                <button className="action-button">목록</button>
            </div>
        </div>
    );
};

export default Details;
