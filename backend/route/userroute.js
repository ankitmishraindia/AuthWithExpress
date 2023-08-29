const express=require('express')
//import controller files
const {signup,login, getUserDetails}=require('../Controller/usercontrol')
//import signup validation
const {signupDataValidate}=require('../Middleware/signup.validate')
//import login validation
const {loginDataValidate}=require('../Middleware/login.validator')
//import user authentication
const {authenticateUser}=require('../Middleware/authenticateuser.validate')
const router=express.Router()
router.get('/',authenticateUser,getUserDetails)
router.post('/signup',signupDataValidate,signup)
router.post('/login',loginDataValidate,login)
module.exports=router;