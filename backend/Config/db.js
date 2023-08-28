const mongoose=require('mongoose')
const ConnectToDb=async ()=>{
    mongoose
      .connect(process.env.MONGO_URL)
      .then((data)=>{
        console.log("DB is connected:",data.connection.host)
      })
      .catch((err)=>{
        console.log(err.message)
        process.exit(1)
      })
}
module.exports=ConnectToDb;