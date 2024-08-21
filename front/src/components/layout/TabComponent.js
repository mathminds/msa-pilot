import React, { useState } from 'react';

import Card from './Card';

const TabComponent = () => {

    const [activeTab, setActiveTab] = useState('services');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li id="services" className={`w-full ${activeTab === 'stats' ? 'bg-gray-600' : ''}`}>
            <button
                id="stats-tab"
                data-tabs-target="#stats"
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected={activeTab === 'stats'}
                className="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => handleTabClick('services')}
            >
                <p>어떤 서비스에 이용되었나요?</p>

            </button>

            {/* <Card title="어떤 서비스에 이용되었나요?" count="14" details="개" onClick={handleTabClick} /> */}
            </li>
            <li className="me-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
            </li>
            <li className="me-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
            </li>
            <li className="me-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
            </li>
            <li>
                <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li>
        </ul>
    );
}

export default TabComponent;
