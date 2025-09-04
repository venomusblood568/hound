"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonitorId = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const getMonitorId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Monitor ID is required" });
            return;
        }
        const monitor = await monitorSchema_1.default.findById(id);
        if (!monitor) {
            res.status(404).json({ message: "Monitor not found" });
            return;
        }
        return res.status(200).json(monitor);
    }
    catch (error) {
        console.log("Error fetching monitor: ", error);
        res.status(500).json({ message: "Server error", error });
        return;
    }
};
exports.getMonitorId = getMonitorId;
