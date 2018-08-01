const express = require('express')
const server=express()

const error1=require("./404.js")

const m1=function (req,res,next)
{
    res.send("we are in middleware 1")
}

const m2=function (req,res,next)
{
    res.send("we are in middleware 2")
}

const m3=function (req,res,next)
{
    res.send("we are in middleware 3")
}



server.use("/a",m1)
server.use("/b",m2)
server.use(error1)


server.listen(2121)

