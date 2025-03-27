"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRouter = express_1.default.Router();
const todos = [
    {
        id: 1,
        title: "",
        createdAt: new Date(),
        isCompleted: false,
    },
];
todoRouter.get("/", (req, res) => {
    res.send(todos);
});
todoRouter.post("/new", (req, res) => {
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
exports.default = todoRouter;
