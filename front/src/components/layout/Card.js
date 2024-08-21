import React from 'react';
import './Card.css';

/**
 * Represents a Card component.
 *
 * @component
 * @param {Object} props - The properties of the Card component.
 * @param {string} props.title - The title of the card.
 * @param {number} props.count - The count value displayed on the card.
 * @param {string} props.details - The details text displayed on the card.
 * @param {string} props.button1 - The label for button1.
 * @param {string} props.button2 - The label for button2.
 * @param {function} props.onClick - The click event handler for the button.
 * @returns {JSX.Element} The Card component.
 */
const Card = ({ title, count, details, button1, button2, onClick}) => {
    return (
        <button onClick={onClick}>
            <div className="card p-4 rounded-lg mb-4 border border-red-200 mx-4 items-center flex-col">
                <h3 className="my-4 text-xl font-bold text-black">
                    {title} 
                </h3>

                {/* <div className='flex lg:flex-row md:flex-row sm:flex-row space-around w-full object-cover'> */}
                    {/* <div className="border-2 border-black text-4xl h-24 w-24 font-bold bg-white flex flex-row items-center rounded-xl justify-content px-4 sm:py-8 text-black sm:mx-1 sm:rounded-xl md:rounded-2xl lg:rounded-3xl" > */}
                        {/* <div className='border-4 border-black flex items-center justify-content'> */}
                        {/* <div>{count}</div>
                        <div className="text-sm text-black justify-end">
                            {details}
                        </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </button>
    );
};

export default Card;
