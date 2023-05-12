import cors from "cors";
import express, { Application, Request, Response } from "express";
import { Schema } from "mongoose";
const app: Application = express();
// Middleware
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");

  /**
 * Step1: Interface
 * Step2: Schema
 * Step3: Model
 * Step4: Database Query
 
 * */

  // Step--1 Create an Interface

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
    gender: "male" | "female";
    email?: string;
    contactNo: number;
    emergencyContact: number;
    presentAddress: string;
    permanentAddress: string;
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
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    email: {
      type: String,
    },
    contactNo: {
      type: Number,
      required: true,
    },
    emergencyContact: {
      type: Number,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });
});

export default app;
