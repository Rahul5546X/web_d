import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
    <button onClick={()=>{
      dispatch(decrement())
    }}>-</button>
        <div>The current value of {count}</div>
      <button onClick={()=>{
        dispatch(increment()) 
        // we can also use incrementByAmount and give the value 2 so it will increment by 2
      }} >+</button>
      <button onClick={()=>{
        dispatch(multiply())
      }}>* by 2</button>
    </>
  )
}

export default App
