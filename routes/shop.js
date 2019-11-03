const express = require('express');
const router = express.Router();
const path = require('path');
const rootPath = require('../utill/path');

const adminData = require('./admin');
const productController = require('../controllers/products');

router.get('/',productController.getProductList);

module.exports = router;