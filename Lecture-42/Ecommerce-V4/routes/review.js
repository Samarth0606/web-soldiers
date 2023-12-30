const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateReview } = require('../middleware');
const router = express.Router();


router.post('/products/:id/review' , validateReview , async(req,res)=>{
    try{
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
    }
    catch(e){
        res.status(500).render('error' , {err:e.message})
    }

})


module.exports = router;
