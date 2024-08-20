import React from 'react';
import './Card.css';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import FlipCard from './reusables/FlipCard';
import ParentComponent from './modals/ParentComponent';
import ServiceDetailsCard from './ServiceDetailsCard';
import Modal from './modals/Modal';

const ThirdServiceCard = (props) => {
    const { serviceData } = props;

    console.log(serviceData);
    const { id, title, serviceProvider, details, thirdPartySharedData, thirdPartyRecipients } = serviceData;
    
    const [isModalOpen, setIsModalOpen] = React.useState(null);

    const handleOpenModal = () => {
        // setDetailsActive(!);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        // setDetailsActive(!detailsActive);
        setIsModalOpen(false);
    };




    if (!serviceData) {
        setIsModalOpen(false);
        return (
            <div>Loading...</div>
        );
    }





    return (
        <div className="indicator z-10">
            {thirdPartyRecipients.length > 0 && (
                <span className="indicator-item xs:indicator-start xs:mx-12 md:indicator-center badge bg-red-500 text-white">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-white" />
                    제3자 제공
                </span>
            )}

            
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
                        {/* <div className='w-full h-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50'> */}
                        <ServiceDetailsCard serviceData={serviceData} />
                {/* </div> */}
                    </Modal>
            
            <div className="w-[450px] h-[50px] xs:border-4 xs:border-black xs:w-[600px] xs:h-[100px] md:w-[390px] md:h-[190px] grid place-content-center grid-cols-12 grid-rows-12 z-0">


                <div className='cursor-pointer group rounded-3xl  perspective-1000 col-start-1 col-end-13 row-start-1 row-end-13'>
                    <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>

                        <div className='absolute w-full h-full bg-[#0F1823] bg-opacity-95 rounded-lg md:rounded-3xl overflow-hidden text-neutral-300 backface-hidden'>

                            <div className="border-0 border-red-500 rounded-md bg-white px-4 text-black">
                                <h3 className="pt-2 font-bold text-2xl">
                                    {title}
                                </h3>
                                <div className="text-sm pt-1">정보수신자: {serviceProvider}</div>
                                <div className="text-sm pt-1 ">활용 데이터: {details.join(', ')}</div>
                                <div className="text-sm pt-1 ">정보전송자: DataProvider1, DataProvider2, etc.</div>
                                <div className="text-sm pt-1 ">활용데이터 분야: 금융, 통신, 의료</div>


                                <div className=" py-4  border-black bg-white w-full ">
                                    <div className='border-t'></div>
                                    {thirdPartySharedData.length === 0 && (
                                        <div>
                                            <div className="text-xs font-bold text-green-500">제3자 제공 데이터: <span className='text-green-500 text-xs font-normal'>없음</span></div>
                                            <div className="text-xs font-bold text-green-500">_</div>
                                        </div>
                                    )}
                                    {thirdPartySharedData.length > 0 && (

                                        <div className="text-xs font-bold text-red-500">제3자 제공 데이터: <span className='text-red-500 text-xs font-normal'>{thirdPartySharedData.join(', ')}</span></div>

                                    )}
                                    {thirdPartyRecipients.length > 0 && (
                                        <div className="text-xs font-bold text-red-500">제3자 제공 대상 기관: <span className='text-red-500 text-xs font-normal'>{thirdPartyRecipients.join(', ')}</span></div>

                                    )}
                                </div>

                            </div>

                        </div>

                        <div className='bg-white w-full h-full absolute rounded-3xl rotate-y-180 overflow-hidden backface-hidden grid grid-rows-12 grid-cols-12'>
                            <div className='row-start-1 row-end-3 col-start-1 col-end-13 border-b border-gray-300 p-2'>
                                <span className='font-bold'>전송요구 행사 일자:</span> 2024년 8월 13일 오후 7시 32분
                            </div>


                            {thirdPartySharedData.length === 0 && (
                                <div className='row-start-3 row-end-11 col-start-1 col-end-13 border-b-2 border-gray-300 flex justify-center'>
                                    <img src='/b.png' className='h-full overflow-clip ' />
                                </div>
                            )}
                            {thirdPartySharedData.length > 0 && (
                                <div className='row-start-3 row-end-11 col-start-1 col-end-7 border border-gray-300'>
                                    <div className='p-1'>
                                        <h2 className="text-xs font-bold mb-1">제3자 제공 데이터 항목</h2>
                                        <div className="justify-start gap-1 grid grid-flow-row grid-cols-2">
                                            {thirdPartySharedData.map((data, index) => (
                                                <div className='btn btn-xs bg-red-200 border-2 border-red-200 text-black hover:bg-red-300 hover:text-black' key={`data-${index}`}>
                                                    <a href="https://github.com/mathminds-sd/public-assets/blob/main/b.png?raw=true">
                                                        {data}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {thirdPartyRecipients.length > 0 && (
                                <div className='row-start-3 row-end-11 col-start-7 col-end-13 border border-gray-300'>
                                    <div className='p-1'>
                                        <h2 className="text-xs font-bold mb-1">제3자 제공 대상 기관</h2>
                                        <div className="justify-start gap-1 grid grid-flow-row grid-cols-2">
                                            {thirdPartyRecipients.map((recipient, index) => (
                                                <div className='btn btn-xs bg-red-200 border-2 border-red-200 text-black hover:bg-red-300 hover:text-black' key={`third-${index}`}>
                                                    <a href="https://github.com/mathminds-sd/public-assets/blob/main/f.png?raw=true">
                                                        {recipient}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}


                            <div className="bg-green-500 text-white font-bold btn btn-xs row-start-11 row-end-13 col-start-1 col-end-5 m-1 mx-3" onClick={handleOpenModal}>
                                서비스 상세보기
                            </div>

                            <div className="bg-red-500 text-white font-bold btn btn-xs row-start-11 row-end-13 col-start-5 col-end-9 m-1 mx-3">
                                서비스 철회하기
                            </div>

                            <div className="bg-blue-500 text-white font-bold btn btn-xs row-start-11 row-end-13 col-start-9 col-end-13 m-1 mx-3">
                                데이터 흐름보기
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default ThirdServiceCard;
