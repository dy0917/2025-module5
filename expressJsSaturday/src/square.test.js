const { square } = require("./square");
// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
test("square 5 to get 25", () => {
  const actualResult = square(5);
  const expectedResult = 25;
  expect(actualResult).toBe(expectedResult);
});
