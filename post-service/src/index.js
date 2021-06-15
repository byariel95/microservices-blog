const express = require('express');

const port = 4000;
const app = express();


app.use(express.json());


app.get('/posts', (req, res)=>{
    res.status(200).send({});
});


app.listen(4000,()=>{
    console.log(`server on port  ${port}`)
});