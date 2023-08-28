
const User=require('../Model/userSchema.js')
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