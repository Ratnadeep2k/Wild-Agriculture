// src/components/Hero.js
import React, { useState, useEffect } from 'react';

function Hero() {
  const [isClick, setIsClick] = useState('Explore');
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://res.cloudinary.com/drfaap8zj/image/upload/v1716616910/samples/WildAgriculture/pdv1pjkszizuevecszlu.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Welcome to Wild Agriculture
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mt-4">
          Sustainable farming for a better future.
        </p>
        <button
          onClick={() => setIsClick('Thank you for Visiting us')}
          className="mt-8 px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300 ease-in-out"
        >
          {isClick}
        </button>
      </div>
    </div>
  );
}

export default Hero;

//https://source.unsplash.com/1600x900/?agriculture