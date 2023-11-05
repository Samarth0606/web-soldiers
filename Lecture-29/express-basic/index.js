const express = require('express'); //returns a function

const app = express(); //return object -> entire instance of your application



app.listen(8080 , ()=>{
    console.log("server connected")
})