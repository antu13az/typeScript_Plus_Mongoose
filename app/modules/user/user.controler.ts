import { Request, Response } from "express"
import { createUserToDb } from "./user.service"

export const createAUser = async(req: Request, res: Response)=>{

   const user = await createUserToDb()

   res.status(200).json({
    status: "success",
    data: user
   })
} 

// Route call debe tar controler ke R Controler call debe tar service ke