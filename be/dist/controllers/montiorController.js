"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMonitors = getAllMonitors;
exports.testMonitor = testMonitor;
const monitor_1 = require("../models/monitor");
const checkService_1 = require("../services/checkService");
async function getAllMonitors(req, res) {
    return res.status(200).json(monitor_1.monitors);
}
async function testMonitor(req, res) {
    try {
        const url = req.body.url || req.query.url;
        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }
        const result = await (0, checkService_1.checkService)(url);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Error in testMonitor:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            details: error.message,
        });
    }
}
