const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("This is From Middlewire");
    next();
});

app.use((req, res, next) => {
    res.send('<h1>Welcome From Express.Js</h1>');
    next();
});



const server = http.createServer(app);

server.listen(3000);