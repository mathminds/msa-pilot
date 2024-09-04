import React, { useState } from 'react';
import '../reusables/FlipCard.css'; // Import the CSS file for styles
// import ConsentCard from './ConsentCard';

import Modal from '../modals/Modal';
import ServiceDetailsCard from '../serviceComponents/ServiceDetailsCard';
import ServiceRejectCard from '../serviceComponents/ServiceRejectCard';

const FlipCard = (props) => {
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
        <div className="flip-card-container ">
            <div className={`flip-card ${isFlipped ? 'flipped' : ''} `}>
                <div className="flip-card-front grid grid-cols-12 grid-rows-12 ">
                    {/* <FrontCard serviceData={serviceData} /> */}
                    <div className='pt-4  border-red-500  bg-white px-4 text-black w-full h-full grid grid-cols-12 grid-rows-12 rounded-xl'>
                        <h3 className='font-bold text-2xl row-start-1 row-end-3 col-start-1 col-end-13'>{title}</h3>
                        <ul className='row-start-3 row-end-9 col-start-1 col-end-13'>
                        <li className='text-base pt-1 row-start-3 row-end-5 col-start-1 col-end-13 '>정보수신자: {serviceProvider}</li>
                        <li className='text-base  col-start-1 col-end-13 row-start-5 row-end-7 '>활용데이터: {details.join(', ')}</li>
                        <li className='text-base  col-start-1 col-end-13 row-start-7 row-end-9 '>정보전송자: 신한은행, 우리은행, 현대카드 등</li>
                        </ul>
                        <div className='py-2 border-black bg-white w-full col-start-1 col-end-13 row-start-9 row-end-13 flex justify-between items-end '>
                            {/* <div className='grid grid-cols-12 grid-rows-2'> */}
                                <div className='bg-blue-500 text-white font-bold btn btn-xs col-start-1 col-end-5 m-1 mx-3' onClick={handleOpenModal}>
                                    서비스 상세보기
                                </div>
                                <div className='bg-red-500 text-white font-bold btn btn-xs col-start-5 col-end-9 m-1 mx-3' onClick={handleOpenRejectModal}>
                                    서비스 철회하기
                                </div>
                                {thirdPartyRecipients.length > 0 ? 
                                <div className='bg-yellow-500 text-white font-bold btn btn-xs col-start-9 col-end-13 m-1 mx-3' onClick={handleFlip}>
                                    제3자 제공내역
                                </div>
                                :
                                <div className='bg-gray-200 text-white font-bold btn btn-xs col-start-9 col-end-13 m-1 mx-3'>
                                    제3자 제공내역
                                </div>
}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="flip-card-back grid grid-cols-12 grid-rows-12" onClick={handleFlip}>
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
          <div className="consent-row">
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

export default FlipCard;
