import express from "express";
import authRoutes from "./authRoute";
import monitor from "./monitorRoute";

const router = express.Router();

router.use("/auth",authRoutes);
router.use("/monitor",monitor);

export default router;