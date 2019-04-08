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
    genre: [{
        type: String,
        enum: ['action', 'actAdv', 'adventure', 'rpg', 'simulation', 'strategy', 'sports', 'firstPersonShooter'],
        required: true
    }],
    subGenre: {
        type: String,
        enum: [ 'platform', 'shooter', 'fighting', 'stealth', 'survival', 'rhythm','survival-horror', 'metroidvania','text', 'graphic', 'visual-novel', 'interactive', 'real-time-3d','action', 'rpg', 'roguelike', 'tactical', 'sandbox', 'first-person', 'fantasy', 'construction-&-management', 'life', 'vehicle','4X', 'artillary', 'rts', 'rtt', 'moba', 'tower-defense', 'tbs', 'tbt', 'wargame', 'grand-strat-wargame', 'mmo', 'racing', 'sports', 'competitive', 'fighting']
    }
})

module.exports = mongoose.model("Game", gameSchema)