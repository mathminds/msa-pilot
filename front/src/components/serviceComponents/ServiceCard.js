import React from 'react';
import './Card.css';

const ServiceCard = ({ title, count, details, thirdPartyRecipients, button1, button2 }) => {
    const handleClick = (buttonUrl) => {
        window.location.href = buttonUrl;
    }
    return (
  

        <div className="w-[290px] h-[190px]  grid place-content-center grid-cols-6 grid-rows-4">
            <div className=' bg-transparent cursor-pointer group rounded-3xl perspective-1000 col-start-1 col-end-7 row-start-1 row-end-5 '>
            <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>


            <div className='w-full h-full absolute rounded-3xl rotate-y-180 overflow-hidden backface-hidden'>
            <img src='/c.png' className='w-fill h-fill overflow-visible'/>
          </div>  

          <div className='absolute  w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden  text-neutral-300 space-y-5 backface-hidden'>
        <div className="border border-green-300 rounded-md bg-white p-4 mb-4 text-gray-600 h-full" >
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
        </div>
        </div>
        </div>
        </div>

    );
};

export default ServiceCard;
