const express=require('express')
const server=express()

const StudentData=require('./Students/Students.js')
const TeachersData=require('./Teachers/Teachers.js')

server.use("/student",StudentData)
server.use("/teacher",TeachersData)

server.listen(2121)
