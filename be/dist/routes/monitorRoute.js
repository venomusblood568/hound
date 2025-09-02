"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createmonitor_1 = require("../controllers/monitor/createmonitor");
const getmonitor_1 = require("../controllers/monitor/getmonitor");
const middleware_1 = require("../middlewares/middleware");
const router = express_1.default.Router();
router.post("/createmonitor", middleware_1.Middleware, createmonitor_1.createMonitor);
router.get("/getmonitor", middleware_1.Middleware, getmonitor_1.getMonitors);
exports.default = router;
