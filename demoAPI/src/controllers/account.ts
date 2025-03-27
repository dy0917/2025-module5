import { genSalt, hash, compare } from "bcrypt";
import { Login } from "../models/login";
import { newLoginAccount, findUserByUsername } from "../services/login";
const register = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const salt = await genSalt(10);
  const hashValue = await hash(password, salt);

  const login: Login = {
    username,
    password: hashValue,
    salt,
  };
  const result = newLoginAccount(login);
  return result;
};

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const loginUser = findUserByUsername(username);
  if (!loginUser) return undefined;
  console.log(loginUser);
  if (await compare(password, loginUser!.password)) {
    return loginUser;
  }
  return undefined;
};

export { register, login };
