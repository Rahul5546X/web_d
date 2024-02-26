import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleclick = (prop,e)=>{
    // e.preventDefault()
    console.log("buttons is clicked",prop)
    console.log(e.clientX, e.clientY);
  }
  const handleMouseOver = ()=>{
    console.log("mouse is hovered")
  }
  return (
    <>
      <div className="button">
        {/* you just have to pass the reference of the function you want to invoke */}
        {/* Functions passed to event handlers must be passed, not called. */}
        {/* <button onClick={handleclick}> click me</button> */}

        {/* incorrect the () at the end of handleClick() fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX { and } executes right away.
        <button onClick={handleclick()}> click me</button> */}
        {/* way 2 */}

        <button onClick={(e) => handleclick(`i'm a prop`,e)}> click me</button>
        <div className="box" style={{ width: '30vw', height: '20vh', backgroundColor: 'red', color:"white"}} onMouseOver={handleMouseOver} >i'm a div</div>
      </div>
    </>
  )
}
export default App
