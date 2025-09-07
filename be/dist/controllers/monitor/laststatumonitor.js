"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastCheckedStatus = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const logSchema_1 = __importDefault(require("../../models/logSchema"));
const lastCheckedStatus = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(404).json({ message: "user not found" });
            return;
        }
        const monitor = await monitorSchema_1.default.findById(id);
        if (!monitor) {
            res.status(404).json({ message: "Monitor not found" });
            return;
        }
        const latestLog = await logSchema_1.default.findOne({ monitorId: id }).sort({ checkAt: -1 }).lean();
        if (!latestLog) {
            res.status(404).json({ message: "No logs found for this monitor" });
            return;
        }
        res.json({
            monitorId: monitor._id,
            url: monitor.url,
            status: latestLog.status,
            responseTime: latestLog.responseTime,
            checkedAt: latestLog.checkAt,
        });
    }
    catch (error) {
        console.log(`Error fetching monitor status:`, error);
        res.status(500).json({ message: "Internal Server error" });
    }
};
exports.lastCheckedStatus = lastCheckedStatus;
