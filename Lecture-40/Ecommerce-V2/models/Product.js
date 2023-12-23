

const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    instock:{
        type:Boolean,
        required:true
    },
    desc:{
        type:String
    }

})

let Product = mongoose.model('Product' , productSchema)

module.exports = Product;

