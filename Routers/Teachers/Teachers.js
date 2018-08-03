const express=require('express').Router()

let Teachers=
[
    {name:"abc", subject:"Physics"},
    {name:"xyz", subject:"chemistry"}
]

express.get("/",(req,res) =>
{
    res.send(Teachers)
})

express.get("/:id",(req,res) =>
{
    res.send(Teachers[req.params.id])
})

module.exports=express