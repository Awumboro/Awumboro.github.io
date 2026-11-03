import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ExternalLink, Loader2, AlertCircle } from "lucide-react";

export default function ImageLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onIndexChange,
  title = "Project Preview"
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currentImg = images && images.length > 0 ? images[currentIndex] : null;

  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [currentImg]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && images.length > 1 && onIndexChange) {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight" && images.length > 1 && onIndexChange) {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || !currentImg) return null;

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-6xl flex items-center justify-between text-white py-2 px-3 z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 truncate pr-4">
          <span className="text-sm font-semibold tracking-wide text-zinc-100 truncate">
            {title}
          </span>
          {images.length > 1 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Open Raw Original */}
          <a
            href={currentImg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
            title="Open original full resolution image in new tab"
          >
            <span>Open Original</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 w-full max-w-6xl flex items-center justify-center min-h-0 py-2 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            <span className="text-xs text-zinc-400">Loading high-resolution graphic...</span>
          </div>
        )}

        {error ? (
          <div className="flex flex-col items-center justify-center gap-3 p-6 text-center text-white/90 bg-white/5 rounded-2xl border border-white/10 max-w-md">
            <AlertCircle className="w-10 h-10 text-amber-400" />
            <p className="text-sm font-medium">Unable to load image preview.</p>
            <a
              href={currentImg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 underline hover:text-blue-300"
            >
              Click here to view image directly
            </a>
          </div>
        ) : (
          <img
            key={currentImg}
            src={currentImg}
            alt={title}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
            className={`max-h-[82vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-opacity duration-200 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && onIndexChange && (
          <>
            <button
              onClick={() =>
                onIndexChange((currentIndex - 1 + images.length) % images.length)
              }
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                onIndexChange((currentIndex + 1) % images.length)
              }
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Footer Caption */}
      <div
        className="w-full max-w-6xl flex items-center justify-center text-xs text-zinc-400 py-2 z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Use arrow keys or click arrows to browse • Press ESC to close</span>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(content, document.body)
    : null;
}
