
interface AnimatedBackgroundProps {
  isDark: boolean;
}

export default function AnimatedBackground({
  isDark,
}: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark
            ? "bg-gradient-to-br from-black via-gray-900 to-black"
            : "bg-gradient-to-br from-[#fafafa] via-[#eaeaea] to-[#fafafa]"
        }`}
      />

      

      {/* Animated Orbs */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-float ${
          isDark ? "bg-white" : "bg-amber-400"
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-float-delayed ${
          isDark ? "bg-gray-400" : "bg-orange-300"
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full filter blur-3xl opacity-15 animate-pulse ${
          isDark ? "bg-gray-600" : "bg-yellow-300"
        }`}
      />
    </div>
  );
}
