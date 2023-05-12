import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";
const app: Application = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  /**
   * interface = done
   * scheme = done
   * model = done 
   * database query
   */
  // create an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "Male" | "Female";
    email?: string;
    contactNo: string;
    emergencyContact: string;
    presentAddress: string;
    permenantAddress: string;
  }

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
      enum: ["male", "female"],
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

  res.send("Hello World!");
});

export default app;
