import { Request,Response } from "express";
import Monitor from "../../models/monitorSchema";
import Log from "../../models/logSchema";

export const logMonitor = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const monitor = await Monitor.findById(id);
        if(!monitor){
            res.status(404).json({message:"Monitor not found"});
            return
        }
        const logs = await Log.find({monitorId: id}).sort({checkAt:-1}).lean();
        res.json({
            monitorId:monitor._id,
            url:monitor.url,
            count:logs.length,
            result: logs.map((log) => ({
                status: log.status,
                responseTime: log.responseTime,
                checkedAt: log.checkAt,
            }))
        })
    } catch (error) {
        console.error("Error fetching monitor results:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}