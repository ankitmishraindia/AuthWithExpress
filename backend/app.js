const express=require('express')
const userroute=require('./route/userroute')
//mongoose connection import
const ConnectToDb=require('./Config/db')
ConnectToDb()
const app=express()
//middleware
app.use(express.json())
app.use('/',userroute)
module.exports=app;