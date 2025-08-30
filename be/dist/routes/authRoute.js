"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Signup_1 = require("../controllers/auth/Signup");
const Login_1 = require("../controllers/auth/Login");
const router = express_1.default.Router();
router.post("/signup", Signup_1.signup);
router.post("/login", Login_1.login);
exports.default = router;
