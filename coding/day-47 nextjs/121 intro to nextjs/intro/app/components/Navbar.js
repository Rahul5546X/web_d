import React from 'react'

const Navbar = () => {
  return (
    <div className=' p-2 container bg-red-200'>
        <ul className="  flex gap-2 justify-between  ">
            <li ><a href="/">Home</a></li>
            <li ><a href="/about">About</a></li>
            <li ><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}
export default Navbar
