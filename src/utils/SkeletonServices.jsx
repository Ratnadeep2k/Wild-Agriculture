// src/pages/SkeletonServices.js
import React from 'react';
import SkeletonCarousel from './SkeletonCarousel';
import SkeletonServiceCard from './SkeletonServiceCard';

const SkeletonServices = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="h-8 bg-gray-300 rounded mb-8 mx-auto w-1/3 animate-pulse"></div>
      <SkeletonCarousel />
      <div className="flex flex-wrap justify-center mt-8">
        {[...Array(3)].map((_, index) => (
          <SkeletonServiceCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonServices;
