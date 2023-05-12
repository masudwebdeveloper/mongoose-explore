import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUsersDB = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

export const getUserDB = async(payload: string) =>{
  const user = await User.findOne({id: payload});
  return user;

}
