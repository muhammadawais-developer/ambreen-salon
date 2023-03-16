import React, { useState } from 'react'
import { Circle, headerCircledot } from '../../assets/index';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsArrowLeftCircle} from 'react-icons/bs'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

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


const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }
  
  
  return (
    
    <>
    <motion.div initial='initial' animate='animate'>
    <motion.header variants={stagger} >
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
    <img className='absolute w-[6rem] md:w-40 2xl:w-[8rem] ' src={Circle} alt='Circle' />
    </motion.div>
    <motion.div initial={{y:-60,opacity:0}} transition={{duration:0.8}}  animate={{y:0,opacity:1}} animation={{duration:0.6,ease:easing}} >
        <img className='absolute w-[15rem] left-[8rem] lg:w-[35rem] lg:left-[18rem] 2xl:w-[30rem] 2xl:left-[25rem]' src={headerCircledot} alt='header-dot' />
    </motion.div>
    <div className='Header px-3 py-2 md:px-8 md:py-5 w-full 2xl:px-5 absolute'>
      <motion.div initial={{x:-60,opacity:0}} transition={{duration:0.8}}  animate={{x:0,opacity:1}} animation={{duration:0.6,ease:easing}} onClick={handleNav} className='z-90'>
        {
          !nav ? <GiHamburgerMenu className='text-[#F998EF] text-[2.25rem] md:text-[3rem] 2xl:text-[3rem]'/> : <GiHamburgerMenu className='text-[#F998EF] text-[2.25rem] md:text-[3rem] 2xl:text-[3rem]'/>
        }
      <h1 className='font-semibold 2xl:text-[1rem]'>MENU</h1>
      </motion.div>
      <div className={!nav ? 'absolute left-0 top-0 w-[70%] lg:w-[20%] h-screen bg-[#FDEEFC] opacity-90 ease-in-out duration-300' : 'fixed left-[-100%]'}>
      
        <div onClick={handleNav} className='pt-7 pl-9 ease-in-out duration-500 left-[100%]'>
          {
            !nav ? <BsArrowLeftCircle className='2xl:text-[3rem] lg:text-[3.5rem]'/> : null
          }
          
        </div>
        <ul className='pt-[140px]'>
          <li className='p-4 pl-[20%] font-semibold text-4xl 2xl:text-[3rem] 2xl:px-[5rem] 2xl:leading-[8rem]'><Link to="/" >Home</Link></li>
          <li className='p-4 pl-[20%] font-semibold text-4xl 2xl:text-[3rem] 2xl:px-[5rem] 2xl:leading-[8rem]'>Services</li>
          <li className='p-4 pl-[20%] font-semibold text-4xl 2xl:text-[3rem] 2xl:px-[5rem] 2xl:leading-[8rem]' >Visit Us</li>
          <li className='p-4 pl-[20%] font-semibold text-4xl 2xl:text-[3rem] 2xl:px-[5rem] 2xl:leading-[8rem]'><Link to="/about" >About</Link></li>
        </ul>
      </div>
    </div>
    </motion.header>
    </motion.div>
    {/* <img className='absolute md:w-40' src={Circle} alt='logo' /> */}
    </>
  )
}

export default Header