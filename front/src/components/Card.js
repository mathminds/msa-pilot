import React from 'react';
import './Card.css';

const Card = ({ title, count, details, button1, button2 }) => {
    return (
        <div className="card p-4 rounded-lg mb-4 border-2 mx-4">
            <h3 className="my-4 text-xl font-bold">
                {title}
            </h3>
            <div className="flex md:grid-row sm:grid-col">
                <div className="text-3xl font-bold bg-white flex flex-row items-center justify-center px-4">
                    {count}
                    <div className="text-sm"> {details}</div>
                </div>
                <div className="ml-4">
                    <a href={button1}>
                        <button className="text-xs px-2 py-1 border-none bg-orange-300 text-black cursor-pointer rounded mx-2">
                            목록보기
                        </button>
                    </a>
                    <a href={button2}>
                        <button className="mx-2 mt-4 text-xs px-2 py-1 border-none bg-blue-300 text-grey-600 cursor-pointer rounded">
                            탐험하기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
