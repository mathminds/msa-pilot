import React from "react";

export default function ServiceDetailsCard(props) {

    const { serviceData } = props;

    if (!serviceData) {
        return (
            <div className="w-fit h-fit bg-white grid grid-cols-12 grid-rows-12 z-50">

            <div className="col-start-1 col-end-13 row-start-1 row-end-2 bg-slate-300 z-50">
                TITLE
            </div>
            <div className="col-start-1 col-end-13 row-start-2 row-end-3 bg-slate-400 text-black z-50">
                PROVIDER
            </div>
            <div className="col-start-1 col-end-5 row-start-3 row-end-12 bg-slate-500 z-50">
                서비스 상세 설명
            </div>
            <div className="col-start-5 col-end-13 row-start-3 row-end-12 bg-orange-500">
                <img src='/b.png' className='w-full h-full overflow-clip ' alt="no service data" />
            </div>
            {/* <div className="col-start-9 col-end-13 row-start-3 row-end-10 bg-red-500">
                SERVICE CATEGORY
            </div> */}


            <div className="col-start-1 col-end-13 row-start-11 row-end-13 bg-purple-500">
                <div className="grid grid-cols-12">
                    <div className="bg-green-500 text-white font-bold btn btn-xs  row-start-12 row-end-13 col-start-1 col-end-5 m-1 mx-3">
                        서비스 상세보기
                    </div>
                    <div className="bg-red-500 text-white font-bold btn btn-xs row-start-11 row-end-13 col-start-5 col-end-9 m-1 mx-3">
                        서비스 철회하기
                    </div>
                    <div className="bg-blue-500 text-white font-bold btn  btn-xs row-start-12 row-end-13 col-start-9 col-end-13 m-1 mx-3">
                        데이터 흐름보기
                    </div>
                </div>
            </div>
        
        </div>
        )
    }

    console.log(serviceData.title);
    
    

    return (
        <div className="bb w-full h-full gap-1 bg-slate-100 grid grid-cols-12 grid-rows-11 p-2 rounded-lg z-50" loading="lazy" >

            <div className="col-start-1 col-end-13 row-start-1 row-end-2 bg-slate-100 text-5xl font-bold flex justify-center items-center">
                {serviceData.title}
            </div>
            <div className="bb col-start-1 col-end-4 row-start-2 row-end-3 bg-slate-100 text-black text-4xl font-bold flex justify-center items-center">
            
                <p className="" > <span className="font-bold text-green-800 text-2xl">서비스 제공자: </span>
                <div className=" flex justify-center items-center text-4xl ">
                 {serviceData.serviceProvider}
                 </div>
                 </p>

            
            </div>
            <div className="bb col-start-4 col-end-13 row-start-2 row-end-3 bg-slate-100 text-black text-2xl font-bold flex justify-start items-center text-center">
            <p className="bb h-full flex-auto pt-2 bg-blue-50" > 
                <span className="font-bold  text-blue-800">[통신] 정보전송자: </span> 
                <div className=" flex justify-center items-center">
                
                        SK 텔레콤
                </div>
                </p>
                <p className="bb h-full flex-auto pt-2  bg-green-50" > 
                <span className="font-bold text-green-800">[금융] 정보전송자: </span> 
                <div className="flex justify-center items-center">
                
                        우리은행, 하나은행 
                </div>
                </p>
                <p className="bb h-full flex-auto pt-2 " >
                <span className="font-bold  text-orange-800">[의료] 정보전송자: </span> 
                <div className="flex justify-center items-center">
                
                        종세병원, 아산병원
                </div>
                </p>
            </div>
            <div className="bb col-start-1 col-end-4 row-start-3 row-end-11 bg-slate-100 z-50 text-lg text-black  text-justify">
                <img src="https://pimg.mk.co.kr/meet/neds/2019/03/image_readmed_2019_188607_15537527733687890.jpg" className="h-[30%] w-full object-cover mb-4" alt={`${serviceData.title}`} loading="lazy" />
                <span className="px-2 text-2xl font-bold text-green-800">어떤 가치를 제공하나요? </span>
                <p className="text-justify p-2 "> 
            20대 초 男 주점·女 인터넷쇼핑 ‘맥주와 기저귀’ 효과가 하나의 사례로 의미가 있지만 항상 통용되는 것은 아니다. 50대 이상 연령층이 주 고객인 매장에 맥주와 기저귀를 함께 배치했다면 효과가 있었을까? 심지어 30대 위주인 매장 중에서도 여성이 주 고객층인 매장이었다면, 맥주와 기저귀는 오히려 반발을 불러일으킬 수도 있다.
</p>
<span className="px-2  text-2xl font-bold text-green-800">내 데이터를 어떻게 활용하나요? </span>
<p className="text-justify p-2">
‘딩크족’ ‘싱커족’과 같이 무자녀 부부 가구가 급격하게 늘어나는 현상은 국내 소비 패러다임을 바꾸고 있음이 분명하다. 이들은 외식이나 유통, 프랜차이즈 등 대부분의 기업에서 생각하는 향후 몇 년간의 주 타깃 고객이기도 하다.
</p>
            </div>
            <div className="bb col-start-4 col-end-13 row-start-3 row-end-11 bg-orange-500 z-50">
                <img src='/f.png' className=' h-full overflow-clip z-50' alt={`${serviceData.title}`} loading="lazy"  />
            </div>
            {/* <div className="col-start-9 col-end-13 row-start-3 row-end-10 bg-red-500">
                SERVICE CATEGORY
            </div> */}


            <div className="bb col-start-1 col-end-13 row-start-11 row-end-13 bg-slate-100">
                
                <div className="grid grid-cols-12 grid-rows-3">
                    {/* <div className="bg-green-500 text-white font-bold btn row-start-1 row-end-2 col-start-1 col-end-5 m-1 mx-3 text-2xl">
                        서비스 상세보기
                    </div> */}
                    <div className="bg-blue-500 text-white h-16 font-bold btn row-start-1 row-end-2 col-start-1 col-end-7 m-1 mx-3 text-2xl">
                        데이터 흐름보기
                    </div>
                    <div className="bg-red-500 text-white h-16 font-bold btn row-start-1 row-end-2 col-start-7 col-end-13 m-1 mx-3 text-2xl">
                        서비스 철회하기
                    </div>
                </div>
            </div>
        
        </div>
    );
}
