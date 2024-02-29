"use client"
import { useEffect ,useState} from "react";
import React from 'react'
const Navabr = () => {
     const [count, setCount] = useState(0)
  return (
    <div>
       <div className="bg-red-400"> i'm a counter and value is {count}
      </div>
      <button onClick={()=>{
        setCount(count+1)
      }}>click me</button>
    </div>
  )
}
export default Navabr
