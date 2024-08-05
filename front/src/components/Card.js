import React from 'react';
import './Card.css';

const Card = ({ title, count, details, button1, button2 }) => {
    return (
        <div className="card p-4 rounded-lg mb-4 border-2 mx-4 items-center">
            <h3 className="my-4 text-xl font-bold">
                {title}
            </h3>
            <div className="flex sm:flex-col md:flex-row md:space-around">
                <div className="text-3xl font-bold bg-white flex flex-row items-end justify-center px-4 sm:py-8 sm:text-5xl mb-4">
                    {count}
                    <div className="text-sm"> 
                        {details}</div>
                </div>
                
                <div className="md:ml-4 sm:ml-0 sm:mx-2 flex sm:flex-row md:flex-col md:justify-center" >
                    <a href={button1}>
                        <button className="text-xs md:px-2 md:py-1 border-none bg-orange-300 text-black cursor-pointer rounded sm:mx-0 md:mx-2">
                            목록보기
                        </button>
                    </a>
                    <a href={button2}>
                        <button className="sm:mx-2 md:mx-2 md:mt-4 text-xs md:px-2 md:py-1 border-none bg-blue-300 text-black cursor-pointer rounded">
                            탐험하기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
