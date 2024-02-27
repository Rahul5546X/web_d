import React from 'react'
import Compp1 from './Compp1'

const Button = ({count}) => {
  return (
    <div>
      <button> I'm a button</button>
      <span><Compp1 count={count}/></span>
    </div>
  )
}
export default Button
