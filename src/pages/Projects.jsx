import React, { useState, useMemo } from "react";
import { detailedProjects, projectCategories } from "../projectsDetailedData";
import ImageLightbox from "../components/ImageLightbox";
import { Search, ExternalLink, FileText, ZoomIn, Layers } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: ""
  });

  const filteredProjects = useMemo(() => {
    return detailedProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.fullDetails.toLowerCase().includes(query) ||
        project.tools.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (images, index, title) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
      title
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Header Section */}
      <header className="border-b border-slate-200 dark:border-zinc-800 pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Layers className="w-4 h-4" /> Technical Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 mt-1 font-serif">
              Applied Research & Geospatial Engineering
            </h1>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, topics, areas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-slate-800 dark:text-zinc-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Projects List */}
      <div className="space-y-16">
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center text-slate-500 dark:text-zinc-400 space-y-3 bg-white dark:bg-zinc-900/40 rounded-2xl border border-dashed border-slate-200 dark:border-zinc-800">
            <p className="text-base font-medium">No projects found matching your search</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-sm text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Text Information - 5 cols */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 mb-2">
                    {project.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 leading-snug">
                    {project.title}
                  </h2>

                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-[11px] font-medium rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed text-justify">
                  {project.fullDetails}
                </p>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.links?.report && (
                    <a
                      href={project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FileText className="w-4 h-4" />
                      Read Report
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* High-res Image Gallery Grid - 7 cols */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-3.5">
                {project.images && project.images.length > 0 && (
                  <>
                    {/* Primary Hero Map Preview */}
                    <div
                      onClick={() => openLightbox(project.images, 0, project.title)}
                      className="group relative col-span-2 overflow-hidden rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-900 cursor-pointer shadow-sm"
                    >
                      <img
                        src={project.images[0]}
                        alt={`${project.title} primary map`}
                        className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="flex items-center gap-1.5 text-xs text-white font-medium bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                          <ZoomIn className="w-3.5 h-3.5" /> Click to expand high-res map
                        </span>
                      </div>
                    </div>

                    {/* Secondary Thumbnails */}
                    {project.images.slice(1, 3).map((img, i) => (
                      <div
                        key={i}
                        onClick={() => openLightbox(project.images, i + 1, project.title)}
                        className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-900 cursor-pointer shadow-sm"
                      >
                        <img
                          src={img}
                          alt={`${project.title} detail ${i + 1}`}
                          className="w-full h-32 sm:h-36 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-1.5 rounded-full bg-black/70 text-white border border-white/20">
                            <ZoomIn className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </article>
          ))
        )}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        title={lightboxState.title}
        onClose={closeLightbox}
        onIndexChange={(idx) =>
          setLightboxState((prev) => ({ ...prev, currentIndex: idx }))
        }
      />
    </div>
  );
}
