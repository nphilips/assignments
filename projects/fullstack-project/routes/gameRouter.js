const express = require('express')
const gameRouter = express.Router()
const Game = require("../models/game.js")

// AUTH REQUIRED - So we have req.user._id

gameRouter.get("/", (req, res, next) => {
    Game.find((err, games) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(games)
    })
})



module.exports = gameRouter