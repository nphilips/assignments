const express = require('express')
const uuid = require('uuid/v4')
const userRouter = express.Router()


// FAKE USERS
let users = [
    {
        name: "Rick",
        age: 70,
        pets: ["hippo", 'mole rat'],
        _id: uuid()
    },
    {
        name: "Morty",
        age: 13,
        pets: ["Rick"],
        _id: uuid()
    }
]

userRouter.route('/')
    .get((req,res) =>{
        res.send(users)
    })
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuid()
        users.push(newUser)
        res.send(newUser)
    })

userRouter.route('/:_id')
    .get((req, res) => {
    const foundUser = users.find(user => user._id === req.params._id)
    res.send(foundUser)
    })
    .delete((req, res) => {
        const updatedDB = users.filter(user => user._id !== req.params._id)
        users = updatedDB
        res.send({message: "User succesfully deleted"})
    })
    .put((req, res) => {
        const foundUser = users.find(user => user._id === req.params._id)
        Object.assign(foundUser, req.body)
        res.send(foundUser)
    })
// Get All
// userRouter.get('/', (req, res) => {
//     res.send(users)
// })

//Get One
// userRouter.get('/:_id', (req, res) => {
//     const foundUser = users.find(user => user._id === req.params._id)
//     res.send(foundUser)
// })

// POST (ADD ONE)
// userRouter.post("/", (req, res) => {
//     const newUser = req.body
//     newUser._id = uuid()
//     users.push(newUser)
//     res.send(newUser)
// })

// DELETE (DELETE ONE)
// userRouter.delete('/:_id', (req, res) => {
//     const updatedDB = users.filter(user => user._id !== req.params._id)
//     users = updatedDB
//     res.send({message: "User succesfully deleted"})
// })

// PUT (EDIT ONE)
// userRouter.put('/:_id', (req, res) => {
//     const foundUser = users.find(user => user._id === req.params._id)
//     Object.assign(foundUser, req.body)
//     res.send(foundUser)
// })



module.exports = userRouter