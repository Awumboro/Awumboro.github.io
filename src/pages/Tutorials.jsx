import React, { useState, useMemo } from "react";
import { featuredVideos, playlists } from "../videoData";
import { Search, Play, ExternalLink, BookOpen, Layers } from "lucide-react";
import { YoutubeIcon } from "../components/SocialIcons";

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return featuredVideos;
    return featuredVideos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredPlaylists = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return playlists;
    return playlists.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Header Section */}
      <header className="border-b border-slate-200 dark:border-zinc-800 pb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              <YoutubeIcon className="w-4 h-4" /> Video Knowledge Base
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 mt-1 font-serif">
              Tutorials & Practical Insights
            </h1>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
              Sharing Geomatics, Python, and Geospatial Data Science on{" "}
              <a
                href="https://www.youtube.com/@ProGeomatics"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
              >
                Pro Geomatics <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tutorials, playlists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-slate-800 dark:text-zinc-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
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

        {/* Channel Banner Callout */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border border-red-100 dark:border-red-900/30 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/30 shrink-0">
              <YoutubeIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-sm sm:text-base">
                Pro Geomatics YouTube Channel
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">
                Practical guides in GeoPandas, Cloud GIS, Civil 3D, and Spatial Databases.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@ProGeomatics?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Subscribe on YouTube
          </a>
        </div>
      </header>

      {/* Featured Tutorials Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">
            Featured Tutorials
          </h2>
        </div>

        {filteredVideos.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-zinc-400 py-6 text-center">
            No videos match "{searchQuery}"
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-zinc-800 bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 dark:text-zinc-100 mt-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed text-justify">
                    {video.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    Video Walkthrough
                  </span>
                  <a
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                  >
                    Open in YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Playlists Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">
            Curated Learning Pathways
          </h2>
        </div>

        {filteredPlaylists.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-zinc-400 py-6 text-center">
            No playlists match "{searchQuery}"
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredPlaylists.map((playlist, index) => (
              <a
                key={index}
                href={playlist.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-red-300 dark:hover:border-red-900 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-sm mb-1.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {playlist.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    {playlist.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>View Playlist</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
