const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./database/db");
const Todo = require("./models/todo.model");
require("dotenv").config();

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  console.log(process.env.MONGO_CON_STR);
  res.json({ message: "OK" });
});

// ADD
app.post("/api/add", async (req, res) => {
  const text = req.body.text;

  const newTodo = new Todo({ text });

  await newTodo.save();

  res.json({ status: "ok", data: newTodo });
});

// GET
app.get("/api/get", async (req, res) => {
  const todos = await Todo.find({});

  res.json({ status: "ok", data: todos });
});

// CLEAR
app.post("/api/clear", async (req, res) => {
  await Todo.deleteMany({});

  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running..."));
