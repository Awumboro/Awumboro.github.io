
// 📁 src/projectsDetailedData.js

export const detailedProjects = [
  {
    id: "wateraid-west-africa",
    title: "West Africa Deforestation & Water Security Analysis",
    description:
      "A multi-country Earth Observation project assessing deforestation, freshwater extent, and water quality risks across Ghana, Nigeria, and Niger.",
    fullDetails:
      "I designed and implemented a Google Earth Engine and Python pipeline to analyze environmental change from 2013 to 2025 using NDVI, NDWI, NDTI, SWIR1, Algae NDVI, CHIRPS rainfall, and population datasets. The project produced country-level reports, cross-country comparison metrics, risk maps, and advocacy-ready visuals linking vegetation loss to drinking water access and population exposure.",
    tools: ["Python", "Google Earth Engine", "Landsat", "CHIRPS", "GIS"],
    images: [
      "/projects/wateraid-1.png",
      "/projects/wateraid-2.png",
      "/projects/wateraid-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  },

  {
    id: "brt-integration",
    title: "Dar es Salaam BRT & Paratransit Integration",
    description:
      "A transport systems project focused on accessibility, multimodal integration, and spatial equity in the Dar es Salaam public transport network.",
    fullDetails:
      "Using Python, GTFS workflows, GIS, and network-based analysis, I examined how BRT and informal paratransit services interact across the city. The work supported accessibility assessment, multimodal planning, and policy thinking around transport integration, system efficiency, and equity in urban mobility.",
    tools: ["Python", "QGIS", "GTFS", "Spatial Analysis"],
    images: [
      "/projects/brt-1.png",
      "/projects/brt-2.png",
      "/projects/brt-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  },
  {
    id: "mining-dashboard",
    title: "Environmental Monitoring Dashboard for Mining Impacts",
    description:
      "A cloud-based geospatial dashboard for tracking vegetation, soil, water, and land cover change in mining landscapes.",
    fullDetails:
      "I developed an environmental monitoring dashboard using the Google Earth Engine Python API, Geemap, Dash, and AWS infrastructure. The system supported time-series monitoring of vegetation health, water bodies, land use and land cover change, and overall environmental footprint, while also incorporating ETL pipelines and cloud data structures for scalable geospatial processing.",
    tools: ["Python", "Dash", "Google Earth Engine", "AWS", "Geemap"],
    images: [
      "/projects/mining-1.png",
      "/projects/mining-2.png",
      "/projects/mining-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  },
  {
    id: "dodoma-dist-nmt",
    title: "Dodoma Transport Accessibility & NMT Planning",
    description:
      "A policy-facing transport analysis evaluating accessibility gains from road upgrades and a proposed non-motorized transport network in Dodoma.",
    fullDetails:
      "I analyzed travel times, population distribution, road conditions, and access to all-weather roads to assess the likely impact of the Dodoma Integrated Sustainable Transport Project. The work combined isochrone mapping, infrastructure gap analysis, and spatial planning to propose a 30 km NMT network and highlight benefits for schools, hospitals, markets, and transit access.",
    tools: ["GIS", "Isochrone Analysis", "OpenStreetMap", "WorldPop", "Urban Mobility"],
    images: [
      "/projects/dodoma-1.png",
      "/projects/dodoma-2.png",
      "/projects/dodoma-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  },
  {
    id: "upper-denkyira-lulc",
    title: "Land Use Change & 2030 Prediction in Upper Denkyira",
    description:
      "A long-term land use and land cover change analysis tracking environmental transformation in a mining-affected district in Ghana.",
    fullDetails:
      "I carried out image classification, accuracy assessment, change detection, and future land use prediction using remote sensing data from 2002 to 2022. The project combined QGIS Semi-Automatic Classification workflows with change analysis and an Artificial Neural Network model to forecast 2030 landscape patterns, showing declining forest and farmland and expanding built-up and mine areas.",
    tools: ["QGIS", "Remote Sensing", "ANN", "LULC Classification", "Change Detection"],
    images: [
      "/projects/upper-denkyira-1.png",
      "/projects/upper-denkyira-2.png",
      "/projects/upper-denkyira-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  },
  {
    id: "nzema-shoreline",
    title: "Shoreline Detection & Coastal Land Use Change",
    description:
      "A coastal geospatial analysis project examining shoreline change, erosion patterns, and land use transitions in Nzema East Municipality.",
    fullDetails:
      "I used Landsat and Sentinel-2 imagery to map shoreline positions over multiple decades and examine how land use transitions relate to shoreline dynamics. The project combined NDWI, Canny edge detection, Random Forest classification, spatial overlay analysis, and validation workflows to identify erosion-prone zones and support coastal management decisions.",
    tools: ["Sentinel-2", "Landsat", "Random Forest", "NDWI", "QGIS"],
    images: [
      "/projects/nzema-1.png",
      "/projects/nzema-2.png",
      "/projects/nzema-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  },

  {
    id: "others",
    title: "Other Projects",
    description:
      "A collection of additional geospatial projects covering topics like deforestation monitoring, urban growth analysis, and infrastructure mapping across various contexts.",
    fullDetails:
      "This section includes a variety of geospatial analyses and applications, such as deforestation monitoring in tropical regions, urban growth analysis in rapidly developing cities, infrastructure mapping for transport planning, and environmental change detection in sensitive ecosystems. Each project applies a combination of remote sensing, spatial analysis, machine learning, and GIS techniques to address specific research questions and real-world challenges.",
    tools: [ "OSM", "QGIS", "ArcGIS Pro"],
    images: [
      "/projects/other-1.png",
      "/projects/other-2.png",
      "/projects/other-3.png"
    ],
    links: {
      github: "https://github.com/Awumboro"
    }
  }

];