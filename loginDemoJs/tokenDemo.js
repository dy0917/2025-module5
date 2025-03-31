const jwt = require("jsonwebtoken");

const superSecretString = "superSecretHash";

const loginUser = {
  username: "Kingsley",
  password: "password",
};
const token = jwt.sign(loginUser, superSecretString, { expiresIn: "7d" });

console.log(token);

var decoded = jwt.verify(token, superSecretString);
console.log(decoded);
