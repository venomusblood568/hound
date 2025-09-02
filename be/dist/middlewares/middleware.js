"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Middleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ message: "Unauthorized: No token provided" });
        return;
    }
    try {
        const token = authHeader.split(" ")[1]; // "Bearer <token>"
        if (!token) {
            res.status(401).json({ message: "Unauthorized: Malformed token" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Attach user to request
        req.user = {
            id: decoded.id,
            username: decoded.username,
        };
        next();
    }
    catch (error) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};
exports.Middleware = Middleware;
