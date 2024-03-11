import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/crud').then(()=>{
    console.log("Data base is connected with crud");
}).catch(()=>{
    console.log(err);
})

const usersSchema = new mongoose.Schema ({
    "name" :String,
    "age" : Number,
    "email" : String,
    "contact" : Number,
    "password" : String
})

export const users = mongoose.model('user', usersSchema)