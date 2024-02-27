import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // without useCall back
  // const getAdjective = () => {
  //   return "another" + count
  // }


  const getAdjective = useCallback(() => {
    return "another" + count
  },[count] )
  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App