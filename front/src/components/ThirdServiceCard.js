import React from 'react';
import './Card.css';




import {
    ExclamationTriangleIcon
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'





const ThirdServiceCard = ({ title, serviceProvider, details, thirdPartySharedData, thirdPartyRecipients}) => {
    const handleClick = (buttonUrl) => {
        window.location.href = buttonUrl;
    }

    const lengthOfThirdPartyRecipients = thirdPartyRecipients.length;



    return (
        <div className="indicator">
            {lengthOfThirdPartyRecipients > 0 && (
                <span className="indicator-item indicator-center badge bg-red-500 text-white">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-white" />
                    제3자 제공</span>
            )}
            <div className="w-[290px] h-[190px] grid place-content-center grid-cols-12 grid-rows-12">

                <div className=' cursor-pointer group rounded-3xl perspective-1000 col-start-1 col-end-13 row-start-1 row-end-13'>

                    <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500   '>

                        {/* front card */}
                        <div className='absolute  w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden  text-neutral-300 space-y-5 backface-hidden'>
                            <div className="h-full border border-red-200 rounded-md bg-red-50 pb-4 px-4 mb-4 text-black" >
                                <h3 className="mt-4 font-bold">
                                    {title}
                                </h3>

                                <div className="text-sm ">정보수신자: {serviceProvider}</div>
                                <div className="text-sm ">활용 데이터: <span>
                                    {details.map((detail, index) => (
                                        <span>{detail}
                                        {index < details.length - 1 ? ', ' : ''}
                                        </span>
                                    ))} 
                                    </span>
                                </div>
                                {lengthOfThirdPartyRecipients > 0 && (
<div>                                
                                <div className="mt-2 text-xs font-bold text-red-500 ">제3자 제공 데이터: <span className='text-red-500  text-xs font-normal' >{thirdPartySharedData.map
                                    ((data, index) => (
                                        <span>{data}
                                        {index < thirdPartySharedData.length - 1 ? ', ' : ''}   
                                        </span>
                                    ))
                                    }</span></div>
                                {/* show third party recipients as buttons */}
                                    <div className="text-xs font-bold  text-red-500">제3자 제공 대상 기관: <span className='text-red-500 text-xs font-normal' >{thirdPartyRecipients.map
                                        ((recipient, index) => (
                                            <span>{recipient}
                                            {index < thirdPartySharedData.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                        </span>
                                    </div>
</div>
                                )
                                }
                                </div>
                            </div>
                        {/* back card */}

                        <div className='bg-white w-full h-full absolute rounded-3xl rotate-y-180 overflow-hidden backface-hidden grid grid-rows-12'>
                            <div className='row-start-1 row-end-4'>
                                {/* <div className='relative flex flex-col justify-center items-center h-full w-full'>
                                    {(lengthOfThirdPartyRecipients > 0) ? (
                                        <a href="https://github.com/mathminds-sd/public-assets/blob/main/f.png?raw=true">
                                            <img src='/c.png' className='overflow-visible' />
                                        </a>
                                    ) : (
                                        <a href="https://github.com/mathminds-sd/public-assets/blob/main/b.png?raw=true">
                                            <img src='/b.png' className='justify-center overflow-visible' />
                                        </a>
                                    )
                                    }
                                </div> */}
                                <div className='row-start-4 row-end-12'>
                                    {lengthOfThirdPartyRecipients > 0 && (
                                        <div className='p-4'>
                                            <h2 className="text-xs font-bold mt-2">제3자 제공 대상 기관</h2>
                                            <div className="justify-around gap-1 grid grid-cols-3">
                                                {thirdPartyRecipients.map((recipient, index) => (
                                                    <a key={`third-${index}`} href="https://github.com/mathminds-sd/public-assets/blob/main/f.png?raw=true">
                                                        <button className="col-span-1 w-full bg-red-100 text-red-600 text-xs px-1 py-1 cursor-pointer rounded mr-2 ">
                                                            {`${recipient}`}
                                                        </button>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                    }
                                </div>
                                <div className="bg-red-200 flex">
                                    
                                    <div className='justify-center btn btn-xs items-center'>서비스 철회하기</div>
                                    
                                </div>
                            </div>    </div>

                                {/* 
            <div className="mt-4 flex justify-around">
                <a href="https://github.com/mathminds-sd/public-assets/blob/main/e.gif?raw=true">
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded mr-2 w-100%">
                        서비스 상세정보 보기
                    </button>
                </a>
                <a href="https://github.com/mathminds-sd/public-assets/blob/main/c.png?raw=true">
                    <button className="border border-gray-400 bg-[#E3E3E3] text-black text-xs px-2 py-1 cursor-pointer rounded" >
                        활용 데이터 상세보기
                    </button>
                </a>
            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        //     </div>
        // </div>
    );
};

export default ThirdServiceCard;
