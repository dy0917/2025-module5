import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const superSecretString = "jadfajkflahsfjklasfd";
const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  console.log(req.headers);
  const token = authorization!.replace("bearer ", "");
  try {
    var decoded = jwt.verify(token, superSecretString);
    console.log('middle',decoded);
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

export { isAuth };
