const express = require('express');
const router = express.Router();
const path = require('path');
const rootPath = require('../utill/path');

const adminData = require('./admin');

router.get('/',(req, res, next) => {
    console.log(adminData.products);
    //res.send('<h1>Welcome To Express.js</h1>');
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    //res.sendFile(path.join(rootPath,'views','shop.html')); // When We use Html File 
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;