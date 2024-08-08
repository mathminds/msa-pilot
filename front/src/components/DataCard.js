import React from 'react';
import './Card.css';

const DataCard = ({ title, count, details, button1, button2 }) => {

    return (
        <div className="border border-blue-300 rounded-md bg-white p-4 mb-4 text-gray-600">
            <h3 className="mt-0 font-bold">
                {title}
            </h3>
            <div className="text-sm ">{count}</div>
            <div className="text-sm ">
                {details}
            </div>
            <div className="mt-4 flex justify-center">
                <a href={button1}>
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded mr-2">
                        서비스 상세정보 보기
                    </button>
                </a>
                <a href={button2}>
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded" >
                        활용 데이터 상세보기
                    </button>
                </a>
            </div>
        </div>
    );
};

export default DataCard;
