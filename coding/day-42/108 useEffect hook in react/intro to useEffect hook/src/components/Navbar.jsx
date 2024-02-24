import React from 'react'
import { useEffect } from 'react'
const Navbar = (props) => {

     //case 1
    useEffect( ()=>{
    alert(" in navbar everytime")
  }) 

  // e sirf tb hota h render jb component first time mount ya load hota h
  //case 2
    useEffect( ()=>{
    alert(" in navbarfirst run during 1st render ")
  },[])

  useEffect( ()=>{
    alert(" 1st render of navbar with return ")
    // it is optional it works when the component is unmounted it is called cleanup function
    return ()=>{
        alert("navbar is unmounted")
    }
  },[])


    useEffect(() => {
     alert("color is changed in navbar")
    }, [props.color])
    
  return (
    <div>
      this navbar is of {props.color} color
    </div>
  )
}

export default Navbar
