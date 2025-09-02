import { Request,Response } from "express";
import { User } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

export const login = async(req:Request, res:Response) => {
    const{email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({message:"User not found"})
            return
        }

        const Ismatch = await bcrypt.compare(password,user.password);
        if(!Ismatch){
            res.status(401).json({message:"Invalid Credentials"})
            return
        }
        const token = jwt.sign(
            {id: user._id, email: user.email},
            JWT_SECRET as string,
            {expiresIn : "1h"},
        )
        res.status(200).json({message:"Login Successful", token, user});
            
    } catch (error) {
        res.status(500).json({message:"Login Failed", error});
    }
}