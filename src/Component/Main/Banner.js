import React from 'react'
import { LOGO, Polygona, Polygonb, DotsHorizontal, Girl, GrilDot, Cruls, upto } from '../../assets'
import {motion} from 'framer-motion';

let easing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition: {
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
};

const fadeInUp = {
  initial: {
    y:-60,
    opacity:0,
    transition:{
      duration:0.6,
      ease:easing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easing
    }
  }
};

const transition = {
  duration:1.4,
  ease:[0.6,0.01,-0.05,0.9]
}

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition: {
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}
const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition: {
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}
const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{
      duration:1,
      ...transition
    }
  }
};

const btnGroup = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6,
      ease:easing
    },
    animate:{
      y:0,
      opacity:1,
      animation:{
        duration:0.6,
        ease:easing
      }
    }
  }
};

const star = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.8,
      ease:easing
    },
    animate:{
      y:0,
      opacity:1,
      animation:{
        duration:0.6,
        ease:easing
      }
    }
  }
};

const header = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.05,
      ease:easing
    },
    animate:{
      y:0,
      opacity:1,
      animation:{
        duration:0.6,
        ease:easing
      }
    }
  }
};


const Banner = () => {
  return (
    <>
    <div className='mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] '>
      {/* <img src={GrilDot} alt='Girl-dot' /> */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 mx-auto'>
            <div className='md:py-[5rem]'>
            <motion.div initial={{x:-60,opacity:0}} transition={{duration:1.4}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}}>
                <img className='absolute md:py-[8rem] md:w-[1.6rem]' src={Polygona} alt='Polygon' />
            </motion.div>
            <motion.div initial={{x:0,opacity:0}} transition={{duration:1.4}}  animate={{x:-160,opacity:1}} animation={{duration:1.4,ease:easing}}>
                <img className='absolute md:left-[30rem] md:py-[2rem] md:w-[1.5rem]' src={Polygonb} alt='Polygon' />
            </motion.div>
            <motion.div initial={{y:60,opacity:0}} transition={{duration:1.4}}  animate={{y:0,opacity:1}} animation={{duration:1.4,ease:easing}}>
                <img className='2xl:w-[20rem]  lg:w-[18rem] lg:pt-[2rem]' src={LOGO} alt='LOGO'/>
            </motion.div>
                <motion.h1 initial={{x:-100,opacity:0}} transition={{duration:1.4}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}} className='text-2xl font-semibold 2xl:text-[2rem]'>
                Makes You Beautiful
                </motion.h1>
                <motion.p initial={{x:-100,opacity:0}} transition={{duration:1.7}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}} className='text-justify pt-1 2xl:text-[1rem] 2xl:pt-[1rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</motion.p>
                <motion.div initial={{x:-100,opacity:0}} transition={{duration:1.7}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}} className='flex justify-center items-center lg:mt-3'>
                <button className='bg-[#F8BAF1] lg:py-2 md:px-8 md:rounded-tl-lg md:rounded-br-lg 2xl:mt-[2rem] 2xl:px-[3rem] 2xl:py-[3rem] 2xl:text-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>Read More</button>
        
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.8 }} className='col-span-2 2xl:w-full lg:w-[48rem]'>
                <img className='' src={Girl} alt='girl' />
            </motion.div>
            <motion.div initial={{y:-60,opacity:0}} transition={{duration:3.5}}  animate={{y:0,opacity:1}} animation={{duration:3.5,ease:easing}} className='relative' >
            <img className='absolute lg:w-[10rem] lg:bottom-[8rem] lg:left-[28rem] 2xl:w-[30rem] 2xl:left-[110rem] 2xl:top-[60rem]' src={upto} alt="up-to-off" />
            </motion.div>
            </div>
            <div className='relative'>
          <img className='absolute lg:right-[-10rem] lg:bottom-[12rem] lg:w-[2.3rem] 2xl:w-[10rem] 2xl:bottom-[3rem]' src={GrilDot} alt='Girl-dot' />
          </div>
          </div>
      <div className='relative'>
    <img className='absolute lg:w-[14.980rem] lg:-bottom-0 lg:left-0 2xl:w-[25rem] 2xl:bottom-9' src={Cruls} alt='crul'/>
    </div>
    </>
  ) 
}

export default Banner