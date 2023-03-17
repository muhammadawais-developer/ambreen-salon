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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 mx-auto sm:mx-auto'>
            <div className='md:py-[5rem]'>
            <motion.div initial={{x:-60,opacity:0}} transition={{duration:1.4}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}}>
                <img className='absolute
                xs:top-0
                sm:top-0
                md:top-0
                lg:top-0
                xl:top-0
                2xl:top-0
                3xl:top-0
                4xl:top-[12.5rem] 4xl:left-[10rem] 4xl:w-[1.5rem]
                5xl:top-[16rem] 5xl:left-[10rem] 5xl:w-[2rem]
                6xl:top-[14rem] 6xl:left-[10rem] 6xl:w-[2.333rem]
                7xl:top-[14rem] 7xl:left-[10rem] 7xl:w-[2.555rem]
                8xl:top-[14rem] 8xl:left-[10rem] 8xl:w-[2.555rem]
                ' src={Polygona} alt='Polygon' />
            </motion.div>
            <motion.div initial={{x:0,opacity:0}} transition={{duration:1.4}}  animate={{x:-160,opacity:1}} animation={{duration:1.4,ease:easing}}>
                <img className='absolute 
                 xs:top-0
                 sm:top-0
                 md:top-0
                 lg:top-0
                 xl:top-0
                 2xl:top-0
                 3xl:top-0
                 4xl:top-[1rem] 4xl:left-[28rem] 4xl:w-[1.5rem]
                 5xl:top-[3rem] 5xl:left-[32rem] 5xl:w-[2rem]
                 6xl:top-[3rem] 6xl:left-[32rem] 6xl:w-[2rem]
                 7xl:top-[3rem] 7xl:left-[32rem] 7xl:w-[2rem]
                 8xl:top-[3rem] 8xl:left-[32rem] 8xl:w-[2.3rem]
                ' src={Polygonb} alt='Polygon' />
            </motion.div>
            <motion.div initial={{y:60,opacity:0}} transition={{duration:1.4}}  animate={{y:0,opacity:1}} animation={{duration:1.4,ease:easing}}>
                <img 
                className='w-[13rem]
                 xs:w-5
                 sm:w-[15rem]
                 md:w-[12rem]
                 lg:w-[14rem]
                 xl:w-[16rem]
                 2xl:w-[16rem]
                 3xl:w-[17rem]
                 4xl:w-[18rem]
                 5xl:w-[25rem] 5xl:mt-[2.5rem]
                 6xl:w-[25rem] 6xl:mt-[2.5rem]
                 7xl:w-[25rem] 7xl:mt-[3rem]
                 8xl:w-[25rem] 8xl:mt-[3rem]
                '
                
                src={LOGO} alt='LOGO'/>
            </motion.div>
                <motion.h1 initial={{x:-100,opacity:0}} transition={{duration:1.4}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}}
                 className='text-2xl font-semibold 
                 4xl:text-[1.666rem]
                 '>
                Makes You Beautiful
                </motion.h1>
                <motion.p initial={{x:-100,opacity:0}} transition={{duration:1.7}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}} className='text-justify pt-1 2xl:text-[1rem] 2xl:pt-[1rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</motion.p>
                <motion.div initial={{x:-100,opacity:0}} transition={{duration:1.7}}  animate={{x:0,opacity:1}} animation={{duration:1.4,ease:easing}} className='flex justify-center items-center lg:mt-3'>
                <button 
                className='bg-[#F8BAF1]
                xs:py-1
                sm:py-1
                md:py-1
                lg:py-2
                xl:py-2
                2xl:py-2
                3xl:py-2
                4xl:py-2 4xl:mt-[1.5rem]
                5xl:py-2
                6xl:py-2
                7xl:py-2
                md:px-8 md:rounded-tl-lg md:rounded-br-lg 
                transition ease-in-out delay-150 hover:-translate-y-1 
                hover:scale-110 duration-300 '>
                  Read More
                  </button>
        
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.8 }}
             className='col-span-2 
             xs:w-[30rem]
             sm:w-[25rem]
             md:w-[38rem]
             lg:w-[42rem]
             xl:w-[44rem]
             2xl:w-[53rem]
             3xl:w-[48rem]
             4xl:w-[51.111rem]
             5xl:w-[56.777rem] 
             6xl:w-[58rem] 
             7xl:w-[63rem] 
             8xl:w-[70rem]
             9xl:w-[71rem]
            10xl:w-[74rem]
            11xl:w-[76rem]
             '>
                <img className='' src={Girl} alt='girl' />
            </motion.div>
            <motion.div initial={{y:-60,opacity:0}} transition={{duration:3.5}}  animate={{y:0,opacity:1}} animation={{duration:3.5,ease:easing}} className='relative' >
            <img className='absolute
            xs:left-[0rem]
            sm:left-[0rem]
            md:left-[20rem] md:top-[-27rem] md:w-[10rem]
            lg:left-[21rem] lg:top-[-27rem] lg:w-[12rem]
            xl:left-[23rem] xl:top-[-26rem] xl:w-[13rem]
            2xl:left-[25rem] 2xl:top-[-25rem] 2xl:w-[13rem]
            3xl:left-[25rem] 3xl:top-[-27rem] 3xl:w-[14rem]
            4xl:left-[30rem] 4xl:w-[12rem] 4xl:top-[-23rem]
            5xl:left-[33rem] 5xl:w-[12rem] 5xl:top-[-23rem] 
            6xl:left-[33rem] 6xl:w-[12rem] 6xl:top-[-23rem]
            7xl:left-[38rem] 7xl:w-[12rem] 7xl:top-[-23rem]
            8xl:left-[38rem] 8xl:w-[12rem] 8xl:top-[-23rem]
            ' src={upto} alt="up-to-off" />
            </motion.div>
            </div>
            <div className='relative'>
          <img className='absolute
          xs:right-[0rem]
          sm:right-[0rem]
          md:right-[-10rem] md:w-[2rem] md:bottom-[16rem]
          lg:right-[-9rem] lg:w-[2rem] lg:bottom-[12.666rem]
          xl:right-[-10rem] xl:w-[2.666rem] xl:bottom-[11rem]
          2xl:right-[-20rem] 2xl:top-[-20rem] 2xl:w-[4rem]
          3xl:right-[-11rem] 3xl:w-[3rem] 3xl:top-[-18rem]
          4xl:right-[-9rem] 4xl:w-[3rem] 4xl:bottom-[10rem]
          5xl:right-[-9rem] 5xl:w-[3rem] 5xl:bottom-[10rem] 
          6xl:right-[-9rem] 6xl:w-[3rem] 6xl:bottom-[10rem]
          7xl:right-[-9rem] 7xl:w-[3rem] 7xl:bottom-[10rem] 
          8xl:right-[-9rem] 8xl:w-[3rem] 8xl:bottom-[10rem]
          ' 
          src={GrilDot} alt='Girl-dot' />
          </div>
          </div>
      <div className='relative'>
    <img className='absolute
     xs:left-[0rem]
     sm:left-[0rem]
     md:left-[0rem] md:w-[10rem] md:bottom-[5rem]
     lg:left-[0rem] lg:w-[11rem] lg:bottom-[5rem]
     xl:left-[0rem] xl:w-[12rem] xl:bottom-[0rem]
     2xl:left-[0rem] 2xl:w-[13rem] 2xl:bottom-[0rem]
     3xl:left-[0rem] 3xl:w-[15rem] 3xl:bottom-[0rem]
     4xl:left-[0rem] 4xl:w-[17rem] 4xl:bottom-[0rem]
     5xl:left-[0rem] 5xl:w-[16rem] 5xl:bottom-[0rem] 
     6xl:left-[0rem] 6xl:w-[16rem] 6xl:bottom-[0rem]
     7xl:left-[0rem] 7xl:w-[16rem] 7xl:bottom-[0rem]
     8xl:left-[0rem] 8xl:w-[16rem] 8xl:bottom-[0rem]
    ' src={Cruls} alt='crul'/>
    </div>
    </>
  ) 
}

export default Banner