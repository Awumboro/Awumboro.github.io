// // 📁 Justine Kojo - Portfolio Site 

// 📁 src/pages/Home.jsx
import React from "react";
import { projects } from "../projectsData"; // Ensure path matches your folder structure

export default function Home() {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Header Section */}
      <header className="text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img
            src="/headshot.jpg"
            alt="Justine Kojo"
            className="w-24 h-24 object-cover object-top rounded-full border-2 border-gray-300 shadow-md"
          />
          <div className="text-left max-w-xl">
            <h1 className="text-4xl font-extrabold font-serif text-gray-900">Justine Kojo</h1>
            <p className="text-gray-600 text-lg mt-2 leading-snug">
              Geomatics Engineer | Cloud-based Geospatial Analyst 🌍 | Researcher
            </p>
            <div className="mt-4 text-blue-600 flex flex-wrap gap-3 text-sm font-medium">
               <a href="https://scholar.google.com/citations?user=9iKGu0sAAAAJ&hl=en&oi=ao" className="hover:underline">Google Scholar</a>
             <a href="https://www.linkedin.com/in/justine-kojo" className="hover:underline">LinkedIn</a>
             <a href="https://github.com/Awumboro" className="hover:underline">GitHub</a>
             <a href="https://www.youtube.com/@ProGeomatics/videos" className="hover:underline">YouTube</a>
             <a href="mailto:awumboro@gmail.com" className="hover:underline">awumboro@gmail.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
        <section id="about">
        <h2 className="text-1xl font-semibold mb-6">About Me</h2>
        <p className="leading-relaxed text-gray-700 max-w-5xl text-base text-justify">
        I am Justine Kojo, a geomatics engineer and geospatial data analyst working at the intersection of urban systems, remote sensing, and data science. My work focuses on understanding how cities move, how infrastructure performs under stress, and how spatial data can support better planning and policy decisions.

I hold a First Class degree in Geomatics Engineering from KNUST and recently completed an MPhil in Civil Engineering (Transport Studies) at the University of Cape Town. My research explores the integration of formal and informal transport systems in African cities, using spatial analytics and network modeling to understand accessibility, system efficiency, and equity.

Across my work I combine satellite imagery, geospatial analysis, and computational methods to build practical tools and insights. I have worked on transport accessibility analysis in Dar es Salaam, environmental monitoring dashboards using Google Earth Engine, and land-use change modeling using machine learning.

Technically, my work sits at the intersection of GIS, remote sensing, and data science. I build analytical pipelines using Python, Google Earth Engine, and spatial databases to extract meaningful insights from complex geospatial datasets.

Whether in research or applied projects, my goal is the same: translate spatial data into clear evidence that supports better infrastructure decisions, stronger environmental monitoring, and more equitable urban systems.
                    </p>
    </section>

      
       {/* Education Section */}
        <section id="education">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <hr className="border-gray-300 mb-6" />
          

          <div className="space-y-8 text-gray-800">

            <div className="bg-gray p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-blue-800">PhD: Civil Engineering – Transport Studies</h3>
              <ul className="ml-6 list-disc mt-1 space-y-1 text-sm">
                <li><strong>Institution:</strong> Center for Transport Studies - University of Cape Town, South Africa (2026–2029)</li>
                <li><strong>Thesis:</strong> <em>“Developing Multimodal Graph Neural Networks for Predicting and Generalizing Urban Transport Resilience Under Climate and Urban Stress in Data-Scarce African Cities”</em></li>
                <li><strong>Supervisors:</strong> Prof. Roger Behrens, Dr. Obiora Nnene & Prof. Mark Zuidgeest</li>
              </ul>
            </div>

            <div className="bg-gray p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-blue-800">MPhil: Civil Engineering – Transport Studies</h3>
              <ul className="ml-6 list-disc mt-1 space-y-1 text-sm">
                <li><strong>Institution:</strong> Center for Transport Studies - University of Cape Town, South Africa (2023–2025)</li>
                <li><strong>Thesis:</strong> <em>“Exploring the Impact of Paratransit Integration with Scheduled Transport – A case of Dar es Salaam, Tanzania”</em></li>
                <li><strong>Supervisors:</strong> Prof. Roger Behrens & Dr. Obiora Nnene</li>
              </ul>
            </div>

            <div className="bg-gray p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-blue-800">BSc: Geomatics Engineering (First Class Honors)</h3>
              <ul className="ml-6 list-disc mt-1 space-y-1 text-sm">
                <li><strong>Institution:</strong> Kwame Nkrumah University of Science and Technology – Ghana (Aug 2017 – Nov 2021)</li>
                <li><strong>Thesis:</strong> <em>“On the Road to Transformation: Investigating the Emergence and Evolution of Ride Sourcing in the Ashanti Region of Ghana”</em></li>
                <li><strong>Supervisor:</strong> Dr. Akwasi Afrifa Acheampong</li>
              </ul>
            </div>
          </div>
        </section>

        
        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
          <hr className="border-gray-300 mb-4" />
          <ul className="space-y-3 text-gray-700">
            <li><strong>Pre-doctoral Research Associate</strong> – JPAL, Uganda (Nov 2024 – Present)</li>
            <li><strong>GIS & Remote Sensing Officer</strong> – Rainforest Builder, Ghana (Jul 2024 – Dec 2024)</li>
            <li><strong>Geospatial Developer</strong> – VarianceLabs, Australia (Jan 2023 – Present)</li>
            <li><strong>STT-GIS Analyst</strong> – World Bank Group, Tanzania (Sep 2022 – Sep 2023)</li>
            <li><strong>Research & Teaching Assistant</strong> – KNUST, Ghana (2021 – 2022)</li>
          </ul>
        </section>

        {/* Research & Publications */}
        <section id="publications">
        <h2 className="text-3xl font-semibold mb-4">Research & Publications</h2>
        <hr className="border-gray-300 mb-6" />
        <div className="space-y-6 text-gray-800 text-sm">

            <div>
            <h3 className="font-bold text-lg mb-1">Conference Papers</h3>
            <ul className="list-disc list-inside space-y-1">
                <li>
                <span className="font-medium">J. Kojo, R. Behrens, O. Nnene</span>. 
                <a style={{color: "#4c58c9ff", fontStyle: "italic", fontWeight: "bold"} } href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9iKGu0sAAAAJ&citation_for_view=9iKGu0sAAAAJ:u-x6o8ySG0sC">
                “Exploring the modality and impact of integrating bus rapid transit with daladala services in Dar es Salaam.” </a> 
                 Presented at Southern African Transport Conference (SATC 2025), Pretoria, South Africa.
                </li>
            </ul>
            </div>

            <div>
            <h3 className="font-bold text-lg mt-4 mb-1">Working Journal Papers</h3>
            <ul className="list-disc list-inside space-y-1">
                <li>
                <span className="font-medium">“Reactive Reform:”</span> Lessons from the Attempted Integration of Informal Paratransit with BRT in Dar es Salaam.
                </li>
                <li>
                <span className="font-medium">“Optimizing Integration:”</span> A Scenario-Based Genetic Algorithm Optimization Model of Paratransit and bus rapid transit (BRT) Coordination in Dar es Salaam.
                </li>
            </ul>
            </div>

        </div>
        </section>


        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-700">
            {
            [
              ["Geospatial & Mapping Tools", "ArcGIS, QGIS, Google Earth Engine, Drone Mapping, Leaflet, Mapbox"],
              ["Data & Computational Analysis", "Power BI, Excel, Matplotlib, Machine Learning, Numpy, Pandas, Geopandas, SciKit Learn, Rasterio"],
              ["Programming & Development", "Python, Dash, Flutter, PostgreSQL, Firebase, JavaScript (Intermediate), HTML/CSS"],
              ["Surveying & Engineering", "AutoCAD Civil 3D, UAV, Total Station, GNSS Surveys, RTK, PPK, Static Surveying"],
              ["Transport Research & Urban Planning", "GTFS processing, Urban Accessibility Modelling, Paratransit Data Integration, Equity-focused Mapping"],
              ["Scientific Writing & Collaboration", "LaTeX, Overleaf, Microsoft Word, Academic Referencing, Google Workspace, Miro, GitHub"]
            ].map(([title, content], i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p>{content}</p>
              </div>
            ))
            
            }
          </div>
        </section>
        

      {/* Dynamic Projects Section */}
      <section id="projects">
        <h2 className="text-3xl font-semibold mb-4">Highlighted Projects</h2>
        <hr className="border-gray-300 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-700 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              <p className="text-xs font-bold text-gray-400 uppercase">Tools: <span className="text-blue-600 font-normal normal-case">{project.tools}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}