
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AnimatedBackground from "./components/AnimatedBackground";
import { useTheme } from "./hooks/useTheme";
import "./App.css";
import { ProductPreview } from "./components/productPreview";

function App() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-amber-50"
      }`}
    >
      <AnimatedBackground isDark={isDark} />

      <div className="relative z-10">
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main>
          <HeroSection isDark={isDark} />
          <ProductPreview />
          <FeaturesSection isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
