// 📁 src/projectsDetailedData.js

export const detailedProjects = [
  {
    id: "brt-integration",
    title: "Dar es Salaam BRT & Paratransit Integration",
    description: "A comprehensive spatial equity analysis of the BRT and informal transport system. This project involved processing large-scale GTFS datasets to evaluate urban accessibility.",
    fullDetails: "Using Python and Google Earth Engine, I modeled travel times across the city to identify gaps in transport service. The results provided data-driven recommendations for multimodal policy integration.",
    tools: ["Python", "QGIS", "GTFS", "GEE"],
    // Images are optional; leave as empty array if not available
    images: [
    //   "/projects/brt-1.jpg", 
    //   "/projects/brt-2.jpg", 
    //   "/projects/brt-3.jpg"
    ],
    links: {
      github: "https://github.com/Awumboro",
      demo: "https://your-demo-link.com"
    }
  },
  {
    id: "mining-dashboard",
    title: "Environmental Dashboard for Mining Impacts",
    description: "A real-time monitoring tool for artisanal mining zones.",
    fullDetails: "Developed a cloud-based dashboard using Dash and AWS to visualize vegetation loss and water quality changes detected via satellite imagery.",
    tools: ["GEE", "Dash", "Python", "AWS"],
    images: ["/projects/mining-1.jpg"], // Works with 1, 2, or 3 images
    links: {
      github: "https://github.com/Awumboro"
    }
  }
];