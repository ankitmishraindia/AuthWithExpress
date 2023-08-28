exports.validateSignup=async (req,res,next)=>{
    const {username,email,password,bio,name}=req.body;
    if(!username||!email||!password||!bio||!name){
        return res.status(500).send("All fields are required")
    }
    next()
}