import React from 'react'
import { LOGO } from '../../assets'
import {BsFacebook,BsYoutube} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
    <div className='bg-[#F5C7EE80] lg:mt-3 lg:pd-[4rem]'>
    <div className='mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] 2xl:px-[15rem] lg:pt-[2rem] '>
    <div className='grid grid-cols-1 lg:grid-cols-3'>
    <div>
    <h2 className='text-xl font-semibold lg:py-2'>HELP & INFORMATION</h2>
    <p className='text-md lg:py-2' >ORDER & RETURN POLICY</p>
    <p className='text-md lg:py-2' >FAQS</p>
    <img className='lg:w-[15rem] lg:pl-[-5rem] relative' src={LOGO} alt="footer-logo" />
    </div>
    <div>
    <h2 className='text-xl font-semibold lg:py-2'>MORE FROM AMBREEN </h2>
    <ul>
    <li className='lg:py-3 cursor-pointer font-semibold'>Home</li>
    <li className='lg:py-3 cursor-pointer font-semibold'>Packages</li>
    <li className='lg:py-3 cursor-pointer font-semibold'>Visit Us</li>
    <li className='lg:py-3 cursor-pointer font-semibold'>About</li>
    </ul>
    </div>
    <div>
    <h2 className='text-xl font-semibold lg:py-2'>MORE FROM AMBREEN </h2>
    <p className='text-md lg:py-2' >Whatsapp: <span className='lg:px-3'>+1 (123) 444 5555</span></p>
    <p className='text-md lg:py-2' >Email: <span className='lg:px-3'> email@example.com</span></p>
    <hr/>
    <div className='lg:flex gap-3' >
    <BsFacebook className='lg:text-[1.8rem]'/>
    <BsYoutube className='lg:text-[1.8rem]'/>
    <FaInstagramSquare className='lg:text-[1.8rem]'/>
    <AiFillTwitterCircle className='lg:text-[1.8rem]'/>
    </div>
    </div>
    </div>
    </div>
    <br/>
    </div>
    <div className='bg-[#D9D9D9] py-4'>
    <p className='text-center'>Copyright © 2023 Ambreen Salon - All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer