const express = require('express')
const uuid = require('uuid')
const app = express()

let todos = [
    {
        name: "The first name",
        description: "The description of the first todo",
        imageUrl: "https://media.giphy.com/media/JJGUejl0pLcRy/giphy.gif",
        completed: false,
        _id: uuid()
    },
    {
        name: "The second name",
        description: "The description of the second todo",
        imageUrl: "https://i.imgflip.com/pqqzt.jpg",
        completed: true,
        _id: uuid()
    },
    {
        name: "The third name",
        description: "The description of the third todo",
        imageUrl: "https://media.giphy.com/media/BsREz40Fvhylq/giphy.gif",
        completed: false,
        _id: uuid()
    },
]

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/todos/:_id', (req, res) => {
    const ID = req.params._id
    foundTodo = todos.find(todo => todo._id === ID)
    if(!foundTodo){
        res.send('Sorry, todo not found')
    }
    res.send(foundTodo)
})

app.post('/todos', (req, res) => {
    req.body._id = uuid()
    todos.push(req.body)
    res.send(req.body)
})

app.delete('/todos/:_id', (req, res) => {
    const updatedTodos = todos.filter(todo => todo._id === req.params._id)
    todos = updatedTodos
    res.send(todos)
})

app.put('/todos/:_id', (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    Object.assign(foundTodo, req.body)
    res.send(foundTodo)
})

app.listen(2300, () => {
    console.log("Running on port 2300");
})