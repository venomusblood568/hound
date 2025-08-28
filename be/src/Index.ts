import express, { Request,Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import testRouteMonitor from "./routes/testRouteMonitor";
import "./workers/worker";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())

// Tester backend
app.get("/",(req:Request,res:Response) =>{
    res.status(200).json({Message:"Backend is Running...."})
})

//Montior Route
app.use("/monitor",testRouteMonitor);

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})