
import { Github,Globe } from "lucide-react";


interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`transition-all duration-500 ${
        isDark ? " border-gray-800" : " border-amber-200"
      } border-t`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
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
              className={`font-bold text-xl ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Hound
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/venomusblood568"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-amber-600 hover:text-amber-800"
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://gourav-duck.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-amber-600 hover:text-amber-800"
              }`}
              aria-label="Portfolio"
            >
              <Globe size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
