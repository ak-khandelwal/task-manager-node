// possible routes
// 1. get /api/v1/tasks
// 2. get /api/v1/tasks/:id
// 3. patch /api/v1/tasks/:id 
// 4. delete /api/v1/tasks/:id
// 5. post /api/v1/tasks
const connectDB = require('./DB/connect');
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();

app.use(express.static('./public'));
app.use(express.json());
app.use("/api/v1/tasks",tasks);
app.get("/",(req,res)=>{
    res.status(200).send("home");
})

const start= async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(5000,console.log("You are listening and connected to DB"));
    }
    catch(error){
        console.log(error);
    }
}

start();