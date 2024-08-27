const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


const articlesInfo = {
    "learn-react":{
        comments:[],
    },
    "learn-node":{
        comments:[],
    },
    "my-thought-on-learning-react":{
        comments:[],
    },
};
//Initialize middleware
//We use to have to install body parsel but now it is a built in middleware
//function of express. It pareses incoming JSON paymload
app.use(express.json({extended :false}));

//Just a test route temporary
//app.get('/', (req, res)=> res.send("Hello World!"));
//app.post('/', (req,res)=>res.send(`Hello World ${req.body.name}`));
//app.get ("/hello/:name",(req,res)=>res.send(`Hello ${req.params.name}`))

app.post('/api/articles/:name/add-comments', (req,res)=>{
    const {username,text} = req.body
    const articleName = req.params.name
    articlesInfo[articleName].comments.push({username,text})
    res.status(200).send(articlesInfo[articleName])
});

app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));