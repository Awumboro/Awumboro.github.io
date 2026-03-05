// 📁 src/pages/Projects.jsx
import React from "react";
import { detailedProjects } from "../projectsDetailedData";

export default function Projects() {
  return (
    <div className="space-y-24 animate-fadeIn">
      <header className="border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-extrabold font-serif text-gray-900">Technical Portfolio</h1>
        <p className="text-blue-600 text-lg mt-2">A deep dive into my geospatial engineering and research projects.</p>
      </header>

      {detailedProjects.map((project) => (
        <article key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Content - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.map((tool, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{project.fullDetails}</p>

            {/* Widget Links */}
            <div className="flex gap-4">
              {project.links.github && (
                <a href={project.links.github} target="_blank" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View Code
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Optional Image Gallery - Spans 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {project.images.length > 0 && (
              <>
                <div className="col-span-2 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                  <img src={project.images[0]} alt="Featured" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                {project.images.slice(1, 3).map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <img src={img} alt={`Gallery ${i}`} className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}