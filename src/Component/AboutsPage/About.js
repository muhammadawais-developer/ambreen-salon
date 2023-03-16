import React from 'react';
import '../../App.css';
import { LOGO } from '../../assets'
import {BsFacebook,BsYoutube} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';

const About = () => {
  return (
    <div>
    <div className='About-page'>
      <h1 className='text-4xl text-center lg:pt-[14rem] font-bold'>About Us</h1>
      <p className='container mx-auto text-center lg:px-[18rem] lg:pt-[2rem] font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <h2 className='container mx-auto text-2xl text-center lg:px-[18rem] lg:pt-[2rem] font-semibold' >Thank You</h2>
      <div className='lg:flex gap-3 items-center justify-center pt-[1.5rem]' >
      <BsFacebook className='lg:text-[1.8rem]'/>
      <BsYoutube className='lg:text-[1.8rem]'/>
      <FaInstagramSquare className='lg:text-[1.8rem]'/>
      <AiFillTwitterCircle className='lg:text-[1.8rem]'/>
      </div>
      </div>
    </div>
  )
}

export default About