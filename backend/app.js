require('dotenv').config()
const express=require('express')
const userroute=require('./route/userroute')
const cookieparser=require('cookie-parser')
const cors=require('cors')
//mongoose connection import
const ConnectToDb=require('./Config/db')
ConnectToDb()
const app=express()
//middleware
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin:process.env.CLIENT_URL
}))
app.use('/',userroute)
module.exports=app;