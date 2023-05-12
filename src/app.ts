import express, { Application } from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";
const app: Application = express();

//milldeware
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRoute);

export default app;
