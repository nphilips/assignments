const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

// Middlewares
app.use(express.json()) // req.body
app.use(morgan('dev'))  // helpful console.logs in server console

//Routes
app.use('/todo', require('./routes/todoRoutes.js'))


// DB Connection
mongoose.connect("mongodb://localhost:27017/first-db", {useNewUrlParser: true}, () => {
    console.log("[o o] Connected to DB");
})


// Server Setup
app.listen(7000, () => {
    console.log("{* *} Server is running on port 7000");
})