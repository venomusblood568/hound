import { useState } from "react";
import SideBar from "../components/sidebar";
import { TrendingUp, AlertTriangle, Activity, Clock, Plus } from "lucide-react";
import AddMonitorModal from "../components/addMonitorModel";
export default function DashBoard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8">
        <h1 className="text-white text-[32px] sm:text-[40px] font-semibold tracking-wide mb-4">
          DASHBOARD
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          {/* Welcome Text */}
          <p className="text-gray-400 text-sm sm:text-base max-w-lg">
            Welcome to your dashboard! Here you can view stats, manage monitors,
            and check history.
          </p>

          {/* Add Monitor Button */}
          <button
          onClick={() => setOpen(true)} 
          className="mt-3 sm:mt-0 flex items-center gap-2 bg-green-700 hover:bg-green-600 active:bg-green-800 transition-colors border border-green-500 rounded-2xl px-4 py-2 text-white font-medium shadow-md">
            <Plus size={18} />
            Add Monitor
          </button>
          <AddMonitorModal open={open} onClose={() => setOpen(false)}/>
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-200">
          {/* Total Monitors */}
          <div className="border-gray-700 p-4 rounded-2xl shadow-md flex flex-col justify-between border hover:border-gray-500 hover:shadow-[0_0_10px_rgba(156,163,175,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">
                Total Monitors
              </h3>
              <Activity className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-3xl font-bold mt-2">4</p>
          </div>

          {/* Services Up */}
          <div className="p-4 rounded-2xl shadow-md flex flex-col justify-between border border-green-700 hover:border-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-green-400">
                Services Up
              </h3>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-3xl font-bold mt-2">2</p>
            <p className="text-xs text-green-400 mt-1">▲ 5% vs yesterday</p>
          </div>

          {/* Services Down */}
          <div className="p-4 rounded-2xl shadow-md flex flex-col justify-between border border-red-700 hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-red-400">
                Services Down
              </h3>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>

          {/* Average Uptime */}
          <div className="p-4 rounded-2xl shadow-md flex flex-col justify-between border border-green-700 hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-emerald-400">
                Average Uptime
              </h3>
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold mt-2">98.3%</p>
            <p className="text-xs text-emerald-400 mt-1">▲ 0.2% vs last week</p>
          </div>
        </div>
      </main>
    </div>
  );
}
