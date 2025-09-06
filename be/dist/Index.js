"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./models");
const worker_1 = require("./workers/worker");
const histroyworker_1 = __importDefault(require("./workers/histroyworker"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Tester backend
app.get("/", (req, res) => {
    res.status(200).json({ Message: "Backend is Running...." });
});
app.use("/api", routes_1.default);
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
    (0, worker_1.runCheck)();
    (0, worker_1.scheduleChecks)();
    (0, histroyworker_1.default)();
});
