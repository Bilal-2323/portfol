import React from 'react'
import data from '../Constants/data'
import { useState } from 'react';


const Accordion = ({ items, background }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) => {
      const isOpen = prevIndexes.includes(index);
      if (isOpen) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="w-full" id='Projects'>
      {data.map((item, index) => (
        <div
          key={index}
          className={`border-gray-300 border-b ${background} transition-colors duration-300 w-screen `}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full focus:outline-none p-4"
          >
            <span className='text-2xl'>{item.Project}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform ${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndexes.includes(index) && (
            <div className="p-4 text-gray-500">
              <div>
                {item.responsibility.map(item => (<h1 className='nunito m-1 text-xl text-left'>{item}</h1>))}
                <div className='flex'>
                  {item.Skills.map(item => (<p className='border-1 p-1 border-gray-900 m-2
       bg-gray-700 border-solid rounded-lg'>{item}</p>))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Experience = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <Accordion  background="bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Experience;


