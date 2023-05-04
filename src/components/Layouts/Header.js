import React from 'react'
import { CogIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'


const Header = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
          </Link>

          <div className="flex items-center space-x-2">
            <CogIcon height={25} width={25} className=' text-gray-900 dark:text-white' />
            <MagnifyingGlassIcon height={25} width={25} className=' text-gray-900 dark:text-white' />
            <Link to="/cart" className=' relative'>
              <p className=' absolute -top-2 left-3 px-1 text-sm rounded-full bg-yellow-300'>2</p>
              <ShoppingCartIcon height={25} width={25} className=' text-gray-900 dark:text-white' />
            </Link>
            <UserCircleIcon height={25} width={25} className=' text-gray-900 dark:text-white' />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header