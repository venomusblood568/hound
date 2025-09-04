"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMonitorId = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const updateMonitorId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Monitor ID is required" });
            return;
        }
        const { url, Projectname, active, notifyEmail } = req.body;
        const updateMonitor = await monitorSchema_1.default.findByIdAndUpdate(id, { url, Projectname, active, notifyEmail }, { new: true, runValidators: true });
        if (!updateMonitor) {
            res.status(404).json({ message: "Monitor not found" });
            return;
        }
        return res.status(200).json({ message: "Update complete", updateMonitor });
    }
    catch (error) {
        console.log("Error updating monitor: ", error);
        return res.status(500).json({ message: "Server error", error });
    }
};
exports.updateMonitorId = updateMonitorId;
