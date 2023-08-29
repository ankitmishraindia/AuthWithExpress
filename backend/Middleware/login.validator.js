exports.loginDataValidate=(req,res,next)=>{
    const {username,password}=req.body;
    if(req.body&&username&&password)
    {
        return next()
    }
    else
    {
        res.send(404).send("username and password is required")
    }
}