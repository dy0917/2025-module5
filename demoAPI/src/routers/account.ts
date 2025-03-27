import express, { Request, Response } from "express";
import { register, login } from "../controllers/account";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  await register({ username, password });
  res.send(204);
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await login({ username, password });
  if (!result) res.send(404);
  res.send(result);
});

export default router;
