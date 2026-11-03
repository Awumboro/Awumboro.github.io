import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, ScholarIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 pt-10 pb-12 border-t border-slate-200 dark:border-zinc-800 text-sm text-slate-500 dark:text-zinc-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:items-start text-center sm:text-left">
          <p className="font-medium text-slate-800 dark:text-zinc-200">
            Justine Kojo Awumboro
          </p>
          <p className="text-xs text-slate-500 dark:text-zinc-500 mt-0.5">
            Google PhD Fellow • Geospatial Data Scientist • Transport Systems Researcher
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://scholar.google.com/citations?user=9iKGu0sAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all text-slate-700 dark:text-zinc-300"
          >
            <ScholarIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Awumboro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:text-slate-900 dark:hover:text-white hover:scale-105 transition-all text-slate-700 dark:text-zinc-300"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/justine-kojo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all text-slate-700 dark:text-zinc-300"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@ProGeomatics/videos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:text-red-600 hover:scale-105 transition-all text-slate-700 dark:text-zinc-300"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:justine.jkojo@gmail.com"
            aria-label="Email"
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all text-slate-700 dark:text-zinc-300"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 p-2 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-zinc-600 gap-2">
        <p>© {new Date().getFullYear()} Justine Kojo. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}
