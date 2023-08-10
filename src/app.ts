const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
const port = process.env.PORT;

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
    res.send("Hello World! We are using Node.js with Typescript, Express.js and Webpack");
});

app.listen(parseInt(port!), () => {
    console.log("app is started");
});

