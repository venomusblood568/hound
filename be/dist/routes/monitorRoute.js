"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createmonitor_1 = require("../controllers/monitor/createmonitor");
const getmonitor_1 = require("../controllers/monitor/getmonitor");
const idgetmonitor_1 = require("../controllers/monitor/idgetmonitor");
const updatemonitor_1 = require("../controllers/monitor/updatemonitor");
const middleware_1 = require("../middlewares/middleware");
const router = express_1.default.Router();
router.post("/createmonitor", middleware_1.Middleware, createmonitor_1.createMonitor);
router.get("/getmonitor", middleware_1.Middleware, getmonitor_1.getMonitors);
router.get("/getmonitorID/:id", middleware_1.Middleware, idgetmonitor_1.getMonitorId);
router.put("/getmonitorID/:id", middleware_1.Middleware, updatemonitor_1.updateMonitorId);
exports.default = router;
