import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='cards-in'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.whoeDJcRcCDbE1zPsL99mQHaEo&pid=Api&P=0&h=220" alt="" />
        <div className="title">{props.title}</div>
        <div className="desc">{props.desc}</div>
    </div>
  )
}
export default Card
