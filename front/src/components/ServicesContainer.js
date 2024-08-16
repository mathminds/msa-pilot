import React from 'react';
import ServiceCard from './ServiceCard';



const services = [
    {
        id: 1,
        title: '[쿠팡] 상품추천 서비스',
        count: '정보수신자: 쿠팡',
        details: '활용 데이터: 구매내역, 위치정보 등'
    },
    {
        id: 2,
        title: '[국민카드] 소비패턴 개선 서비스',
        count: '정보수신자: 국민카드',
        details: '활용 데이터: 거래내역, 연령 등'
    },
    {
        id: 3,
        title: '[뱅크샐러드] 본인 신용 정보 통합조회 서비스',
        count: '정보수신자: 뱅크샐러드',
        details: '활용 데이터: 신용등급/점수, 대출정보 등'
    },
    {
        id: 4,
        title: '[엘지유플러스] 요금제 추천 서비스',
        count: '정보수신자: 엘지유플러스',
        details: '활용 데이터: 통신요금내역, 요금제정보, 데이터사용량 등'
    },
    {
        id: 5,
        title: '[네이버쇼핑] 멤버십 및 포인트 관리 서비스',
        count: '정보수신자: 네이버쇼핑',
        details: '활용 데이터: 멤버십정보, 포인트사용내역 등'
    },
    {
        id: 6,
        title: '[동양생명] 보험 상품 추천 서비스',
        count: '정보수신자: 동양생명',
        details: '활용 데이터: 현재상품내역, 소득정보, 가족구성정보 등'
    },
    {
        id: 7,
        title: '[티몬] 할인 쿠폰 제공 서비스',
        count: '정보수신자: 티몬',
        details: '활용 데이터: 구매내역, 관심사 등'
    },
    {
        id: 8,
        title: '[카카오뱅크] 예금 상품 추천 서비스',
        count: '정보수신자: 카카오뱅크',
        details: '활용 데이터: 예금내역, 소득정보 등'
    },
    {
        id: 9,
        title: '[우리은행] 대출 상품 추천 서비스',
        count: '정보수신자: 우리은행',
        details: '활용 데이터: 대출내역, 신용등급 등'
    },
    {
        id: 10,
        title: '[마켓컬리] 장보기 팁 제공 서비스',
        count: '정보수신자: 마켓컬리',
        details: '활용 데이터: 구매내역, 식단정보 등'
    },
    {
        id: 11,
        title: '[우아한형제들] 배달 음식 추천 서비스',
        count: '정보수신자: 우아한형제들',
        details: '활용 데이터: 주문내역, 식문화정보 등'
    },
    {
        id: 12,
        title: '[토스] 결제 서비스',
        count: '정보수신자: 토스',
        details: '활용 데이터: 결제내역, 소비패턴 등'
    },
    {
        id: 13,
        title: '[카카오페이] 포인트 적립 서비스',
        count: '정보수신자: 카카오페이',
        details: '활용 데이터: 결제내역, 포인트사용 등'
    },
    {
        id: 14,
        title: '[배민라이더스] 배달 주문 서비스',
        count: '정보수신자: 배민라이더스',
        details: '활용 데이터: 주문내역, 배달위치 등'
    },
    {
        id: 15,
        title: '[쿠팡이츠] 음식 배달 서비스',
        count: '정보수신자: 쿠팡이츠',
        details: '활용 데이터: 주문내역, 음식선호도 등'
    },
    {
        id: 16,
        title: '[네이버페이] 결제 서비스',
        count: '정보수신자: 네이버페이',
        details: '활용 데이터: 결제내역, 소비패턴 등'
    },
    {
        id: 17,
        title: '[카카오맵] 위치 기반 서비스',
        count: '정보수신자: 카카오맵',
        details: '활용 데이터: 위치정보, 검색기록 등'
    },
    {
        id: 18,
        title: '[우체국] 우편물 배송 서비스',
        count: '정보수신자: 우체국',
        details: '활용 데이터: 배송정보, 수령인 정보 등'
    },
    {
        id: 19,
        title: '[다나와] 제품 추천 서비스',
        count: '정보수신자: 다나와',
        details: '활용 데이터: 검색기록, 관심상품 등'
    },
    {
        id: 20,
        title: '[스타벅스] 음료 추천 서비스',
        count: '정보수신자: 스타벅스',
        details: '활용 데이터: 주문내역, 음료선호도 등'
    }
];

const dataProviders = [

{
    id: 3,
    title: 'KT',
    sector: '통신',
    details: '인터넷, 휴대폰 서비스 제공',
    linked_service_titles: ['[엘지유플러스] 요금제 추천 서비스', '[네이버쇼핑] 멤버십 및 포인트 관리 서비스']
},
{
    id: 4,
    title: '삼성병원',
    sector: '의료',
    details: '진료정보, 예약 서비스',
    linked_service_titles: ['[동양생명] 보험 상품 추천 서비스']
},
{
    id: 5,
    title: '서울시',
    sector: '공공',
    details: '도시정보, 공공서비스 제공',
    linked_service_titles: ['[티몬] 할인 쿠폰 제공 서비스']
},
{
    id: 6,
    title: '롯데마트',
    sector: '유통',
    details: '마트 상품 정보, 할인 서비스',
    linked_service_titles: ['[마켓컬리] 장보기 팁 제공 서비스']
},
{
    id: 7,
    title: '신한은행',
    sector: '금융',
    details: '은행 서비스, 금융상품 제공',
    linked_service_titles: ['[신항은행] 신용정보조회, 대출정보제공 서비스']
},
{
    id: 8,
    title: 'KT',
    sector: '통신',
    details: '인터넷, 휴대폰 서비스 제공',
    linked_service_titles: ['[엘지유플러스] 요금제 추천 서비스', '[네이버쇼핑] 멤버십 및 포인트 관리 서비스']
},
{
    id: 9,
    title: '삼성병원',
    sector: '의료',
    details: '진료정보, 예약 서비스',
    linked_service_titles: ['[동양생명] 보험 상품 추천 서비스']
},
{
    id: 10,
    title: '서울시',
    sector: '공공',
    details: '도시정보, 공공서비스 제공',
    linked_service_titles: ['[티몬] 할인 쿠폰 제공 서비스']
},
{
    id: 11,
    title: '롯데마트',
    sector: '유통',
    details: '마트 상품 정보, 할인 서비스',
    linked_service_titles: ['[마켓컬리] 장보기 팁 제공 서비스']
},
{
    id: 12,
    title: '신한은행',
    sector: '금융',
    details: '은행 서비스, 금융상품 제공',
    linked_service_titles: ['[신항은행] 신용정보조회, 대출정보제공 서비스']
},
{
    id: 13,
    title: 'KT',
    sector: '통신',
    details: '인터넷, 휴대폰 서비스 제공',
    linked_service_titles: ['[엘지유플러스] 요금제 추천 서비스', '[네이버쇼핑] 멤버십 및 포인트 관리 서비스']
},
{
    id: 14,
    title: '삼성병원',
    sector: '의료',
    details: '진료정보, 예약 서비스',
    linked_service_titles: ['[동양생명] 보험 상품 추천 서비스']
},
{
    id: 15,
    title: '서울시',
    sector: '공공',
    details: '도시정보, 공공서비스 제공',
    linked_service_titles: ['[티몬] 할인 쿠폰 제공 서비스']
},
{
    id: 16,
    title: '롯데마트',
    sector: '유통',
    details: '마트 상품 정보, 할인 서비스',
    linked_service_titles: ['[마켓컬리] 장보기 팁 제공 서비스']
},
{
    id: 17,
    title: '신한은행',
    sector: '금융',
    details: '은행 서비스, 금융상품 제공',
    linked_service_titles: ['[신항은행] 신용정보조회, 대출정보제공 서비스']
},
{
    id: 18,
    title: 'KT',
    sector: '통신',
    details: '인터넷, 휴대폰 서비스 제공',
    linked_service_titles: ['[엘지유플러스] 요금제 추천 서비스', '[네이버쇼핑] 멤버십 및 포인트 관리 서비스']
},
{
    id: 19,
    title: '삼성병원',
    sector: '의료',
    details: '진료정보, 예약 서비스',
    linked_service_titles: ['[동양생명] 보험 상품 추천 서비스']
},
{
    id: 20,
    title: '서울시',
    sector: '공공',
    details: '도시정보, 공공서비스 제공',
    linked_service_titles: ['[티몬] 할인 쿠폰 제공 서비스']
}
];

const ServicesContainer = () => {

    const NewServicesContainer =() => {
        <div className="bg-[#D0F7D8] px-4 w-fill h-fill">
            <h2 className='text-xl font-bold text-black pt-4'> 이번 달에 새로 이용하기 시작한 서비스 </h2>
            <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

            <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
            
            {services.map((service) => (
            

          <div id={`new-service${service.id}`} className="carousel-item">
            
            <ServiceCard
                                title={service.title}
                                count={service.count}
                                details={service.details}
                            />
            </div>
          
        ))}
        </div>
        
        <div className="flex w-full justify-center gap-1 py-2">
            
            {services.map((service) => (
                 <a href={`#new-service${service.id}`} className="btn btn-xs">{service.id}</a>            
            ))}
                    
         </div>


        </div>
    }


    const ContinuingServicesContainer =() => {
        <div className="bg-[#34643e] px-4 w-fill h-fill">
            <h2 className='text-xl font-bold text-black pt-4'> 지난달에 이어 이번달에도 이용한 서비스 </h2>
            <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

            <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
            
            {services.map((service) => (
            

          <div id={`service${service.id}`} className="carousel-item">
            
            <ServiceCard
                                title={service.title}
                                count={service.count}
                                details={service.details}
                            />
            </div>
          
        ))}
        </div>
        
        <div className="flex w-full justify-center gap-1 py-2">
            
            {services.map((service) => (
                 <a href={`#service${service.id}`} className="btn btn-xs">{service.id}</a>            
            ))}
                    
         </div>


        </div>
    }


    const RejectedServicesContainer =() => {
        <div className="bg-[#606e63] px-4 w-fill h-fill">
            <h2 className='text-xl font-bold text-black pt-4'> 이번 달 철회시킨 서비스가 있나요? </h2>
            <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

            <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
            
            {services.map((service) => (
            

          <div id={`rejected-service${service.id}`} className="carousel-item">
            
            <ServiceCard
                                title={service.title}
                                count={service.count}
                                details={service.details}
                            />
            </div>
          
        ))}
        </div>
        
        <div className="flex w-full justify-center gap-1 py-2">
            
            {services.map((service) => (
                 <a href={`#rejected-service${service.id}`} className="btn btn-xs">{service.id}</a>            
            ))}
                    
         </div>


        </div>
        
    }

    return (

        <div>


        <div className="bg-[#78ed91]  px-4 w-fill h-fill">
            <h2 className='text-xl font-bold text-black pt-4'> 이번 달에 새로 이용하기 시작한 서비스 </h2>
            <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

            <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
            
            {services.map((service) => (
            

          <div id={`new-service${service.id}`} className="carousel-item">
            
            <ServiceCard
                                title={service.title}
                                count={service.count}
                                details={service.details}
                            />
            </div>
          
        ))}
        </div>
        
        <div className="flex w-full justify-center gap-1 py-2">
            
            {services.map((service) => (
                 <a href={`#new-service${service.id}`} className="btn btn-xs">{service.id}</a>            
            ))}
                    
         </div>


        </div>

        
        
        
        <div className="bg-[#D0F7D8] px-4 w-fill h-fill">
            <h2 className='text-xl font-bold text-black pt-4'> 지난달에 이어 이번달에도 이용한 서비스 </h2>
            <h3 className='text-md text-gray-500'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

            <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
            
            {services.map((service) => (
            

          <div id={`service${service.id}`} className="carousel-item">
            
            <ServiceCard
                                title={service.title}
                                count={service.count}
                                details={service.details}
                            />
            </div>
          
        ))}
        </div>
        
        <div className="flex w-full justify-center gap-1 py-2">
            
            {services.map((service) => (
                 <a href={`#service${service.id}`} className="btn btn-xs">{service.id}</a>            
            ))}
                    
         </div>


        </div>
        
        <div className="bg-[#91a595] px-4 w-fill h-fill">
            <h2 className='text-xl font-bold text-white pt-4'> 이번 달 철회시킨 서비스가 있나요? </h2>
            <h3 className='text-md text-white'> 내 개인정보를 제공받고 분석 및 활용 중인 서비스 </h3>

            <div className="details carousel carousel-centerrounded-box max-w-100 space-x-4 p-4">
            
            {services.map((service) => (
            

          <div id={`rejected-service${service.id}`} className="carousel-item">
            
            <ServiceCard
                                title={service.title}
                                count={service.count}
                                details={service.details}
                            />
            </div>
          
        ))}
        </div>
        
        <div className="flex w-full justify-center gap-1 py-2">
            
            {services.map((service) => (
                 <a href={`#rejected-service${service.id}`} className="btn btn-xs">{service.id}</a>            
            ))}
                    
         </div>


        </div>
</div>
     


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