import React from 'react'
import Banner from '../Component/Main/Banner'
import Header from '../Component/Main/Header'
import Newsletter from '../Component/Main/Newsletter'
import Prim from '../Component/Main/Prim'
import Welcome from '../Component/Main/Welcome'
import Footer from '../Component/Main/Footer'
import Slider from '../Component/Main/Slider'
import Styledetails from '../Component/Main/Styledetails'

const Home = () => {
  return (
    <div>
        <Header/>
       <Banner/>
        <Welcome/>
         <Slider/> 
       <Styledetails/>
        <Prim/>
        <Newsletter/>
        <Footer/> 
    </div>
  )
}

export default Home