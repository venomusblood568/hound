import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark
          ? " backdrop-blur-md border-gray-800"
          : " backdrop-blur-md border-gray-300"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDark ? "bg-white" : "bg-amber-600"
              }`}
            >
              <span
                className={`font-bold text-lg ${
                  isDark ? "text-black" : "text-white"
                }`}
              >
                <img src="/hound.png" alt="Logo" className="w-6 h-6" />
              </span>
            </div>
            <span
              className={`font-bold font-mono leading-none ${
                isDark ? "text-white" : "text-black"
              } text-[40px]`}
            >
              Hound
            </span>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? " hover:bg-gray-700 text-white"
                  : " hover:bg-amber-600 text-black"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
