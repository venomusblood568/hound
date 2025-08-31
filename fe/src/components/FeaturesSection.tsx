import { Zap, Layers, Settings } from "lucide-react";

interface FeaturesSectionProps {
  isDark: boolean;
}

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  const features = [
    {
      icon: Zap,
      title: "Fast",
      description: "Real-time monitoring with alerts the moment downtime hits.",
    },
    {
      icon: Layers,
      title: "Clean",
      description:
        "Minimal design, clear insights — no clutter, just what matters.",
    },
    {
      icon: Settings,
      title: "Simple",
      description: "Easy to set up and start monitoring in minutes.",
    },
  ];

  return (
    <section
      id="features"
      className="scroll-mt-20 py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-orange-500"
            }`}
          >
            Why Choose Hound
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-amber-700"
            }`}
          >
            Three core principles that drive everything we do.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-gray-600"
                    : "bg-white/70 hover:bg-white border border-amber-200/50 hover:border-orange-500 shadow-lg hover:shadow-xl"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    isDark
                      ? "bg-white/10 text-white group-hover:bg-white/20"
                      : "bg-[#eaeaea] text-amber-600 group-hover:bg-amber-200"
                  }`}
                >
                  <IconComponent size={28} />
                </div>

                <h3
                  className={`font-bold text-xl mb-3 ${
                    isDark ? "text-white" : "text-amber-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-400" : "text-amber-700"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
