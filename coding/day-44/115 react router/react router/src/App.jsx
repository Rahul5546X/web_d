import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './compponents/Navbar'
import Home from './compponents/Home'
import About from './compponents/About'
import Login from './compponents/Login'
import User from './compponents/User'
// in this wasy the app will not reload while changing the content
// function App() {
  //   const router = createBrowserRouter([
    //     {path: "/home",
    //   element: <Home/>}
    //   ])
    import {createBrowserRouter , RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <> <Navbar/> <Home/> </>
    },
    {
      path: "/about",
      element: <> <Navbar/> <About/> </>
     },
    {
      path: "/login",
      element: <>  <Navbar/> <Login/> </>
    },
    {
      path: "/user",
      element: <>  <Navbar/> <User/> </>
    },
    {
      path: "/user/:username",
      element: <>  <Navbar/> <User/> </>
    }
  ])
  return (
    <>
      {/* without link tag it works like that while using link we have to do it in main.jsx or we can do it the another way we can use the component navbar  */}
      <div className="heh">hehhe</div>
      {/* <Navbar/> */} 
      <RouterProvider router={router} />
      <div className="hohoh">hoho</div>
    </>
  )
}
export default App
