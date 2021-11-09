const mongoose = require('mongoose');
const product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo connection established');
    })
    .catch(err => {
        console.log("oh no Mongo connection error:", err)
    })

const p = new product({
    name: 'ruby grapes',
    price: 1.99,
    category: 'fruit'
})

const seedProducts = [
    {
        name: "mangoes",
        price: 2.0,
        category: 'fruit'
    },
    {
        name: "milk chocolate",
        price: 5.0,
        category: 'dairy'
    },
    {
        name: "carrots",
        price: 2.55,
        category: 'vegetable'
    }
]

product.insertMany(seedProducts)
    .then(res => console.log(res))
    .catch(err => console.error(err))
