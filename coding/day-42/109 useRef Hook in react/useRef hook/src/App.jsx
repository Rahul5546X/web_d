import { useState ,useRef ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const btn_reference= useRef()
  useEffect(()=>{
    console.log(`First rendering..`)
    btn_reference.current.style.backgroundColor = "red"
  },[])
 
  return (
    <>
      <div className="card">
        <button ref ={btn_reference} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={()=>{
          btn_reference.current.style.display = "none"
        }}>Hide Counter</button>
      </div>
    </>
  )
}

export default App

// dom manipulation ke lie bhi use ref use kr skte hn 