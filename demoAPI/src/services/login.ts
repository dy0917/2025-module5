import { Login } from "../models/login";

const logins: Login[] = [];

const newLoginAccount = (login: Login) => {
  logins.push(login);
  return login;
};

const findUserByUsername = (username: string) => {
  return logins.find((login) => (login.username == username));
};

export { newLoginAccount, findUserByUsername };
