const mongoose=require('mongoose')
//import bcrypt
const bcrypt=require('bcrypt')
//Schema
const Usermodel=new mongoose.Schema({
    username:{
         type:String,
         required:true,
         unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
        
    },
    bio:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

})
//Encrypt(hash) password before saving in the database..
Usermodel.pre('save',async function(next){
    if(!this.isModified('password'))
    {
        return next()
    }
    else
    {
        this.password=await bcrypt.hash(this.password,10)
        next()
    }
})
module.exports=mongoose.model("User",Usermodel)