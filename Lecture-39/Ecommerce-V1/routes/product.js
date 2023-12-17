const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// READ all the products
router.get('/products' , async (req,res)=>{
    let products = await Product.find();
    res.render('index' , {products});
})


module.exports = router;
