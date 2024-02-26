import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params = useParams()
  return (
    <div>
      <h3>
      I'm user and name is {params.username}
      </h3>
      <p className='user'>This is the content of the user page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptate?</p>
    </div>
  )
}
export default User
