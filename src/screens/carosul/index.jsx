'use client'

// components/Carousel.js
import { useState } from 'react';

const imagesPerPage = 4; // Change this number to adjust the number of images shown per slide

const Carousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (n) => {
    let newIndex = slideIndex + n * imagesPerPage;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = Math.max(0, images.length - imagesPerPage);
    }
    setSlideIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="carousel-container h-48">
        <div
          className="carousel-viewport bg-gray-200" // Set background color here
          style={{
            transform: `translateX(-${slideIndex * (100 / images.length)}%)`,
          }}
        >
          <div className="carousel flex transition-transform duration-300">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-1/4 h-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      <button
        className="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={() => changeSlide(-1)}
        disabled={slideIndex === 0} // Disable the button when on the first slide
      >
        &#10094;
      </button>
      <button
        className="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={() => changeSlide(1)}
        disabled={slideIndex >= images.length - imagesPerPage} // Disable the button when on the last slide
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
