import express from "express";
import {createMonitor} from "../controllers/monitor/createmonitor";
import { getMonitors } from "../controllers/monitor/getmonitor";
import { Middleware } from "../middlewares/middleware";
const router = express.Router()

router.post("/createmonitor", Middleware, createMonitor); 
router.get("/getmonitor",Middleware,getMonitors);
export default router;
