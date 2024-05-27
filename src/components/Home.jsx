import React, { useState } from 'react';

function Hero() {
  const [buttonText, setButtonText] = useState('Explore');

  const handleClick = () => {
    setButtonText('Thank you for Visiting us');
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage:  "url('https://scontent.fgau4-1.fna.fbcdn.net/v/t39.30808-6/271655235_4519768318121463_1902094322495835663_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gp-T-vqSwY0Q7kNvgF88Ygm&_nc_ht=scontent.fgau4-1.fna&cb_e2o_trans=t&oh=00_AYAwk-duyIlcQKuQCtF_LcVZlAkR8aLOgo6wsPbW-fKbDg&oe=665AB1D4')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Welcome to 
        Wild Agriculture
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
