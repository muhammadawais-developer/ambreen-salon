import React from 'react';
import { clientbg, clientpic, prim, primface, clienttext } from '../../assets/index'
import {motion} from 'framer-motion';

let easing = [0.6,-0.05,0.01,0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:20},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:0.5
        }
    }
};

const primText = {
  hidden:{opacity:0,x:-70},
  show:{
      opacity:1,
      x:10,
      transition:{
          ease:'easeInOut',
          duration:3
      }
  }
};

const itemImage1 = {
  hidden:{opacity:0,x:-70},
  show:{
      opacity:1,
      x:10,
      transition:{
          ease:'easeInOut',
          duration:3
      }
  }
};
const itemImage2 = {
  hidden:{opacity:0,y:60},
  show:{
      opacity:1,
      y:0,
      transition:{
          ease:'easeInOut',
          duration:2
      }
  }
};

const itemImage3 = {
  hidden:{opacity:0,x:60},
  show:{
      opacity:1,
      x:0,
      transition:{
          ease:'easeInOut',
          duration:1.3
      }
  }
};

const Prim = () => {
  return (
    <motion.div variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}} >
        <div className='mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] 2xl:px-[15rem] relative'>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 mx-auto'>
        <div className='lg:mt-[13rem]'>
          <div>
            <motion.h2 variants={primText} className='absolute lg:px-10 lg:py-8 lg:text-2xl font-semibold'>Get Prim and Proper us.</motion.h2>
            <img className='lg:w-[28rem] lg:h-[15rem]' src={prim} alt='prim-img'/>
          <motion.div variants={itemImage1} className='relative'>
            <img className='absolute lg:w-[29rem] lg:h-[13rem] lg:left-[5rem] lg:top-[-6.222rem]' src={primface} alt='prim-face' />
          </motion.div>
            </div>
          </div>
          <div className='lg:pt-[13rem]' >
          <div>
          <motion.h2 variants={itemImage3} className='absolute lg:px-5 lg:py-8 lg:text-2xl font-semibold'>Trust our clients just asother trusted us</motion.h2>
          <img className='lg:w-[32rem] lg:h-[20rem]' src={clientbg} alt='prim-img'/>
          <motion.div variants={itemImage2} className='relative'>
          <img className='absolute lg:h-[20rem] lg:w-[13rem] lg:left-[6.222rem] lg:top-[-11.111rem]' src={clientpic} alt='client-pic' />
          </motion.div>
          <motion.div variants={itemImage3} className='relative'>
          <img className='absolute lg:h-[9rem] lg:left-[17rem] lg:top-[-4.777rem]' src={clienttext} alt='client-text' />
          <p className='absolute lg:h-[8rem] lg:w-[8rem] lg:right-[2.666rem] lg:top-[-3rem]'>Lorem ipsum is simply dummy text dteash jsdjka</p> 
          </motion.div>
          </div>
          </div>
        </div>
          
        </div>
    </motion.div>
  )
}

export default Prim