const emailvalidator=require('email-validator')
exports.signupDataValidate=async (req,res,next)=>{
    const {username,email,password,bio,name}=req.body;
    if(!username||!email||!password||!bio||!name){
        return res.status(500).send("All fields are required")
    }
    const emailTest=emailvalidator.validate(email)
    if(!emailTest)
    {
      return res.status(404).send("please enter a valid email")
    }
    
    next()
}