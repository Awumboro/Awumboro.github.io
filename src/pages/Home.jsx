import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../projectsData";
import { experiences } from "../experienceData";
import BibtexModal from "../components/BibtexModal";
import ImageLightbox from "../components/ImageLightbox";
import CollapsibleSection from "../components/CollapsibleSection";
import TableOfContents from "../components/TableOfContents";
import {
  BookOpen,
  Mail,
  Check,
  ExternalLink,
  MapPin,
  Calendar,
  Quote,
  Award,
  ArrowRight,
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, ScholarIcon } from "../components/SocialIcons";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const [citationPaper, setCitationPaper] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: ""
  });

  const location = useLocation();

  // Sections open by default for a seamless reading experience; reader can collapse any on demand
  const [sections, setSections] = useState({
    about: true,
    education: true,
    experience: true,
    publications: true,
    skills: true,
    projects: true
  });

  const tocItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "skills", label: "Skills & Tools" },
    { id: "projects", label: "Projects" }
  ];

  // Auto-expand section if targeted by URL hash
  useEffect(() => {
    if (location.hash) {
      const sectionKey = location.hash.replace("#", "");
      setSections((prev) => (sectionKey in prev ? { ...prev, [sectionKey]: true } : prev));
    }
  }, [location.hash]);

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectToc = (id) => {
    setSections((prev) => ({ ...prev, [id]: true }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("justine.jkojo@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const skillsData = [
    {
      category: "Geospatial & Earth Observation",
      title: "Geospatial & Mapping",
      skills: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "Drone Mapping", "Leaflet", "Mapbox", "Rasterio", "Geopandas"]
    },
    {
      category: "Data Science & AI",
      title: "Data & Computational Analysis",
      skills: ["Python", "Machine Learning", "Graph Neural Networks", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Power BI"]
    },
    {
      category: "Software Development",
      title: "Development & Databases",
      skills: ["PostgreSQL / PostGIS", "Dash", "Flutter", "Firebase", "JavaScript", "React", "HTML/CSS", "Git / GitHub"]
    },
    {
      category: "Surveying & Infrastructure",
      title: "Surveying & Geomatics",
      skills: ["AutoCAD Civil 3D", "UAV Photogrammetry", "GNSS Surveys", "RTK & PPK", "Total Station", "Geodetic Networks"]
    },
    {
      category: "Urban Systems",
      title: "Transport & Urban Planning",
      skills: ["GTFS Processing", "Urban Accessibility Modeling", "Paratransit Integration", "Equity-focused Mapping", "Network Analysis"]
    },
    {
      category: "Academic & Research",
      title: "Scientific Research",
      skills: ["Academic Publishing", "LaTeX / Overleaf", "Scientific Communication", "Research Mentorship", "Open Science"]
    }
  ];

  const skillCategories = ["All", "Geospatial & Earth Observation", "Data Science & AI", "Software Development", "Urban Systems"];

  const filteredSkills = activeSkillCategory === "All"
    ? skillsData
    : skillsData.filter((s) => s.category === activeSkillCategory);

  const publications = [
    {
      id: "satc-2025",
      type: "Conference Paper",
      title: "Exploring the modality and impact of integrating bus rapid transit with daladala services in Dar es Salaam",
      authors: "J. Kojo, R. Behrens, O. Nnene",
      venue: "Presented at Southern African Transport Conference (SATC 2025), Pretoria, South Africa",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9iKGu0sAAAAJ&citation_for_view=9iKGu0sAAAAJ:u-x6o8ySG0sC",
      apa: "Kojo, J., Behrens, R., & Nnene, O. (2025). Exploring the modality and impact of integrating bus rapid transit with daladala services in Dar es Salaam. Southern African Transport Conference (SATC 2025), Pretoria, South Africa.",
      bibtex: `@inproceedings{kojo2025exploring,
  title={Exploring the modality and impact of integrating bus rapid transit with daladala services in Dar es Salaam},
  author={Kojo, Justine and Behrens, Roger and Nnene, Obiora},
  booktitle={Proceedings of the Southern African Transport Conference (SATC 2025)},
  year={2025},
  address={Pretoria, South Africa}
}`
    },
    {
      id: "reactive-reform",
      type: "Working Journal Paper",
      title: "Reactive Reform: Lessons from the Attempted Integration of Informal Paratransit with BRT in Dar es Salaam",
      authors: "J. Kojo, R. Behrens, O. Nnene",
      venue: "Manuscript in preparation / Under review",
      apa: "Kojo, J., Behrens, R., & Nnene, O. (2025). Reactive Reform: Lessons from the Attempted Integration of Informal Paratransit with BRT in Dar es Salaam. Working Paper.",
      bibtex: `@article{kojo2025reactive,
  title={Reactive Reform: Lessons from the Attempted Integration of Informal Paratransit with BRT in Dar es Salaam},
  author={Kojo, Justine and Behrens, Roger and Nnene, Obiora},
  journal={Working Paper},
  year={2025}
}`
    },
    {
      id: "optimizing-integration",
      type: "Working Journal Paper",
      title: "Optimizing Integration: A Scenario-Based Genetic Algorithm Optimization Model of Paratransit and bus rapid transit (BRT) Coordination in Dar es Salaam",
      authors: "J. Kojo, R. Behrens, O. Nnene",
      venue: "Manuscript in preparation / Under review",
      apa: "Kojo, J., Behrens, R., & Nnene, O. (2025). Optimizing Integration: A Scenario-Based Genetic Algorithm Optimization Model of Paratransit and bus rapid transit (BRT) Coordination in Dar es Salaam. Working Paper.",
      bibtex: `@article{kojo2025optimizing,
  title={Optimizing Integration: A Scenario-Based Genetic Algorithm Optimization Model of Paratransit and bus rapid transit (BRT) Coordination in Dar es Salaam},
  author={Kojo, Justine and Behrens, Roger and Nnene, Obiora},
  journal={Working Paper},
  year={2025}
}`
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero / Identity Section */}
      <header className="relative pt-4 pb-2">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar with subtle border */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              src="/headshot.jpg"
              alt="Justine Kojo Awumboro"
              className="relative w-32 h-32 md:w-36 md:h-36 object-cover object-top rounded-full border-2 border-white dark:border-zinc-900 shadow-xl"
            />
          </div>

          {/* Hero text */}
          <div className="text-center md:text-left space-y-3 flex-1">
            {/* Fellowship Status Pill - Professional Academic Style */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60 shadow-xs">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Google PhD Fellow • Transport Studies</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-zinc-100 font-serif tracking-tight">
              Justine Kojo
            </h1>

            <p className="text-slate-600 dark:text-zinc-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              Geomatics Engineer • Geospatial Data Scientist • Urban Systems Researcher
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 flex items-center justify-center md:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              Center for Transport Studies, University of Cape Town, South Africa
            </p>

            {/* Interactive Social & Academic Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>justine.jkojo@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href="https://scholar.google.com/citations?user=9iKGu0sAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <ScholarIcon className="w-3.5 h-3.5 text-blue-500" />
                Google Scholar
              </a>

              <a
                href="https://www.linkedin.com/in/justine-kojo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                LinkedIn
              </a>

              <a
                href="https://github.com/Awumboro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>

              <a
                href="https://www.youtube.com/@ProGeomatics/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-red-400 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-sm"
              >
                <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area with Side Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        {/* Main Content - 9 columns */}
        <div className="lg:col-span-9 space-y-16">
          {/* About Section */}
          <CollapsibleSection
            id="about"
            title="About Me"
            badge="Bio & Research Focus"
            isOpen={sections.about}
            onToggle={() => toggleSection("about")}
          >
            <div className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-sm text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                I am <strong className="text-slate-900 dark:text-white">Justine Kojo Awumboro</strong>, a geomatics engineer and geospatial analyst working at the intersection of urban systems, Earth Observation, and data science. My research explores how cities function, how infrastructure systems perform under stress, and how spatial data can support evidence-based planning and policy decisions in rapidly growing African cities.
              </p>

              <p>
                Currently, I am pursuing my PhD in Civil Engineering (Transport Studies) at the{" "}
                <a
                  href="https://ebe.uct.ac.za/department-civil-engineering/centre-transport-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 dark:text-white underline decoration-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Centre for Transport Studies, University of Cape Town
                </a>{" "}
                as a <span className="font-semibold text-blue-600 dark:text-blue-400">Google PhD Fellow</span>. My doctoral research develops multimodal graph neural networks to analyze and predict urban transport resilience under climate and urban stress in data-scarce African environments.
              </p>

              <p>
                Across both research and applied consulting projects, I combine satellite imagery, geospatial analysis, and statistical modeling to extract actionable insights. My portfolio spans regional Earth Observation analyses for WaterAid in West Africa, transport accessibility modeling for the World Bank in Dar es Salaam, and cloud geospatial dashboard development.
              </p>
            </div>
          </CollapsibleSection>

          {/* Education Section */}
          <CollapsibleSection
            id="education"
            title="Education"
            badge="3 Degrees • UCT & KNUST"
            isOpen={sections.education}
            onToggle={() => toggleSection("education")}
          >
            <div className="grid grid-cols-1 gap-5">
              {/* PhD */}
              <div className="bg-white dark:bg-zinc-900/60 border-l-4 border-l-blue-600 border border-slate-200/90 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                    PhD in Civil Engineering – Transport Studies
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      Google PhD Fellow
                    </span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 2026 – 2029
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                    Center for Transport Studies • University of Cape Town, South Africa
                  </span>
                  <a
                    href="https://ebe.uct.ac.za/department-civil-engineering/centre-transport-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Visit Centre for Transport Studies</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 space-y-1">
                  <p>
                    <strong>Thesis:</strong> <em>“Developing Multimodal Graph Neural Networks for Predicting and Generalizing Urban Transport Resilience Under Climate and Urban Stress in Data-Scarce African Cities”</em>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    <strong>Supervisors:</strong> Prof. Roger Behrens, Dr. Obiora Nnene & Prof. Mark Zuidgeest
                  </p>
                </div>
              </div>

              {/* MPhil */}
              <div className="bg-white dark:bg-zinc-900/60 border-l-4 border-l-indigo-600 border border-slate-200/90 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-zinc-100">
                    MPhil in Civil Engineering – Transport Studies
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 2023 – 2025
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                    Center for Transport Studies • University of Cape Town, South Africa
                  </span>
                  <a
                    href="https://ebe.uct.ac.za/department-civil-engineering/centre-transport-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Visit Centre for Transport Studies</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 space-y-1">
                  <p>
                    <strong>Thesis:</strong> <em>“Exploring the Impact of Paratransit Integration with Scheduled Transport – A case of Dar es Salaam, Tanzania”</em>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    <strong>Supervisors:</strong> Prof. Roger Behrens & Dr. Obiora Nnene
                  </p>
                </div>
              </div>

              {/* BSc */}
              <div className="bg-white dark:bg-zinc-900/60 border-l-4 border-l-sky-500 border border-slate-200/90 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                    BSc in Geomatic Engineering
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      First Class Honours
                    </span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 2017 – 2021
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                    Kwame Nkrumah University of Science and Technology (KNUST), Ghana
                  </span>
                  <a
                    href="https://geomatics.knust.edu.gh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    <span>Explore Department of Geomatic Engineering</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 space-y-1">
                  <p>
                    <strong>Thesis:</strong> <em>“On the Road to Transformation: Investigating the Emergence and Evolution of Ride Sourcing in the Ashanti Region of Ghana”</em>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    <strong>Supervisor:</strong> Dr. Akwasi Afrifa Acheampong
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Applied Research & Professional Experience */}
          <CollapsibleSection
            id="experience"
            title="Applied Research & Professional Experience"
            badge="6 Roles • WaterAid, J-PAL, World Bank"
            isOpen={sections.experience}
            onToggle={() => toggleSection("experience")}
          >
            <div className="relative pl-4 sm:pl-8 space-y-8 before:absolute before:left-1 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-zinc-800">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[19px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-600 group-hover:scale-125 group-hover:bg-blue-600 transition-all"></div>

                  <div className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500 tabular-nums">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-3">
                      <span>{exp.company}</span>
                      <span className="text-slate-300 dark:text-zinc-700">•</span>
                      <span className="text-slate-500 dark:text-zinc-400 font-normal">{exp.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed text-justify">
                      {exp.description}
                    </p>

                    {exp.url && (
                      <div className="mt-3 pt-2">
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          Read Official Policy Report
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Research & Publications */}
          <CollapsibleSection
            id="publications"
            title="Research & Publications"
            badge="3 Papers • SATC 2025 & Preprints"
            isOpen={sections.publications}
            onToggle={() => toggleSection("publications")}
          >
            <div className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 p-5 sm:p-6 rounded-2xl shadow-sm hover:border-blue-300 dark:hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                        {pub.type}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-zinc-100 leading-snug">
                      {pub.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                      {pub.authors}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-zinc-400 italic">
                      {pub.venue}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Scholar Link
                      </a>
                    )}
                    <button
                      onClick={() => setCitationPaper(pub)}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all flex items-center gap-1.5"
                    >
                      <Quote className="w-3.5 h-3.5" />
                      Cite / BibTeX
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Interactive Skills Matrix */}
          <CollapsibleSection
            id="skills"
            title="Technical Competencies & Skills"
            badge="24+ Tools Across 6 Domains"
            isOpen={sections.skills}
            onToggle={() => toggleSection("skills")}
          >
            <div className="space-y-6">
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSkillCategory(cat)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      activeSkillCategory === cat
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSkills.map((group, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {group.category}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-base mt-1 mb-3">
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-800 border border-slate-200/80 dark:border-zinc-700/60 text-slate-700 dark:text-zinc-300 rounded-lg text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>

          {/* Highlighted Projects Showcase */}
          <CollapsibleSection
            id="projects"
            title="Featured Projects"
            badge="4 Highlighted Projects"
            isOpen={sections.projects}
            onToggle={() => toggleSection("projects")}
            action={
              <Link
                to="/projects"
                className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    {proj.image && (
                  <div
                    className="relative h-48 overflow-hidden bg-slate-900 cursor-pointer group"
                    onClick={() =>
                      setLightboxState({
                        isOpen: true,
                        images: [proj.image],
                        currentIndex: 0,
                        title: proj.title
                      })
                    }
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-sm">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed text-justify">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 dark:text-zinc-500 font-semibold truncate max-w-[200px]">
                  Tools: <span className="text-slate-700 dark:text-zinc-300 font-normal">{proj.tools}</span>
                </span>
                <Link
                  to="/projects"
                  className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  Deep Dive <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Side Table of Contents (Desktop Sticky) - 3 columns */}
        <div className="hidden lg:block lg:col-span-3">
          <TableOfContents
            sections={tocItems}
            onSelectSection={handleSelectToc}
          />
        </div>
      </div>

      {/* BibTeX Modal */}
      <BibtexModal
        isOpen={Boolean(citationPaper)}
        paper={citationPaper}
        onClose={() => setCitationPaper(null)}
      />

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        title={lightboxState.title}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onIndexChange={(idx) =>
          setLightboxState((prev) => ({ ...prev, currentIndex: idx }))
        }
      />
    </div>
  );
}
