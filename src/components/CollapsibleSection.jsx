import React from "react";
import { ChevronDown } from "lucide-react";

export default function CollapsibleSection({
  id,
  icon,
  title,
  badge,
  isOpen,
  onToggle,
  action,
  children
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      {/* Interactive Header Bar */}
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
        className="w-full flex items-center justify-between gap-4 p-3 -mx-3 rounded-2xl cursor-pointer select-none hover:bg-slate-100/70 dark:hover:bg-zinc-900/60 transition-colors group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {icon && (
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
              {icon}
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight">
            {title}
          </h2>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-700/60">
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

          <div
            className={`p-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 ${
              isOpen ? "rotate-180 bg-blue-50 dark:bg-blue-950/60 text-blue-600" : ""
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-200/80 dark:bg-zinc-800"></div>

      {/* Collapsible Content */}
      {isOpen ? (
        <div className="pt-2 animate-fadeIn">{children}</div>
      ) : (
        <div
          onClick={onToggle}
          className="py-3 px-4 rounded-xl border border-dashed border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 hover:border-blue-300 dark:hover:border-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer flex items-center justify-between transition-colors"
        >
          <span>Click to expand {title.toLowerCase()}</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">+ View details</span>
        </div>
      )}
    </section>
  );
}
