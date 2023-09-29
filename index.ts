import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

type responseType = {
    response:string
}

let responseArr:responseType[]=[];

app.post("/api/callback-url",(req,res)=>{
    console.log(req.body)
    responseArr.push(req.body)
    res.json({response:req.body})
})

app.get("/",(req,res)=>{
    res.json({response:responseArr})
})

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


export default app;

