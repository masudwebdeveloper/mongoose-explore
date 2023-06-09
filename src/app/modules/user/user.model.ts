import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

 //second step: create a schema
 const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    email: { type: String },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permenantAddress: {
      type: String,
      required: true,
    },
  });

  //third step:create a model
  const User = model<IUser>("User", userSchema);

  export default User;