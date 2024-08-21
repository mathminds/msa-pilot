import React from "react";

const ServiceFrontCard = ({ title, serviceProvider, details, thirdPartySharedData, thirdPartyRecipients }) => {


    
    return (
        <div>
            <div className="h-full border border-red-200 rounded-md bg-white  px-4 text-black col-start-1 col-end-13 row-start-1 row-end-11">
                <h3 className="mt-4 font-bold text-2xl">
                    {title}
                </h3>
                <div className="text-sm">정보수신자: {serviceProvider}</div>
                <div className="text-sm">활용 데이터: {details.join(', ')}</div>
            </div>
            <div className="bg-blue-200 row-start-10 row-end-13 col-start-1 col-end-13  px-4 pt-2 ">
                {thirdPartySharedData.length > 0 && (
                    <div >
                        <div className="text-xs font-bold text-red-500">제3자 제공 데이터: <span className='text-red-500 text-xs font-normal'>{thirdPartySharedData.join(', ')}</span></div>
                    </div>
                )}
                {thirdPartyRecipients.length > 0 && (
                    <div>


                        <div className="text-xs font-bold text-red-500">제3자 제공 대상 기관: <span className='text-red-500 text-xs font-normal'>{thirdPartyRecipients.join(', ')}</span></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceFrontCard;
