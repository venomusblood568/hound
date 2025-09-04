"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMonitors = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const deleteMonitors = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Monitor Id is required" });
            return;
        }
        const deleteMonitor = await monitorSchema_1.default.findByIdAndDelete(id);
        if (!deleteMonitor) {
            res.status(404).json({ message: "Monitor not found" });
            return;
        }
        return res.status(200).json({
            message: "Monitor deleted successfully",
            deleteMonitor
        });
    }
    catch (error) {
        console.log("Error deleting monitor:", error);
        res.status(500).json({ message: "Server error", error });
        return;
    }
};
exports.deleteMonitors = deleteMonitors;
