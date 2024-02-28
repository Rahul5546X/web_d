import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      I'm a navbar guys and value of count is {count}
    </div>
  )
}

export default Navbar
