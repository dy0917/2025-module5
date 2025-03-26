import express, { Request, Response } from "express";
const postRouter = express.Router();

postRouter.get("/", (req: Request, res: Response) => {
  res.send("post route");
});

postRouter.get("/new", (req: Request, res: Response) => {
    res.send("new post route");
  });

export default postRouter;
