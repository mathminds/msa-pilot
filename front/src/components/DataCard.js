import React from 'react';
import './Card.css';

const DataCard = ({ title, count, details, button1, button2 }) => {

    return (
        <div className="bg-blue-200 p-4 rounded-lg mb-4 text-gray-600 w-">
            <h3 className="mt-0 font-bold">
                {title}
            </h3>
            <div className="text-sm ">{count}</div>
            <div className="text-sm ">
                {details}
            </div>
            <div className="mt-4 flex ">
                <a href={button1}>
                    <button className="text-xs px-2 py-1 border-none bg-blue-500 text-white cursor-pointer rounded mx-2">
                        서비스 상세정보 보기
                    </button>
                </a>
                <a href={button2}>
                    <button className="text-xs px-2 py-1 border-none bg-orange-300 text-black cursor-pointer rounded" >
                        활용 데이터 상세보기
                    </button>
                </a>
            </div>
        </div>
    );
};

export default DataCard;
