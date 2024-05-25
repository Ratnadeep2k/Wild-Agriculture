// src/components/InteractiveCarousel.js
import React, { useState } from 'react';

const images = [
  'https://res.cloudinary.com/drfaap8zj/image/upload/v1716616910/samples/WildAgriculture/tdbupuhkz5wsgh4dsj26.jpg',
  'https://res.cloudinary.com/drfaap8zj/image/upload/v1716620305/samples/WildAgriculture/vq4dijuadr3sthwdewau.jpg',
  'https://res.cloudinary.com/drfaap8zj/image/upload/v1716616908/samples/WildAgriculture/x93i6tl8mhztqunmhz2v.jpg',
  'https://res.cloudinary.com/drfaap8zj/image/upload/v1716619969/samples/WildAgriculture/ssu8rbdlv8gtpoxt2rid.jpg',
  'https://res.cloudinary.com/drfaap8zj/image/upload/v1716616909/samples/WildAgriculture/tgkc8dpbck020sxfupi1.jpg',
  'https://res.cloudinary.com/drfaap8zj/image/upload/v1716616909/samples/WildAgriculture/lounh3plpuazlwjblixt.jpg',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-current={current === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
