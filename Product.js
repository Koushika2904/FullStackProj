// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Category: { type: String, required: true },
    image: { type: String, required: true },
    Name: { type: String, required: true },
    Specification: { type: String, required: true },
    Description: { type: String, required: true },
    Rate: { type: String, required: true },
  
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
