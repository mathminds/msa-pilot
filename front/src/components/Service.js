import React from 'react';

const Service = () => {
    return (
        <div>
            <h1 style={{ fontSize: '32px' }}>[쿠팡] 상품추천 서비스</h1>
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <th style={{ border: '1px solid black' }}>서비스 제공자:</th>
                        <td style={{ border: '1px solid black' }}>쿠팡</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black' }}>서비스 상세정보:</th>
                        <td style={{ border: '1px solid black' }}>
                            <ul>
                                <li>상품 추천</li>
                                <li>할인 쿠폰 제공</li>
                                <li>배송 추적</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black' }}>활용 데이터 상세보기:</th>
                        <td style={{ border: '1px solid black' }}>
                            <ul>
                                <li>구매내역</li>
                                <li>위치 정보</li>
                                <li>검색어</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black' }}>개인 데이터 이용목적:</th>
                        <td style={{ border: '1px solid black' }}>
                            <ul>
                                <li>상품 추천</li>
                                <li>할인 쿠폰 제공</li>
                                <li>배송 추적</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black' }}>개인 데이터 보유기간:</th>
                        <td style={{ border: '1px solid black' }}>
                            <ul>
                                <li>상품 추천</li>
                                <li>할인 쿠폰 제공</li>
                                <li>배송 추적</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black' }}>개인 데이터 수집 위치:</th>
                        <td style={{ border: '1px solid black' }}>
                            <ul>
                                <li>소셜 미디어 계정</li>
                                <li>온라인 쇼핑몰 구매 기록</li>
                                <li>위치 정보</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Service;
