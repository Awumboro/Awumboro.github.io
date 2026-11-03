import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tutorials from "./pages/Tutorials";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 flex flex-col min-h-screen justify-between">
            {/* Top Navigation Bar */}
            <Navbar />

            {/* Main Page Routing */}
            <main className="mt-8 sm:mt-12 flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tutorials" element={<Tutorials />} />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
