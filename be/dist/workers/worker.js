"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkService_1 = require("../services/checkService");
const monitor_1 = require("../models/monitor");
const p_limit_1 = __importDefault(require("p-limit"));
const limit = (0, p_limit_1.default)(10);
async function runCheck() {
    const result = await Promise.all(monitor_1.monitors.map(m => limit(() => (0, checkService_1.checkService)(m.url))));
    console.log(result);
}
setInterval(runCheck, 60 * 1000);
// Run immediately on startup
runCheck();
