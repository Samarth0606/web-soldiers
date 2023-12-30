const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateProduct } = require('../middleware');
const router = express.Router();

// READ all the products
router.get('/products' , async (req,res)=>{
    try{
        let products = await Product.find();
        res.render('index' , {products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})


// SHOW  a form to add a particular product
router.get('/product/new' , (req,res)=>{
    try{
        res.render('new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})

// ACTUALLY adding in the DB
router.post('/products' , validateProduct , async(req,res)=>{
    try{
        // console.log(req.body);
        let  {name , img , price , instock , desc} = req.body;
        await Product.create({name , img , price , instock , desc})
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})

// // SHOW a particular product
router.get('/products/:id' ,async (req,res)=>{
    try{
        let {id} = req.params;
        // let foundProduct = await Product.findById(id)
        let foundProduct = await Product.findById(id).populate('reviews');
        // console.log(foundProduct,'sam')
        res.render('show' , {foundProduct} )
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})

// FORM to EDIT a product
router.get('/products/:id/edit' , validateProduct , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('edit' ,{foundProduct});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})

// ACTUALLY change in DB
router.patch('/products/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
        let  {img , price , instock , desc} = req.body; 
        await Product.findByIdAndUpdate(id , {img , price , instock , desc});
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})

// DELETE a product
router.delete('/products/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        // console.log(foundProduct,'review delete')

        for(let item of foundProduct.reviews){
            await Review.findByIdAndDelete(item)
        }
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }
})



module.exports = router;
