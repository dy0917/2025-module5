const { getAllTodos, pushTodo } = require("../../service/todo");
const { addATodo } = require("../todo");

jest.mock("../../service/todo", () => ({
  getAllTodos: jest.fn(() => [
    {
      id: 22,
    },
  ]),
  pushTodo: jest.fn(),
}));

test("Add a Todo function", () => {
  const mockDate = new Date();
  jest.spyOn(global, "Date").mockImplementation(() => mockDate);

  expect(addATodo("title", "desc")).toStrictEqual({
    desc: "desc",
    id: 23,
    isCompleted: false,
    title: "title",
    createdAt: mockDate,
  });
});
