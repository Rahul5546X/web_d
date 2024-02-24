import { useState ,useRef ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let a = 0;// jb jb re render hoga to a ki value firse 0 ho jayegi so hr bar a ki value 1 hi print hogi

  // so is chiz se bchne ke lie(value 0 na ho re-render krte hi) we can use useRef


  const a= useRef(0)// ab chahe kitni bhi bar re-render ho is value pr koi frk nahi pdega refresh krenge tb to intial value hi hogi pr re-render hone se frk ni pdega
  

  useEffect(()=>{
    a.current = a.current+1  // way of accessing this is the correct syntax
    console.log(`rendering... and value of a is ${a.current}`)
  },[count])
 


  return (

    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is  {count} 
        </button>
      </div>
    </>
  )
}

export default App

// useref tb use hota h jb hmn useEffect se jo chizn render hoti h unke bich mn kisi value ko persist rkhna ho

// also used for virtual dom manipulation


// In the first example, without using a useRef hook, a is a regular variable. When you update a directly (a = a + 1), you're modifying its value in the component's scope. This change will cause a re-render if count changes, but it won't be reflected outside the useEffect hook. Each time the component re-renders, a will be reinitialized to its initial value.

// In the second example, using a useRef hook (const a = useRef(initialValue)), a.current is a property that persists between renders and component updates. When you update a.current (a.current = a.current + 1), you're modifying the value stored in the ref object. React will still trigger a re-render if count changes, but the value of a.current will persist across renders, maintaining its state between re-renders.