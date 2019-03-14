const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

const fakeDB = [{}, {}]

// GET ALL
todoRouter.get('/', (req, res) => {
    Todo.find((err, todos) => {
        // Always handle DB errors First
        if(err){
            res.status(500)
            return res.send(err)
        }
        // Send Back Response
        return res.status(200).send(todos)
    })
})

// GET One
todoRouter.get('/:_id', (req, res) => {
            // This object is our filtering criteria for what we are asking for
    Todo.findOne({_id: req.params._id}, (err, foundTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})

// POST Add one
todoRouter.post("/", (req, res) => {
    // Create the new todo object using our Schema (blueprint)
    const newTodo = new Todo(req.body)
    newTodo.save((err, newTodoObject) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodo)
    })
})

// DELETE
todoRouter.delete('/:_id', (req, res) => {
    Todo.findOneAndRemove({_id: req.params._id}, (err, deletedTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully deleted item with Title: ${dletedTodo.title}`)
    })
})

// PUT
todoRouter.put('/:_id', (req, res) => {
    Todo.findOneAndUpdate(
        {_id: req.params._id}, // Find the todo with this _id
        req.body,              // Update it with this object
        {new: true},           // Please send the new one, not the old one...
        (err, updatedTodo) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedTodo)
    })
})






module.exports = todoRouter