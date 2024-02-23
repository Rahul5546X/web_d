//rafce
import React from 'react'

// const Navbar = (logoText) => {
const Navbar = (props) => {
  return (
    <div>
        {/* <div className="logo">{logoText}</div> */}
        <div className="logo">{props.logoText}</div>
      <ul className="navbar">
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
        <li>subscribe</li>
      </ul>
    </div>
  )
}

export default Navbar


// In JavaScript and JSX, component names must start with a capital letter in order to be recognized as components. This is a convention in React and many other JavaScript libraries to distinguish between regular HTML elements and custom components.