import mongoose, { Schema, Document } from "mongoose";

export interface IHistory extends Document {
  monitorId: mongoose.Types.ObjectId;
  date: string; // YYYY-MM-DD
  totalPings: number;
  downtimeCount: number;
  uptimePercent: number;
  avgResponseTime: number;
  minResponseTime: number;
  maxResponseTime: number;
  firstChecked: Date;
  lastChecked: Date;
  incidentDurations?: number[]; // in seconds
}

const HistorySchema = new Schema<IHistory>({
  monitorId: { type: Schema.Types.ObjectId, ref: "Monitor", required: true },
  date: { type: String, required: true },
  totalPings: { type: Number, required: true },
  downtimeCount: { type: Number, required: true },
  uptimePercent: { type: Number, required: true },
  avgResponseTime: { type: Number, required: true },
  minResponseTime: { type: Number, required: true },
  maxResponseTime: { type: Number, required: true },
  firstChecked: { type: Date, required: true },
  lastChecked: { type: Date, required: true },
  incidentDurations: { type: [Number], default: [] },
});

HistorySchema.index({ monitorId: 1, date: 1 }, { unique: true });

export default mongoose.model<IHistory>("History", HistorySchema);
