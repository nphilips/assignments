const express = require('express')
const profileRouter = express.Router()
const Game = require ('../models/game.js')


// - get all games - sorted by time  = /profile/
profileRouter.get("/", async (req, res, next) => {
    try {
        const games = await Game.find()
        return res.status(200).send(games)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

// - Get games by genre - req.params.genre === "action", "survival-horror"
// profileRouter.get("/games/:genre", (req, res, next) => {
//     Game.find({genre: req.params.genre}, (err, games) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(games)
//     })
// })



module.exports = profileRouter