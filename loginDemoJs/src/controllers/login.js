const { addAccount, getAccounts } = require("../services/account");

const createANewAccount = (username, password) => {
  const account = { username, password };
  addAccount(account);
  return account;
};

const login = (username, password) => {
  const targetAccount = getAccounts().find((a) => a.username == username);
  if (!targetAccount) return false;
  console.log(targetAccount.password, password);
  return targetAccount.password == password;
};

module.exports = {
  createANewAccount,
  login,
};
