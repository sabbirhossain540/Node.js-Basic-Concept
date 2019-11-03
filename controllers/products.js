const products = [];

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootPath,'views','add-product.html'));
    res.render('add-product',{
        docTitle:'Add Product', 
        path:'/admin/add-product',
        formCss:true,
        activeAddProduct:true
    });
}

exports.postAddProduct = (req, res, next) => {
    //console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
}

exports.getProductList = (req, res, next) => {

    //res.send('<h1>Welcome To Express.js</h1>');
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    //res.sendFile(path.join(rootPath,'views','shop.html')); // When We use Html File 

    //res.render('shop', {prods: products, docTitle: 'Shop', path:'/'}); For PUG Structure
    res.render('shop', {
        prods: products, 
        docTitle: 'Shop', 
        path:'/', 
        hasProduct: products.length > 0,
        formCss:true,
        activeShop:true
    }); // For Handleber Structure
}



