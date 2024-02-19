import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import {Todo} from "./model/Todo.js"

const app = express()
const port = 3000

const connection = await mongoose.connect('mongodb://localhost:27017/dummy')

app.use(cors());

app.get('/',(req,res)=>{
    res.send("working")
})

let name = ["reacher","batman","superman","joker","alex"]
let city = ["new york"," United state of america","India","australia", "Canada"]
let Salaries= [50000, 60000, 55000, 58000, 52000]
let Languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

app.post('/save',async(req,res)=>{
    //clear
    await Todo.deleteMany({})
    for (let index = 0; index < 10; index++) {
    let random  = Math.floor(Math.random()*5)
    const dummy = new Todo({  name:name[random],salary: Salaries[random],language: Languages[random],city: city[random],isManager: true})
    dummy.save()
    }
    // res.send("saved")
})
app.listen(port,()=>{
    console.log("app is working on port", port)
})

