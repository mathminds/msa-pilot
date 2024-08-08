import React from 'react';
import './Card.css';

const Card = ({ title, count, details, button1, button2 }) => {
    return (
        <div className="card p-4 rounded-lg mb-4 border-2 mx-4 items-center flex-col">
            <h3 className="my-4 lg:text-xl font-bold text-black md:text-lg sm:text-xs">
                {title} 
            </h3>
            <div className='flex lg:flex-row md:flex-col sm:flex-col space-around h-24  w-full object-cover'>


                <div className="text-4xl font-bold bg-white flex flex-row items-center rounded-xl justify-center px-4 sm:py-8 sm:text-5xl mb-4 text-black sm:mx-1 sm:rounded-xl md:rounded-2xl lg:rounded-3xl" >
                    {count}
                    <div className="text-sm text-black">
                        {details}
                    </div>
                </div>

                <div className="lg:flex-col md:flex-row sm:flex-col md:ml-0 sm:ml-0 sm:mx-2  pl-8" >
                    <a href={button1}>
                        <button className="text-xs md:px-2 md:py-1 border-none bg-orange-300 text-black cursor-pointer rounded sm:mx-0 md:mx-2 sm:text-2xs">
                            목록보기
                        </button>
                    </a>
                    <a href={button2}>
                        <button className="md:mx-2 md:mt-4 mt-4 text-xs md:px-2 md:py-1 border-none bg-blue-300 text-black cursor-pointer rounded sm:text-2xs sm:mx-0 sm:mt-1 sm:w-100%">
                            탐험하기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
