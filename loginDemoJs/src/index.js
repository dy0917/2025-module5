const express = require("express");
const app = express();
const port = 3000;
const loginRoute = require("./routes/login");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", loginRoute);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
