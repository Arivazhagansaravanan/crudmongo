const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type : 'string',
        enum : ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;