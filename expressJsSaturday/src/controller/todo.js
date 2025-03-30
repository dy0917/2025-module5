const { pushTodo, getAllTodos, removeTodoById } = require("../service/todo");
const {isAuth} = require('../controller/account')

const addATodo = (title, desc) => {

  const id =
    getAllTodos().length === 0
      ? getAllTodos().length + 1
      : getAllTodos()
          .map((todo) => todo.id)
          .sort()
          .reverse()[0] + 1;

  if (!title) return undefined;
  const todo = {
    id,
    title,
    desc,
    createdAt: new Date(),
    isCompleted: false,
  };

  pushTodo(todo);
  return todo;
};

const getTodos = () => {
  return getAllTodos();
};

const getTodoById = (id) => {
  return getAllTodos().find((todo) => todo.id == id);
};

const delTodoById = (id) => {
  const target = getAllTodos().find((todo) => todo.id == id);
  if (target) {
    removeTodoById(id);
    return true;
  } else {
    return false;
  }
};
module.exports = {
  getTodos,
  addATodo,
  getTodoById,
  delTodoById,
};
