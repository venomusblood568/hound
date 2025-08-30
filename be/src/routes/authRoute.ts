import express from "express";
import { signup } from "../controllers/auth/Signup";
import { login } from "../controllers/auth/Login";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
