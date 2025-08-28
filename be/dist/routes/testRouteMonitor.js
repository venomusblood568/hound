"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const montiorController_1 = require("../controllers/montiorController");
const router = (0, express_1.Router)();
router.get("/", montiorController_1.getAllMonitors); // GET /monitor → returns all monitors
router.post("/test", montiorController_1.testMonitor); // POST /monitor/test → checks one url
exports.default = router;
