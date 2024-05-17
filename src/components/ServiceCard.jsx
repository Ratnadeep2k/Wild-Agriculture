// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-4 bg-white">
      <div className="text-center mb-4">
        {icon}
      </div>
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
