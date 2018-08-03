const express=require('express')
const server=express.Router
const route=server()

let students =
[
    {name:"abhi",age:17},
    {name:"upen",age:21}
]

route.get("/",function (req,res)
{
    res.send(students)
})

route.get("/:id", (req,res) => 
{
    // console.log(req.params.id)
    res.send(students[req.params.id])
})

module.exports=route