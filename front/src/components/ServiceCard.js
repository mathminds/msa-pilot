import React from 'react';
import './Card.css';

const ServiceCard = ({ title, count, details, button1, button2 }) => {
    const handleClick = (buttonUrl) => {
        window.location.href = buttonUrl;
    }
    return (
        <div className="border border-green-300 rounded-md bg-white p-4 mb-4 text-gray-600 h-[159px]" >
            <h3 className="mt-5 font-bold">
                {title}
            </h3>
            <div className="text-sm ">{count}</div>
            <div className="text-sm ">
                {details}
            </div>
            <div className="mt-4 flex justify-around">
                <a href="https://github.com/mathminds-sd/public-assets/blob/main/b.png?raw=true">
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded mr-2 w-100%">
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

export default ServiceCard;
