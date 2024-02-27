import React , {useContext}from 'react'
import { CounterContext } from '../context/context'

const Compp1 = () => {
  const counter = useContext(CounterContext)
  
  return (
    <div>
      i'm component 1 and count is {counter.count}
    </div>
  )
}
export default Compp1
