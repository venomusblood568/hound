"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonitors = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const getMonitors = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const monitor = await monitorSchema_1.default.find({ userId: req.user.id });
        if (monitor.length === 0) {
            res.status(200).json({ Monitor: [] });
        }
        res.status(200).json({ monitor });
    }
    catch (error) {
        console.log("Error in getting List:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getMonitors = getMonitors;
