import React, { useState } from 'react';
import FlipCard from './FlipCard';

const DropdownComponent = ({message, component}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown w-fit text-xl font-bold border border-green-500">
            <button className={`dropdown-toggle ${isOpen ? "hidden" : ""}`} onClick={toggleDropdown}>
                {message}
            </button>
            {isOpen && (
                <div className="dropdown-menu w-screen border border-blue-500" onClick={toggleDropdown}>
                    {component}
                </div>
            )}
        </div>
    );
};

export default DropdownComponent;