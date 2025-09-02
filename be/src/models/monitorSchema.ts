import mongoose,{Schema,Document} from "mongoose";

export interface IMonitor extends Document{
    userId: mongoose.Types.ObjectId;
    url: string;
    Projectname: string;
    active: boolean;
    notifyEmail?: string;
}   
const MonitorSchema = new Schema<IMonitor>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    url: { type: String, required: true },
    Projectname: { type: String, required: true },
    active: { type: Boolean, required: true },
    notifyEmail: { type: String, required: false },
  },
  { timestamps: true } 
);
export default mongoose.model<IMonitor>("Monitor", MonitorSchema);