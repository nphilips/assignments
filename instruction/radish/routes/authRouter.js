const express = require('express')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

// signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // Does that username exist already
        if(user){
            res.status(400)
            return next(new Error("That username is already taken"))
        }
        // Create User
        const newUser = new User(req.body)
        // pre-save hook fires, encrypts password, and then the .save() is executed
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // Create token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            // send Response
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })

})

// login
authRouter.post('/login', (req,res,next) => {
    // Find a user by that username (err, user)
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            status(500)
            return next(err)
        }
        // Does that user exist - send err "Username or password are incorrect"
        if(!user){
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }
        // User.checkPassword(req.body.password) - returns (err, isMatch)
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // if(!isMatch) - username or password are incorrect
            if(!isMatch){
                res.status(401)
                return next(new Error("Username or Password are incorrect"))
            }
        })
        // create token
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
        // send Response
        return res.status(200).send({user: user.withoutPassword(), token})
    })
})



module.exports = authRouter