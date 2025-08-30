import mongoose,{Schema,Document} from "mongoose";

export interface IMonitor extends Document{
    userId: mongoose.Types.ObjectId;
    url: string;
    name: string;
    active: boolean;
    createdAt: Date;
    notifyEmail?: string;
    notifySlack?: string;
}   

const MonitorSchema = new Schema<IMonitor>({
    userId: {type: Schema.Types.ObjectId, ref:"User", required:true},
    url: {type: String, required:true},
    name: {type: String, required: true},
    active:{type: Boolean, required: true},
    createdAt:{type:Date, default: Date.now},
    notifyEmail:{type:String, required: false},
    notifySlack:{type:String, required: false},
})

export default mongoose.model<IMonitor>("Monitor", MonitorSchema);