import React from 'react'
import HeroImage from "../../../assets/image/hero.avif"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex flex-col md:flex-row-reverse justify-center md:justify-between items-center max-w-5xl mx-auto '>
      <div className='max-w-lg mx-auto px-2'>
        <img src={HeroImage} alt="hero-section" className=' rounded-md' />
      </div>
      <div className='md:mt-9 text-center md:text-start'>
        <h1 className=' font-bold text-4xl py-4'>The Ultimate eBook Store</h1>
        <p className=' pb-6'>CodeBook is the World's most popular and authoritative source for computer science ebooks. Find rating and access to the newest books digitally.</p>

        <Link to="/products" className=' px-4 py-2 bg-blue-800 text-white rounded-md'>
          Explore Books
        </Link>
      </div>
    </div>
  )
}

export default Hero