
// 📁 src/pages/Tutorials.jsx
import React from "react";
import { featuredVideos, playlists } from "../videoData";

export default function Tutorials() {
  return (
    <div className="space-y-16 animate-fadeIn">
      
      {/* Header Section */}
      <header className="border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-extrabold font-serif text-gray-900">
          Tutorials & Insights
        </h1>
        <p className="text-blue-600 text-lg mt-2 font-medium">
          Sharing Geomatics knowledge through <a href="https://www.youtube.com/@ProGeomatics" target="_blank" className="underline hover:text-blue-800">Pro Geomatics</a>.
        </p>
      </header>

      {/* Featured Tutorials Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-red-600 rounded-full"></span>
          Featured Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredVideos.map((video) => (
            <div key={video.id} className="group">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black group-hover:shadow-2xl transition-all duration-300">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mt-5 group-hover:text-red-600 transition-colors">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-red-600 rounded-full"></span>
          Learning Pathways
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlists.map((playlist, index) => (
            <a 
              key={index} 
              href={playlist.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 4v12l9-6-9-6z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{playlist.name}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {playlist.description}
              </p>
              <div className="mt-4 flex items-center text-[10px] font-bold text-red-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                View Playlist 
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}