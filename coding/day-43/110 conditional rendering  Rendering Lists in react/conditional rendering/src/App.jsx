import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
        title: "hey",
        desc: " good todo"
    },
    {
        title: "hey 2 ",
        desc: " good todo 2 "
    },
    {
        title: "hey 3",
        desc: " good todo3 "
    }
    ])
//   we can also create small components like this 
//   const Todo = ({todo})=>{ 
//     
//     return (<> 
//     <div className="border border-red-400 p-3 ">
//     <div className="todo">I am todo {todo.title}</div>
//     <div className="desc">I am todo description {todo.desc}</div>
//     </div>
//   </>)
//   }

  return (
    <>
    {/* to display all the todos */}
    {/* in react to render a list there is a special technique */}
    {/* also use a unique key */}

    {todos.map(todo=>{

        // agr ese krna h to upr vale ko comment out kr lena
        // return <Todo key ={todo.title} todo = {todo}/> 
        // after return if you use enter and there is nothing in fron of return it'll no work coz return will reutn blank instead of the component

        return  <div key ={todo.title} className="border border-red-400 p-3 ">
        <div className="todo">I am todo {todo.title}</div>
        <div className="desc">I am todo description {todo.desc}</div>
        </div>
        
    })}

      <div className="card ">
        <button onClick={()=>{
          setShowbtn(!showbtn) 
        }}>
          toogle the button 2 
        </button>

       {showbtn && <button>i am 2</button>}
      </div>
    </>
  )
}
export default App
