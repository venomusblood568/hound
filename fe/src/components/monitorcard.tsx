import { ExternalLink, Trash2, Settings } from "lucide-react";

interface MonitorCardProps {
  name: string;
  url: string;
  status?: "up" | "down";
  type?: string;
  responseTime?: string;
  uptime?: string;
  interval?: string;
  location?: string;
  onDelete?: () => void;
  onSettings?: () => void;
  onViewDetails?: () => void;
}

export default function MonitorCard({
  name,
  url,
  status = "up",
  type = "HTTP",
  responseTime = "—",
  uptime = "—",
  interval = "—",
  location = "—",
  onDelete,
  onSettings,
  onViewDetails,
}: MonitorCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 flex items-center justify-between text-white shadow-md w-full">
      {/* Left Section */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              status === "up" ? "bg-green-500" : "bg-red-500"
            } animate-pulse`}
          />
          <span className="font-semibold">{name}</span>
          <span className="text-gray-400 text-xs border border-gray-600 px-1 rounded">
            {type}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 text-sm flex items-center gap-1"
        >
          {url} <ExternalLink size={14} />
        </a>
      </div>

      {/* Middle Section: Metrics */}
      <div className="flex items-center gap-6">
        <Metric label="Response" value={responseTime} />
        <Metric label="Uptime" value={uptime} valueClass="text-green-500" />
        <Metric label="Interval" value={interval} />
        <Metric label="Location" value={location} />
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onSettings}
          className="p-2 rounded-md hover:bg-gray-800 transition"
        >
          <Settings className="text-gray-400" size={18} />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-md hover:bg-gray-800 transition"
        >
          <Trash2 className="text-red-500" size={18} />
        </button>
        <button
          onClick={onViewDetails}
          className="px-3 py-1 rounded-md bg-gray-700 hover:bg-green-500 text-white text-sm transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  valueClass = "text-white",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="text-right">
      <div className="text-sm text-gray-400">{label}</div>
      <div className={`font-semibold ${valueClass}`}>{value}</div>
    </div>
  );
}
