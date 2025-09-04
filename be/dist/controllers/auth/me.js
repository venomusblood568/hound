"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
const models_1 = require("../../models");
const monitorSchema_1 = __importDefault(require("../../models/monitorSchema"));
const getMe = async (req, res) => {
    try {
        if (!req.user?.id) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const user = await models_1.User.findById(req.user?.id).select("-password");
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const monitor = await monitorSchema_1.default.find({ userId: req.user.id });
        res.status(200).json({
            user,
            monitor
        });
    }
    catch (error) {
        console.error("Error in /me route:", error);
        res.status(500).json({ message: "Server error", error });
        return;
    }
};
exports.getMe = getMe;
