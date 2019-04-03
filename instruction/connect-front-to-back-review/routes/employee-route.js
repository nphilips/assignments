const express = require('express')
// Access to express library
const employeeRoute = express.Router()
// Access to express routes
// Note: It tags onto the first endpont mentioned in the server || app.use('/employee')

const Employee = require('../employeeSchema')
// this refers to an instance of the 'employee schema'
// note: this Schema is only a template to create 
// Note: ../ sends you back a directory (folder)

employeeRoute.route('/')
//Note: the rest of the endpoint exists on the server file where the route was referenced
// in server file as app.use('/employee', require('./employeeRoutes.js))

    // Here we chain how we handle the requrests at this endpoint
    // now we will handle our CRUD requests starting with get()

.get((req, res) => {
    //Note: the get() method takes a callback function
    // We will give it the parameters of req ('requrest')
    Employee.find((err, employee) => {
        // We typically handle errors first to see if there was any problems
        if(err){
            // The condition checks to see if an error exists
            return res.status(500).send(err)
            // .next() method is coming from the third part
            // used for error handling
            // pass in the argument 'err'

            // .status() method will change the response status property with the passed in argument (500)
            // .next() method will pass the error to 
            
        } else {
            res.status(200).send(employee)
        }
        // err&& res.status(500).send(err) // Shorcut version of the above if statement
    })
})

.post((req, res) => {
    const newEmployee = new Employee(req.body)
    // new Employee() method takes one argument
    // returns a new object containing info from the request
    // The info from the request is organized according to the Schema
    
})








module.exports = employeeRoute
// Exporting the route so the other files have access to this file