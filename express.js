// let express = require('express')
import  express, { json }  from 'express';
// import { user } from './dbconn.js';

let app = express();
const port = 4000

// Basic of routing is done
// app.method(get or post) (path, handler(request, response))

app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send("Welcome to homepage");
// })

app.get('/user', (req, res)=>{
    const data = req.body;
    console.log(data);
    res.status(200).json(data)
})

app.get('/msg', (req, res)=>{
    res.send("Got a msg request")
})



app.post('/', (req, res)=>{
    // const { name, age} = req.body;
    
    const userData = new user({ ...req.body });
    
    userData.save().then((item)=>{
        res.status(200).json(item)
    }).catch(err=>{
        res.status(400).json(err);
    })
})




app.listen(port, ()=>{
    console.log(`connected  at ${port}`  )
})