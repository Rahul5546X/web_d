import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const[color, setColor] = useState(0)

  // e hr bar chlega jb bhi render hogi app
  // //case 1
  // useEffect( ()=>{
  //   alert("It is rendered at every render")
  // }) 

  // // e sirf tb hota h render jb component first time mount ya load hota h
  // //case 2
  // useEffect( ()=>{
  //   alert("it is render only once ")
  // },[])


  //case 3
  // e tb trigger hoga jb count ki value change hogi(ya fir whenever there is a change in a state or a prop)

  // useEffect( ()=>{
  //   alert(" 1st render of app outside navbar")

  //   // it is optional it works when the component is unmounted
  //   return ()=>{

  //   }
  // },[])

  useEffect(() => {
    alert("count is changed")
    setColor(color+1)
  }, [count]) // there can be multiple aguements

  return (
    <>
      <Navbar color={"red" + color}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
          
          {/* // when a state changes the whole component is rendered again */}
        </button>
        </div>
    </>
  )
}

export default App

//in main.jsx there is a strict mode which runs our code two times in development (not in production) once for checking the code and then for real