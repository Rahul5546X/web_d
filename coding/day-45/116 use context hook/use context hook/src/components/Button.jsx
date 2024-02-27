import React , {useContext}from 'react'
import Compp1 from './Compp1'
import { CounterContext } from '../context/context'


// const Button = ({count}) => {
const Button = () => {
  const setC = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => setC.setCount((count) => count + 1)}> I'm a button</button>
      {/* <span><Compp1 count={count}/></span> */}
      <span><Compp1 /></span>
    </div>
  )
}
export default Button
