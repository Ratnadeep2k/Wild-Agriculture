// src/pages/Services.js
import React, { useState, useEffect } from 'react';
import InteractiveCarousel from './Carousel';
import ServiceCard from '../components/ServiceCard';
import { FaFish, FaSeedling, FaWater } from 'react-icons/fa';
import { GiChicken  } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr"; 
const services = [
  { title: 'Fisheries', description: 'We partner with responsible fishing communities who practice sustainable harvesting methods, ensuring the long-term health of the ecosystems that provide our delicious seafood', icon: <FaFish size={40} /> },
  { title: 'Broilar Farm', description: 'We help broiler farms raise healthy, high-quality chickens with our specialized feed and supplements.', icon: <GiChicken size={40} /> },
  { title: 'Seed Supply', description: 'Grow Your Dreams: The Widest Selection of Top-Tier Seeds', icon: <FaSeedling size={40} /> },
  { title: 'WorkShop', description: 'Seed Your Future: Practical Skills for Sustainable Farming', icon: <GrWorkshop size={40} /> },
];

const Services = () => {
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <InteractiveCarousel />
      <div className="flex flex-wrap justify-center mt-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default Services;
