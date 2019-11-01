
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));//Static ly Use any location using this process


app.set('view engine', 'pug') // register the template engine
app.set('views', 'views') // specify the views directory


const adminData = require('./routes/admin');
const shopAdmin = require('./routes/shop');
const rootPath = require('./utill/path');

app.use('/admin',adminData.routes);
app.use(shopAdmin);

/* Use for Unregister URL Request */
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page Not Found</h1>');
    res.sendFile(path.join(rootPath,'views','404.html'));
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