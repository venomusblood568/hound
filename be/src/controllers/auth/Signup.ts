import { User } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env file....");
}

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const exitsting = await User.findOne({ email });
    if (exitsting) {
      res.status(400).json({ message: "User already exits" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET as string);
    res
      .status(201)
      .json({ message: "User Created", token: token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error });
  }
};
