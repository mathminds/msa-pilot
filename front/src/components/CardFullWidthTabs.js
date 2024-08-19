import React, { useState } from 'react';
// import ProductsList from './ProductsList';
// import RowsOfSnippets from './RowsOfSnippets';
import DataTypesContainer from './DataTypesContainer';
import ServicesContainer from './ServicesContainer';
// import Card from './Card';
// import DataCard from './DataCard';
import DataProvidersContainer from './DataProvidersContainer';
// import DataTypesContainer from './DataTypesContainer';

const CardFullWidthTabs = () => {
    const [activeTab, setActiveTab] = useState('services');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="w-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="dashboard grid grid-cols-12 grid-rows-12">

                <div className='col-start-1 col-end-13 row-start-1 row-end-2 bg-slate-300'>


                    <ul
                        className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                        id="fullWidthTab"
                        data-tabs-toggle="#fullWidthTabContent"
                        role="tablist"
                    >
                        <li className={`w-full ${activeTab === 'services' ? 'bg-green-500 ' : ''}`}>
                            <button
                                id="services-tab"
                                data-tabs-target="#services"
                                type="button"
                                role="tab"
                                aria-controls="services"
                                aria-selected={activeTab === 'services'}
                                className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'services' ? 'bg-green-500 hover:bg-green-700 text-white' :''}`}
                                onClick={() => handleTabClick('services')}
                            >
                                <h1 className='text-2xl'>어떤 서비스에 이용되었나요?</h1>
                            </button>
                        </li>


                        {/* DATA PROVIDERS */}

                        <li className={`w-full ${activeTab === 'dataProviders' ? 'bg-blue-500' : ''}`}>
                            <button
                                id="dataProviders-tab"
                                data-tabs-target="#dataProviders"
                                type="button"
                                role="tab"
                                aria-controls="dataProviders"
                                aria-selected={activeTab === 'dataProviders'}
                                className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'dataProviders' ? 'bg-blue-500 hover:bg-blue-700 text-white' :''}`}
                                onClick={() => handleTabClick('dataProviders')}
                            >
                                <h1 className='text-2xl'>어떤 기관에서 제공되었나요?</h1>


                            </button>
                        </li>







                        <li className='border-3 border-red-300 w-full bg-red-500' >
                            <button
                                id="faq-tab"
                                data-tabs-target="#faq"
                                type="button"
                                role="tab"
                                aria-controls="faq"
                                aria-selected={activeTab === 'faq'}
                                className="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                                onClick={() => handleTabClick('faq')}
                            >
                                <h1 className='text-2xl'>어떤 데이터가 공유되었나요?</h1>
                            </button>
                        </li>
                    </ul>
                </div>
                
                <div className='col-start-1 col-end-13 row-start-2 row-end-13 bg-slate-600'>
                    <div id="fullWidthTabContent" className="border-2 border-gray-200 dark:border-gray-600">
                        <div
                            className={`p-0 bg-white rounded-lg md:p-0 dark:bg-gray-800 ${activeTab === 'services' ? '' : 'hidden'
                                }`}
                            id="services"
                            role="tabpanel"
                            aria-labelledby="services-tab"
                        >
                            <ServicesContainer />
                        </div>



                        <div
                            className={`p-0 bg-white rounded-lg md:p-0 dark:bg-gray-800 ${activeTab === 'dataProviders' ? '' : 'hidden'
                                }`}
                            id="dataProviders"
                            role="tabpanel"
                            aria-labelledby="dataProviders-tab"
                        >
                            
                            <DataProvidersContainer />

                            {/* Data Providers List */}
                        </div>
                        <div
                            className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${activeTab === 'faq' ? '' : 'hidden'
                                }`}
                            id="faq"
                            role="tabpanel"
                            aria-labelledby="faq-tab"
                        >
                            <DataTypesContainer />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardFullWidthTabs;
