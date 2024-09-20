import React from 'react';

const CardDetails = ({ selectedCard }) => {
    if (!selectedCard) {
        return (
            <div style={styles.details}>
                <p> 좌측에서 정보전송자를 선택해주세요</p>
            </div>
        );
    }

    const { consent_id, consent_status, data_provided, data_provider, data_provider_code, expires_at, revoked_at, started_at, third_party_sharing_allowed } = selectedCard;
    return (
        <div className="w-1000">
        <div className="grid grid-rows-12 grid-cols-12">
            {/* Header Section */}
            {/* <div className="flex justify-between w-full br"> */}
            <div className="grid-item row-start-1 row-end-2 col-start-1 col-end-7">
            정보전송자: {data_provider}
            </div>

            {/* Service Information Section */}
            <div className="grid-item row-start-1 row-end-2 col-start-7 col-end-13 sub-header">
            제공 데이터 항목: {data_provided} {/* Example: 스패머리 분석 서비스 */}
            </div>
            {/* </div>
             */}
            <div className="grid-item row-start-2 row-end-3 col-start-1 col-end-7">
                전송요구서ID: {consent_id} {/* Example: 2024070915454683214465 */}
            </div>
            <div className="grid-item row-start-2 row-end-3 col-start-7 col-end-13">
                제3자 제공여부: {third_party_sharing_allowed.toString()} {/* Example: 2024070915454683214465 */}
            </div>
            
            <div className="grid-item row-start-3 row-end-4 col-start-1 col-end-7">
                전송요구 시작일자: {started_at} {/* Example: 신한은행 */}
            </div>

            <div className="grid-item row-start-3 row-end-4 col-start-7 col-end-13">
                전송요구 만료일자: {expires_at} {/* Example: 2024-08-02 */}
            </div>
            
            {/* Cancellation Section */}
            <div className="grid-item row-start-4 row-end-5 col-start-1 col-end-13 sub-header">
                전송요구서 철회
            </div>
            <div className="grid-item row-start-5 row-end-6 col-start-1 col-end-13">
                <p>
                    <input type="radio" name="withdrawal" /> (필수) 전송요구 철회에 동의하며 안내사항을 확인하였습니다
                </p>
            </div>

            {/* Personal Information Deletion Section */}
            <div className="grid-item row-start-6 row-end-7 col-start-1 col-end-13 sub-header">
                개인신용정보 삭제
            </div>
            <div className="grid-item row-start-7 row-end-8 col-start-1 col-end-13">
                <p>
                    <input type="radio" name="deletePersonalInfo" /> (선택) 개인신용정보 삭제에 동의합니다
                </p>
            </div>

            {/* Buttons Section */}
            <div className="grid-item row-start-9 row-end-10 col-start-5 col-end-9">
                <div className="btn w-full">철회</div>
            </div>
        </div>
        </div>
    );
};

const styles = {
  details: {
    padding: '20px',
    width: '75%',
    overflowY: 'auto',
    height: 'calc(100vh - 100px)' // Adjust height based on header and subheader
  }
};

export default CardDetails;

