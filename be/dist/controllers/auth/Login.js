"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const models_1 = require("../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await models_1.User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const Ismatch = await bcrypt_1.default.compare(password, user.password);
        if (!Ismatch) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login Successful", token, user });
    }
    catch (error) {
        res.status(500).json({ message: "Login Failed", error });
    }
};
exports.login = login;
