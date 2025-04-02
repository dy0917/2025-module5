const express = require("express");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const cors = require("cors");
const app = express();
const port = 3000;

const postRouter = require("./router/post");
const loginRouter = require("./router/login");
const todoRouter = require("./router/todos");
const calcRouter = require("./router/calculator");
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// index route
app.get("/", (req, res) => {
  console.log("thisis my first route");
  res.send("Hello World!");
});

app.use("/posts", postRouter);
app.use("/todos", todoRouter);
app.use("/login", loginRouter);
app.use("/calculator", calcRouter);

app.get("hello", (req, res) => {});

app.use((error, req, res, next) => {
  if (error) {
    console.log(error);
    res.send(403);
  }
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

module.exports = app;
