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
                <img src='/b.png' className='w-full h-full overflow-clip ' />
            </div>
            {/* <div className="col-start-9 col-end-13 row-start-3 row-end-10 bg-red-500">
                SERVICE CATEGORY
            </div> */}


            <div className="col-start-1 col-end-13 row-start-12 row-end-13 bg-purple-500">
                <div className="grid grid-cols-12">
                    <div className="bg-green-500 text-white font-bold btn  row-start-12 row-end-13 col-start-1 col-end-5 m-1 mx-3">
                        서비스 상세보기
                    </div>
                    <div className="bg-red-500 text-white font-bold btn  row-start-12 row-end-13 col-start-5 col-end-9 m-1 mx-3">
                        서비스 철회하기
                    </div>
                    <div className="bg-blue-500 text-white font-bold btn   row-start-12 row-end-13 col-start-9 col-end-13 m-1 mx-3">
                        데이터 흐름보기
                    </div>
                </div>
            </div>
        
        </div>
        )
    }

    console.log(serviceData.title);
    
    

    return (
        <div className="w-full h-full bg-blue-200 grid grid-cols-12 grid-rows-11 p-2 rounded-lg z-50">

            <div className="col-start-1 col-end-13 row-start-1 row-end-2 bg-slate-300">
                {serviceData.title}
            </div>
            <div className="col-start-1 col-end-13 row-start-2 row-end-3 bg-slate-400 text-black">
                {serviceData.serviceProvider}
            </div>
            <div className="col-start-1 col-end-4 row-start-3 row-end-11 bg-slate-500 z-50">
                서비스 상세 설명
            </div>
            <div className="col-start-4 col-end-13 row-start-3 row-end-11 bg-orange-500 z-50">
                <img src='/b.png' className=' h-full overflow-clip z-50' />
            </div>
            {/* <div className="col-start-9 col-end-13 row-start-3 row-end-10 bg-red-500">
                SERVICE CATEGORY
            </div> */}


            <div className="col-start-1 col-end-13 row-start-11 row-end-13 bg-purple-500">
                
                <div className="grid grid-cols-12 grid-rows-3">
                    <div className="bg-green-500 text-white font-bold btn h-full row-start-2 row-end-3 col-start-1 col-end-5 m-1 mx-3 text-2xl">
                        서비스 상세보기
                    </div>
                    <div className="bg-red-500 text-white font-bold btn h-full row-start-2 row-end-3 col-start-5 col-end-9 m-1 mx-3 text-2xl">
                        서비스 철회하기
                    </div>
                    <div className="bg-blue-500 text-white font-bold btn h-full row-start-2 row-end-3 col-start-9 col-end-13 m-1 mx-3 text-2xl">
                        데이터 흐름보기
                    </div>
                </div>
            </div>
        
        </div>
    );
}
