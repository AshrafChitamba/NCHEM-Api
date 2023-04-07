const express = require('express')

// getting the post object
const Post = require("./src/Posts/Posts.model")

// creating an instance of express
const app = express()

// getting a post
app.get('/', (request , response) => {
    return response.json(request)
})

// server port
// 

// creating a server
app.listen(3000, () => console.log('Server Running'))