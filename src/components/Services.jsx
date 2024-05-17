// src/pages/Services.js
import React, { useState, useEffect } from 'react';
import InteractiveCarousel from './Carousel';
import ServiceCard from '../components/ServiceCard';
import SkeletonServices from '../utils/SkeletonServices';
import { FaTractor, FaSeedling, FaWater } from 'react-icons/fa';

const services = [
  { title: 'Farm Equipment Rental', description: 'We offer a wide range of farm equipment for rent.', icon: <FaTractor size={40} /> },
  { title: 'Seed Supply', description: 'High quality seeds to ensure the best crop yield.', icon: <FaSeedling size={40} /> },
  { title: 'Irrigation Solutions', description: 'Advanced irrigation solutions for water management.', icon: <FaWater size={40} /> },
];

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonServices />;
  }

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
