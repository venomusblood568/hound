import express from "express";
import { signup } from "../controllers/auth/Signup";
import { login } from "../controllers/auth/Login";
import { getMe } from "../controllers/auth/me";
import { Middleware } from "../middlewares/middleware";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getme", Middleware, getMe);

export default router;
