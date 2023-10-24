import React, { useState } from 'react';
import './Carousel.css';

const getCircularItem = (array, index) => {
  const length = array.length;
  if (length === 0) return null;
  return array[(index % length + length) % length];
};

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [prevButtonClicked, setPrevButtonClicked] = useState(false);

  const nextItem = () => {
    setPrevButtonClicked(true);
    const timer = setTimeout(() => {
      setCurrentItem(currentItem - 1);
      setPrevButtonClicked(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  const prevItem = () => {
    const timer = setTimeout(() => setCurrentItem(currentItem + 1), 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="carousel-container">
      <div className="swiper-wrapper">
        {Array.from({ length: 5 }).map((_, index) => {
          const position = index - 2; // Positions -2, -1, 0, 1, 2
          const itemIndex = currentItem + position;
          return (
            <div key={index} className={`swiper-slide ${position === 0 ? '' : (prevButtonClicked ? 'slide-in-right' : '')}`}>
              <img src={getCircularItem(items, itemIndex)} alt={`Item ${itemIndex}`} />
            </div>
          );
        })}
      </div>
      <button className="swiper-button-prev" onClick={prevItem}>
        Précédent
      </button>
      <button className="swiper-button-next" onClick={nextItem}>
        Suivant
      </button>
    </div>
  );
};

export default Carousel;
