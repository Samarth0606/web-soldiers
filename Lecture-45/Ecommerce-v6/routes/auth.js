const express =  require('express');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport');


router.get('/register' , (req,res)=>{
    res.render('auth/signup')
})


router.post('/register' , async(req,res)=>{
  // console.log(req.body,'sam')
    let {username , email , age , password , role} = req.body;
    let user = new User({username , email , age , role});
    let newUser = await User.register(user , password);
    res.send(newUser);
})


router.get('/login' , (req,res)=>{
    res.render('auth/login')
})


router.post('/login',
  passport.authenticate('local', 
  { 
    failureRedirect: '/login', 
    failureMessage: true 
  }),
  function(req, res) {
    // console.log(req.user);
    req.flash('success' , `welcome back ${req.user.username}`)
    res.redirect('/products');
});

router.get('/logout', (req, res)=>{
    req.logout(function(err) {
      if (err) { 
        req.flash('error' , 'try again')
    }
    req.flash('success' , 'sucessfully logged out')
      res.redirect('/login');
    });
  });


module.exports = router;