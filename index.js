const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo connection established');
    })
    .catch(err => {
        console.log("oh no Mongo connection error:", err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/products')
})

/* index page GET route */

app.get('/products', async (req, res) => {
    const products = await product.find({});
    res.render('products/index', { products });
})

/* showing details of a particular product using mongo id */

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const productDetails = await product.findById(id);
    res.render('products/details', { productDetails });
})

/* adding new products */

app.get('/products/add', (req, res) => {
    res.render('products/add');
})

app.listen(9999, () => {
    console.log("listening on port 9999");
});