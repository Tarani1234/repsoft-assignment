import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import Hero from './Components/Hero'
import Carsoule from './Components/Carsoule'

import Aboutus from './Components/AboutUs/Aboutus'
import Community from './Components/Community/Community'
import Shop from './Components/Shop/Shop'
import Wallet from './Components/Wallet/Wallet'
import Partner from './Components/Partner/Partner'
import Footer from './Components/Footer/Footer'
import Gaming from './Components/Gaming/Gaming'
import Devices from './Components/Devices/Devices'



const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Carsoule/>
      <Aboutus/>
       <Gaming/>
        <Community/>
        <Shop/>
         <Devices/>
        <Wallet/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default App
