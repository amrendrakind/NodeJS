const http = require('http')
const express = require('express')
const { Console } = require('console')
const app = express()

app.use((req, res, next)=>{
    console.log("In the Middleware")
    next()
})

app.use((req, res, next)=>{
    console.log("In the another Middleware")
    res.send('<h1>Hello from Express!!!</h1>')
})

const PORT = 4000
app.listen(PORT, console.log(`Server is running on ${PORT}`))