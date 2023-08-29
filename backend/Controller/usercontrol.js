
const User=require('../Model/userSchema.js')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')

exports.signup=async (req,res)=>{
    try {
        const {username,email,password,bio,name}=req.body;
        const userExist= await User.findOne({username})
        if(userExist)
        {
         return res.status(404).send("User already exist..Please Login")
        }
        const user=await User.create(req.body);
        res.status(200).json({Status:"Success",
                             User:user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            msg:error.message
        })
    }
}
exports.login=async (req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username}).select("+password")
        if(!user&&!user.password)
        {
            throw new Error("User does not exist")
        }
        const result=await bcrypt.compare(password,user.password)
        if(!result)
        {
            throw new Error("password does not match")
        }
        const token=await user.jwtToken()
        const cookieOptions={
            maxAge:24*60*60*1000, //24hr
            httpOnly:true
        }
        res.cookie("token",token,cookieOptions)
        res.status(200).json({
            Success:true,
            data:user
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            Error:error.message,
            msg:"Login failed"
        })
    }
}
exports.getUserDetails=async (req,res)=>{
    try {
          const userid=req.user.id
          const users=await User.findById(userid)
          res.status(200).json({
            Success:true,
            data:users
          })
    } catch (error) {
        res.status(502).json({
            Success:false,
            error:error.message
        })
    }
}