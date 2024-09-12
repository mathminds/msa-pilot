import React, { useState } from 'react';
import ProductsList from './ProductsList';
import RowsOfSnippets from './RowsOfSnippets';
import DataTypesContainer from './DataTypesContainer';
import ServicesContainer from '../containers/ServicesContainer';
import Card from './Card';
import DataCard from './DataCard';
// import DataTypesContainer from './DataTypesContainer';

const ServiceDetails = ({serviceName, dataProvidersList}) => {
    const dataProviders = dataProvidersList.filter(dataProvider => dataProvider.serviceName === serviceName);

    

    const [activeTab, setActiveTab] = useState('services');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (

    );
};

export default ServiceDetails;
