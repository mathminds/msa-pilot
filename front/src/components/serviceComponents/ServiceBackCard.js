import React from "react";

const ServiceBackCard = ({ title, serviceProvider, details, thirdPartySharedData, thirdPartyRecipients }) => {
    <div>
        {thirdPartySharedData.length === 0 && (
            <div className='row-start-1 row-end-11 border-b-2 border-gray-300'>
                <img src='/b.png' className='w-full h-full overflow-visible' />
            </div>
        )}
        {thirdPartySharedData.length > 0 && (
            <div className='row-start-1 row-end-5 border-b-2 border-gray-300'>
                <div className='p-2'>
                    <h2 className="text-xs font-bold">제3자 제공 데이터</h2>
                    <div className="justify-start gap-1 grid grid-flow-col">
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
            <div className='row-start-5 row-end-11 border-b-2 border-gray-300'>
                <div className='p-2'>
                    <h2 className="text-xs font-bold">제3자 제공 대상 기관</h2>
                    <div className="justify-start gap-1 grid grid-flow-col grid-rows-2">
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
        <div className="bg-transparent p-1 row-start-11 row-end-13 flex justify-center">
            <div className='btn btn-xs bg-red-500 text-white'>서비스 철회하기</div>
        </div>
    </div>
}

export default ServiceBackCard;

