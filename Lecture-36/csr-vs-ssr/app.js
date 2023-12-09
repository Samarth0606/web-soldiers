const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');

let Todo = ['go to gym', 'go to tripti' , 'watch animal'];

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'));

app.use('/' , express.static(path.join(__dirname , 'public')));
// app.use('/cat' , express.static(path.join(__dirname , 'public')));
// app.use('/cat' , (req,res)=>{
//     console.log("middleware");
//     res.send('hi')
// })

app.use(express.urlencoded({extended:true}));

app.get('/' , (req,res)=>{
    res.send('csr-vs-ssr')
})

app.get('/todos' , (req,res)=>{
    if(req.xhr){

        // res.render('index' , {Todo})
        res.json(Todo);//usable js object
    }
    else{
        res.render('index' , {Todo})
    }
})

app.post('/todos' , (req,res)=>{
    console.log(req.xhr);
    let {inpp} = req.body;
    Todo.push(inpp);
    res.status(200).json({msg:"array updates successfully"})
})


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server conneCted at port : ${PORT}`)
})