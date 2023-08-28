
const User=require('../Model/userSchema.js')
const bcrypt=require('bcrypt')
exports.signup=async (req,res)=>{
    try {
        
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
        res.status(200).send("Login Successful")
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Login Failed")
    }
}