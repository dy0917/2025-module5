const express = require("express");
const router = express.Router();
const { createANewAccount, login } = require("../controllers/login");

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  createANewAccount(username, password);
  res.sendStatus(204);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  login(username, password) ? res.sendStatus(204) : res.sendStatus(403);
});

module.exports = router;
