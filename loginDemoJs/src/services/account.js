const userAccounts = [];

const addAccount = (account) => {
  userAccounts.push(account);
};

const getAccounts = () => {
  return userAccounts;
};

module.exports = {
  addAccount,
  getAccounts,
};
