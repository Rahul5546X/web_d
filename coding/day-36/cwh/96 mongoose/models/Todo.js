import mongoose from 'mongoose';

//using conditions
const TodoSchema = new  mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
});

//exporting the TodoSchema
export const Todo = mongoose.model('Todo', TodoSchema)










// const TodoSchema = new  mongoose.Schema({
    //     name: String,
    //     salary: Number,
    //     language: String,
    //     city: String,
    //     isManager: Boolean
    // });