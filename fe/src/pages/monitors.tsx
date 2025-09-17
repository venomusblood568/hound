import { useState } from "react";
import SideBar from "../components/sidebar";
import AddMonitorModal from "../components/addMonitorModel";
import { Plus } from "lucide-react";
import MonitorCard from "../components/monitorcard";

export default function Monitors() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8">
          <h1 className="text-white text-[32px] sm:text-[40px] font-semibold tracking-wide mb-4">
            Monitors
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            {/* Welcome Text */}
            <p className="text-gray-400 text-sm sm:text-base max-w-lg">
              Manage and configure your monitoring endpoints
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-3 sm:mt-0 flex items-center gap-2 bg-green-700 hover:bg-green-600 active:bg-green-800 transition-colors border border-green-500 rounded-2xl px-4 py-2 text-white font-medium shadow-md"
            >
              <Plus size={18} />
              Add Monitor
            </button>
            <AddMonitorModal open={open} onClose={() => setOpen(false)} />
          </div>
          <div>
            <MonitorCard
              name="Main Website"
              url="https://myapp.com"
              status="up"
              responseTime="142ms"
              uptime="99.9%"
              interval="1 min"
              location="US East"
            />
          </div>
        </main>
      </div>
    </>
  );
}
