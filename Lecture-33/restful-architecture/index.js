const express = require('express');
const app = express();
const path = require('path');

let comments = [
    {
        id : 0 , 
        author : "Samarth",
        comment: "backend is easy"
    },
    {
        id : 1 , 
        author : "Priyanshu",
        comment: "kavita meri didi hai"
    },
    {
        id : 2 , 
        author : "Harshil",
        comment: "one note nhi dikhra"
    },
    {
        id : 3 , 
        author : "Tavneet",
        comment: "populate samjha do"
    },
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true})); //body ka middleware jab aap post request bhejkar data dekhna chahte hai

// root route
app.get('/' , (req,res)=>{
    res.send('root route')
})

// to show all the blogs
app.get('/blogs' , (req,res)=>{
    // res.render('index' , {comments:comments})
    res.render('index' , {comments})
})
// to actually add in the db
app.post('/blogs' , (req,res)=>{
    // console.log(req.body);
    let {author , comment} = req.body;
    comments.push({author , comment , id: comments.length })
    res.send(req.body);
})

// to show a particular form
app.get('/blog/new' , (req,res)=>{
    res.render('new');
})



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})