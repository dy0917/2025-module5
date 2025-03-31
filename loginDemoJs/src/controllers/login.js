const { genSalt, hash, compare } = require("bcrypt");
const { addAccount, getAccounts } = require("../services/account");
const jwt = require("jsonwebtoken");
const superSecretString = "superSecretHash";
const createANewAccount = async (username, password) => {
  const salt = await genSalt(10);
  const hashValue = await hash(password, salt);

  const account = { username, password: hashValue };
  addAccount(account);
  return account;
};

const login = async (username, password) => {
  const targetAccount = getAccounts().find((a) => a.username == username);
  if (!targetAccount) return false;
  if (compare(targetAccount.password, password)) {
    const token = jwt.sign(targetAccount, superSecretString, {
      expiresIn: "7d",
    });
    return token;
  }
  return false;
};

module.exports = {
  createANewAccount,
  login,
};
