const express = require("express");
const router = express.Router();
const { Login } = require("../controllers/login");
const login = new Login();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  login.createANewAccount(username, password);
  res.sendStatus(204);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const result = await login.login(username, password);
  console.log("result", result);
  result ? res.send({ token: result }) : res.sendStatus(403);
});

module.exports = router;
