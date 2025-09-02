import Monitor from "../../models/monitorSchema";
import { Request, Response } from "express";

export const createMonitor = async (req: Request, res: Response) => {
  try {
    const { url, Projectname, active, notifyEmail } = req.body;

    if (!url || !Projectname) {
      res.status(400).json({ message: "url & project name are required..." });
      return;
    }

    const newMonitor = new Monitor({
      userId: req.user!.id,
      url,
      Projectname,
      active,
      notifyEmail,
    });

    await newMonitor.save();

    res.status(201).json({
      message: "Monitor created successfully",
      data: newMonitor,
    });
  } catch (error) {
    console.error("Error in creating monitor:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
