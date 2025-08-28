// controllers/monitorController.ts
import { Request, Response } from "express";
import { monitors } from "../models/monitor";
import { checkService } from "../services/checkService";

export async function getAllMonitors(req: Request, res: Response) {
  return res.status(200).json(monitors);
}

export async function testMonitor(req: Request, res: Response) {
  try {
    const url = req.body.url || req.query.url;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const result = await checkService(url);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error("Error in testMonitor:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
}
