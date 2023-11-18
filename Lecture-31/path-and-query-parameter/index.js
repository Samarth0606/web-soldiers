const express =  require('express');
const app = express();


//default
app.get('/' , (req,res)=>{
    res.send("root route hu mai")
})

// subreddit or path parameter
app.get('/r/:rahul' , (req,res)=>{
    // console.log(req.params)
    let {rahul} = req.params;
    res.send(`path parameter for ${rahul}`)
})

// query paramter
app.get('/search' , (req,res)=>{
    console.log(req.query);
    res.send('query mil gyi')
})



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})