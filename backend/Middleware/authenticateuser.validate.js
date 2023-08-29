const JWT=require('jsonwebtoken')
exports.authenticateUser= async (req,res,next)=>{
    try {
        const token=await (req.cookies && req.cookies.token) || null;
    if(!token)
    {
        return res.status(500).json({
            msg:"User authentication failed",
            token:req.cookies
        })
    }
    const payload=await JWT.verify(token,process.env.SECRET_KEY)
    req.user={id:payload.id,username:payload.username}
    next()
    } catch (error) {
        res.status(500).json({
            Success:false,
            error:error.message
        })
    }
    

}