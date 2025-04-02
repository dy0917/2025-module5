const express = require("express");
const router = express.Router();
const { lib } = require("../controllers/oop");


router.get("/increase", (req, res) => {
  lib.increase();
  res.send({ result: lib.getInit() });
});

module.exports = router;
