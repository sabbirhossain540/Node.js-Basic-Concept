
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const adminRoute = require('./routes/admin');
const shopAdmin = require('./routes/shop');



app.use('/admin', adminRoute);
app.use(shopAdmin);

/* Use for Unregister URL Request */
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});




app.listen(3000);

/* We can also use for send data using this function (30/10/2019-> 11:29:10)
    1. app.get('/product', (req, res, next) => {
        //Your Code Start Here
    });
    2. app.post('/product', (req, res, next) => {
        //Your Code Start Here
    });
*/