const express=require('express')
//import controller files
const {signup}=require('../Controller/usercontrol')
//import signup validation
const {validateSignup}=require('../Middleware/signup.validate')
const router=express.Router()
router.get('/',(req,res)=>{
    res.status(200).send("this is testing phase")
})
router.post('/signup',validateSignup,signup)
module.exports=router;