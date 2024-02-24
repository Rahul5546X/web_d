import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setcount] = useState(0)
  // it means count name ki ek state bnao aur uski initial value 0 kr do and ek function bnao jo is state ki value update krne mn help kre
  // jahan jahan count use hoga useState vahan vahan jake use update krega this is the advantage

  return (
    <div className="App">
      <div>the count is {count}</div>

      <button onClick={()=>{
        setcount(count+1)
      }}> click to update count</button>
    </div>
  );
}

export default App;


// we can also build our own hooks and can use built in hooks
// mostly used -- useEffect and useState