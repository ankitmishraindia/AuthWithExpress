const JWT=require('jsonwebtoken')
exports.authenticateUser= async (req,res,next)=>{
    try {
       
    if(req.cookies)
    {
       if(req.cookies.token)
       {
           const token=await (req.cookies && req.cookies.token) || null;
           const payload=await JWT.verify(token,process.env.SECRET_KEY)
           req.user={id:payload.id,username:payload.username}
           next()
       }
       else{
        throw new Error("req.cookies.token is unavailable")
       }
    }
    else
    {
        throw new Error('req.cookies is unavailable')
    }
    
   
    
    } catch (error) {
        res.status(500).json({
            Success:false,
            error:error.message
        })
    }
    

}