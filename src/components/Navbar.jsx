import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className=" border-gray-200 dark:bg-green-900 opacity-90 shadow-lg ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            <img src="https://www.svgrepo.com/show/503806/earth.svg" className="h-12" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic hover:not-italic">Wild Agriculture</span>
          </a>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen ? "true" : "false"}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="/" className="block py-2 px-3 md:py-0 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 md:py-0 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="/services" className="block py-2 px-3 md:py-0 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="/blog" className="block py-2 px-3 md:py-0 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 md:py-0 md:px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
