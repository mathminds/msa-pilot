import React, { useState, useEffect } from 'react';
import './ConsentCard.css'; // Import the CSS file for styles
import { getServiceThirdPartyDetails } from '../../data/externalDataServices';

const ConsentCard = ({ serviceCode }) => {
  console.log("[ConsentCard] service_code", serviceCode);

  const [thirdPartyRecipients, setThirdPartyRecipients] = useState([]);

  useEffect(() => {
    getServiceThirdPartyDetails(serviceCode).then(setThirdPartyRecipients);
  }, [serviceCode]);

  return (
    <div className="consent-card">
      <div className="consent-header">
        [동의 일자] 2024년 8월 13일 18:32
      </div>
      <div className="consent-table">
        <div className="consent-row">
          <div className="consent-cell header-cell">제3자 제공기관</div>
          <div className="consent-cell header-cell">제공 데이터</div>
        </div>

        {thirdPartyRecipients.length > 0 ? (
          thirdPartyRecipients.map((thirdPartyRecipient, index) => (
            <div className="consent-row" key={index}>
              <div className="consent-cell">{thirdPartyRecipient.recipient}</div>
              <div className="consent-cell">{thirdPartyRecipient.shared_data}</div>
            </div>
          ))
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default ConsentCard;
