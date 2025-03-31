const jwt = require("jsonwebtoken");
const superSecretString = "superSecretHash";

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.sendStatus(403);
    return;
  }
  const token = authorization.replace("bearer ", "");
  try {
    var decoded = jwt.verify(token, superSecretString);
    next();
  } catch (e) {
    res.sendStatus(403);
  }
};

module.exports = {
  verifyToken,
};
