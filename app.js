const express = require('express')
const app = express()

app.use('/', (req, res, next)=>{
    console.log("This will always Run!!!")
    next()
})

app.use('/add-product',(req, res, next)=>{
    console.log("In the another Middleware")
    res.send('<h1>Hello Add Product Page!!!</h1>')
})

app.use('/',(req, res, next)=>{
    console.log("In the another Middleware")
    res.send('<h1>Hello from Express!!!</h1>')
})

const PORT = 4000
app.listen(PORT, console.log(`Server is running on ${PORT}`))