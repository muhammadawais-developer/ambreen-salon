import React from 'react'
import '../../App.css';
import { GrilDot, SideCrul  } from '../../assets/index'
import {motion} from 'framer-motion'

let easing = [0.6,-0.05,0.01,0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};
const item = {
  hidden:{opacity:0,y:0},
  show:{
      opacity:1,
      y:0,
      transition:{
          ease:'easeInOut',
          duration:0.5
      }
  }
};
const fadeInUp = {
  initial: {
    y:-60,
    opacity:0,
    transition:{
      duration:0.8,
      ease:easing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.8,
      delay:0.7,
      ease:easing
    }
  }
};

const Styledetails = () => {
  return (
    <motion.div variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}} >
    <div className='details lg:mt-2' >
    <div className='relative'>
    <img className='absolute lg:w-[3rem] lg:right-5' src={GrilDot} alt='sidedots' />
    <img className='absolute lg:w-[5rem] lg:right-0 lg:top-[10rem]' src={SideCrul} alt='sidedots' />
    </div>
        <div className='mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] 2xl:px-[15rem] lg:pt-[2rem] relative'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
                <div>
                <motion.div initial={{y:-60, opacity:0}} transition={{duration:0.8,ease:easing}} animate={{ y:0,opacity:1}} >
                <div className='bg-[#FDEDFB] lg:w-[25rem] lg:h-[13rem] lg:px-5 overflow-hidden'>
                <h1 className='text-[#FB5EFE] lg:text-xl font-semibold lg:px-3 lg:py-3'>Style 1</h1>
                <div className='bg-white lg:px-4 text-justify lg:py-5 lg:w-[23rem]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                </div>
                </motion.div>
                </div>
                <div>
                <div className='bg-[#FDEDFB] lg:w-[25rem] lg:h-[13rem] lg:px-5 overflow-hidden'>
                <h1 className='text-[#FB5EFE] lg:text-xl font-semibold lg:px-3 lg:py-3'>Style 2</h1>
                <div className='bg-white lg:px-4 text-justify lg:py-5 lg:w-[23rem]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                </div>
                </div>
                <div>
                <div className='bg-[#FDEDFB] lg:w-[25rem] lg:h-[13rem] lg:px-5 overflow-hidden'>
                <h1 className='text-[#FB5EFE] lg:text-xl font-semibold lg:px-3 lg:py-3'>Style 3</h1>
                <div className='bg-white lg:px-4 text-justify lg:py-5 lg:w-[23rem]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                </div>
                </div>
                <div>
                <div className='bg-[#FDEDFB] lg:w-[25rem] lg:h-[13rem] lg:px-5 overflow-hidden'>
                <h1 className='text-[#FB5EFE] lg:text-xl font-semibold lg:px-3 lg:py-3'>Style 4</h1>
                <div className='bg-white lg:px-4 text-justify lg:py-5 lg:w-[23rem]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                </div>
                </div>
                <div>
                <div className='bg-[#FDEDFB] lg:w-[25rem] lg:h-[13rem] lg:px-5 overflow-hidden'>
                <h1 className='text-[#FB5EFE] lg:text-xl font-semibold lg:px-3 lg:py-3'>Style 5</h1>
                <div className='bg-white lg:px-4 text-justify lg:py-5 lg:w-[23rem]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                </div>
                </div>
                <div>
                <div className='bg-[#FDEDFB] lg:w-[25rem] lg:h-[13rem] lg:px-5 overflow-hidden'>
                <h1 className='text-[#FB5EFE] lg:text-xl font-semibold lg:px-3 lg:py-3'>Style 6</h1>
                <div className='bg-white lg:px-4 text-justify lg:py-5 lg:w-[23rem]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                </div>
                </div>
            </div>  
        </div>
        <div className='relative' >
            <img className='absolute lg:w-[3rem] lg:right-[6rem] lg:bottom-[-1rem]' src={GrilDot} alt='sidedots' />
     </div>
    </div>
    </motion.div>
  )
}

export default Styledetails