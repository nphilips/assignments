const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000

// Middlewares that fire on every request
app.use(express.json())   // Parses Objects -  req.body
app.use(morgan('dev'))

// DB Connect
mongoose.connect("mongodb://localhost:27017/gameguru", {useNewUrlParser: true}, () => {
    console.log("{* *} Connected to the DB")
})

// Routes
app.use("/auth", require("./routes/authRouter.js"))
app.use("/public", require("./routes/publicRouter.js"))

app.use("/gameguru", expressJwt({secret: process.env.SECRET}))
app.use("/gameguru/games", require("./routes/gameRouter.js"))


// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


// Server Listen
app.listen(PORT, () => {
    console.log(`[o o] Server is running on Port ${PORT}`)
})