import { Request,Response } from "express";
import { User } from "../../models";
import Monitor from "../../models/monitorSchema";

export const getMe = async(req:Request,res:Response) => {
    try {
        if(!req.user?.id){
            res.status(401).json({message:"Unauthorized"});
            return
        }

        const user = await User.findById(req.user?.id).select("-password");
        if(!user){
            res.status(404).json({message:"User not found"})
            return
        }
        const monitor = await Monitor.find({userId:req.user.id});
        res.status(200).json({
            user,
            monitor
        })
    } catch (error) {
        console.error("Error in /me route:", error);
        res.status(500).json({ message: "Server error", error });
        return
    }
}