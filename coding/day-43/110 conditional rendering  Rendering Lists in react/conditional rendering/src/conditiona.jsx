import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[showbtn, setShowbtn] = useState(false)

  return (
    <>
      <div className="card">
        <button onClick={()=>{
          // setShowbtn(true)  e krenge to hm toogle ni kr payenge so e niche vala kro
          setShowbtn(!showbtn) // jo  bhi value hogi uska ulta kr do
        }}>
          toogle the button 2
        </button>
      {/* first way both if and else */}
       {/* { showbtn ? <button>Toogle count</button>: "nothing"} */}
       {/* SECOND WAY ONLY IF it means if showbtn is true the do this */}
       {showbtn && <button>i am 2</button>}
      </div>
    </>
  )
}
export default App
