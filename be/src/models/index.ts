import mongoose from "mongoose";
import dotenv from "dotenv";

//model imports
import User from "./userSchema";
import monitorSchema from "./monitorSchema";
import logScheme from "./logSchema";
import histroySchema from "./historySchema";


dotenv.config();

const uri = process.env.MONGODB_URI;
if(!uri){
    throw new Error(`URI not found or URL Is wrong...`)
}

mongoose
    .connect(uri)
    .then(() => console.log("Connected to Mongodb"))
    .catch((error) => console.log("Momgodb connection error: ",error));
    

export{User,monitorSchema,logScheme,histroySchema};