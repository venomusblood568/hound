import { Request,Response } from "express";
import Monitor from "../../models/monitorSchema";

export const updateMonitorId = async(req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        if(!id){
            res.status(400).json({message:"Monitor ID is required"})
            return
        }

        const{url, Projectname, active, notifyEmail} = req.body;
        const updateMonitor = await Monitor.findByIdAndUpdate(
            id,
            {url,Projectname,active,notifyEmail},
            {new:true, runValidators:true}
        );
        if(!updateMonitor){
            res.status(404).json({message:"Monitor not found"})
            return
        }
        return res.status(200).json({message:"Update complete", updateMonitor});
     } catch (error) {
        console.log("Error updating monitor: ",error);  
        return res.status(500).json({message:"Server error", error})
    }
}