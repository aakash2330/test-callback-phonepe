import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/api/callback-url",(req,res)=>{
    console.log(req.body)
    res.send("done")
})

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


export default app;

