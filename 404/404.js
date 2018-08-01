const route=require('express').Router()

route.get("/",function (req,res,next)
{
    res.send(
        `<h1>404 NOT Found</h1>`
    )
})

module.exports=route

