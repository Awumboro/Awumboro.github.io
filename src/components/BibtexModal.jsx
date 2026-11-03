import React, { useState } from "react";
import { X, Check, Copy, Quote } from "lucide-react";

export default function BibtexModal({ isOpen, onClose, paper }) {
  const [copiedFormat, setCopiedFormat] = useState(null);

  if (!isOpen || !paper) return null;

  const handleCopy = (text, format) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 max-w-2xl w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Quote className="w-5 h-5" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Cite this Paper</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                APA Style
              </span>
              <button
                onClick={() => handleCopy(paper.apa, "apa")}
                className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                {copiedFormat === "apa" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy APA
                  </>
                )}
              </button>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-zinc-800/60 rounded-xl text-xs text-slate-700 dark:text-zinc-300 font-mono leading-relaxed border border-slate-200 dark:border-zinc-700/50">
              {paper.apa}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                BibTeX
              </span>
              <button
                onClick={() => handleCopy(paper.bibtex, "bibtex")}
                className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                {copiedFormat === "bibtex" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy BibTeX
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-slate-100 dark:bg-zinc-950 dark:text-zinc-200 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
              {paper.bibtex}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
