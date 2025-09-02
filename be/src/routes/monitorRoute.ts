import express from "express";
import {createMonitor} from "../controllers/monitor/createmonitor";
import { Middleware } from "../middlewares/middleware";
const router = express.Router()

router.post("/createmonitor", Middleware, createMonitor); 

export default router;
