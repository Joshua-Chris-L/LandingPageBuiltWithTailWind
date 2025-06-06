import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'> 
         <HeroSection />
      </div>
      <FeatureSection /> 
      <WorkFlow />
      <Price /> 
      <Testimonials />
      <Footer />
    </>
  )
}

export default App