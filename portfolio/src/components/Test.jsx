import React, { useState } from "react";
import "../css/Test.css"; // Create this file for the styles

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "Slide 1 Content",
    "Slide 2 Content",
    "Slide 3 Content",
    "Slide 4 Content",
  ];

  const handleSlide = (direction) => {
    const totalSlides = slides.length;
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={() => handleSlide(-1)}>
        &#9664;
      </button>

      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      
      <button className="nav-button right" onClick={() => handleSlide(1)}>
        &#9654;
      </button>
    </div>
  );
};

export default Slider;
