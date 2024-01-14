const mongoose =  require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); //plm


const userSchema = new mongoose.Schema({
   email: {
    type:String,
    trim:true,
    required:true
   },
   age:{
    type:Number,
    required:true
   },
   role:{
      type:String,
      required:true
   }
})


userSchema.plugin(passportLocalMongoose); //plm


let User = mongoose.model('User' , userSchema);
module.exports = User;