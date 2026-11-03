import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onIndexChange,
  title = "Project Preview"
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1) {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && images.length > 1) {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="w-full flex items-center justify-between text-white/90 mb-3 px-2">
          <div className="text-sm font-medium tracking-wide truncate max-w-md">
            {title} {images.length > 1 && `(${currentIndex + 1} of ${images.length})`}
          </div>
          <button
            onClick={onClose}
            aria-label="Close Preview"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image container */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/10">
          <img
            src={currentImg}
            alt={title}
            className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((currentIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((currentIndex + 1) % images.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
