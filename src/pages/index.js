import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Cards from '../components/Questions';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Cards/>
    </div>
  )
}

export default Home