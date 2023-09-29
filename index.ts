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

         /*
{ BODY --=>

  response: 'eyJzdWNjZXNzIjp0cnVlLCJjb2RlIjoiUEFZTUVOVF9TVUNDRVNTIiwibWVzc2FnZSI6IllvdXIgcGF5bWVudCBpcyBzdWNjZXNzZnVsLiIsImRhdGEiOnsibWVyY2hhbnRJZCI6Ik1FUkNIQU5UVUFUIiwibWVyY2hhbnRUcmFuc2FjdGlvbklkIjoiTVQ3ODUwNTkwMDY4MTg4MTA0IiwidHJhbnNhY3Rpb25JZCI6IlQyMzA5MjkyMzEyNDI5NjY4NDI5MjUwIiwiYW1vdW50IjoxMDAwMCwic3RhdGUiOiJDT01QTEVURUQiLCJyZXNwb25zZUNvZGUiOiJTVUNDRVNTIiwicGF5bWVudEluc3RydW1lbnQiOnsidHlwZSI6Ik5FVEJBTktJTkciLCJwZ1RyYW5zYWN0aW9uSWQiOiIxOTk1NDY0NzczIiwicGdTZXJ2aWNlVHJhbnNhY3Rpb25JZCI6IlBHMjIxMjI5MTYwNzA4MzM0NDkzNDMwMCIsImJhbmtUcmFuc2FjdGlvbklkIjpudWxsLCJiYW5rSWQiOiIifX19'
}

     */

    const data = atob(req.body.response) 
    const dataObj = JSON.parse(data)
    responseArr.push(dataObj)
    res.json({response:dataObj})
})

app.get("/",(req,res)=>{
    res.json({response:responseArr})
})

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


export default app;

