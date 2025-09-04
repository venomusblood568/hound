import { Request,Response } from "express";
import Monitor from "../../models/monitorSchema";

export const getMonitorId = async(req:Request, res:Response) =>{
    try {
        const {id} = req.params;
        if(!id){
            res.status(400).json({message:"Monitor ID is required"})
            return
        }
        const monitor = await Monitor.findById(id);
        if(!monitor){
            res.status(404).json({message:"Monitor not found"})
            return
        }
        return res.status(200).json(monitor);
    } catch (error) {
        console.log("Error fetching monitor: ",error);
        res.status(500).json({message:"Server error", error})
        return
    }
}