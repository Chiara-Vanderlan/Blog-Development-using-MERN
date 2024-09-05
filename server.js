//Mogodb creditials : chvanderlan99 et6IgJmxvGtT48vp

const express = require('express');
const app = express();
const {MongoClient} = require("mongodb")
const PORT = process.env.PORT || 8000;

const MONGO_URI = "mongodb+srv://chvanderlan99:et6IgJmxvGtT48vp@articleinfo.qhuam.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=articleInfo"; 
/*const articlesInfo = {
    "learn-react": {
        comments: [],
    },
    "learn-node": {
        comments: [],
    },
    "my-thought-on-learning-react": {
        comments: [],
    },
};*/

// Initialize middleware
app.use(express.json());

app.get('/api/articles/:name',async(req,res)=>{
    try{
        const articleName = req.params.name;
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db("mernblog");
        const articlesInfo = await db.collection('articles').findOne({name:articleName});
        res.status(200).json(articlesInfo);
        client.close();
    }catch(error){
        res.status(500).json({message:"Error connecting to database",error})
    }
    
});


// Test routes (can be removed later)
//app.get('/', (req, res) => res.send("Hello World!"));
//app.post('/', (req, res) => res.send(`Hello World ${req.body.name}`));
//app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

// Route to add comments
app.post('/api/articles/:name/add-comments', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;


    articlesInfo[articleName].comments.push({ username, text });
    res.status(200).send(articlesInfo[articleName]);
});

// Start the server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
