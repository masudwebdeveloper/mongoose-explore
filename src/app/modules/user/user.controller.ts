import { NextFunction, Request, Response } from "express";
import { createUserDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await createUserDB();
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
  next();
};
