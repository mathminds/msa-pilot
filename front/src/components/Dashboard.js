import React from 'react';
import Card from './Card';
import './Dashboard.css';
import ServiceCard from './ServiceCard';
import DataCard from './DataCard';

const Dashboard = () => {
    return (
        <div className='bg-white'>

            <h1 className='text-5xl font-bold my-2 mx-4 text-black pt-4'>홍길동 님</h1>
            <p className='text-xl text-gray-400 mx-4'>마이데이터 대시보드</p>


            <div className="dashboard">
                <div className=" bg-white pr-4 rounded-xl">
                    <h2 className='text-2xl font-bold text-black pt-4 px-4 mb-4'>이번 달 내 마이데이터 활동 현황</h2>
                    <div className="summary flex-col md:flex-row ">
                        <Card title="내 데이터를 활용중인 서비스" count="14" details="개" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true" />
                        <Card title="내가 전송요구한 데이터 종류" count="24" details="종" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true" />
                        <Card title="내가 철회한 전송요구 건수" count="2" details="건" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true" />
                    </div>
                </div>
                <h2 className='text-2xl font-bold text-black p-4'> 이번달 내 마이데이터 활동 상세정보</h2>

                <div className="bg-[#D0F7D8] px-4 ">
                    <h2 className='text-xl font-bold text-black pt-4'> 최근 이용한 마이데이터 서비스 </h2>
                    <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>


                    <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">

                        <div id="item1" className='carousel-item'>


                            <ServiceCard
                                title="[쿠팡] 상품추천 서비스"
                                count="정보수신자: 쿠팡"
                                details="활용 데이터: 구매내역, 위치정보 등"
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                        <div id="item2" className='carousel-item'>


                            <ServiceCard
                                title="[국민카드] 소비패턴 개선 서비스"
                                count="정보수신자: 국민카드"
                                details="활용 데이터: 거래내역, 연령 등"
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                        <div id="item3" className='carousel-item'>

                            <ServiceCard
                                title="[뱅크샐러드] 본인 신용 정보 통합조회 서비스"
                                count="정보수신자: 뱅크샐러드"
                                details="활용 데이터: 신용등급/점수, 대출정보 등"
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                        <div id="item4" className='carousel-item'>

                            <ServiceCard
                                title="[엘지유플러스] 요금제 추천 서비스"
                                count="정보수신자: 엘지유플러스"
                                details="활용 데이터: 통신요금내역, 요금제정보, 데이터사용량 등"
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                        <div id="item5" className='carousel-item'>

                            <ServiceCard
                                title="[네이버쇼핑] 멤버십 및 포인트 관리 서비스"
                                count="정보수신자: 네이버쇼핑"
                                details="활용 데이터: 멤버십정보, 포인트사용내역 등"
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                        <div id="item6" className='carousel-item'>

                            <ServiceCard
                                title="[동양생명] 보험 상품 추천 서비스"
                                count="정보수신자: 동양생명"
                                details="활용 데이터: 현재상품내역, 소득정보, 가족구성정보 등"
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                    </div>

                    <div className="flex w-full justify-center gap-1 py-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                        <a href="#item5" className="btn btn-xs">5</a>
                        <a href="#item6" className="btn btn-xs">6</a>
                    </div>


                </div>
                <div className="bg-[#D7E9FF] px-4 mt-4">

                    <h2 className='text-xl font-bold text-black pt-4'>현재 내가 공유하는 데이터들</h2>
                    <h3 className='text-md text-gray-500'>내 전송요구 권리 행사로 정보수신자에게 전송되는 데이터 종류 </h3>

                    <div className="data-sharing carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
                    <div id='data1' className="carousel-item ">
                            <DataCard

                                title="[유통] 구매내역 정보"
                                details="상세 데이터 항목: 구매한 상품목록..."
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>
                        <div id='data2' className="carousel-item ">
                            <DataCard
                                // className="carousel-item w-1/2"
                                title="[통신] 통화 및 데이터 사용 정보"
                                details="상세 데이터 항목: 음성 통화 기록..."
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>
                        <div id='data3' className="carousel-item ">
                            <DataCard
                                // className="carousel-item w-1/2"
                                title="[금융] 계좌 및 거래 정보"
                                details="상세 데이터 항목: 계좌 잔액..."
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>
                        <div id='data4' className="carousel-item ">
                            <DataCard
                                // className="carousel-item w-1/2"
                                title="[금융] 신용 정보"
                                details="상세 데이터 항목: 신용 등급..."
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>
                        <div id='data5' className="carousel-item ">
                            <DataCard
                                // className="carousel-item w-1/2"
                                title="[통신] 요금제 및 결제 정보"
                                details="상세 데이터 항목: 현재 요금제..."
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>
                        <div id='data6' className="carousel-item ">
                            <DataCard
                                // className="carousel-item w-1/2"
                                title="[금융] 보험 가입 및 납입 정보"
                                details="상세 데이터 항목: 보험 가입 내역..."
                                button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                                button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                            />
                        </div>

                    </div>
                    <div className="flex w-full justify-center gap-1 py-2">
                        <a href="#data1" className="btn btn-xs">1</a>
                        <a href="#data2" className="btn btn-xs">2</                        a>
                        <a href="#data3" className="btn btn-xs">3</a>
                        <a href="#data4" className="btn btn-xs">4</a>
                        <a href="#data5" className="btn btn-xs">5</a>
                        <a href="#data6" className="btn btn-xs">6</a>
                    </div>

                </div>
            </div></div>
    );
};

export default Dashboard;
