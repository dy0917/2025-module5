import express, { Request, Response } from "express";
import { Todo } from "../models/todo";
const todoRouter = express.Router();

const todos: Todo[] = [
  {
    id: 1,
    title: "",
    createdAt: new Date(),
    isCompleted: false,

  },
];

todoRouter.get("/", (req: Request, res: Response) => {
  res.send(todos);
});

todoRouter.post("/new", (req: Request, res: Response) => {
  const { title, desc } = req.body;
  console.log(req.body, title, desc);
  const newTodo = {
    id: todos.length + 1,
    title,
    desc,
    createdAt: new Date(),
    isCompleted: false,
  };
  todos.push(newTodo);
  res.send(newTodo);
});

export default todoRouter;
