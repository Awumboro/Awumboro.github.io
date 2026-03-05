// 📁 src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Tutorials from "./pages/Tutorials";
import Home from "./pages/home";
import Tutorials from "./pages/Tutorials";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-800 font-roboto">
        <div className="max-w-5xl mx-auto px-6 md:px-20 py-12">
          
          
      {/* Main Navigation */}
    <nav className="sticky top-4 z-50 bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100 mx-4 md:mx-auto max-w-5xl py-3 px-6 rounded-2xl flex justify-between items-center transition-all duration-300">
      {/* Logo / Name */}
      <Link to="/" className="group flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform">
          JK
        </div>
        <span className="text-base font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
          Justine Kojo
        </span>
      </Link>

      {/* Links Container */}
      <div className="flex items-center gap-1 md:gap-4 text-sm font-semibold">
        <Link 
          to="/" 
          // className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          className="ml-2 px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-blue-600 hover:shadow-md active:scale-95 transition-all shadow-sm"

        >
          Home
        </Link>
        
        <Link 
          to="/tutorials" 
          className="px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
        >
          YouTube
        </Link>

        <Link 
          to="/projects" 
          className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          // className="ml-2 px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-blue-600 hover:shadow-md active:scale-95 transition-all shadow-sm"
        >
          Projects
        </Link>
      </div>
    </nav>
        

          {/* Page Routing */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/projects" element={<Projects />} /> 
            </Routes>
          </main>

          <footer className="text-center mt-20 pt-8 border-t text-sm text-gray-500">
            <p>Built by Justine Kojo © {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}