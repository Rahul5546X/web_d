import mongoose from 'mongoose';
    
const TodoSchema = new  mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

//exporting the TodoSchema
export const Todo = mongoose.model('Todo', TodoSchema)









