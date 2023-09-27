
const express=require('express')
const userroute=require('./route/userroute')
const cookieparser=require('cookie-parser')
const cors=require('cors')
//mongoose connection import
const ConnectToDb=require('./Config/db')
ConnectToDb()
const app=express()
//middleware
app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials:true
}))
app.use(express.json())
app.use(cookieparser())

app.use('/',userroute)
module.exports=app;
