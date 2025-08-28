import { Router } from "express";
import { getAllMonitors,testMonitor } from "../controllers/montiorController";

const router = Router();

router.get("/", getAllMonitors);     // GET /monitor → returns all monitors
router.post("/test", testMonitor);  // POST /monitor/test → checks one url

export default router;