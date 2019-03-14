const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema defines what the data should look like (enforces)
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    department: {
        type: String,
        enum: ["Clothing", "Food", "Jewelery", "Electronics",],
        required: true
    }
    
})


module.exports = mongoose.model("Todo", todoSchema) // Todo blueprint