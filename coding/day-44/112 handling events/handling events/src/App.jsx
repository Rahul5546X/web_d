import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [name, setName] = useState("Rohan") // initial name is Rohan
  const [input2, setInput2] = useState(
    {
      "e_mail": "xyz@gmail.com",
      "password": 123
    })
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  const handleChange2 = (e) => {
    setName(e.target.value) // with using this we can change the value
    console.log(e.target.value)
  }
  // const handleChange3 = (e) => {
  //   setInput2(e.target.value)
  //   console.log(e.target.value) 
  //   console.log(input2);
  // }
  // In the first handleChange3 function (commented out), you're directly updating the state input2 with the new value from the input field using setInput2(e.target.value). Then, you're trying to log the value of input2 immediately after setting the state. However, due to the asynchronous nature of state updates in React, the updated value of input2 may not be available immediately after calling setInput2. So, you may not always see the updated value when logging input2.
  // more efficient to handle complex states
  const handleChange3=(e)=>{
    setInput2({...input2,[e.target.name]:e.target.value})
    console.log(input2); //e setInput2 se phle log ho jayega
    // jb display hoga to thoda slow hoga isliye ek character less hoga display
  }
  // In the second handleChange3 function, you're using the spread operator {...input2} to create a new object that merges the existing state input2 with the new value from the input field. This ensures that you're correctly updating the state with the new value. Then, you're logging input2 immediately after setting the state. However, since state updates are asynchronous, you may not always see the updated value immediately after setting the state, especially when logging it right after the state update.
  return (
    <>
      <div className="input">
        {/* <input onChange={(e)=>{handleChange(e)}} type="text" placeholder='type a text' /> */}
        {/* special case we want to make a state of evverything we type */}
        {/* standard input practice */}
        <input type="text" onChange={(e) => { handleChange2(e) }} value={name} name="" id="" />
        {/* if we use the above withoud the handlechange method we will not be able to change the value Rohan even using the keyboard( e just ek trika h to ese hi krna pdta h)  */}
        {/* Handling multiple inputs with same function */}
        <input type="text" name='e_mail' value={input2.e_mail? input2.e_mail: " "}  placeholder="Enter the e-mail"onChange={(e) => {
          handleChange3(e)
        }}/>
        {/* name and value should be same */}
        <input type="text" name='password' value={input2.password? input2.password: " "} placeholder="Enter the password" onChange={(e) => {
          handleChange3(e)
        }}/>
{/* agr h value to vo show kr do agr nhi h to blank show kr do but fir placeholder work ni krega */}
      </div>
    </>
  )
}
export default App
