import { genSalt, hash, compare } from "bcrypt";
import { Login } from "../models/login";
import jwt from "jsonwebtoken";
import { newLoginAccount, findUserByUsername } from "../services/login";
const superSecretString = "jadfajkflahsfjklasfd";
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
  if (await compare(password, loginUser!.password)) {
    const token = jwt.sign(loginUser, superSecretString, { expiresIn: "7d" });

    var decoded = jwt.verify(token, superSecretString);
    console.log('account',decoded);
    return { token };
  }
  return undefined;
};

export { register, login };
