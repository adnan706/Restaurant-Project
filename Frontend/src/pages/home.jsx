import React from 'react'
import HeroSection from '../component/HeroSection'
import About from '../component/About'
import Qualities from '../component/Qualities'
import Menu from '../component/Menu'
import WhoAreWe from '../component/WhoAreWe'
import Team from '../component/Team'
import Reservation from '../component/Reservation'
import NotFound from './NotFound'
import Footer from '../component/Footer'

function home() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Team/>
        <Reservation/>
        <Footer/>
    </div>
  )
}

export default home