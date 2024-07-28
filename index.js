const express = require("express");
const chat = require("./data");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
// const data =require("./")
dotenv.config();

const port = process.env.port || 5000;

const app = express();






// start of the new way from the chatgpt

mongoose.connect("mongodb+srv://raykushwaha0031:C1k4maJXzH2vAmh4@blog.zlf5agh.mongodb.net/RoadSideChat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,  // Example: Increased timeout to 10 seconds
    socketTimeoutMS: 45000,           // Example: Increased socket timeout to 45 seconds
}).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Error connecting to database:", err);
});


//e nd of the new way from the chat gpt




app.get("/", (req, res) => {
    res.send(chat);
    // res.json(chat);
});

app.get("/chat", (req, res) => {
    res.send(chat);
    // res.json(chat);
});


app.listen(port, (err) => {
    console.log("server is connected successfully", port);
});



