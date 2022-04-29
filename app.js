const express=require("express")

const app=express()

const port=process.env.PORT || 8080
 
app.get("/",(req,res,next)=>{
    res.send("<h1>Hello docker i am done two</h1>")
})

app.listen(port,()=>{
    console.log("App running  on localhost 8080");
})