import React from 'react'
import dynamic from 'next/dynamic'
import {FaArrowRight} from 'react-icons/fa'
import { PiShootingStarFill } from "react-icons/pi";
import Link from 'next/link';

const Logo = dynamic(()=>import('@/components/Logo'))

const Navbar = () => {
  return (
    <nav className='flex fixed z-30 w-full items-center justify-between py-6 px-12 bg-white'>
        <Logo />
        <section className='flex items-center gap-12 text-lg font-medium'>
          <Link href={'/login'} className='cursor-pointer '>Login</Link>
          <p className='cursor-pointer flex items-center gap-1'>
            Dashboard
            <PiShootingStarFill className='text-yellow-500' />
          </p>
          <button className='bg-green text-white flex items-center justify-center gap-2 py-1 px-2 rounded-lg cursor-pointer'>
            <p>Create Case</p>
            <FaArrowRight className='text-sm' />
          </button>
        </section>
    </nav>
  )
}

export default Navbar
