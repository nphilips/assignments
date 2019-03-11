const express = require('express')
const uuid = require('uuid/v4')
const app = express()

let people = [
    {
        name: "Rick",
        age: 70,
        _id: uuid(),
    },
    {
        name: "Morty",
        age: 13,
        _id: uuid(),
    },
    {
        name: "Birdman",
        age: 'unknown',
        _id: uuid(),
    },
]

// Middleware
app.use(express.json())


app.get("/", (req, res) => {
    //work out some logic
    // query db
    // send response to client
    res.send("Hello World")
})
//GET ALL (Collection)//
app.get('/people', (req, res) => {
    res.send(people)
})

//GET ONE (Resource)//
app.get('/people/:_id', (req, res) => {
    // Grab ID from the req.params object
    const ID = req.params._id
    // Find the person object by it's ID in the database
    const foundPerson = people.find(person => person._id === ID)
    // Send back updated Object
    if(!foundPerson){
        res.send('Person Not Found')
    }
    res.send(foundPerson)
})

// POST - Add one
app.post('/people', (req, res) => {
    // Add ID to the request body
    req.body._id = uuid()
    // Add it to the fake database
    people.push(req.body)
    // Send back updated Object, (or entire collection if you want)
    res.send(req.body)
})

// DELETE - delete one
app.delete('/people/:_id', (rec, res) => {
    // Create new array by filtering out the person who has the ID from req.params
    const updatedPeople = people.filter(person => person._id != req.params._id)
    // Re-assign our old database (array) to the new updated array
    people = updatedPeople
    // Send back updated array to confirm object(resourse) was removed
    res.send(people)
})  

// PUT - Update one
app.put('/person/:_id', (req, res) => {
    // Use the ID to find the object to update
    const foundPerson = people.find(person => person.perams_id === ID)
    // Update that object
    Object.assign(foundPerson, req.body)
    // Send back the updated object
    res.send(foundPerson)
    
})



app.listen(5800, () => {
    console.log("server is running on port 5800");
})
