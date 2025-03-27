import express, { Request, Response } from "express";
import { Post } from "./models/post";
import loginRouter from "./routers/account";

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

app.get("/", async (req: Request, res: Response) => {
  res.send(posts);
});

app.use(loginRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
