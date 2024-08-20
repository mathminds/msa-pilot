import React from "react";



const FlipCard = ({ FrontCard, BackCard }) => {
    



    return (
        <div className="w-[390px] h-[190px] grid place-content-center grid-cols-12 grid-rows-12">
        <div className='cursor-pointer group rounded-3xl perspective-1000 col-start-1 col-end-13 row-start-1 row-end-13'>
            <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500  grid grid-cols-12 grid-rows-12'>
                <div className="absolute w-full h-full bg-black bg-opacity-95 rounded-3xl overflow-hidden backface-hidden col-start-1 col-end-13 text-white text-center" >
                {FrontCard}
                </div>
                <div className='absolute w-full h-full bg-white bg-opacity-80 rounded-3xl overflow-hidden backface-hidden col-start-1 col-end-13 text-black text-center rotate-y-180 '>
                {BackCard}
                </div>
                
            </div>
        </div>
    </div>
    );
    }

export default FlipCard;