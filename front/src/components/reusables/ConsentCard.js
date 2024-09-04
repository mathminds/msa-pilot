import React from 'react';
import './ConsentCard.css'; // Import the CSS file for styles

const ConsentCard = () => {
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
        <div className="consent-row">
          <div className="consent-cell">KT</div>
          <div className="consent-cell">대출정보, 요금제</div>
        </div>
        <div className="consent-row">
          <div className="consent-cell">중앙대학교병원</div>
          <div className="consent-cell">건강검진기록, 진료내역</div>
        </div>
      </div>
    </div>
  );
};

export default ConsentCard;
