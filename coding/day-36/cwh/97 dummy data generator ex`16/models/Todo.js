import mongoose from 'mongoose';

// const connection = await mongoose.connect('mongodb://localhost:27017/todo')


//using conditions
const TodoSchema = new  mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

//exporting the TodoSchema
export const Todo = mongoose.model('Todo', TodoSchema)






