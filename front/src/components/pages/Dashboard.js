import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import CardFullWidthTabs from '../layout/CardFullWidthTabs';
// import Card from '../components/layout/Card';
// import ServiceCard from './ServiceCard';
// import DataCard from '../components/dataTypeComponents/DataCard';
// import ServicesContainer from './ServicesContainer';
// import DataTypesContainer from '../components/dataTypeComponents/DataTypesContainer';
// import TabComponent from '../components/layout/TabComponent';
// import RowsOfSnippets from '../components/layout/RowsOfSnippets';
// import DataFlow from '../components/dataTypeComponents/DataFlow';
// import ParentComponent from '../components/modals/ParentComponent';

const Dashboard = () => {

    const DropDown_2 = () => {
        <div>

            <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center px-3 py-2 mb-3 me-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Small dropdown <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>


            <div id="dropdownSmall" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div class="py-2">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>

            <button id="dropdownLargeButton" data-dropdown-toggle="dropdownLarge" class="inline-flex items-center px-5 py-3 mb-3 font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Large dropdown <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>


            <div id="dropdownLarge" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div class="py-2">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </div>
    }


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

    const screenWidth = window.innerWidth;
    console.log("screenWidth", screenWidth);

    return (
        <div className='bg-white'>
            {/* <RowsOfSnippets /> */}
            {/* <DropDown_2 /> */}
            {/* <ParentComponent /> */}

            <h1 className='text-3xl md:text-5xl font-bold my-2 mx-4 text-black pt-4'><span className="font-bold">홍길동 님</span><span className='text-gray-500 font-normal text-2xl md:text-4xl'>의 서비스 현황</span></h1>
            {/* <DataFlow /> */}
            {/* <p className='text-4xl text-gray-400 m-4'>마이데이터 대시보드</p> */}

            <div className="md:border-2 md:border-blue-900 md:bg-white md:pr-4 md:rounded-xl">
                <CardFullWidthTabs />   
            </div>

            


</div>

        //     <TabComponent />
        //     <div className="dashboard border-2 border-red-900 "> Dashboard STart
        //         <div className="border-2 border-blue-900 bg-white pr-4 rounded-xl">a
        //             <h2 className='border-2 border-red-900 text-2xl font-bold text-black pt-4 px-4 mb-4'>이번 달 내 마이데이터 현황</h2>

        //             <TabComponent />

        //             <div className="border-2 border-red-900 summary p-4 flex-col md:flex-row ">
        //                 <div className="border-2 border-red-900 ">  b
        //                     <Card title="어떤 서비스에 이용되었나요?" count="14" details="개" onClick={handleServicesClick} />
        //                     <Card title="어떤 기관에서 제공하였나요?" count="24" details="종" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true" onClick={handleDataTypesClick} />
        //                     <Card title="어떤 데이터가 공유되었나요?" count="2" details="건" button1="https://github.com/mathminds-sd/public-assets/blob/main/tab2.jpg?raw=true" button2="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true" onClick={handleDataProvidersClick} />
        //                     b_END</div>

        //                 {isVisibleServices && (<ServicesContainer />)}
        //                 {isVisibleDataTypes && (<DataTypesContainer />)}
        //                 {isVisibleDataProviders && (<DropDown_2 />)}
        //             </div>

        //             c
        //             {/* <h2 className='text-2xl font-bold text-black p-4'> 이번달 내 마이데이터 활동 상세정보</h2> */}








        //         </div>
        //         Dashboard End</div>



        //     <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center px-3 py-2 mb-3 me-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Small dropdown <svg class="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        //     </svg>
        //     </button>

        //     <div id="dropdownSmall" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        //         <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
        //             <div>Bonnie Green</div>
        //             <div className="font-medium truncate">name@flowbite.com</div>
        //         </div>
        //         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
        //             <li>
        //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        //             </li>
        //             <li>
        //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        //             </li>
        //             <li>
        //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        //             </li>
        //         </ul>
        //         <div className="py-2">
        //             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        //         </div>
        //     </div>





        //     <button id="dropdownLargeButton" data-dropdown-toggle="dropdownLarge" class="inline-flex items-center px-5 py-3 mb-3 font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Large dropdown <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        //     </svg>
        //     </button>

        //     <DropDown_1 />
        //     <DropDown_2 />
        // </div>
    );
};







export default Dashboard;
