import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AnimatedBackground from "./components/AnimatedBackground";
import { ProductPreview } from "./components/productPreview";
import { useTheme } from "./hooks/useTheme";

import "./App.css";

import Login from "./pages/login"; 
import Signup from "./pages/signup";
import DashBoard from "./pages/dashboard";
import Monitors from "./pages/monitors";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-amber-50"
      }`}
    >
      {/* Push background behind everything */}
      <AnimatedBackground isDark={isDark}/>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Solid header background to block glow */}

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    isDark={isDark}
                    toggleTheme={toggleTheme}
                    
                  />
                  <HeroSection isDark={isDark} />
                  <ProductPreview />
                  <FeaturesSection isDark={isDark} />
                  <Footer isDark={isDark} />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/monitors" element={<Monitors/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
