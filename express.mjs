import express from "express";
import morgan from "morgan";
import bp from "body-parser";

const { urlencoded, json } = bp;

// db to store todos
const db = {
  todos: [],
};

// express app
const app = express();

app.use(json()); // use json
app.use(morgan("dev")); // to get logs

// get request returns all todos in db
app.get("/todos", (req, res) => {
  res.json({ data: db.todos });
});

// post request add new todo to db
app.post("/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text };
  db.todos.push(newTodo);
  res.json({ data: newTodo });
});

// server on port 8000
app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});
