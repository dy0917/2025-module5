import express, { Request, Response } from "express";
import { Post } from "./models/post";
import { genSalt, hash, compare } from "bcrypt-ts";
import { Login } from "./models/login";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const posts: Post[] = [
  {
    id: 1,
    title: "title",
    createdAt: new Date(),
    isCompleted: false,
  },
];

const logins: Login[] = [];

app.get("/", async (req: Request, res: Response) => {
  res.send(posts);
});

app.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const salt = await genSalt(10);
  const hashValue = await hash(password, salt);
  console.log(req.body);
  const login: Login = {
    username,
    password: hashValue,
    salt,
  };
  logins.push(login);
  res.send(204);
});

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const loginUser = logins.find((login) => (login.username = username));
  console.log("loginUser", loginUser);

  console.log(loginUser);
  const result = await compare(password, loginUser!.password);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
