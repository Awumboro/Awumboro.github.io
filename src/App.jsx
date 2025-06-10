// 📁 Justine Kojo - Portfolio Site (Refined Layout & Design + Enhanced Aesthetics)

import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-800 font-roboto">
      <div className="max-w-5xl mx-auto px-20 py-12 space-y-16">

        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 border-b flex justify-between items-center">
          <span className="text-lg font-bold tracking-tight">Justine Kojo</span>
          <div className="space-x-4 text-sm text-blue-600">
            <a href="#about" className="hover:underline">About</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
          </div>
        </nav>

        {/* Header Section */}
        <header className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img
              src="/headshot.jpg"
              alt="Justine Kojo"
              className="w-20 h-20 object-cover object-top rounded-full border-2 border-gray-300 shadow-md animate-fadeIn"
            />
            <div className="text-left max-w-xl">
              <h1 className="text-4xl font-extrabold font-serif text-gray-900">Justine Kojo</h1>
              <p className="text-gray-600 text-lg mt-2 leading-snug">
                Geomatics Engineer | Cloud-based Geospatial Analyst 🌍 | Researcher
              </p>
              <div className="mt-4 text-blue-600 space-x-3 text-sm">
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
          <h2 className="text-5x2 font-semibold mb-6">About Me</h2>
          <p className="leading-relaxed text-gray-700 max-w-5x1 text-base text-justify">
            I’m Justine Kojo—a geomatics engineer, researcher, and geospatial developer passionate about using data to decode how cities breathe, grow, and move. With a First Class degree from KNUST and an MPhil in Civil Engineering (Transport Studies) at UCT, I’ve spent the last few years exploring the intersections of transport equity, environmental monitoring, and urban planning across Africa.
            My work spans from conducting transport accessibility analyses and optimizations in Dar es Salaam to building environmental dashboards and evaluating land use change with satellite imagery and machine learning. I thrive in roles that merge technical depth—Python, QGIS, GEE, statistics—with a commitment to real-world impact.
            At heart, I’m a researcher driven by questions: How can satellite data illuminate transport inequality? How can cloud-based geospatial tools serve sustainable urban design? And how can we harness big data not just to describe cities—but to improve them?
            When I’m not mapping, I’m analyzing data, mentoring new geospatial analysts, or dreaming up ways to make remote sensing more accessible to the communities it observes.
            
                      </p>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="space-y-8 text-gray-800">
            <div className="bg-gray p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">MPhil (by dissertation): Civil Engineering – Transport Studies</h3>
              <ul className="ml-6 list-disc mt-1 space-y-1 text-sm">
                <li><strong>Institution:</strong> University of Cape Town – South Africa (2023–2025)</li>
                <li><strong>Thesis:</strong> <em>“Exploring the Impact of Paratransit Integration with Scheduled Transport – A case of Dar es Salaam, Tanzania”</em></li>
                <li><strong>Supervisors:</strong> Prof. Roger Behrens & Dr. Obiora Nnene</li>
              </ul>
            </div>

            <div className="bg-gray p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Bachelor of Science Degree: Geomatics Engineering (First Class Honors)</h3>
              <ul className="ml-6 list-disc mt-1 space-y-1 text-sm">
                <li><strong>Institution:</strong> Kwame Nkrumah University of Science and Technology – Ghana (Aug 2017 – Nov 2021)</li>
                <li><strong>Undergraduate Thesis:</strong> <em>“On the Road to Transformation: Investigating the Emergence and Evolution of Ride Sourcing in the Ashanti Region of Ghana”</em></li>
                <li><strong>Supervisor:</strong> Dr. Akwasi Afriia Acheampong</li>
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
          <em> “Exploring the modality and impact of integrating bus rapid transit with daladala services in Dar es Salaam.”</em>  
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


        
        {/* Awards & Fellowships */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Awards & Fellowships</h2>
          <hr className="border-gray-300" />
          <ul className="list-disc list-inside">
            <li>Mastercard Scholar</li>
            <li>Center for Transport Studies Grant – R40,000</li>
            <li>Kenneth Been Fund – R50,000</li>
            <li>Future Africa Fellow, Engineers Without Borders, YouthMappers</li>
          </ul>
        </section>


        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-700">
            {[
              ["Geospatial & Mapping Tools", "ArcGIS, QGIS, Google Earth Engine, Drone Mapping, Leaflet, Mapbox"],
              ["Data & Computational Analysis", "Power BI, Excel, Matplotlib, Machine Learning, Numpy, Pandas, Geopandas, SciKit Learn, Rasterio"],
              ["Programming & Development", "Python, Dash, Flutter, PostgreSQL, Firebase, JavaScript (Intermidiate), HTML/CSS"],
              ["Surveying & Engineering", "AutoCAD Civil 3D, UAV, Total Station, GNSS Surveys, RTK, PPK, Static Surveying"],
              ["Transport Research & Urban Planning", "GTFS processing, Urban Accessibility Modelling, Paratransit Data Integration, Equity-focused Mapping"],
              ["Scientific Writing & Collaboration", "LaTeX, Overleaf, Microsoft Word, Academic Referencing, Google Workspace, Miro, GitHub"]
            ].map(([title, content], i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </section>
        


        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Highlighted Projects</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="space-y-2">
            {[
              ["Dar es Salaam BRT & Paratransit Integration", "Conducted GTFS dataset creation and accessibility analysis for the BRT and informal transport system in Dar es Salaam. Evaluated spatial equity in access to the CBD within 60 minutes, providing insight for multimodal policy recommendations.", "Python, QGIS, GTFS, Google Earth Engine"],
              ["Environmental Dashboard for Mining Impacts", "Designed a geospatial monitoring dashboard powered by Google Earth Engine to analyze vegetation loss, water surface changes, and urban encroachment in artisanal mining zones. Hosted using AWS and integrated with stakeholder-driven indicators.", "GEE, Dash, Python, AWS, PostgreSQL"],
              ["Mobile App for Road Roughness Index (IRI)", "Developed a cross-platform Flutter app using phone accelerometers and gyroscope data to compute the International Roughness Index of rural roads. Enabled low-cost pavement evaluation in remote areas without specialized sensors.", "Flutter, Firebase, Excel, Python"],
              ["Land Use Change Detection – Ghana", "Performed time-series land cover classification and predicted 2030 land use using Random Forest models on Landsat imagery. Focused on deforestation patterns and urban expansion trends in Upper Denkyira District.", "Google Earth Engine, QGIS, Random Forest"],
              ["GNSS Accuracy Evaluation", "Compared UAV, RTK, PPK, and Static GNSS methods across multiple terrain types. Analyzed the spatial accuracy of each method for use in infrastructure surveying and construction monitoring.", "AutoCAD Civil 3D, GNSS Survey Tools, QGIS"]
            ].map(([title, desc, tools], i) => (
              <div key={i} className="bg-grey p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-red-700 mb-2">{i + 1}. {title}</h3>
                <p className="text-gray-700 mb-1">{desc}</p>
                <p className="text-sm italic text-gray-500">Tools: {tools}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Footer */}
        <footer className="text-center pt-12 text-sm text-gray-500">
          <p>Built by Justine Kojo © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
