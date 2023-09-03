const mongoose=require('mongoose')
//import bcrypt
const bcrypt=require('bcrypt')
//import jsonwebtoken
const JWT=require('jsonwebtoken')
//Schema
const Usermodel=new mongoose.Schema({
    username:{
         type:String,
         required:true,
         unique:true,
         lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
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
//method to generate token
Usermodel.methods={
    jwtToken(){
        return JWT.sign({id:this._id,username:this.username},process.env.SECRET_KEY,{
            expiresIn:'24d'
        })
    }
}
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
//jwt signature

module.exports=mongoose.model("User",Usermodel)