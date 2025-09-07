import express from "express";
import {createMonitor} from "../controllers/monitor/createmonitor";
import { getMonitors } from "../controllers/monitor/getmonitor";
import { getMonitorId } from "../controllers/monitor/idgetmonitor";
import { updateMonitorId } from "../controllers/monitor/updatemonitor";
import { deleteMonitors } from "../controllers/monitor/deletemonitor";
import { lastCheckedStatus } from "../controllers/monitor/laststatumonitor";
import { logMonitor } from "../controllers/monitor/logmonitor";

import { Middleware } from "../middlewares/middleware";

const router = express.Router()

router.post("/createmonitor", Middleware, createMonitor); 
router.get("/getmonitor",Middleware,getMonitors);
router.get("/getmonitorID/:id",Middleware,getMonitorId);
router.put("/getmonitorID/:id",Middleware,updateMonitorId);
router.delete("/deletemonitorID/:id",Middleware,deleteMonitors);
router.get("/lastcheck/status/:id",Middleware,lastCheckedStatus);
router.get("/logmonitor/status/:id",Middleware,logMonitor);


export default router;