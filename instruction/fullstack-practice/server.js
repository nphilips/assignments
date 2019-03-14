const express = require('express')
const uuid = require('uuid/v4')
const morgan = require('morgan')
const app = express()



// FAKE DATABASE
let wizards = [
    {
        firstName: "Harry",
        lastName: "Potter",
        isGood: true,
        _id: uuid()
    },
    {
        firstName: "Rubeus",
        lastName: "Hagrid",
        isGood: true,
        _id: uuid()
    },
    {
        firstName: "Ron",
        lastName: "Weasley",
        isGood: true,
        _id: uuid()
    },
    {
        firstName: "Hermione",
        lastName: "Granger",
        isGood: true,
        _id: uuid()
    },
    {
        firstName: "Tom",
        lastName: "Riddle",
        isGood: false,
        _id: uuid()
    },
]



app.get('/', (req, res) => {
    res.send(wizards)
})
app.get('/:_id', (req, res) => {
    const foundWizard = wizards.find(wizard => wizard._id === req.params._id)
    res.send(foundWizard)
})

app.post('/wizards', (req, res) => {
    const newWizard = req.body
    newWizard._id = uuid()
    wizards.push(newWizard)
    res.send(newWizard)

})

app.delete('/wizards/:_id', (req, res) => {
    const wizardID = req.params._id
    const updatedDB = wizards.filter(wizard => wizard._id !== wizardID)
    wizards = updatedDB
    res.send("Wizard successfully Deleted")
})


app.listen(7000, () => {
    console.log("Server is running on port 7000");
})