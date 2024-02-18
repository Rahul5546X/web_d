// typecasting validation becomes easy in mongoose during crud operations
// mongodb package is very beginner friendly

// it is just a package
// we can impose schema in mongodb with the help of mongoose

import mongoose from "mongoose";
import express from 'express'
const app = express()
const port = 3000
import {Todo} from "./models/Todo.js"
// connecting to db
// if this code is in a module context (i.e., a JavaScript file being imported or required as a module), you can use await at the top level without needing an immediately surrounding async function. This feature allows for cleaner and more concise code in many cases.

const connection = await mongoose.connect('mongodb://localhost:27017/todo')
// connection string can also look complicated but here it is just of local computer

app.get('/',(req,res)=>{
    const todo = new Todo({title:"first value of todo", desc :" it is description of todo", isDone:false ,days:3})
    // agr yahan koi number ya koi bhi values di jayegi to dbmn vo as a string hi save hogi (days number mn hone chaiye)
    todo.save() // db mn add ho jayega document
    res.send("working")
})
app.get('/a',async(req,res)=>{
    // const todo = await Todo.findOne({})
    // res.json(todo)
    // res.json({title:todo.title, desc:todo.desc})
})
app.listen(port, ()=>{
    console.log("the app is working on the port ",port);
})
