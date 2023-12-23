const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// READ all the products
router.get('/products' , async (req,res)=>{
    let products = await Product.find();
    res.render('index' , {products});
})


// SHOW  a form to add a particular product
router.get('/product/new' , (req,res)=>{
    res.render('new');
})

// ACTUALLY adding in the DB
router.post('/products' , async(req,res)=>{
    // console.log(req.body);
    let  {name , img , price , instock , desc} = req.body;
    await Product.create({name , img , price , instock , desc})
    res.redirect('/products');
})

// // SHOW a particular product
router.get('/products/:id' ,async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('show' , {foundProduct} )
})

// FORM to EDIT a product
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('edit' ,{foundProduct});
})

// ACTUALLY change in DB
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let  {img , price , instock , desc} = req.body; 
    await Product.findByIdAndUpdate(id , {img , price , instock , desc});
    res.redirect('/products');
})

// DELETE a product
router.delete('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})



module.exports = router;
