import React, { useState } from 'react';
import Modal from './Modal';
import ServiceDetailsCard from '../ServiceDetailsCard';
import CardFullWidthTabs from '../CardFullWidthTabs';

const ParentComponent = ({message, component}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex justify-center items-center h-fit w-fit">
            <button
                onClick={handleOpenModal}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-left text-xl">
                {message}
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
                <div className='w-full h-full bg-white border border-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    {component}
                </div>
            </Modal>
        </div>
    );
};

export default ParentComponent;
