import cors from "cors";
import express, { Application } from "express";
const app: Application = express();
// Middleware
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRouter from "../../app/modules/user/user.route"


app.use("/api/v1/user", userRouter);

export default app;
