const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  res.send({ result: parseInt(num1) +  parseInt(num2) });
});

router.post("/minus", (req, res) => {
  const { num1, num2 } = req.body;
  res.send({ result: num1 - num2 });
});

module.exports = router;
