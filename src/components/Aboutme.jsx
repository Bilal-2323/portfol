import imgam from '../images/maleam.png'
import { Highlight, Heading } from '@chakra-ui/react'
import codegif from '../images/codemale3.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link as Links } from 'react-scroll';
const Aboutme = ()=>
{
    return(
    <div className="h-screen p-4" id='aboutme'>
    <div className='flex flex-col md:flex-row h-5/6  '>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
      <div>
      <h2 className="text-4xl font-bold text-white text-left pl-5 "></h2>
      <h1 className='text-white text-4xl nunito font-bold p-4'>Know Who I'M</h1>
      <h2 className='text-white text-2xl nunito font-semibold text-left'>I am Bilal Mohammed Jameel from Hyderabad, Telangana, India.
       I am About to complete my degree in Computer Apllications from KL University Hyderabad with 9.68 CGPA.</h2></div>
      </div>
      <div className="md:w-1/2  flex justify-center items-center  ">
        <img src={imgam} alt="Placeholder" className="w-96 " />
      </div>
    </div>
    <div className=' flex justify-center items-center h-1/6  '>
    
  
    </div>
    </div>
    );
}

export default Aboutme