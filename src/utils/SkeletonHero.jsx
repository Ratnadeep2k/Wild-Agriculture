// src/components/SkeletonHero.js
import React from 'react';

const SkeletonHero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen bg-gray-300 animate-pulse">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10 px-4 text-center">
        <div className="w-3/4 h-12 md:h-16 bg-gray-400 rounded mb-4"></div>
        <div className="w-1/2 h-6 md:h-8 bg-gray-400 rounded mb-8"></div>
        <div className="w-32 h-10 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonHero;
