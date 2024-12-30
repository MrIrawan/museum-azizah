import React, { useState, useRef } from "react";

const FavoriteCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const imageRef = useRef(null);
  const descriptionRef = useRef(null);

  const handlePrev = () => {
    triggerTransition(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      )
    );
  };

  const handleNext = () => {
    triggerTransition(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      )
    );
  };

  const triggerTransition = (callback) => {
    setIsTransitioning(true);

    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.opacity = "0";
    }

    setTimeout(() => {
      callback();
      if (imageRef.current) {
        imageRef.current.style.opacity = "1";
      }
      if (descriptionRef.current) {
        descriptionRef.current.style.opacity = "1";
      }
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      {/* Wrapper Carousel */}
      <div className="flex items-center space-x-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 focus:outline-none"
        >
          &#8249;
        </button>

        {/* Carousel Content */}
        <div className="w-[300px] h-[400px] flex flex-col items-center justify-between bg-white rounded-lg shadow-lg p-4 text-center relative overflow-hidden">
          {/* Judul */}
          <h2
            ref={descriptionRef}
            className="text-lg font-bold text-gray-800 transition-opacity duration-200 ease-in-out"
          >
            {items[currentIndex].title}
          </h2>

          {/* Gambar */}
          <img
            ref={imageRef}
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="w-full h-60 object-cover rounded-md transition-opacity duration-200 ease-in-out"
          />

          {/* Deskripsi */}
          <p
            ref={descriptionRef}
            className="text-gray-600 mt-2 transition-opacity duration-200 ease-in-out"
          >
            {items[currentIndex].description}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 focus:outline-none"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default FavoriteCarousel;
