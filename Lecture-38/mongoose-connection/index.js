



const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cheerz')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})





let PORT = 8080;

app.listen(PORT , ()=>{
    console.log(`server conected at port: ${PORT}`);
})








