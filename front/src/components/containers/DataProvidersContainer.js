import React from 'react';
import DataCard from '../dataProviderComponents/DataCard';
import DataProviderCard from '../dataProviderComponents/DataProviderCard';

const DataProvidersContainer = () => {
    return (
        <div>
        <div className="bg-[#D7E9FF] px-4">

            <h2 className='text-xl font-bold text-black pt-4'><p className='text-red-400'>금융분야</p>에서 내 데이터를 제공해주는 기관들 </h2>
            <h3 className='text-md text-gray-500'>내 전송요구 권리 행사로 정보수신자에게 전송되는 데이터 종류 </h3>

            <div className="data-sharing carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
                <div id='data1' className="carousel-item ">
                    <DataProviderCard

                        title="신한은행"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data2' className="carousel-item ">
                    <DataProviderCard
                        // className="carousel-item w-1/2"
                        title="하나은행"
                        details="상세 데이터 항목: 음성 통화 기록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data3' className="carousel-item ">
                    <DataProviderCard
                        // className="carousel-item w-1/2"
                        title="기업은행"
                        details="상세 데이터 항목: 계좌 잔액..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data4' className="carousel-item ">
                    <DataProviderCard
                        // className="carousel-item w-1/2"
                        title="우리은행"
                        details="상세 데이터 항목: 신용 등급..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data5' className="carousel-item ">
                    <DataProviderCard
                        // className="carousel-item w-1/2"
                        title="대구은행"
                        details="상세 데이터 항목: 현재 요금제..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data6' className="carousel-item ">
                    <DataProviderCard
                        // className="carousel-item w-1/2"
                        title="한우리 은행"
                        count="소비분석 서비스, 통신비 납부 서비스, 등등"
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


        <div className="bg-[#577fb1] px-4">

            <h2 className='text-xl font-bold text-white pt-4'> <p className='text-red-400'>의료분야</p>에서 내 데이터를 제공해주는 기관들 </h2>
            <h3 className='text-md text-gray-500'>내 전송요구 권리 행사로 정보수신자에게 전송되는 데이터 종류 </h3>

            <div className="data-sharing carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
                <div id='data1b' className="carousel-item ">
                    <DataCard

                        title="삼성병원"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data2b' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="아산병원"
                        details="상세 데이터 항목: 음성 통화 기록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data3b' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="서울대병원"
                        details="상세 데이터 항목: 계좌 잔액..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data4b' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="세브란스 병원"
                        details="상세 데이터 항목: 신용 등급..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data5b' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="세종대왕 병원"
                        details="상세 데이터 항목: 현재 요금제..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data6b' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="종세병원"
                        details="상세 데이터 항목: 보험 가입 내역..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>

            </div>
            <div className="flex w-full justify-center gap-1 py-2">
                <a href="#data1b" className="btn btn-xs">1</a>
                <a href="#data2b" className="btn btn-xs">2</                        a>
                <a href="#data3b" className="btn btn-xs">3</a>
                <a href="#data4b" className="btn btn-xs">4</a>
                <a href="#data5b" className="btn btn-xs">5</a>
                <a href="#data6b" className="btn btn-xs">6</a>
            </div>

        </div>

        <div className="bg-[#b0bfd1] px-4">

            <h2 className='text-xl font-bold text-black pt-4'><p className='text-red-400'>통신분야</p>에서 내 데이터를 제공해주는 기관들 </h2>
            <h3 className='text-md text-gray-500'>내 전송요구 권리 행사로 정보수신자에게 전송되는 데이터 종류 </h3>

            <div className="data-sharing carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
                <div id='data1c' className="carousel-item ">
                    <DataCard

                        title="SK 텔레콤"
                        details="상세 데이터 항목: 구매한 상품목록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data2c' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="KT 코리아 텔레콤"
                        details="상세 데이터 항목: 음성 통화 기록..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data3c' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="LG U+"
                        details="상세 데이터 항목: 계좌 잔액..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
                <div id='data4c' className="carousel-item ">
                    <DataCard
                        // className="carousel-item w-1/2"
                        title="세종 알뜰폰"
                        details="상세 데이터 항목: 신용 등급..."
                        button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                        button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                    />
                </div>
            </div>
            <div className="flex w-full justify-center gap-1 py-2">
                <a href="#data1c" className="btn btn-xs">1</a>
                <a href="#data2c" className="btn btn-xs">2</                        a>
                <a href="#data3c" className="btn btn-xs">3</a>
                <a href="#data4c" className="btn btn-xs">4</a>
            </div>

        </div>
        </div>
        

    );
}

export default DataProvidersContainer;