const JWT=require('jsonwebtoken')
exports.authenticateUser= async (req,res,next)=>{
    try {
        const token=await (req.cookies && req.cookies.token) || null;
    if(!req.cookies)
    {
        throw new Error("req.cookies is not present")
        }
    if(!req.cookies.token)
    {
        throw new Error("req.cookies.token is not present")
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