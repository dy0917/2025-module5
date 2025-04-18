import express, { Request, Response, NextFunction, response } from "express";
import postRouter from "./routes/post";
import loginRouter from "./routes/login";
import todoRouter from "./routes/todo";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use("/", express.static("public"));
app.use("/post", postRouter);
app.use("/todos", todoRouter);
app.use("/login", loginRouter);

interface QueryTypes {
  num1?: string;
  num2?: string;
}

app.get("/add", (req: Request, res: Response) => {
  const query = req.query;
  const { num1, num2 }: QueryTypes = query;
  console.log(query);
  const result = parseInt(num1!) + parseInt(num2!);
  res.send({result});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
