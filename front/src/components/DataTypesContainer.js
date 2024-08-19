import React from 'react';
import DataProviderCard from './DataProviderCard';

const DataTypesContainer = () => {
    return (
        <div className='h-fill'>
            <div className="data-sharing carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
                <div id='data1' className="carousel-item ">
                    <DataProviderCard  />
                </div>

            </div>
            <div className="flex w-full justify-center gap-1 py-2">
                <a href="#data1" className="btn btn-xs">1</a>
            </div>
        </div>
        

    );
}

export default DataTypesContainer;