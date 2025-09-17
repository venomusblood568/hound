import { useState } from "react";

interface AddMonitorModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddMonitorModal({
  open,
  onClose,
}: AddMonitorModalProps) {
  const [active, setActive] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Add New Monitor
        </h2>

        <form className="space-y-4">
          {/* URL Field */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">URL</label>
            <input
              type="url"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://example.com"
              required
            />
          </div>

          {/* Project Name */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Project Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Project name"
              required
            />
          </div>

          {/* Notify Email */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Notify Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Active Toggle */}
          <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
            <span className="text-gray-300 text-sm">Active</span>
            <button
              type="button"
              onClick={() => setActive(!active)}
              className={`relative w-12 h-6 rounded-full transition ${
                active ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                  active ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-500 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
