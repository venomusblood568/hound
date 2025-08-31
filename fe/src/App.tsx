
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AnimatedBackground from "./components/AnimatedBackground";
import { useTheme } from "./hooks/useTheme";
import { useMobileMenu } from "./hooks/useMobileMenu";
import "./App.css";
function App() {
  const { isDark, toggleTheme } = useTheme();
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

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
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        <main>
          <HeroSection isDark={isDark} />
          <FeaturesSection isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
