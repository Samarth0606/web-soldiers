const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require("./routes/productRoutes");
const methodOverride  = require('method-override');
const reviewRoutes = require("./routes/review");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');  //p
const LocalStrategy = require('passport-local');  //pl
const User = require('./models/User'); //p-schema
const authRoutes = require("./routes/auth");

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/websoldiers')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
// now for public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// seeding dummy data
// seedDB();

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly : true , 
        expires: Date.now() + 7*24*60*60*1000 , 
        maxAge : 7*24*60*60*1000
    }

}

app.use(session(configSession));
app.use(flash());

app.use(passport.initialize()); //p
app.use(passport.session());  //p

passport.serializeUser(User.serializeUser()); //plm
passport.deserializeUser(User.deserializeUser()); //plm

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

passport.use(new LocalStrategy(User.authenticate())); //plm


// Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const port = 8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})


