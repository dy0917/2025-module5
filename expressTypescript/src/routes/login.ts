import express, { Request, Response } from "express";
const loginRouter = express.Router();

loginRouter.get("/", (req: Request, res: Response) => {
  res.send("post route");
});

loginRouter.get("/new", (req: Request, res: Response) => {
    res.send("new post route");
  });

export default loginRouter;
