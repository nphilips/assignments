const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: "https://image.shutterstock.com/image-vector/radish-cartoon-character-bright-juicy-260nw-479480335.jpg"
    },
    votes: {
        type: Number,
        default: 0
    },
    genre: {
        type: String,
        enum: ["action", "action-adventure", "adventure", "role-playing", "simulation", "strategy", "sports", "mmo",],
        required: true
    },
    subGenre: {
        type: String,
        enum: ["horror", "entertainment", "humor", "news", "sports", "culture", "science", "arts", "celebrity", "awhcute", "hobbies", "politics", "music", "architecture", "weather", "john mayer"],
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String,
        default: []
    }]
})

module.exports = mongoose.model("Game", gameSchema)