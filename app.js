const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("this is middleware")
    next();
})

app.use((req, res, next) => {
    console.log("this is middleware again")
})

const server = http.createServer(app);

server.listen(3000);