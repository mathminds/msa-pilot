import React, { useState } from 'react';
import './Modal.css'; // Assuming you use a CSS file to style the modal

const RejectModal = ({ service_code, serviceProvider, items }) => {
  // State to track the expanded item
  const [expandedItem, setExpandedItem] = useState(null);

  // Handler to expand the modal when the button is clicked
  const handleExpand = (item) => {
    setExpandedItem(item);
  };

  return (
    <>
    <div className="modal-header">
    <h2>Service: {service_code}</h2>
    <h3>Provider: {serviceProvider}</h3>
</div>
    <div className={`modal ${expandedItem ? 'modal-expanded' : ''}`}>
       
          {items.map((item, index) => (
            <div className='bg-red-500 w-20 h-40'>
              <p>{item.data_provider_code}</p>
              <button onClick={() => handleExpand(item)}>Details</button>
            </div>
          ))}
       

        {/* Render extra details when an item is clicked */}
        {expandedItem && (
          <div className="modal-details">
            <h3>Details for {expandedItem.data_provider_code}</h3>
            <p>{expandedItem}</p>
            {/* Button to close the expanded view */}
            <button onClick={() => setExpandedItem(null)}>Close</button>
          </div>
        )}
      </div>
    
    </>
  );
};


export default RejectModal;
