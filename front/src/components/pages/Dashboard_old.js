import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Dashboard.css';
import ServiceCard from './ServiceCard';
import DataCard from './DataCard';
import ServicesContainer from './ServicesContainer';
import DataTypesContainer from './DataTypesContainer';

const Dashboard = () => {

    const [visibleView, setVisibleView] = useState(null);
    const [isVisibleServices, setIsVisibleServices] = useState(false);
    const [isVisibleDataProviders, setIsVisibleDataProviders] = useState(false);
    const [isVisibleDataTypes, setIsVisibleDataTypes] = useState(false);

    const handleServicesClick = () => {
        setIsVisibleServices(!isVisibleServices);
        setIsVisibleDataProviders(false)
        setIsVisibleDataTypes(false)
        setVisibleView('services')
    }

    const handleDataProvidersClick = () => {
        setIsVisibleDataProviders(!isVisibleDataProviders);
        { isVisibleDataProviders && setIsVisibleServices(false) }
        { isVisibleDataProviders && setIsVisibleDataTypes(false) }
        { isVisibleDataProviders && setVisibleView('dataProviders') }

    }

    const handleDataTypesClick = () => {
        setIsVisibleDataTypes(!isVisibleDataTypes);
        setIsVisibleServices(false)
        setIsVisibleDataProviders(false)
        setVisibleView('dataTypes')
    }

    useEffect(() => {
        console.log("");
        console.log('visibleView changed to', visibleView);
        console.log('isVisibleServices changed to', isVisibleServices);
        console.log('isVisibleDataProviders changed to', isVisibleDataProviders);
        console.log('isVisibleDataTypes changed to', isVisibleDataTypes);


    }
        , [isVisibleServices, isVisibleDataProviders, isVisibleDataTypes]);


    return (
        <div className='bg-white'>


            <h1 className='text-5xl font-bold my-2 mx-4 text-black pt-4'>홍길동 님</h1>
            <p className='border-2 border-red-900 text-xl text-gray-400 mx-4'>마이데이터 대시보드</p>


            <div className="dashboard border-2 border-red-900 ">
                <div className="border-2 border-red-900 bg-white pr-4 rounded-xl">
                    <h2 className='border-2 border-red-900 text-2xl font-bold text-black pt-4 px-4 mb-4'>이번 달 내 마이데이터 현황</h2>
                    <div className="border-2 border-red-900 summary flex-col md:flex-row ">
                        <div className="border-2 border-red-900 ">
                        <Card title="어떤 서비스에 이용되었나요?" count="14" details="개" onClick={handleServicesClick} />
                        <Card title="어떤 기관에서 제공하였나요?" count="24" details="종" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true" onClick={handleDataTypesClick} />
                        <Card title="어떤 데이터가 공유되었나요?" count="2" details="건" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true" onClick={handleDataProvidersClick} />
                    </div>
                    {isVisibleServices && (<ServicesContainer />)}
                    {isVisibleDataTypes && (<DataTypesContainer />)}
                </div>
                {/* <h2 className='text-2xl font-bold text-black p-4'> 이번달 내 마이데이터 활동 상세정보</h2> */}





                


            </div></div>
        </div>
    );
};

export default Dashboard;
