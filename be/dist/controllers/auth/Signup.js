"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const models_1 = require("../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env file....");
}
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exitsting = await models_1.User.findOne({ email });
        if (exitsting) {
            res.status(400).json({ message: "User already exits" });
            return;
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = await models_1.User.create({
            name,
            email,
            password: hashedPassword,
        });
        const token = jsonwebtoken_1.default.sign({ id: newUser._id }, JWT_SECRET);
        res
            .status(201)
            .json({ message: "User Created", token: token, user: newUser });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Error", error: error });
    }
};
exports.signup = signup;
