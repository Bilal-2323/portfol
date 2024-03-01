import { Highlight, Heading } from '@chakra-ui/react'
import codegif from '../images/codemale3.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link as Links } from 'react-scroll';
import './styles.css';




export const Hero = ()=>
{
  
    
    return(
        <div className="h-screen pt-16" id='hero'>
    <div className='flex flex-col md:flex-row h-5/6  '>
      <div className="md:w-1/2 p-4 flex justify-center items-center">
      <div>
    
      <Heading lineHeight='tall' color={'white'}>
  <Highlight
    query='Bilal'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100', }}
  >
  Hi, I'm Bilal.
  </Highlight>
</Heading>
        <p className="mt-2 text-white text-2xl text-left pl-5 nunito font-medium">A passionate Front-end React Developer based in Hyderabad, India, and an aspiring DevOps engineer.</p></div>
      </div>
      <div className="md:w-1/2  flex justify-center items-center  ">
        <img src={codegif} alt="Placeholder" className="w-96 animate-bounce animate-bounce-slow " />
      </div>
    </div>
    <div className=' flex justify-center items-center h-1/6  ' id='Skills'>
    <Links to="aboutme" spy={true} smooth={true} offset={50} duration={500}>
    <FontAwesomeIcon icon={faAnglesDown} bounce size="2xl" style={{color: "#ffffff",}} />
    </Links>
  
    </div>
    </div>
    );
}

export default Hero


