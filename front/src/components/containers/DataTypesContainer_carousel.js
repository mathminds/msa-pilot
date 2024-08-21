import React from 'react';
import DataCard from '../dataProviderComponents/DataCard';

const DataTypesContainer = () => {
    return (

        <div className="bg-[#D7E9FF] px-4">

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

    );
}

export default DataTypesContainer;