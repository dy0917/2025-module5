const express = require("express");
const router = express.Router();
const { createANewAccount, login } = require("../controllers/login");

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  createANewAccount(username, password);
  res.sendStatus(204);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const result = await login(username, password);
  console.log("result", result);
  result ? res.send({ token: result }) : res.sendStatus(403);
});

module.exports = router;
