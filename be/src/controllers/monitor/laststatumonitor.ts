import { Request, Response } from "express";
import Monitor from "../../models/monitorSchema";
import Log from "../../models/logSchema";

export const lastCheckedStatus = async(req:Request, res:Response) =>{
    try {
        const{id} = req.params;
        if(!id){
            res.status(404).json({message:"user not found"})
            return
        }
        const monitor = await Monitor.findById(id);
        if(!monitor){
            res.status(404).json({message:"Monitor not found"})
            return
        }
        const latestLog = await Log.findOne({monitorId: id}).sort({checkAt:-1}).lean();
        if(!latestLog){
            res.status(404).json({message:"No logs found for this monitor"});
            return
        }   
        res.json({
            monitorId: monitor._id,
            url: monitor.url,
            status: latestLog.status,
            responseTime: latestLog.responseTime,
            checkedAt: latestLog.checkAt,
        })
    } catch (error) {
        console.log(`Error fetching monitor status:`, error)
        res.status(500).json({message:"Internal Server error"})
    }
}