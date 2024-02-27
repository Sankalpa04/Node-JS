import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/Practise').then(()=>{
    console.log("database connected");
}).catch(()=>{
    console.log(err);
})

const userSchema =  new mongoose.Schema ({
    "name" : String,
    "age" : Number,
})



export const user = mongoose.model('user', userSchema)

