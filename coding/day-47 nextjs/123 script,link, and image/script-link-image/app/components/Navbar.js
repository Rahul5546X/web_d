import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='container flex justify-between'>
        <div className="title">Facebook</div>
      <ul className="flex gap-2 ">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </ul>
    </div>
  )
}

export default Navbar
