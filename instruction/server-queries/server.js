const express = require('express')
const uuid = require('uuid/v4')
const app = express()

app.use('/wizards', require('./routes/wizardRoutes.js'))


app.listen(7000, () => {
    console.log("the server is running on port 7000");
})