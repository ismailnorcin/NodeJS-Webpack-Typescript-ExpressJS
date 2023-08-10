const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(parseInt(port), () => {
    console.log("app is started");
});

