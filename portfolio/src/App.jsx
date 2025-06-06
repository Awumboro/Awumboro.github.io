// 📁 Justine Kojo - Portfolio Site (Refined Layout & Design)

import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* Header Section */}
        <header className="relative text-center">
          <img
            src="/headshot.jpg"
            alt="Justine Kojo"
            className="float-right w-[200px] h-[200px] object-cover object-top rounded border shadow-sm ml-4 mb-2"
          />

          <h1 className="text-4xl font-bold">Justine Kojo</h1>
          <p className="text-gray-600 text-lg mt-1">
            GIS & Remote Sensing Analyst | Python Developer | Transport Researcher | Data Whisperer
          </p>
          <div className="mt-4 text-center text-blue-600 space-x-3 text-sm">
            <a href="https://www.linkedin.com/in/justine-kojo" className="hover:underline">LinkedIn</a>
            <span className="text-gray-400">||</span>
            <a href="https://github.com/Awumboro" className="hover:underline">GitHub</a>
            <span className="text-gray-400">||</span>
            <a href="https://www.youtube.com/@ProGeomatics/videos" className="hover:underline">YouTube</a>
            <span className="text-gray-400">||</span>
            <span>Contact: <a href="mailto:awumboro@gmail.com" className="hover:underline text-blue-700">awumboro@gmail.com</a></span>
            <span className="text-gray-400">||</span>
            <span className="text-black">+233 55 862 9285</span>
          </div>
        </header>

        <div className="clear-both" />

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="leading-relaxed">
            I’m a geospatial analyst and research associate with over 6 years of experience in transport systems, environmental
            monitoring, and data-driven urban planning across Africa. My background spans multiple sectors—from
            developing transport access models in Dar es Salaam to building environmental dashboards and teaching GIS and
            programming at KNUST. I bring strong technical skills and a deep curiosity for sustainable infrastructure and equitable access.
          </p>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <hr className="border-gray-300" />

          <ul className="space-y-2">
            <li><strong>MPhil (Civil Engineering – Transport Studies)</strong> – University of Cape Town (2023–2025)</li>
            <li><strong>BSc Geomatics Engineering (First Class)</strong> – KNUST, Ghana (2017–2021)</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <hr className="border-gray-300" />

          <ul className="space-y-2">
            <li><strong>Pre-doctoral Research Associate</strong> – JPAL, Uganda (Nov 2024 – Mar 2025)</li>
            <li><strong>GIS & RS Officer</strong> – Rainforest Builder, Ghana (Jul 2024 – Dec 2024)</li>
            <li><strong>Geospatial Developer</strong> – VarianceLabs, Australia (2023 – Present)</li>
            <li><strong>GIS Analyst</strong> – World Bank Group, Tanzania (Sep 2022 – Sep 2023)</li>
            <li><strong>Research & Teaching Assistant</strong> – KNUST, Ghana (2021 – 2022)</li>
          </ul>
        </section>


        {/* Skills Section */}
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Geospatial & Mapping Tools</h3>
              <p className="text-gray-700">ArcGIS, QGIS, Google Earth Engine, Drone Mapping, Leaflet, Mapbox</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Data & Computational Analysis</h3>
              <p className="text-gray-700">Power BI, Excel, Matplotlib, Machine Learning (basics), Numpy, Pandas, Geopandas, SciKit Learn</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Programming & Development</h3>
              <p className="text-gray-700">Python, Dash, Flutter, PostgreSQL, Firebase, JavaScript, HTML/CSS</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Surveying & Engineering</h3>
              <p className="text-gray-700">AutoCAD Civil 3D, RTK, UAV, Total Station, GNSS, PPK, Static Surveying</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Transport Research & Urban Planning</h3>
              <p className="text-gray-700">GTFS processing, Urban Accessibility Modelling, Paratransit Data Integration, Equity-focused Mapping, OpenTripPlanner</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Scientific Writing & Collaboration</h3>
              <p className="text-gray-700">LaTeX, Overleaf, Microsoft Word, Academic Referencing, Google Workspace, Miro, GitHub</p>
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

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlighted Projects</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="space-y-8">
            {["Dar es Salaam BRT & Paratransit Integration", "Environmental Dashboard for Mining Impacts", "Mobile App for Road Roughness Index (IRI)", "Land Use Change Detection – Ghana", "GNSS Accuracy Evaluation"].map((title, index) => {
              const descriptions = [
                "Conducted GTFS dataset creation and accessibility analysis for the BRT and informal transport system in Dar es Salaam. Evaluated spatial equity in access to the CBD within 60 minutes, providing insight for multimodal policy recommendations.",
                "Designed a geospatial monitoring dashboard powered by Google Earth Engine to analyze vegetation loss, water surface changes, and urban encroachment in artisanal mining zones. Hosted using AWS and integrated with stakeholder-driven indicators.",
                "Developed a cross-platform Flutter app using phone accelerometers and gyroscope data to compute the International Roughness Index of rural roads. Enabled low-cost pavement evaluation in remote areas without specialized sensors.",
                "Performed time-series land cover classification and predicted 2030 land use using Random Forest models on Landsat imagery. Focused on deforestation patterns and urban expansion trends in Upper Denkyira District.",
                "Compared UAV, RTK, PPK, and Static GNSS methods across multiple terrain types. Analyzed the spatial accuracy of each method for use in infrastructure surveying and construction monitoring."
              ];
              const tools = [
                "Python, QGIS, GTFS, Google Earth Engine",
                "GEE, Dash, Python, AWS, PostgreSQL",
                "Flutter, Firebase, Excel, Python",
                "Google Earth Engine, QGIS, Random Forest",
                "AutoCAD Civil 3D, GNSS Survey Tools, QGIS"
              ];
              return (
                <div key={index}>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    <span className="text-blue-500 mr-2">{index + 1}.</span>
                    {title}
                  </h3>
                  <div className="pl-6">
                    <p className="text-gray-700 text-base leading-relaxed">{descriptions[index]}</p>
                    <p className="mt-1 italic text-sm text-gray-500">Tools: {tools[index]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="text-center pt-12 text-sm text-gray-500">
          <p>Built by Justine Kojo © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
