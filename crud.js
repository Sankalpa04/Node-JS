import express, { json }  from "express";
import { user } from "./crudcon.js";
import bodyParser from 'body-parser';
import multer from "multer";

let app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req, res)=>{
    res.send("port active") 
})

//creating or posting in express js
app.post('/signup', (req, res)=>{
    const userData = new user({...req.body});
    userData.save()
        .then((item)=>{
            res.status(200).json(item);
    })
    .catch((err)=>{
        res.status(400).json(err);
    })
})

//read operation in express js
//find function returns the promise so try catch is implemented
app.get('/users', async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
      res.send(req.file)
    }
  })
  
const upload = multer({ storage: storage })

app.get('/',(req, res)=>{
    res.send(upload.file)
})

//finding by id in express js
// app.get('/:id', async (req, res) => {
//     try {
//         const usera = await user.findById(req.params.id).lean();
//         res.json(usera);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error });
//     }
// });


//updating the value from the db
app.patch('/:id', async(req,res)=>{
    try {
        const userToUpdate = await user.findById(req.params.id).lean();
        Object.assign(userToUpdate, req.body);
        const updatedUser = await user.findByIdAndUpdate(req.params.id, userToUpdate, { new: true });
        res.json(updatedUser)
    } catch (error) {
        console.error();
        res.send(error)
    }
})


//multer storage configuration
















//creating the server
app.listen(4000, ()=>{
    console.log("Port is active at 4000 ");
})