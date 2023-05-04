import React from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'

const HomePage = () => {
  return (
    <div className='min-h-screen mt-5'>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </div>
  )
}

export default HomePage