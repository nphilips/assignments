const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000
const app = express()


// Middlewares to run on every request
app.use(express.json())
app.use(morgan('dev'))


// DB Connection
mongoose.connect("mongodb://localhost:27917/happiest-hours", {useNewUrlParser: true}, () => {
    console.log(`[o o] Connected to the DB`);
})


// Routes
app.use("/happyhour", require('./routes/locationRoutes.js'))


// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.sent({errMsg: err.message})
})


// LISTEN
app.listen(PORT, () => {
    console.log(`{* *} Server is running on port ${PORT}`)
})