const mongoose = require('mongoose')
// mongoose has methods that interact with mongoDB
// Schemas allow mongoose to organize the data

const Schema = mongoose.Schema
// Helps construct new Schema objects
// Note: the new Schema method takes an object as an argument


// Each key is should correlate with the keys of the incoming objects from the client
// Each key will default to request the type
// However, you may also pass in an object that specifies the values more clearly
const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: String,
    hireDate: {
        type: Date,
        required: true
    },
    SSN: Number,
    address: String,
    isCool: {
        type: Boolean,
        default: false,
    },
    ethnicity: {
        type: String,
        enum: ['Caucasian', 'Hispanic', 'Dragon', 'Asian', 'Mulatto']
    }
})

module.exports = mongoose.model('Employee', employeeSchema)
// Note the model method of mongoose takes two arguments
// the first argument is a string by which an instance of the Schema
// the second argument is the Schema template