import React, { useState } from 'react';
import '../reusables/FlipCard.css'; // Import the CSS file for styles
// import ConsentCard from './ConsentCard';

import Modal from '../modals/Modal';
import ServiceDetailsCard from '../serviceComponents/ServiceDetailsCard';
import ServiceRejectCard from '../serviceComponents/ServiceRejectCard';

const RejectedServiceCard = (props) => {
    const {serviceData}=props

    const { id, title, serviceProvider, details, thirdPartySharedData, thirdPartyRecipients } = serviceData;
    const [isFlipped, setIsFlipped] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(null);
    const [isModalReject, setIsModalReject] = useState(null);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenRejectModal = () => {
        setIsModalReject(true);
    };

    const handleCloseRejectModal = () => {
        setIsModalReject(false);
    };
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <>
        {isModalReject && (
            <div className='w-full h-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50'>
                <Modal isOpen={isModalReject} onClose={handleCloseRejectModal}>
                    <ServiceRejectCard serviceData={serviceData} />
                </Modal>
            </div>
        )}

        {isModalOpen && (
            <div className='w-full h-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50'>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <ServiceDetailsCard serviceData={serviceData} />
                </Modal>
            </div>
        )}
        <div className="flip-card-container shadow-lg hover:shadow-xl transition-all duration-200">
            <div className={`flip-card h-[150px]  w-[24.75rem] md:h-[12.5rem] md:w-[28rem] ${isFlipped ? 'flipped' : ''} `}>
                <div className="flip-card-front md:flip-card-front-md grid grid-cols-12 grid-rows-12 ">
                    {/* <FrontCard serviceData={serviceData} /> */}
                    <div className='pt-2 md:pt-4  border-red-500  bg-white px-2 md:px-4 text-black w-full h-full grid grid-cols-12 grid-rows-12 rounded-xl gap-3'>
                        <h3 className='font-bold text-lg md:text-2xl row-start-1 row-end-3 col-start-1 col-end-13 text-gray-400'>[철회] {title}</h3>
                        <ul className='list-disc list-inside row-start-3 row-end-9 col-start-1 col-end-13 text-gray-400'>
                        <li className='text-sm md:text-xl pt-1 row-start-3 row-end-5 col-start-1 col-end-13 overflow-hidden whitespace-nowrap overflow-ellipsis '>정보수신자: {serviceProvider}</li>
                        <li className='text-sm md:text-xl pt-1 col-start-1 col-end-13 row-start-5 row-end-7 overflow-hidden whitespace-nowrap overflow-ellipsis '>활용데이터: {details.join(', ')}</li>
                        <li className='text-sm md:text-xl pt-1 col-start-1 col-end-13 row-start-7 row-end-9 overflow-hidden whitespace-nowrap overflow-ellipsis '>정보전송자: 신한은행, 우리은행, 현대카드 등</li>
                        </ul>
                        <div className='py-2  border-white  col-start-1 col-end-13 row-start-9 row-end-12 flex justify-between gap-4'>
                            {/* <div className='grid grid-cols-12 grid-rows-2'> */}
                              
                                <div className='bg-blue-500 text-white font-bold w-full btn-xs md:btn-sm rounded text-center flex items-center justify-center'>
                                서비스 상세보기
                                </div>
                        
                                {thirdPartyRecipients.length > 0 ? 
                                <div className='bg-yellow-500 text-white font-bold  w-full btn-xs md:btn-sm rounded text-center items-center justify-center' onClick={handleFlip}>
                                    제3자 제공내역
                                </div>
                                :
                                <div className='bg-gray-200 text-white font-bold w-full btn-xs md:btn-sm rounded text-center flex items-center justify-center'>
                                    제3자 제공내역
                                </div>
}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="flip-card-back md:flip-card-back-md grid grid-cols-12 grid-rows-12 text-black" onClick={handleFlip}>
                <div className="consent-card col-start-2 col-end-12">
      <div className="consent-header row-start-1 row-end-2 ">
        [동의 일자] 2024년 8월 13일 18:32
      </div>
      <div className="consent-table">
        <div className="consent-row">
          <div className="consent-cell header-cell">제3자 제공기관</div>
          <div className="consent-cell header-cell">제공 데이터</div>
        </div>
        {thirdPartyRecipients.map((recipient, index) => (
          <div className="consent-row text-black">
            <div className="consent-cell">{recipient}</div>
            <div className="consent-cell">{thirdPartySharedData[index]}</div>
          </div>    
        ))}
        
      </div>
    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default RejectedServiceCard;
