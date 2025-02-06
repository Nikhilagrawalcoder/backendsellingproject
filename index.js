const express=require('express')
const app=express()
const Logger=require('log-vani')
const logger=new Logger();


app.post("/user/signup",(req,res)=>{
    res.json({msg:'signup succesfully'})
})

app.post("/user/login",(req,res)=>{
    res.json({msg:'login succesfully'})
})

app.get("/courses",(req,res)=>{
    res.json({msg:'all courses'})
})

app.get("/user/purchase",(req,res)=>{
    res.json({msg:'all courses that are purchased'})
})

app.post("/user/purchase",(req,res)=>{
    res.json({msg:'succesfully purchase courses'})
})
app.listen(8080,(err)=>{
    logger.info('server stareted succesfully')
})