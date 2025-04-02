const express = require("express");
const router = express.Router();
const { lib } = require("../controllers/oop");
router.get("/decrease", (req, res) => {
  lib.decrease();
  res.send({ result: lib.getInit() });
});

module.exports = router;
