
const connectDB = require('./DB/connect');
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(express.static('./public'));
app.use(express.json());
app.use("/api/v1/tasks",tasks);
app.use(errorHandlerMiddleware);
app.all('*',notFound);

const start= async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,console.log(`You are listening and connected to DB http://localhost:${PORT}`));
    }
    catch(error){
        console.log(error);
    }
}

start();