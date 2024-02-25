import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [cards, setCards] = useState([]);
  const fetchData = async () => {
    try {
      const a = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await a.json();
      console.log(response)
      setCards(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []); 
  return (
    <>
      <div className="container">
      {cards.map((item)=>{
        return <div key={item.id} className="cards">
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <span>by: user id {item.userId}</span>
        </div>
      })}
      </div>
      <button onClick={()=>{
        fetchData()
      }}>Fetch Data</button>
    </>
  );
}

export default App;
