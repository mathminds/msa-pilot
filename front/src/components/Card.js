import React from 'react';
import './Card.css';

const Card = ({ title, count, details, button1, button2 }) => {
    return (
        <div className="card p-4 rounded-lg mb-4 border border-red-00 mx-4 items-center flex-col">
            <h3 className="my-4 text-xl font-bold text-black">
                {title} 
            </h3>
            <div className='flex lg:flex-row md:flex-row sm:flex-row space-around h-24 w-72 w-full object-cover'>


                <div className="border-none border-black text-4xl h-24 w-24 font-bold bg-white flex flex-row items-center rounded-xl justify-center px-4 sm:py-8 sm:text-5xl  text-black sm:mx-1 sm:rounded-xl md:rounded-2xl lg:rounded-3xl" >
                    <div>{count}</div>
                    <div className="text-sm text-black">
                        {details}
                    </div>
                </div>

                <div className= "ml-4 mt-1 lg:flex-col md:flex-row sm:flex-col md:ml-0 sm:ml-0 sm:mx-2 flex-col" >
                    <a href={button1}>
                        <button className="border border-black bg-[#F3CECE] text-xs md:px-2 md:py-1 text-black cursor-pointer rounded sm:mx-0 md:mx-2 sm:text-2xs">
                            목록보기
                        </button>
                    </a>
                    <a href={button2}>
                        <button className="border border-black bg-[#D7E9FF] md:mx-2 md:mt-4 mt-4 text-xs md:px-2 md:py-1 bg-blue-300 text-black cursor-pointer rounded sm:text-2xs sm:mx-0 sm:mt-1 sm:w-100%">
                            탐험하기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
