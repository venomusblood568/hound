"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.histroySchema = exports.logScheme = exports.monitorSchema = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
//model imports
const userSchema_1 = __importDefault(require("./userSchema"));
exports.User = userSchema_1.default;
const monitorSchema_1 = __importDefault(require("./monitorSchema"));
exports.monitorSchema = monitorSchema_1.default;
const logSchema_1 = __importDefault(require("./logSchema"));
exports.logScheme = logSchema_1.default;
const historySchema_1 = __importDefault(require("./historySchema"));
exports.histroySchema = historySchema_1.default;
dotenv_1.default.config();
const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error(`URI not found or URL Is wrong...`);
}
mongoose_1.default
    .connect(uri)
    .then(() => console.log("Connected to Mongodb"))
    .catch((error) => console.log("Momgodb connection error: ", error));
