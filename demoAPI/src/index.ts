import express, { Request, Response } from "express";
import loginRouter from "./routers/account";
import { isAuth } from "./middleware/authentication";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(loginRouter);
app.use("/todos", isAuth, (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
