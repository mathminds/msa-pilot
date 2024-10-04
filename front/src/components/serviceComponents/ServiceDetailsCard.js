import React from "react";
import Carousel from "./Carousel";

export default function ServiceDetailsCard(props) {

    const { serviceData, handleOpenRejectModal } = props;

    console.log(serviceData);

    const handleReject = () => {
        handleOpenRejectModal(serviceData);
    };

    if (serviceData) {
        return (
            <div className="w-full h-full bg-white grid grid-cols-12 grid-rows-12 z-50">

            <div className="col-start-1 col-end-13 row-start-1 row-end-2 bg-slate-300 z-50 text-4xl">
                {serviceData.title}
            </div>
            <div className="col-start-1 col-end-13 row-start-2 row-end-3 bg-slate-400 text-black z-50 text-4xl">
                {serviceData.serviceProvider}
            </div>
            <div className="col-start-1 col-end-13 row-start-3 row-end-13 bg-slate-500 z-50">
                <Carousel items={serviceData.share_requests} />
            {/* <div id='carousel-1' className="details carousel carousel-center rounded-box max-w-100 space-x-2 sm:space-x-4 p-2 sm:p-4">
            
                {serviceData.share_requests.map((item) => (
                    <div className="flex flex-col items-center justify-center bg-slate-200 rounded-box p-2 sm:p-4 bb h-[600px] w-[600px]">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-black text-center font-bold text-4xl">
                                {item.data_provider}
                            </div>
                            <ul className="">
                                {item.data_provided.map((dataItem) => (
                                    <li className="text-black text-center">
                                        {dataItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div> */}
            </div>
            {/* <div className="col-start-5 col-end-13 row-start-3 row-end-12 bg-orange-500">
                <img src='/sb.png' className='w-full  overflow-cover' alt="no service data" />
            </div> */}
            {/* <div className="col-start-9 col-end-13 row-start-3 row-end-10 bg-red-500">
                SERVICE CATEGORY
            </div> */}

{/* 
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
            </div> */}
        
        </div>
        )
    }

    console.log(serviceData.title);
    
    const screenHeight=window.screen.height;
    const screenWidth=window.screen.width;
    
    const isWide = screenWidth > screenHeight;

    const wideComp=(
        <div className="w-full h-full gap-1 bg-slate-200 p-2 rounded-lg z-50 flex flex-col justify-center" loading="lazy" >
            <div className=" h-fit bg-orange-500 z-50">
                <img src='/sb.png' className=' w-full h-fit overflow-cover z-50' alt={`${serviceData.title}`} loading="lazy"  />
            </div>        
        </div>
    );
    const longComp=(
        <div className="w-full h-full gap-1 bg-slate-100 p-2 rounded-lg z-50 flex justify-center" loading="lazy" >
            <div className=" w-fit bg-orange-500 z-50">
                <img src='/sb.png' className=' h-full w-fit overflow-cover z-50' alt={`${serviceData.title}`} loading="lazy"  />
            </div>        
        </div>
    );

    const result = isWide ? longComp : wideComp;

    return (
        result
    );
}
