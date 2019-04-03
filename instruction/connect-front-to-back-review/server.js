const express = require('express')
const app = express()
// Note: app is what the express() method is returning
// This gives us access to the express library


const mongoose = require('mongoose')
// middleware that helps handle changes with your MongoDB from your server
const morgan = require('morgan')


app.use(express.json())
// Middleware that converts all incomming and outgoing objects to json
// Note: there are other formats for sending and receiving information through the web. We will be using JSON


mongoose.connect('mongodb://localhost:27017/full-stack-practice', {useNewUrlParser: true}, () => {
    console.log(`[o o] Connected to the DB`);
})
//mongoose's connect method takes up to three arguments, the address, settings, and the callback that we use to indicate the connection between server and mongodb
.catch(err => console.error(err))
// the catch will catch any errors passed from mongoDB and will appear in the console

let indicatedPort;
const port = indicatedPort || 4533
//indicated port would come from your .env file or as prescribed by your host
// The || 'double pipe' means 'or' which allows you to write defaults

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})
// Listen is a method of express, which we pull through app
// Frist argument is the port, and the second is a callback function.



// Routes
app.use('/employees', require('./routes/employee-route'))