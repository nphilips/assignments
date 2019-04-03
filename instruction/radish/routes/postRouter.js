const express = require('express')
const postRouter = express.Router()
const Post = require("../models/post.js")

// AUTH REQUIRED - So we have req.user._id

// POST - add new post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})


module.exports = postRouter