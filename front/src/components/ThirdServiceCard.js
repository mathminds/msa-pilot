import React from 'react';
import './Card.css';




import {
    ExclamationTriangleIcon
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'





const ThirdServiceCard = ({ title, count, details, button1, button2 }) => {
    const handleClick = (buttonUrl) => {
        window.location.href = buttonUrl;
    }
    return (
        <div className="border border-red-300 rounded-md bg-red-50 pb-4 px-4 mb-4 text-black">
             <div className="relative mt-1 btn btn-xs h-auto w-auto border-2 border-red-600 bg-red-100">
                <div className="flex items-center text-xs text-red-500">
                        <ExclamationTriangleIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-red-400" />
                        제3자 제공
                    </div>
                </div>
            <h3 className="mt-1 font-bold">
                {title}
            </h3>
           
            <div className="text-sm ">{count}</div>
            <div className="text-sm ">
                {details}
            </div>
            <div className="mt-4 flex justify-around">
                <a href="https://github.com/mathminds-sd/public-assets/blob/main/d.png?raw=true">
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded mr-2 w-100%">
                        서비스 상세정보 보기
                    </button>
                </a>
                <a href="https://github.com/mathminds-sd/public-assets/blob/main/e.gif?raw=true">
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded" >
                        활용 데이터 상세보기
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ThirdServiceCard;
