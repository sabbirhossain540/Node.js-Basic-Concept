const express = require('express');
const routes = express.Router();

//admin/add-product  => Get Request
routes.get('/add-product',(req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//admin/add-product  => Post Request
routes.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});




// routes.get('/add-product',(req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });


// routes.post('/product',(req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });


module.exports = routes;