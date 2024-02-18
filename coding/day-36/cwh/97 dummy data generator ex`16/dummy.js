
import mongoose from "mongoose";
import express from 'express'
const app = express()
const port = 3000

import {Todo} from "./97 dummy data generator ex`16/models/Todo.js"

const connection = await mongoose.connect('mongodb://localhost:27017/todo')

app.get('/',(req,res)=>{
    const todo = new Todo({name:"Rahul", salary :33434 , language: "Python", city:"New york", isManager:false})
    todo.save() 
    res.send("working")
})



app.listen(port, ()=>{
    console.log("the app is working on the port ",port);
})
