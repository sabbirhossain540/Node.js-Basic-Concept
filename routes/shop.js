const express = require('express');
const routes = express.Router();
const path = require('path');
const rootPath = require('../utill/path');

routes.get('/',(req, res, next) => {
    //res.send('<h1>Welcome To Express.js</h1>');
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootPath,'views','shop.html'));
});

module.exports = routes;