import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='text-2xl font-bold'>
        <Link href={"/"}>Viper<span className='text-green'>box</span></Link>
    </div>
  )
}

export default Logo
