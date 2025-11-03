// Carousel.jsx
import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ pictures }) => {
  const pics = pictures || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pics.length;

  if (total === 0) return null;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      <img
        src={pics[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {total > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
          <div className="carousel-counter">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
