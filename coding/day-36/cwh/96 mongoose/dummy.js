// import mongoose from "mongoose";
// import express from 'express'
// const app = express()
// const port = 3000

// import {Todo} from "./models/Todo.js"

// const connection = await mongoose.connect('mongodb://localhost:27017/todo')

// document.querySelector(".btn").addEventListener("click",(e)=>{
//     dummy_data()
// })

// function dummy_data() {
//     app.get('/', (req, res) => {
//         const todo = new Todo({ name: "Rahul", salary: 33434, language: "Python", city: "New york", isManager: false })
//         todo.save()
//         res.send("working")
//     })

//     app.listen(port, () => {
//         console.log("the app is working on the port ", port);
//     })
// }

import mongoose from "mongoose";
import express from 'express';
import { Todo } from "./models/Todo.js";


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Route to save dummy data
app.get('/saveDummyData', async (req, res) => {
    try {
        const todo = new Todo({ name: "Rahul", salary: 33434, language: "Python", city: "New york", isManager: false });
        await todo.save();
        res.send("Dummy data saved successfully");
    } catch (error) {
        console.error('Error saving dummy data:', error);
        res.status(500).send("Internal server error");
    }
});

// Start the server
const server = app.listen(port, () => {
    console.log("The app is working on the port ", port);
});

// Handle button click event on the client-side
document.querySelector(".btn").addEventListener("click", async () => {
    try {
        const response = await fetch('/saveDummyData');
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
});
