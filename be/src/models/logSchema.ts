import mongoose,{Schema,Document} from "mongoose";

export interface Ilog extends Document{
    monitorId: mongoose.Types.ObjectId;
    userId:mongoose.Types.ObjectId;
    url: string;
    status:"Up"|"Down";
    statusCode: number | null;
    responseTime: number;
    errorMessage?:string | null;
    checkAt: Date;
}

const LogSchema = new Schema <Ilog> ({
    monitorId: {type: Schema.Types.ObjectId, ref:"Monitor", required: true},
    userId:{type:Schema.Types.ObjectId, ref:"User", required: true},
    url : {type: String, required: true},
    status : {type: String, enum: ["Up","Down"],required:true},
    statusCode: {type:Number, default: null},
    responseTime: {type:Number, required:true},
    errorMessage:{type:String, default: "default"},
    checkAt:{type:Date, default:Date.now}
})

LogSchema.index({monitorId:1, checkAt: -1});
LogSchema.index({userId:1, checkAt:-1});

export default mongoose.model<Ilog>("Log", LogSchema);