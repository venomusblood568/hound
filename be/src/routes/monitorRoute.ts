import express from "express";
import {createMonitor} from "../controllers/monitor/createmonitor";
import { getMonitors } from "../controllers/monitor/getmonitor";
import { getMonitorId } from "../controllers/monitor/idgetmonitor";
import { updateMonitorId } from "../controllers/monitor/updatemonitor";

import { Middleware } from "../middlewares/middleware";

const router = express.Router()

router.post("/createmonitor", Middleware, createMonitor); 
router.get("/getmonitor",Middleware,getMonitors);
router.get("/getmonitorID/:id",Middleware,getMonitorId);
router.put("/getmonitorID/:id",Middleware,updateMonitorId);

export default router;