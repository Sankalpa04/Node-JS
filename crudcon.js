import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/crudcon').then(()=>{
    console.log("Data base is connected with crudcon");
}).catch(()=>{
    console.error(err);
})

const userSchema = new mongoose.Schema ({
    "name" :String,
    "age" : Number
})

export const user = mongoose.model('user', userSchema)