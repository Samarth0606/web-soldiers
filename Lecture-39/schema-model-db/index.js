const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cheerz')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})

// create a schema
// let daaruSchema = new mongoose.Schema({
//     name : String,
//     price: Number,
//     year: Number,
//     hasTried: Boolean
// })

let daaruSchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    year: {
        type:Number
    },
    hasTried: {
        type:Boolean
    }
})

// create a model
let Daaru =  mongoose.model('Daaru' , daaruSchema);
// console.log(Daaru , 'model hai');

// model is  ajs class -> objects -> db
// let royalStag = new Daaru({name:"royal stag" , price: 350 , year:1960 , hasTried:false});

// console.log(royalStag , 'newly added brand');
// royalStag.save(); //db mei store krvana padhta hai alag se

let PORT = 8080;

app.listen(PORT , ()=>{
    console.log(`server conected at port: ${PORT}`);
})









