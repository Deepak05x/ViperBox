import React from 'react'
import dynamic from 'next/dynamic'

const Logo = dynamic(()=>import('@/components/Logo'))

const Navbar = () => {
  return (
    <div>
        <Logo />
    </div>
  )
}

export default Navbar
