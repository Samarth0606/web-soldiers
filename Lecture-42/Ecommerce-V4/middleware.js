

let { productSchema ,reviewSchema } = require('./schema');

let validateProduct = (req,res,next)=>{
    let  {name , img , price , instock , desc} = req.body;
    const {error} = productSchema.validate({name , img , price , instock , desc})
    if(error){
        let msg = error.details.map((err)=> err.message).join(',')
        return res.render('error' , {err: msg})
    }
    next();
}


let validateReview = (req,res,next)=>{
    let  {rating , comment} = req.body;
    const {error} = reviewSchema.validate({rating , comment})
    if(error){
        let msg = error.details.map((err)=> err.message).join(',')
        return res.render('error' , {err: msg})
    }
    next();
}


module.exports = {validateProduct , validateReview}





