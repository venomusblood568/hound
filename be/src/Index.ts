import express, { Request,Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import "./models";
import {runCheck , scheduleChecks} from "./workers/worker"
import apiRouter from "./routes";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())

// Tester backend
app.get("/",(req:Request,res:Response) =>{
    res.status(200).json({Message:"Backend is Running...."})
})

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
    runCheck();
    scheduleChecks();

})