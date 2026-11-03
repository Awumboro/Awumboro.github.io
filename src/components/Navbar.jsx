import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, ExternalLink } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "YouTube & Tutorials", path: "/tutorials" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-4 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-zinc-800 shadow-sm rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:rotate-6 transition-transform">
            JK
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Justine Kojo
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-zinc-500 hidden sm:block">
              Geospatial Researcher
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                    : "text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Icons: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800/80 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-3 mt-3 border-t border-slate-100 dark:border-zinc-800 flex flex-col gap-1.5 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
