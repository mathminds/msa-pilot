import React from 'react';
import Card from './Card';
import './Dashboard.css';
import ServiceCard from './ServiceCard';
import DataCard from './DataCard';

const Dashboard = () => {
    return (
        <div>
        <h1 className='text-5xl font-bold my-4 mx-4'>홍길동 님</h1>
<p className='text-3xl font-bold text-black mx-6'>마이데이터 대시보드</p>
            
        <div className="dashboard">
            <div className=" bg-red-800 pr-4 rounded-xl">
                <h2 className='text-2xl font-bold text-white pt-4 px-4 mb-4'>내 마이데이터 이용현황</h2>
                <div className="summary">
                    <Card title="내 데이터를 활용중인 서비스" count="14" details="개" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true" />
                    <Card title="내가 전송요구한 데이터 종류" count="24" details="종" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true" />
                    <Card title="내가 철회한 전송요구 건수" count="2" details="건" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true" />
                </div>
            </div>
            <div className="bg-green-600 px-4 rounded-xl">
                <h2 className='text-2xl font-bold text-white pt-4'> 이번달 내 마이데이터 활동 상세정보</h2>
                <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">

                    <div className='carousel-item'>
                        <ServiceCard
                            title="[쿠팡] 상품추천 서비스"
                            count="정보수신자: 쿠팡"
                            details="활용 데이터: 구매내역, 위치정보 등"
                            button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                            button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"

                        /></div>
                    <div className='carousel-item'>
                        <ServiceCard
                            title="[쿠팡] 상품추천 서비스"
                            count="정보수신자: 쿠팡"
                            details="활용 데이터: 구매내역, 위치정보 등"
                            button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                            button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"

                        /></div><div className='carousel-item'>
                        <ServiceCard
                            title="[쿠팡] 상품추천 서비스"
                            count="정보수신자: 쿠팡"
                            details="활용 데이터: 구매내역, 위치정보 등"
                            button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                            button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"

                        /></div><div className='carousel-item'>
                        <ServiceCard
                            title="[쿠팡] 상품추천 서비스"
                            count="정보수신자: 쿠팡"
                            details="활용 데이터: 구매내역, 위치정보 등"
                            button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                            button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"

                        /></div><div className='carousel-item'>
                        <ServiceCard
                            title="[쿠팡] 상품추천 서비스"
                            count="정보수신자: 쿠팡"
                            details="활용 데이터: 구매내역, 위치정보 등"
                            button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                            button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"

                        /></div>
                </div>
            </div>
            <div className="bg-blue-700 px-4 rounded-xl">
            <h2 className='text-2xl font-bold text-white pt-4'>현재 내가 공유하는 데이터들</h2>
            
            <div className="data-sharing carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
                <div className="carousel-item ">
                    <DataCard

                        title="[유통] 구매내역 정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    /></div>
                <div className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    /></div>

                <div className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2 "
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    /></div>
                <div className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    /></div>
                <div className="carousel-item ">
                    <DataCard
                        className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    /></div><div className="carousel-item ">
                    <DataCard
                        className="carousel-item w-1/2"
                        title="[통신] 휴대폰 위치정보"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>

</div>

            </div>
        </div></div>
    );
};

export default Dashboard;
