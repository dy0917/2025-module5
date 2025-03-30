const express = require("express");
const router = express.Router();
const { addATodo, getTodos, delTodoById } = require("../controller/todo");

router.get("/", (req, res) => {
  console.log("todos");
  res.send(getTodos());
});

router.post("/new", (req, res) => {
  const { title, desc } = req.body;
  const todo = addATodo(title, desc);
  if (!todo) res.send(403);
  res.send(todo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (delTodoById(id)) {
    res.send(204);
  } else {
    res.send(403);
  }
});

module.exports = router;
