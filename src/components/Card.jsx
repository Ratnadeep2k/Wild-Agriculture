import React, { useState } from 'react';

function Card({ title, image, description }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-green-900 opacity-90 dark:border-gray-700 mt-3 ml-3 mr-3">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt={title} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          {isVisible && <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>}
          {isVisible ? (
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setIsVisible(false)}
            >
              Hide
            </button>
          ) : (
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setIsVisible(true)}
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
