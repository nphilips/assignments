const express = require('express')
const app = express()

const todos = [
    {
        title: 'First Todo',
        _id: Math.random()
    },
    {
        title: 'Second Todo',
        _id: Math.random()
    },
]

// MIDDLEWARE
app.use(express.json())

// Routes
app.use('/todos', require('./routes/todos.js'))



app.listen(7000, () => {
    console.log('Server is running on port 7000');
})