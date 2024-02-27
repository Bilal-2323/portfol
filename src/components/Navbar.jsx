import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Links } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const redirect = () =>
{
  window.open('https://drive.google.com/file/d/1UEXj9YxxaezS_TJO5BpHDPaIkZitgW0j/view?usp=sharing', '_blank');
};

  return (
    <nav className="bg-white bg-opacity-5 rounded-2xl fixed z-10 w-full top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 text-white font-bold">BILAL MOHAMMED JAMEEL</div>
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <Links to="hero" spy={true} smooth={true} offset={50} duration={500}><p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">Home</p></Links>
                <Links to="aboutme" spy={true} smooth={true} offset={50} duration={500}><p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">About Me</p></Links>
                <Links to="Skills" spy={true} smooth={true} offset={50} duration={500}><p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">Skills</p></Links>
                <Links to="#" ><p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300" onClick={redirect}>Resume</p></Links>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
          <Links to="hero" spy={true} smooth={true} offset={50} duration={500}><p className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</p></Links>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


