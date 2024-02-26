import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul>
                {/* in this way the page reload at every time  */}

                {/* <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li> */}
                <li><NavLink className={(e) => { return e.isActive ? "red" : " " }} to="/home">Home</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "red" : " " }} to="/about">About</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "red" : " " }} to="/login">Login</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "red" : " " }} to="/user">User</NavLink></li>
                {/* run time pr e anchor tag mn hi conver hoga */}
            </ul>
        </div>
    )
}
export default Navbar
