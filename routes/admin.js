const express = require('express');
const router = express.Router();
const path = require('path');
const rootPath = require('../utill/path');

const products = [];

//admin/add-product  => Get Request
router.get('/add-product',(req, res, next) => {
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootPath,'views','add-product.html'));
});

//admin/add-product  => Post Request
router.post('/add-product',(req, res, next) => {
    //console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
});


//module.exports = router;
exports.routes = router;
exports.products = products;