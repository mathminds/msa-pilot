import React, { useState, useEffect } from 'react';
import './Carousel.css';
import DataCard from './DataCard';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const carouselElement = document.querySelector('.data-carousel');
      if (carouselElement) {
        setContainerWidth(carouselElement.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the container width

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    const itemWidthWithMargin = 400 + 20; // Item width (400px) + margin (10px on each side)
    const translateX = containerWidth/2 - currentIndex * itemWidthWithMargin+itemWidthWithMargin;
    return translateX;
  };

  return (
    <div className="data-carousel">
      <button onClick={prevSlide} className="data-carousel-button left">‹</button>
      <div
        className="data-carousel-container"
        style={{
          transform: `translateX(${getTranslateValue()}px)`,
          width: `${items.length * (400 + 20)}px`, // Dynamically set the container width
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
