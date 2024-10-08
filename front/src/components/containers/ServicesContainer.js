import React from 'react';
// import ServiceDetailsCard from '../serviceComponents/ServiceDetailsCard';
// import ServiceCard from '../serviceComponents/ServiceCard';
// import ThirdServiceCard from '../serviceComponents/ThirdServiceCard';
import RejectedServiceCard from '../serviceComponents/RejectedServiceCard';
// import FlipCard from '../reusables/FlipCard';
import FinalServiceCard from '../serviceComponents/FinalServiceCard';
// import FlipCard from './reusables/FlipCard';
// import ServiceFrontCard from '../serviceComponents/ServiceFrontCard';
// import ServiceBackCard from '../serviceComponents/ServiceBackCard';
// import exampleServices from '../../data/exampleServices';
import Modal from '../modals/Modal';
import ServiceDetailsCard from '../serviceComponents/ServiceDetailsCard';
import ServiceRejectCard from '../serviceComponents/ServiceRejectCard';
import { getActiveServices, getNewServices, getRevokedDataProviders } from '../../data/externalDataServices';

// const services = exampleServices;
// console.log(services);
// console.log(typeof(services));

const newServices = await getNewServices();
const lastMonthServices = await getActiveServices();
const rejectedDataProviders = await getRevokedDataProviders();
// console.log(newServices);
console.log(lastMonthServices);

const ServicesContainer = () => {
    const serviceData = null;
    // console.log(newServices);
    // const lastMonthServices = getActiveServices();
    // const rejectedServices = getRevokedDataProviders();

    const [isModalOpen, setIsModalOpen] = React.useState(null);
    const [currentServiceData, setCurrentServiceData] = React.useState(null);
    const [isModalReject, setIsModalReject] = React.useState(null);


    
    const handleOpenModal = (serviceData) => {
        setIsModalReject(false);
        setIsModalOpen(true);
        
        setCurrentServiceData(serviceData);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsModalReject(false);
        setCurrentServiceData(null);
    };
    

    const handleOpenRejectModal = (serviceData) => {
        setIsModalOpen(false);
        setIsModalReject(true);
        setCurrentServiceData(serviceData);
    };

    const handleCloseRejectModal = () => {
        setIsModalOpen(false);
        setIsModalReject(false);
        setCurrentServiceData(null);
    };
    

    return (

        
        <>
        {isModalOpen && (
            <div className='w-full h-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50'>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <ServiceDetailsCard serviceData={currentServiceData} handleOpenRejectModal={handleOpenRejectModal} />
                </Modal>
            </div>
        )}

        {isModalReject && (
            <div className='w-full h-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50'>
                <Modal isOpen={isModalReject} onClose={handleCloseRejectModal}>
                    <ServiceRejectCard serviceData={currentServiceData} />
                </Modal>
            </div>
        )}
        <div className='z-10'>
            

        <div className="bg-[#48ABFB] px-2 sm:px-4 w-fill h-fill py-2 sm:py-4">
            <p>
                <span className='text-xl sm:text-4xl font-bold ml-2 sm:ml-4 text-white '>내가 최근 가입한 서비스</span>
                <br className='block sm:hidden' />
                <span className='text-base sm:text-2xl mx-2 sm:mx-4 text-white '>2024년 7월 23일 ~ 현재</span>
            </p>
            <div id='carousel-1' className="details carousel carousel-center rounded-box max-w-100 space-x-2 sm:space-x-4 p-2 sm:p-4">
            
            {newServices.map((service) => (



          <div id={`new-service${service.id}`} className="carousel-item">
            <FinalServiceCard serviceData={service} handleOpenModal={handleOpenModal} handleOpenRejectModal={handleOpenRejectModal} />
                                
            </div>

            


        ))
        }



        </div>
        
                {/* Navigation Buttons */}
                <div className="hidden sm:flex justify-center gap-4 mt-0">
                    {/* Left Arrow */}
                    <button 
                        className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-1"
                        onClick={() => document.getElementById('carousel-1').scrollBy({ left: -200, behavior: 'smooth' })}
                    >
                        &#x276E;
                    </button>

                    {/* Right Arrow */}
                    <button 
                        className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-1"
                        onClick={() => document.getElementById('carousel-1').scrollBy({ left: 200, behavior: 'smooth' })}
                    >
                        &#x276F;
                    </button>
                </div>

        </div>

        
        
        
        <div className="bg-[#8AD0FB] px-2 sm:px-4 w-fill h-fill py-2 sm:py-4">
            <p>
                <span className='text-xl sm:text-4xl font-bold ml-2 sm:ml-4 text-[#085195] '>내가 이용중인 서비스</span>
                <br className='block sm:hidden' />
                <span className='text-base sm:text-2xl mx-2 sm:mx-4text-[#085195]'> 2023년 6월 1일 ~ 현재</span>
            </p>

            <div id='carousel-2' className="details carousel carousel-center rounded-box max-w-100 space-x-2 sm:space-x-4 p-2 sm:p-4">
            
            {lastMonthServices.map((service) => (
            

          <div id={`service${service.id}`} className="carousel-item h-[159]">
            
            <FinalServiceCard serviceData={service} handleOpenModal={handleOpenModal}  handleOpenRejectModal={handleOpenRejectModal} />


            </div>
          
        ))}
        </div>
        
        <div className="hidden sm:flex justify-center gap-4 mt-0">
                    {/* Left Arrow */}
                    <button 
                        className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-1"
                        onClick={() => document.getElementById('carousel-2').scrollBy({ left: -200, behavior: 'smooth' })}
                    >
                        &#x276E;
                    </button>

                    {/* Right Arrow */}
                    <button 
                        className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-1"
                        onClick={() => document.getElementById('carousel-2').scrollBy({ left: 200, behavior: 'smooth' })}
                    >
                        &#x276F;
                    </button>
                </div>
 

        </div>
        
        <div className="bg-[#D6F1FF] px-2 sm:px-4 w-fill h-fill py-2 sm:py-4">
            <p>
                <span className='text-xl sm:text-4xl font-bold ml-2 sm:ml-4 text-[#085195] '>내가 철회한 서비스</span>
                <br className='block sm:hidden' />
                <span className='text-base sm:text-2xl mx-2 sm:mx-4text-[#085195]'> 2024년 2월 25일 ~ 현재</span>
            </p>
            <div id='carousel-3' className="details carousel carousel-center rounded-box max-w-100 space-x-2 sm:space-x-4 p-2 sm:p-4">
            
            {rejectedDataProviders.map((item, index) => {
                return (


                    <div id={`rejected-service${index}`} className="carousel-item">
                        <div className="indicator z-0">

                            {/* <span className="indicator-item indicator-top indicator-center badge bg-green-500 text-white h-8 w-24 z-40"> */}
                            {/* < aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-white" /> */}
                            {/* 철회 성공 */}
                            {/* </span> */}

                            
                            <RejectedServiceCard id={index} rejectedData={item} handleOpenModal={handleOpenModal}  />

                        </div>
                    </div>

                );
            })}
        </div>
        
        {/* <div className="hidden sm:flex w-full justify-center gap-1 py-2"></div> */}
        <div className="hidden sm:flex justify-center gap-4 mt-0">
                    {/* Left Arrow */}
                    <button 
                        className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-1"
                        onClick={() => document.getElementById('carousel-3').scrollBy({ left: -200, behavior: 'smooth' })}
                    >
                        &#x276E;
                    </button>

                    {/* Right Arrow */}
                    <button 
                        className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-1"
                        onClick={() => document.getElementById('carousel-3').scrollBy({ left: 200, behavior: 'smooth' })}
                    >
                        &#x276F;
                    </button>
                </div>
 

        </div>
</div>
</>


);
}

export default ServicesContainer;



        // <div className="bg-[#D0F7D8] px-4 w-fill h-fill">
        //     <h2 className='text-xl font-bold text-black pt-4'> 어떤 서비스에 이용되었나요? </h2>
        //     <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

        //     <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
        //     services.forEach((service) => (

        //            
        //         ))
        //     </div>


        //         // <div id="item1" className='carousel-item'>


        //         //     <ServiceCard
                //         title="[쿠팡] 상품추천 서비스"
                //         count="정보수신자: 쿠팡"
                //         details="활용 데이터: 구매내역, 위치정보 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item2" className='carousel-item'>


                //     <ServiceCard
                //         title="[국민카드] 소비패턴 개선 서비스"
                //         count="정보수신자: 국민카드"
                //         details="활용 데이터: 거래내역, 연령 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item3" className='carousel-item'>

                //     <ServiceCard
                //         title="[뱅크샐러드] 본인 신용 정보 통합조회 서비스"
                //         count="정보수신자: 뱅크샐러드"
                //         details="활용 데이터: 신용등급/점수, 대출정보 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item4" className='carousel-item'>

                //     <ServiceCard
                //         title="[엘지유플러스] 요금제 추천 서비스"
                //         count="정보수신자: 엘지유플러스"
                //         details="활용 데이터: 통신요금내역, 요금제정보, 데이터사용량 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item5" className='carousel-item'>

                //     <ServiceCard
                //         title="[네이버쇼핑] 멤버십 및 포인트 관리 서비스"
                //         count="정보수신자: 네이버쇼핑"
                //         details="활용 데이터: 멤버십정보, 포인트사용내역 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item6" className='carousel-item'>

                //     <ServiceCard
                //         title="[동양생명] 보험 상품 추천 서비스"
                //         count="정보수신자: 동양생명"
                //         details="활용 데이터: 현재상품내역, 소득정보, 가족구성정보 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item7" className='carousel-item'>
                //     <ServiceCard
                //         title="[티몬] 할인 쿠폰 제공 서비스"
                //         count="정보수신자: 티몬"
                //         details="활용 데이터: 구매내역, 관심사 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item8" className='carousel-item'>
                //     <ServiceCard
                //         title="[카카오뱅크] 예금 상품 추천 서비스"
                //         count="정보수신자: 카카오뱅크"
                //         details="활용 데이터: 예금내역, 소득정보 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item9" className='carousel-item'>
                //     <ServiceCard
                //         title="[우리은행] 대출 상품 추천 서비스"
                //         count="정보수신자: 우리은행"
                //         details="활용 데이터: 대출내역, 신용등급 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item10" className='carousel-item'>
                //     <ServiceCard
                //         title="[마켓컬리] 장보기 팁 제공 서비스"
                //         count="정보수신자: 마켓컬리"
                //         details="활용 데이터: 구매내역, 식단정보 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>

                // <div id="item11" className='carousel-item'>
                //     <ServiceCard
                //         title="[우아한형제들] 배달 음식 추천 서비스"
                //         count="정보수신자: 우아한형제들"
                //         details="활용 데이터: 주문내역, 식문화정보 등"
                //         button1="https://github.com/mathminds-sd/public-assets/blob/main/serv3.jpg?raw=true"
                //         button2="https://github.com/mathminds-sd/public-assets/blob/main/data2.jpg?raw=true"
                //     />
                // </div>
                

            

        //         <div id="numbering" className="flex w-full justify-center gap-1 py-2">

        //             map.forEach((service) => (
        //                 <a href={`#service-${service.id}`} className="btn btn-xs">{service.id}</a>
        //             ))
                    
        //     </div>
        // </div>