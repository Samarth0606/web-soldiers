const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product')

mongoose.connect('mongodb://127.0.0.1:27017/websoldiers')
.then(()=>{console.log("DB conected")})
.catch((err)=>{console.log("DB NOT conected" , err)})


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));


// so that harr incomig request ke liye routiung check ki jaae
app.use(productRoutes);
// app.use('/products' , productRoutes);


// seedDB() 
// console.log(seedDB,'SAM');



let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at Port : ${PORT}`);
})