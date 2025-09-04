import { Request,Response } from "express";
import Monitor from "../../models/monitorSchema";

export const deleteMonitors = async(req:Request, res:Response) => {
    try {
        const {id} = req.params;
        if(!id){
            res.status(400).json({message:"Monitor Id is required"});
            return
        }
        const deleteMonitor = await Monitor.findByIdAndDelete(id);
        if(!deleteMonitor){
            res.status(404).json({message:"Monitor not found"});
            return
        }
        return res.status(200).json({
            message:"Monitor deleted successfully",
            deleteMonitor
        })
    } catch (error) {
        console.log("Error deleting monitor:", error);
        res.status(500).json({message:"Server error",error});
        return
    }
}