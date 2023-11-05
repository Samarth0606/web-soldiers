const express = require('express'); //function
const app = express(); //object -> instance


// console.log(app);
//middleware
// app.use(function(){})

app.use( '/cat' , (req,res,next)=>{
    console.log("middle hu mai, mahesh");
    // console.log(req);
    // console.log(res);
    // res.send("hi string");
    // res.send("<h1>hi string in tag</h1>");
    next();
})



//root route
app.get('/' , (req,res)=>{
    console.log("hi i am get")
    res.send("get rquest bhej di")
})
app.get('/harshita' , (req,res)=>{
    res.send("mai hu harshita")
})
app.get('/jayant' , (req,res)=>{
    res.send("goli mardeb tohar ke")
})

// universal
app.get('*' , (req,res)=>{
    res.send("page 404 not found  bhaiya")
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})


