import express,{json} from 'express';

const port = 4000;
const app = express();


app.use(json());

app.get('/posts', (req, res)=>{
    res.status(200).send({
        id:1,
        name: "hola mundo"
    });
});

app.listen(port,() => {
    console.log(`server on port  ${port}`)
});