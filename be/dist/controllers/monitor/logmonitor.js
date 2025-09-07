"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMonitor = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const logSchema_1 = __importDefault(require("../../models/logSchema"));
const logMonitor = async (req, res) => {
    try {
        const { id } = req.params;
        const monitor = await monitorSchema_1.default.findById(id);
        if (!monitor) {
            res.status(404).json({ message: "Monitor not found" });
            return;
        }
        const logs = await logSchema_1.default.find({ monitorId: id }).sort({ checkAt: -1 }).lean();
        res.json({
            monitorId: monitor._id,
            url: monitor.url,
            count: logs.length,
            result: logs.map((log) => ({
                status: log.status,
                responseTime: log.responseTime,
                checkedAt: log.checkAt,
            }))
        });
    }
    catch (error) {
        console.error("Error fetching monitor results:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.logMonitor = logMonitor;
