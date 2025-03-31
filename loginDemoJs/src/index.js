const express = require("express");
const app = express();
const port = 3000;
const loginRoute = require("./routes/login");
const helloRoute = require("./routes/hello");
const { verifyToken } = require("./middleware/tokenverify");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", loginRoute);

// protected endpoint
app.get("/hello", verifyToken, (req, res) => {
  res.send("hello world");
});

app.use("/api", verifyToken, helloRoute);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
