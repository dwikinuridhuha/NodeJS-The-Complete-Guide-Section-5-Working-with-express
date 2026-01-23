const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("this is middleware")
    next();
})

app.use((req, res, next) => {
    console.log("this is middleware again");
    res.send("<h1>Hello World!</h1>");
})

app.listen(3000);