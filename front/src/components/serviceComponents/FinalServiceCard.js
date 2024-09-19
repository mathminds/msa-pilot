import React, { useState } from 'react';
import '../reusables/FlipCard.css'; // Import the CSS file for styles
// import ConsentCard from './ConsentCard';

import Modal from '../modals/Modal';
import ServiceDetailsCard from '../serviceComponents/ServiceDetailsCard';
import ServiceRejectCard from '../serviceComponents/ServiceRejectCard';
import { getServiceThirdPartyDetails } from '../../data/externalDataServices';

const FinalServiceCard = (props) => {
    const {serviceData, handleOpenModal, handleOpenRejectModal}=props

    const handleModal=()=>{
        handleOpenModal(serviceData)
    };

    const handleRejectModal=()=>{
        handleOpenRejectModal(serviceData)
    };

    const { id, service_code, title, serviceProvider, data_providers, last_consent_date, third_party_sharing, share_requests } = serviceData;
    const [isFlipped, setIsFlipped] = useState(false);


    console.log(serviceData);
    
    const [thirdPartyRecipients, setThirdPartyRecipients]= useState([]);
    const handleFlip =  () => {
        getServiceThirdPartyDetails(service_code).then(setThirdPartyRecipients)
        // setThirdPartyRecipients(tpr);
        setIsFlipped(!isFlipped);
    };

    

    const dataProvidersList = (data_providers.length > 0 ? data_providers.map((provider) => provider.provider).join(', ') : '정보전송자: 신한은행, 우리은행, 현대카드 등');
    const dataProvidedList= [... new Set(data_providers.flatMap(provider => provider.providedData))].join(', ');
    // console.log(dataProvidedList);

    return (

        <>
        

        <div className="flip-card-container ">
            <div className={`flip-card h-[9.375rem] w-[24.75rem] md:h-[12.5rem] md:w-[28rem] ${isFlipped ? 'flipped' : ''} `}>
                <div className="flip-card-front md:flip-card-front-md grid grid-cols-12 grid-rows-12 ">
                    {/* <FrontCard serviceData={serviceData} /> */}
                    <div className='pt-2 md:pt-4  border-red-500  bg-white px-4 text-black w-full h-full grid grid-cols-12 grid-rows-12 rounded-xl gap-3'>
                        <h3 className='font-bold text-lg md:text-2xl row-start-1 row-end-3 col-start-1 col-end-13'>{title}</h3>
                        <ul className='list-disc list-inside row-start-3 row-end-9 col-start-1 col-end-13'>
                        <li className='text-sm md:text-xl pt-1 row-start-3 row-end-5 col-start-1 col-end-13 overflow-hidden whitespace-nowrap overflow-ellipsis'>[정보수신자] {serviceProvider}</li>
                        <li className='text-sm md:text-xl pt-1 row-start-5 row-end-7 col-start-1 col-end-13 overflow-hidden whitespace-nowrap overflow-ellipsis'>[활용데이터] {dataProvidedList}</li>
                        <li className='text-sm md:text-xl pt-1 row-start-7 row-end-9 col-start-1 col-end-13 overflow-hidden whitespace-nowrap overflow-ellipsis'>[정보전송자] {dataProvidersList}</li>
                        </ul>
                        <div className='py-2  border-white  col-start-1 col-end-13 row-start-9 row-end-12 flex justify-between gap-2  '>
                            {/* <div className='grid grid-cols-12 grid-rows-2'> */}
                                <button className='bg-blue-500 text-white font-bold  w-full btn-xs md:btn-sm   rounded' onClick={handleModal}>
                                    서비스 상세보기
                                </button>
                                <button className='bg-red-500 text-white font-bold   w-full btn-xs md:btn-sm  rounded' onClick={handleRejectModal}>
                                    서비스 철회하기
                                </button>
                                {third_party_sharing ? 
                                <button className='bg-yellow-500 text-white font-bold  w-full btn-xs md:btn-sm   rounded' onClick={handleFlip}>
                                    제3자 제공내역
                                </button>
                                :
                                <button className='bg-gray-200 text-white font-bold   w-full btn-xs md:btn-sm   rounded'>
                                    제3자 제공내역
                                </button>
}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="flip-card-back md:flip-card-back-md grid grid-cols-12 grid-rows-12 text-black" onClick={handleFlip}>
                <div className="consent-card h-[150px] w-[300px] md:h-[200px] md:w-[400px] col-start-2 col-end-12">
      <div className="text-lg md:text-2xl consent-header row-start-1 row-end-2 pb-1 md:pb-2">
        [동의 일자] 2024년 8월 13일 18:32
      </div>
      <div className="consent-table">
        <div className="consent-row">
          <div className="text-sm md:text-lg consent-cell header-cell">제3자 제공기관</div>
          <div className="text-sm md:text-lg consent-cell header-cell">제공 데이터</div>
        </div>
        {thirdPartyRecipients.length>0 ?
        thirdPartyRecipients.map((item) => (
          <div className="consent-row">
            <div className="text-sm md:text-lg consent-cell">{item.recipient}</div>
            <div className="text-sm md:text-lg consent-cell">{item.sharedData.join(', ')}</div>
          </div>    
        ))
        :
        <div className="consent-row">
          <div className="text-sm md:text-lg consent-cell header-cell">제3자 제공기관</div>
          <div className="text-sm md:text-lg consent-cell header-cell">제공 데이터</div>
        </div>
}
        
      </div>
    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FinalServiceCard;
