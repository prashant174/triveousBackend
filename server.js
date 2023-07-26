const express=require("express")
const dotenv=require('dotenv')
const { connection } = require("./config/db")
const { userRouter } = require("./routes/authRoutes")
dotenv.config()
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello India")
})

app.use("/",userRouter)

const port=process.env.PORT ||8000
app.listen(port,async()=>{
    try{
      await connection
      console.log("connected to mongoDB...")
    }catch(err){
        console.log("something wrong in Mongo Connection", err)
    }
    console.log(`server running on port ${port}`)
})