import React from 'react';
import Card from './Card';
import './Dashboard.css';
import ServiceCard from './ServiceCard';
import DataCard from './DataCard';

const Dashboard = () => {
    return (
        <div className="dashboard">

            <h2>이번달 내 마이데이터 활동 상세정보</h2>
            <div className="summary">
                <Card title="내 데이터를 활용중인 서비스" count="14" details="개" button1="목록보기" button2="탐험하기" />
                <Card title="내가 전송요구한 데이터 종류" count="24" details="종" button1="목록보기" button2="탐험하기" />
                <Card title="내가 철회한 전송요구 건수" count="2" details="건" button1="목록보기" button2="탐험하기" />
            </div>

            <h2>이번달 내 마이데이터 활동 상세정보</h2>
            <div className="details carousel carousel-center bg-neutral rounded-box max-w-100 space-x-4 p-4">

                <div className='carousel-item'>
                <ServiceCard
                    title="[쿠팡] 상품추천 서비스"
                    count="정보수신자: 쿠팡"
                    details="활용 데이터: 구매내역, 위치정보 등"
                    button1="서비스 상세정보 보기"
                    button2="활용 데이터 상세보기"

                /></div>
                <div className='carousel-item'>
                <ServiceCard
                    title="[쿠팡] 상품추천 서비스"
                    count="정보수신자: 쿠팡"
                    details="활용 데이터: 구매내역, 위치정보 등"
                    button1="https://www.coupang.com/"
                    button2="https://www.coupang.com/"

                /></div><div className='carousel-item'>
                <ServiceCard
                    title="[쿠팡] 상품추천 서비스"
                    count="정보수신자: 쿠팡"
                    details="활용 데이터: 구매내역, 위치정보 등"
                    button1="https://www.coupang.com/"
                    button2="https://www.coupang.com/"

                /></div><div className='carousel-item'>
                <ServiceCard
                    title="[쿠팡] 상품추천 서비스"
                    count="정보수신자: 쿠팡"
                    details="활용 데이터: 구매내역, 위치정보 등"
                    button1="https://www.coupang.com/"
                    button2="https://www.coupang.com/"

                /></div><div className='carousel-item'>
                <ServiceCard
                    title="[쿠팡] 상품추천 서비스"
                    count="정보수신자: 쿠팡"
                    details="활용 데이터: 구매내역, 위치정보 등"
                    button1="https://www.coupang.com/"
                    button2="https://www.coupang.com/"

                /></div>

            </div>

            <h2>현재 내가 공유하는 데이터들</h2>
            <div className="data-sharing carousel carousel-center bg-neutral rounded-box max-w-100 space-x-4 p-4">
                <div className="carousel-item ">
                    <DataCard

                        title="[유통] 구매내역 정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                    /></div>
                <div className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                    /></div>

                <div className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2 "
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                    /></div>
                <div className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                    /></div>
                <div className="carousel-item ">
                    <DataCard
                        className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                    /></div><div className="carousel-item ">
                    <DataCard
                        className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                    />
                </div>



            </div>
        </div>
    );
};

export default Dashboard;
