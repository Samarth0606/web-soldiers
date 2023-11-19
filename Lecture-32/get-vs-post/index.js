const express = require('express');
const app = express();
const path  = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true })) //middleware for req.body

// home route
app.get('/' , (req,res)=>{
    res.render('index')
})

// get
app.get('/cwc' , (req,res)=>{
    console.log(req.query)
    res.send('get se data aagya')
})

// post
app.post('/cwc' , (req,res)=>{
    console.log(req.body)
    res.send('post se data aagya')
})

app.listen(8080, ()=>{
    console.log("server conencted at port 8080")
})