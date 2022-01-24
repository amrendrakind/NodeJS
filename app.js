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
    res.send('<h1>Hellow from Express!!!</h1>')
})

const server = http.createServer(app)
const PORT = 4000
server.listen(PORT, console.log(`Server is running on ${PORT}`))