// src/components/SkeletonServiceCard.js
import React from 'react';

const SkeletonServiceCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-4 bg-gray-200 animate-pulse">
      <div className="h-12 bg-gray-300 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonServiceCard;
