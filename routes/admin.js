const express = require('express');
const router = express.Router();
const path = require('path');
const rootPath = require('../utill/path');
const productController = require('../controllers/products');


//admin/add-product  => Get Request
router.get('/add-product',productController.getAddProduct);

//admin/add-product  => Post Request
router.post('/add-product',productController.postAddProduct);


module.exports = router;
// exports.routes = router;
// exports.products = products;