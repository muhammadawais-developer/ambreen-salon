import React from 'react'
import { WelcomeCrul, GrilDot, SideCrul, latestArrival, latestgray, latestarrivala, hairgirl,sideleft } from '../../assets/index'
import {motion} from 'framer-motion'

let easing = [0.6,-0.05,0.01,0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.8
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

const itemImage1 = {
    hidden:{opacity:0,x:-70},
    show:{
        opacity:1,
        x:10,
        transition:{
            ease:'easeInOut',
            duration:1.5
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
            duration:1
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

const itemImage4 = {
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


// const title = {
//     hidden:{
//         y:60,
//         opacity:0
//     },
//     show:{
//         y:0,
//         opacity:1,
//         transition:{
//             delay:0.2,
//             duration:0.6,
//             ease:easing
//         }
//     }
// };

// const hoverEffect = {
//     whileHover:{
//         scale:1.5,
//         rotate:630,
//         borderRadius:"100%"
//     },
//     whileTap:{
//         scale:8,
//         rotate:630,
//         borderRadius:"100%"
//     }
// }



const Welcome = () => {
  return (
    <motion.div className='relative' variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
        <div className='' >
            <img className='absolute lg:w-[14.977rem] lg:-mt-3' src={WelcomeCrul} alt='welcomeCrul'/>
        </div>
        <motion.div variants={item}>
            <motion.h2 className='text-center text-5xl lg:pt-10 font-semibold uppercase'>Welcome To Ambreen's</motion.h2>
        </motion.div>
        <div>
        <img className='absolute lg:right-[1.5rem] lg:-mt-4 lg:w-[3rem]' src={GrilDot} alt='Girl-dot' />
        </div>
        <div>
            <img className='absolute lg:right-[0rem] lg:w-[5rem] lg:top-[18rem]' src={SideCrul} alt='side-circle' />
        </div>
        <div className='mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] 2xl:px-[15rem]'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 mx-auto'>
            <motion.div className='lg:pt-[3rem]' variants={itemImage1}>
                <img src={latestArrival} alt='latest-Arrival' />
            </motion.div>
            <div className='col-span-2'>
                <motion.div variants={itemImage2} >
                <img className='lg:pt-[9rem] lg:h-[33rem]' src={latestgray} alt='latest-Arrival-1'/>
                </motion.div>
                <motion.div variants={itemImage3} className='relative' >
                <img className='absolute lg:w-[37rem] lg:top-[-30.5rem] lg:left-[3rem]' src={latestarrivala} alt='latest-Arrival-1'/>
                </motion.div>
                <motion.div variants={itemImage4} className='relative'>
                <img className='absolute lg:w-[32rem] lg:top-[-9.111rem] lg:left-[6.888rem]' src={hairgirl} alt='hairgirl'/>
                </motion.div>
                </div>
        </div>
        </div>
        <div>
            <img className='absolute lg:w-[5rem] lg:mt-[-13rem]' src={sideleft} alt='sideleft'/>
        </div>
    </motion.div>
  )
}

export default Welcome