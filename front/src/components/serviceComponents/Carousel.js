import React, { useState } from 'react';
import './Carousel.css';
import DataCard from './DataCard';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getTranslateValue = () => {
    const itemWidthWithMargin = 150 + 20; // Item width (150px) + margin (10px on each side)
    const visibleItems = 3; // Number of items visible at a time

    // Calculate the width of the container showing the visible items
    // const containerWidth = visibleItems * itemWidthWithMargin;
    const containerWidth = 600;

    // Calculate how much we need to translate the container to center the active item
    const translateX = 0
      -(currentIndex * 1.5*itemWidthWithMargin) + 1.5*itemWidthWithMargin;
      //  + (containerWidth / 2 - itemWidthWithMargin / 2);

    return translateX;
  };

  return (
    <div className="data-carousel">
      <button onClick={prevSlide} className="data-carousel-button left">‹</button>
      <div
        className="data-carousel-container"
        style={{
          transform: `translateX(${getTranslateValue()}px)`,
          width: `${items.length * (150 + 20)}px`, // Dynamically set the container width
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`data-carousel-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <DataCard title={item.data_provider} count={item.data_provided.length} details={item.data_provided} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="data-carousel-button right">›</button>
    </div>
  );
};

export default Carousel;
