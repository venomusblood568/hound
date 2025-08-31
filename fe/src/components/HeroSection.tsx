import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  isDark: boolean;
}

export default function HeroSection({ isDark }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? "bg-gray-800/50 text-gray-300 border border-gray-700/50"
                : "bg-amber-100 text-amber-800 border border-amber-300"
            }`}
          >
            ✨ Modern & Minimal
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
              isDark ? "text-white" : "text-amber-900"
            }`}
          >
            Simple.
            <span
              className={`block ${
                isDark
                  ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent"
              }`}
            >
              Beautiful.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-400" : "text-amber-700"
            }`}
          >
            Clean design meets powerful functionality. Built for simplicity,
            designed for impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className={`group px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isDark
                  ? "bg-white hover:bg-gray-100 text-black"
                  : "bg-amber-600 hover:bg-amber-700 text-white"
              }`}
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              className={`group flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-300 border ${
                isDark
                  ? "bg-transparent hover:bg-white/10 text-white border-gray-600 hover:border-white"
                  : "bg-transparent hover:bg-amber-50 text-amber-800 border-amber-300 hover:border-amber-500"
              }`}
            >
              <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div
                className={`text-2xl sm:text-3xl font-bold ${
                  isDark ? "text-white" : "text-amber-900"
                }`}
              >
                Fast
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-gray-500" : "text-amber-600"
                }`}
              >
                Performance
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl sm:text-3xl font-bold ${
                  isDark ? "text-white" : "text-amber-900"
                }`}
              >
                Clean
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-gray-500" : "text-amber-600"
                }`}
              >
                Design
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl sm:text-3xl font-bold ${
                  isDark ? "text-white" : "text-amber-900"
                }`}
              >
                Simple
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-gray-500" : "text-amber-600"
                }`}
              >
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
