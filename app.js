const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./database/db");
const Todo = require("./models/todo.model");

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ message: "OK" });
});

app.post("/api/add", async (req, res) => {
  const text = req.body.text;

  const newTodo = new Todo({ text });

  await newTodo.save();

  res.json({ status: "ok", data: newTodo });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running..."));
