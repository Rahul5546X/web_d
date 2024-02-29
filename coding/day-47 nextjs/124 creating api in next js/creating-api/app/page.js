"use client"
import Image from "next/image";

// using backend and handling requests


export default function Home(){

// const handleclick = async ()=>{
//   let data = {name:"xyz", age:17}

//   let a = fetch("/api/add",
//                 {method:"POST",
//                   headers:{
//                   "Content-Type":"application/json"
//                           },
//                   body:JSON.stringify(data)
//                 }
//                 )
//   let respone = await a.json() 
//   console.log(respone);
// }

//   return (
//    <main>
//   <div className="content">Click the button for a post request</div>
//   <button onClick={handleclick}>Click me </button>

//    </main>
//   );
const handleClick = async () => {
  let data = {
    name: "trying_to_learn",
    role: "Coder"
  }
  let a = await fetch("/api/add", {
    method: "POST", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  let res = await a.json()
  console.log(res)
}

  return (
    <div>
      <h1 className="text-xl font-bold">post reqeust</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

