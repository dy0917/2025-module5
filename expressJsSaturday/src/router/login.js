const express = require("express");
const router = express.Router();

router.get("/logins", (req, res) => {
  res.send("login route");
});

module.exports = router;
