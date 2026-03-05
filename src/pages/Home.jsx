// // 📁 Justine Kojo - Portfolio Site 

// 📁 src/pages/Home.jsx
import React from "react";
import { projects } from "../projectsData"; // Ensure path matches your folder structure
import { experiences } from "../experienceData";




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
            <p className="text-gray-600  mt-2 leading-snug">
              {/* Geomatics Engineer | Cloud-based Geospatial Analyst 🌍 | Researcher */}
              Geomatics Engineer | Geospatial Data Scientist | Urban Systems Researcher
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

        {/* Subtle Identity */}
    <div className="pt-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        Data
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        Intelligence
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        Impact
      </div>
    </div>
        
      </header>

      
    
    {/* About Section */}
<section id="about" className="max-w-3xl mx-auto py-1">
  <div className="space-y-4">
    
    {/* Section Header */}
    <div className="flex items-center gap-6">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">About</h2>
      <div className="h-px flex-1 bg-gray-200"></div>
    </div>

    {/* Narrative Flow */}
    <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-light">
      <p>
        I am <span className="text-gray-900 font-medium">Justine Kojo</span>, a geomatics engineer and geospatial analyst working at the intersection of urban systems, Earth Observation, and data science. My work focuses on understanding how cities function, how infrastructure systems perform under stress, and how spatial data can support better planning and policy decisions in rapidly growing urban environments.
      </p>

      <p>
        Currently, I am pursuing a PhD in Civil Engineering (Transport Studies) at the <span className="text-gray-900">University of Cape Town</span> as a <span className="text-gray-600">Google PhD Fellow</span>. My research focuses on developing graph-based machine learning approaches to analyze and predict urban transport resilience in data-scarce African cities.
        I use spatial analytics, network analysis, and computational modeling to study accessibility, system efficiency, and equity in urban mobility. 

      </p>
   

      <p>
        Across both research and applied projects, I combine satellite imagery, geospatial analysis, and statistical modeling to extract meaningful insights from complex spatial data. My work has included transport accessibility analysis in Dar es Salaam, regional Earth Observation analysis on deforestation and water security in West Africa, and the development of spatial analytics tools for environmental monitoring and infrastructure decision-making.

        Technically, my work sits at the intersection of GIS, remote sensing, and data science. I build analytical workflows using Python, Google Earth Engine, and spatial databases to process large geospatial datasets and translate them into clear, decision-relevant evidence.
      </p>

 
    </div>

    
  </div>
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
      <section id="experience" className="animate-fadeIn">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Applied Research & Professional Experience</h2>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-0 md:pl-8 group">
              {/* Subtle Timeline Vertical Line */}
              <div className="hidden md:block absolute left-0 top-2 bottom-0 w-px bg-gray-200 group-hover:bg-blue-600 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-semibold text-gray-400 tabular-nums">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-3">
                <span>{exp.company}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 font-normal">{exp.location}</span>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm text-justify">
                {exp.description} (<a style={{color: "#4c58c9ff", fontStyle: "italic", fontWeight: "bold"} } href={exp.url} target="_blank" rel="noopener noreferrer">Read more</a>)
              </p>
            </div>
          ))}
        </div>
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