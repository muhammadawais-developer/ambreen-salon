import React from 'react';
import { SliderImage, SliderImage2, SliderImage3, SliderImage4 } from '../../assets/index';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
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
const itemImage2 = {
  hidden:{opacity:0,y:-60},
  show:{
      opacity:1,
      y:0,
      transition:{
          ease:'easeInOut',
          duration:2
      }
  }
};

const Slider = () => {
  return (
    <motion.div variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>
      <div className='mx-auto md:px-[10rem] lg:px-[10rem] xl:px-[11rem] 2xl:px-[15rem] lg:pt-[2rem]' >
        <motion.h2 variants={item} className='text-center lg:text-3xl font-semibold lg:pb-[3rem]'>Our Works</motion.h2>
        <motion.div variants={itemImage2} >  
        <Swiper 
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          >
          <SwiperSlide>
          <img src={SliderImage} alt='slider-image'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={SliderImage2} alt='slider-image'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={SliderImage3} alt='slider-image'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={SliderImage4} alt='slider-image'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={SliderImage} alt='slider-image'/>
          </SwiperSlide>
        
          
          </Swiper>
          </motion.div>
      </div>
    </motion.div>
  )
}

export default Slider