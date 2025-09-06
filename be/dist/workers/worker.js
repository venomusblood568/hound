"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCheck = runCheck;
exports.scheduleChecks = scheduleChecks;
const p_limit_1 = __importDefault(require("p-limit"));
const monitorSchema_1 = __importDefault(require("../models/monitorSchema"));
const logSchema_1 = __importDefault(require("../models/logSchema")); // Use capital Log for model
const checkService_1 = require("../services/checkService");
const limit = (0, p_limit_1.default)(10);
async function runCheck() {
    try {
        // active:true → only monitors user has enabled
        const monitors = await monitorSchema_1.default.find({ active: true });
        if (!monitors.length) {
            console.log("No active monitors found.");
            return;
        }
        console.log(`Running checks for ${monitors.length} monitors...`);
        const results = await Promise.all(monitors.map((m) => limit(async () => {
            const check = await (0, checkService_1.checkService)(m.url);
            await logSchema_1.default.create({
                monitorId: m._id,
                userId: m.userId,
                url: m.url,
                status: check.status.toLowerCase() === "up" ? "Up" : "Down",
                statusCode: check.status_code ?? null,
                responseTime: check.response_time,
                errorMessage: check.error ?? null,
                checkAt: new Date(check.checked_at),
            });
            return { monitorId: m._id, ...check };
        })));
        console.log("Checks completed:", results);
    }
    catch (error) {
        console.error("Worker error:", error);
    }
}
function scheduleChecks() {
    setInterval(runCheck, 60 * 1000);
}
