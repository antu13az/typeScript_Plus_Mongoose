import express from "express";
import { createAUser } from "./user.controler";
const router = express.Router()

router.get("/",createAUser)

export default router