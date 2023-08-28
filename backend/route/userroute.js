const express=require('express')
//import controller files
const {signup,login}=require('../Controller/usercontrol')
//import signup validation
const {validateSignup}=require('../Middleware/signup.validate')
//import login validation
const {loginValidator}=require('../Middleware/login.validator')
const router=express.Router()
router.get('/',(req,res)=>{
    res.status(200).send("this is testing phase")
})
router.post('/signup',validateSignup,signup)
router.post('/login',loginValidator,login)
module.exports=router;