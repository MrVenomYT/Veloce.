import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Layout & Global Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import MembershipPage from "./pages/MembershipPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RentalTermsPage from "./pages/RentalTermsPage";
import SecurityInsurancePage from "./pages/SecurityInsurancePage";

const App = () => {
  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 700,
      easing: "ease-out-cubic",
      delay: 50,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-primary transition-colors duration-300 flex flex-col justify-between">
        <Navbar theme={theme} setTheme={setTheme} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<RentalTermsPage />} />
            <Route path="/security-and-insurance" element={<SecurityInsurancePage />} />
            <Route path="*" element={<HomePage theme={theme} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
