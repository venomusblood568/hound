"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkService = checkService;
const axios_1 = __importDefault(require("axios"));
async function checkService(url) {
    const start = Date.now();
    try {
        const response = await axios_1.default.get(url, { timeout: 5000 });
        const responseTime = Date.now() - start;
        return {
            url,
            status: "up",
            status_code: response.status,
            response_time: responseTime,
            checked_at: new Date().toISOString()
        };
    }
    catch (error) {
        const responseTime = Date.now() - start;
        return {
            url,
            status: "down",
            status_code: error.response?.status || null,
            response_time: responseTime,
            error: error.message,
            checked_at: new Date().toISOString(),
        };
    }
}
