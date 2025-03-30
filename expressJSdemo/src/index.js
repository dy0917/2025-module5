const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    throw Error("this is an error");
  } catch (e) {
    console.log(e);
  }
  throw Error("second error is an error");
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  // throw Error("this is an error");
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
