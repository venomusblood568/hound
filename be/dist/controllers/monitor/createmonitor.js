"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMonitor = void 0;
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const createMonitor = async (req, res) => {
    try {
        const { url, Projectname, active, notifyEmail } = req.body;
        if (!url || !Projectname) {
            res.status(400).json({ message: "url & project name are required..." });
            return;
        }
        const newMonitor = new monitorSchema_1.default({
            userId: req.user.id,
            url,
            Projectname,
            active,
            notifyEmail,
        });
        await newMonitor.save();
        res.status(201).json({
            message: "Monitor created successfully",
            data: newMonitor,
        });
    }
    catch (error) {
        console.error("Error in creating monitor:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.createMonitor = createMonitor;
