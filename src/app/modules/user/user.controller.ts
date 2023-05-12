import { NextFunction, Request, Response } from "express";
import { createUserDB, getUserDB, getUsersDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const user = await createUserDB(data);
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
  next();
};

export const getUsers = async(req: Request, res: Response, next: NextFunction)=>{
  const users = await getUsersDB();
  res.status(200).json({status: "Successfull", data: users})

}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  const user = await getUserDB(id);
  res.status(200).json({status: "successfull", data: user});
}
