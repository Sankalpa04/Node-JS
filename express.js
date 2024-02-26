let express = require('express')
let app = express();

app.use(express.json());

app.get('/user', (req, res)=>{
    const data = req.body;
    console.log(data);
    res.status(200).json(data)
})


app.listen(4000, ()=>{
    console.log("connected" )
})