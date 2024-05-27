import React, { useState } from 'react';

function Hero() {
  const [buttonText, setButtonText] = useState('Explore');

  const handleClick = () => {
    setButtonText('Thank you for Visiting us');
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage:  "url('https://images.unsplash.com/photo-1716404084927-176ee37a9dbe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          WELCOME TO WILD AGRICULTURE
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mt-4">
          Sustainable farming for a better future.
        </p>
        <button
          onClick={handleClick}
          className="mt-8 px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300 ease-in-out"
          aria-label="Explore or Thank you message button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Hero;
