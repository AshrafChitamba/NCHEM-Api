import express from "express";
import cors from "cors";

// creating an instance of express
const app = express();
// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "3mb" }));

// dbConnection
import dbConnection from "./src/Utils/mysql.js";

// getting posts
app.get("/api/v1", (request, response) => {
  // getting posts
  dbConnection.query(`SELECT * FROM posts`, (error, result) => {
    if (error) throw error.message;

    return response.json(result);
  });
});

// creating a post
app.post("/api/v1/post", (request, response) => {
  const { id, title } = request.body;

  const postQuerry = `INSERT INTO posts VALUES('${id}', '${title}')`;

  dbConnection.query(postQuerry, (error, result) => {
    if (error) throw error.message;

    return response.json(result);
  });
});

app.delete("/api/v1/post/:id", (request, response) => {
  const { id } = request.params;

  const deleteQuerry = `DELETE FROM posts WHERE id='${id}'`;

  dbConnection.query(deleteQuerry, (error, result) => {
    if (error) throw error.message;

    return response.json(result);
  });
});

// server port
const port = process.env.PORT | 3000;

// creating a server
app.listen(port, () => {
  console.log("Server Running!!!");
  dbConnection.connect((error) => {
    if (error) throw error.message;

    console.log("Connected to the Database!!!");
  });
});
