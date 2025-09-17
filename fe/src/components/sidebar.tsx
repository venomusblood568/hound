import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-900 text-gray-200 border-b border-white">
        <h2 className="font-bold text-[25px] tracking-wide">Hound</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-36 border-r border-white flex flex-col p-4 text-gray-200 bg-gray-900 transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        <h2 className="font-bold mb-2 text-[25px] tracking-wide p-2 py-8 md:block hidden">
          Hound
        </h2>
        <nav className="flex flex-col gap-4">
          <a
            href="/dashboard"
            className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
          >
            Dashboard
          </a>
          <a
            href="/monitors"
            className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
          >
            Monitors
          </a>
          <a
            href="#"
            className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
          >
            History
          </a>
          <a
            href="#"
            className="p-2 hover:text-white hover:bg-blue-950 rounded-lg transition hover:scale-105 "
          >
            Settings
          </a>
        </nav>
      </div>

      {/* Backdrop for mobile when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
