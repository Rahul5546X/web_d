import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors , isSubmitting},
  } = useForm()
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2) // network delay
    let r = await fetch("http://localhost:3000/",{method:"POST",  headers: {
      "Content-Type": "application/json" 
    },
    body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res)
    // if(data.username !=="rahul" )
    // {
    //   setError("serverError", {message:"Username is wrong"})
    // }
    if(data.username === "rohan")
    {
      setError('blocked',{message:"this user is blockeed"})
    }
  }
  return (
    <>
      <div className="container">
        {/* isSubmitting true hoga tbhi chlega e */}
        {isSubmitting&& <div className="loading">
          Loading...
        </div> }
        {/* to change it we have to create a chagnehandler anda then we can use it in our form*/}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* wihtout handling error for each validation indiviually */}
          {/* <input type='text' placeholder='username' {...register("username", {required:true , minLength:3} ) } /> */}
          <input type='text' placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min lenght is 3" } })} />
          <br />
          {/* handling errors */}
          {/* {errors.username && <span>there is error in username</span>} */}
          {/* if we want to show the actual error then we have to make the validation as an object and corressponding to every validation we'll give a msg */}
          {errors.username && <span className='error'>{errors.username.message}</span>}
          <br />
          {/* <input type='password' placeholder='password' {...register("password", {required:true , maxLength:8, minLength:5} ) } /> */}
          <input type='password' placeholder='password' {...register("password", { required: { value: true, message: "This field is required" }, maxLength: { value: 8, message: "Max lenght is 8" }, minLength: { value: 5, message: "Min lenght is 5" } })} />
          <br />
          {/* {errors.password && <span>there is error in password</span> } */}
          {errors.password && <span className='error'>{errors.password.message}</span>}
          <br />
          <input type="submit" disabled={isSubmitting} value="Submit" />
          <br />
          {errors.serverError && <span className='error'>{errors.serverError.message}</span>}
          <br />
          {errors.blocked && <span className='error'>{errors.blocked.message}</span>}
        </form>
      </div>
    </>
  )
}
export default App
