import React from "react";
import {ImSearch} from 'react-icons/im'
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
          duration:1.5
      }
  }
};

// const itemImage1 = {
//   hidden:{opacity:0,x:-70},
//   show:{
//       opacity:1,
//       x:10,
//       transition:{
//           ease:'easeInOut',
//           duration:3
//       }
//   }
// };
// const itemImage2 = {
//   hidden:{opacity:0,y:60},
//   show:{
//       opacity:1,
//       y:0,
//       transition:{
//           ease:'easeInOut',
//           duration:2
//       }
//   }
// };

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
const Newsletter = () => {
  return (
    <motion.div variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}} >
    <div className="mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] 2xl:px-[15rem] lg:pt-[5rem]">
      <div className="grid grid-cols-1 lg:grid-cols-3">
      <div>
      <motion.h1 variants={primText} className="uppercase text-4xl lg:px-[1rem] font-semibold">News letter</motion.h1>
      <motion.div variants={primText} className="border-4 border-[#FEBEF5] lg:px-[2.5rem] lg:mt-5 lg:w-[17rem] lg:h-[17rem]">
        <form>
          <div className="relative lg:mt-8">
            <input
              className="border-b border-b-1 border-gray-600 focus:outline-none py-1 focus:border-[#FEBEF5] focus:border-b-2
              transition-colors  peer duration-300
              "
              autoComplete="off"
              type="text"
              id="YourName"
            />
            <label
              for="YourName"
              className="absolute lg:left-0 lg:top-0 peer-focus:text-xs cursor-text
                peer-focus:-top-4 transition-all duration-300
              "
            >
              Your Name
            </label>
          </div>

          <div className="relative mt-8">
            <input
              className="border-b border-b-1 border-gray-600 focus:outline-none py-1 focus:border-[#FEBEF5] focus:border-b-2
              transition-colors  peer duration-300
              "
              autoComplete="off"
              type="email"
              id="YourEamil"
            />
            <label
              for="YourEmail"
              className="absolute lg:left-0 lg:top-0 peer-focus:text-xs cursor-text
               peer-focus:-top-4 transition-all duration-300
              "
            >
              Your Email
            </label>
          </div>
          <div className="lg:mt-9">
          <button className="lg:py-3 lg:px-9 bg-[#FAF0F8] rounded-lg ">Subscribe Now</button>
          </div>
          </form>
          </motion.div>
          </div>
          <div className="lg:pt-[10rem] lg:px-5" >
          <motion.h2 variants={primText} className="text-3xl font-semibold">Taking care of all of your needs.</motion.h2>
          <motion.div variants={primText} className="flex bg-[#D9D9D9] lg:py-2 lg:rounded-2xl lg:w-[12rem] lg:mt-[1rem] lg:ml-2">
          <ImSearch className="relative lg:mt-[0.3rem] lg:left-5 "/>
          <input className="bg-[#D9D9D9] lg:ml-6 focus:outline-none text-gray-500 lg:w-[8rem]" type="search" placeholder="Search" />
          </motion.div>
          </div>
          <motion.div variants={itemImage3} className="lg:pt-[6rem]">
          <p className="text-justify" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
          </motion.div>
      </div>
    </div>
    </motion.div>
  );
};

export default Newsletter;
