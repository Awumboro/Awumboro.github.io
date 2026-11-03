import React from "react";
import { ChevronDown } from "lucide-react";

export default function CollapsibleSection({
  id,
  title,
  badge,
  isOpen,
  onToggle,
  action,
  children
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      {/* Sleek, Professional Header Bar */}
      <div
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className="w-full flex items-center justify-between gap-4 py-2 cursor-pointer select-none group border-b border-slate-200 dark:border-zinc-800 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-700/60">
              {badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {action && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="hidden sm:block"
            >
              {action}
            </div>
          )}

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <span className="hidden sm:inline">{isOpen ? "Hide" : "Show"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Content area: cleanly displayed when open; completely unobtrusive when collapsed */}
      {isOpen && <div className="pt-2 animate-fadeIn">{children}</div>}
    </section>
  );
}
