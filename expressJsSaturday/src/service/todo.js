const todos = [];

const pushTodo = (todo) => {
  todos.push(todo);
};

const getAllTodos = () => {
  return todos;
};

const removeTodoById = (id) => {
  const targetId = todos.findIndex((todo) => todo.id == id);
  todos.splice(targetId, 1);
};

module.exports = {
  pushTodo,
  getAllTodos,
  removeTodoById
};
