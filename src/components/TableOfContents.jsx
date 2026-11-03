import React, { useEffect, useState } from "react";
import { List } from "lucide-react";

export default function TableOfContents({ sections = [], onSelectSection }) {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e, id) => {
    e.preventDefault();
    if (onSelectSection) {
      onSelectSection(id);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="hidden lg:block sticky top-28 self-start w-56 shrink-0 space-y-3 p-4 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 pb-2 border-b border-slate-100 dark:border-zinc-800">
        <List className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        <span>Contents</span>
      </div>

      <nav className="space-y-1 text-xs">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`group flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-zinc-800/50 font-medium"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300 dark:bg-zinc-700 group-hover:bg-slate-400"
                  }`}
                />
                <span className="truncate">{label}</span>
              </div>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
