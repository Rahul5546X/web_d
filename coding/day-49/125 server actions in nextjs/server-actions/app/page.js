"use client" // to use useRef
// import fs from "fs/promises"
// to clear the form after submitting 
import { useRef } from "react";
import { submitAction } from "./actions/form";
export default function Home() {

  let ref = useRef();
  return (
   <div className="form m-2">
    <h2>form</h2>
    {/* simple form */}
    <form  ref={ref}
    // action={submitAction}>
    // way 2 to use useRef
    action={(e)=>{submitAction(e);
            ref.current.reset()}}>
      <div className="name m-2">
        <label htmlFor="name"></label>
        <input  type="text" name="name" placeholder="Enter your name" id="name" />
      </div>

      <div className="address m-2 mx-2">
        <label htmlFor="add"></label>
        <input  type="text" name="add" placeholder="Enter your address" id="add" />
      </div>

      <div className="btn m-2 mx-2" >
        <button className="border border-black">Submit</button>
      </div>


    </form>
   </div>
  );
}
