const { genSalt, hash, compare } = require("bcrypt");

async function init() {
  const salt = await genSalt(10);
  const password = "Password1";
  const hashValue = await hash(password, salt);
  console.log(hashValue);
  const result = await compare("Password2", hashValue);
  console.log(result);
}

init();
