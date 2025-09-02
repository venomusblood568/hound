import { Request,Response } from "express";
import Monitor from "../../models/monitorSchema";


export const getMonitors = async(req:Request,res:Response) =>{
    try {
        if(!req.user || !req.user.id){
            res.status(401).json({message:"Unauthorized"})
            return
        }
        const monitor = await Monitor.find({userId: req.user.id});
        if(monitor.length === 0){
            res.status(200).json({Monitor: []});
        }
        res.status(200).json({monitor})
    } catch (error) {
        console.log("Error in getting List:",error)
        res.status(500).json({message:"Server Error"})
    }
}