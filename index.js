const express = require("express");

// getting the post object
const Post = require("./src/Posts/Posts.model");

// creating an instance of express
const app = express();

// dbConnection
const dbConnection = require("./src/Utils/mysql.connector");

// getting a post
app.get("/", (request, response) => {
  return response.json(request.headers);
});

// creating a post
app.post("/api/v1/post", (request, response) => {
  return response.json({ ...Post, id: "somerandomID" });
});

// server port
//

// creating a server
app.listen(3000, () => {
  console.log("Server Running!!!");
  dbConnection.connect((error) => {
    if (error) throw error.message;

    console.log("Connected to the Database!!!");
  });
});
