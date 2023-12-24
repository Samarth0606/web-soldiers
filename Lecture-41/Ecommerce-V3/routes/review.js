const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router();


router.post('/products/:id/review' , async(req,res)=>{
    let {id} = req.params;
    let {rating , comment} = req.body;
    let product = await Product.findById(id);
    let review = new Review({rating , comment});

    // let {_id} = review;
    // console.log(_id,'sam')
    // product.reviews.push(_id);
    product.reviews.push(review);


    await product.save();
    await review.save();
    res.redirect(`/products/${id}`);
})


module.exports = router;
