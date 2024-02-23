import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';

function App() {
  // {/* const [first, setfirst] = useState(second) */}

  // first is the name of the variable we want to change and setfirst is the function we'll use to change the variable's value and it's default value is 0 (useState(0))

  const [value, setValue] = useState(0)
  // value is state

  //components function app is also a component
  return (
    <div className="App">
       {/* we will write our whole code in here */}
      {/* <Navbar/>*/}
      <Navbar logoText = "This is logo text sended as a prop" />
      <div className="name">
        <p>First React app is this Counter</p>
        <p className='val'> {value} </p>
        <button onClick={()=>{
          setValue(value+1)
        }}>Click me</button>
      </div>
      {/* <Navbar/>   */}
      {/* we can reuse it again and again */}
    </div>
  );
}
export default App;
