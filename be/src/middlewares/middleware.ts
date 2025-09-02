import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Define a proper interface for JWT payload
interface DecodedToken {
  id: string;
  username: string;
  iat?: number;
  exp?: number;
}

export const Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return; 
  }

  try {
    const token = authHeader.split(" ")[1]; // "Bearer <token>"
    if (!token) {
      res.status(401).json({ message: "Unauthorized: Malformed token" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    // Attach user to request
    req.user = {
      id: decoded.id,
      username: decoded.username,
    };

    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
