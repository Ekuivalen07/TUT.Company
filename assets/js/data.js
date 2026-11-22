// =========================================
// TUT.COMPANY — Centralized Ecosystem Data
// =========================================

const TUT_DATA = {
  heroSlides: [
    {
      index: "01",
      tag: "AI & Robotics Division",
      title: "Autonomous AI & smart robotics built for real-world scale",
      ctaText: "Explore Core Solutions",
      ctaLink: "solutions.html",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
    },
    {
      index: "02",
      tag: "TUT.EDU & TUT.Academy",
      title: "Hybrid online & offline IT education from beginner to pro",
      ctaText: "Discover Learning Units",
      ctaLink: "ecosystem.html",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
    },
    {
      index: "03",
      tag: "TUT.Entertainment",
      title: "National tech expos, hackathons & robotics championships",
      ctaText: "See Upcoming Events",
      ctaLink: "events.html",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
    }
  ],

  coreTech: [
    {
      id: "ai",
      icon: "cpu",
      title: "Artificial Intelligence",
      shortDesc: "Custom LLM agents, computer vision pipelines, and predictive analytics engineered for enterprise workflows.",
      deliverables: ["Conversational AI Assistants", "Automated Vision Inspection", "Predictive Data Engines"]
    },
    {
      id: "programming",
      icon: "terminal",
      title: "Software & Programming",
      shortDesc: "High-reliability backend architecture, APIs, and scalable cloud infrastructure built with clean engineering.",
      deliverables: ["Microservices & API Design", "Cloud-Native Systems", "DevOps & Automation"]
    },
    {
      id: "appweb",
      icon: "layers",
      title: "App & Web Platforms",
      shortDesc: "Fast, intuitive web applications and cross-platform mobile apps designed with modern product architecture.",
      deliverables: ["Full-Stack Web Apps", "iOS & Android Mobile Apps", "Interactive Design Systems"]
    },
    {
      id: "iot",
      icon: "bot",
      title: "IoT & Robotics",
      shortDesc: "Connected hardware prototypes, autonomous sensor grids, and industrial robotics from lab to deployment.",
      deliverables: ["Smart Telemetry Sensors", "Autonomous Robotics Kits", "Edge Computing Hardware"]
    }
  ],

  ecosystem: [
    {
      id: "edu",
      name: "TUT.EDU",
      badge: "Online Learning",
      tagline: "Self-paced interactive IT courses for global learners.",
      role: "Online Education Platform",
      audience: "Beginners to Senior Engineers",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      stats: "35K+ Active Learners",
      summary: "Structured online tracks covering Programming, AI, Web/App Development, and IoT with AI-assisted mentorship and verified digital portfolios.",
      highlights: ["Interactive Coding Sandboxes", "TUT AI 24/7 Learning Assistant", "Industry-Recognized Certificates"]
    },
    {
      id: "academy",
      name: "TUT.Academy",
      badge: "Offline Campus",
      tagline: "Hands-on offline bootcamps & hardware robotics labs.",
      role: "Offline Intensive Training",
      audience: "Students, Bootcamps & Corporate Teams",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      stats: "120+ Offline Cohorts",
      summary: "In-person mentorship programs where learners collaborate directly with TUT.Company engineers inside dedicated software and IoT hardware laboratories.",
      highlights: ["Dedicated Robotics & IoT Lab", "Live Code Reviews with Senior Mentors", "Corporate & Campus Immersion"]
    },
    {
      id: "entertainment",
      name: "TUT.Entertainment",
      badge: "Tech Events & Expo",
      tagline: "Celebrating innovation through expos, competitions & showcases.",
      role: "IT Events, Competitions & Expos",
      audience: "Tech Communities, Innovators & Public",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
      stats: "40+ National Tech Events",
      summary: "The public stage of TUT.Company—hosting flagship IT exhibitions, national hackathons, and robotics arenas featuring breakthroughs from our R&D labs.",
      highlights: ["Annual TUT Tech Expo", "National AI & Robotics Cup", "Live Product Demo Showcases"]
    }
  ],

  projects: [
    {
      id: "nexus-ai",
      category: "ai",
      categoryLabel: "Artificial Intelligence",
      title: "NexusVision QA",
      client: "Smart Manufacturing Partner",
      year: "2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
      summary: "Real-time computer vision inspection model detecting micro-defects at 120 FPS with 99.4% accuracy.",
      tech: ["Python", "PyTorch", "Edge AI", "FastAPI"]
    },
    {
      id: "agro-iot",
      category: "iot",
      categoryLabel: "IoT & Robotics",
      title: "TerraBot Autonomous Rover",
      client: "TUT.Company R&D Lab",
      year: "2026",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
      summary: "Solar-assisted autonomous telemetry rover engineered for greenhouse climate sensing and precision robotics showcases.",
      tech: ["ESP32", "ROS2", "C++", "MQTT Telemetry"]
    },
    {
      id: "tut-lms",
      category: "appweb",
      categoryLabel: "App & Web",
      title: "TUT.EDU Cloud Platform",
      client: "Internal Ecosystem Product",
      year: "2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      summary: "Scalable full-stack learning ecosystem powering interactive code paths, creator studios, and real-time analytics.",
      tech: ["Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      id: "pulse-core",
      category: "programming",
      categoryLabel: "Software Engineering",
      title: "PulseCore API Gateway",
      client: "Fintech Enterprise",
      year: "2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      summary: "High-throughput distributed middleware handling 2M+ daily requests with automated failover and zero-downtime deploys.",
      tech: ["Go", "Docker", "Redis", "gRPC"]
    },
    {
      id: "aura-mobile",
      category: "appweb",
      categoryLabel: "App & Web",
      title: "EventPass Companion App",
      client: "TUT.Entertainment",
      year: "2026",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
      summary: "Seamless QR check-in, live expo floor navigation, and interactive audience voting app for 10,000+ expo attendees.",
      tech: ["Flutter", "Firebase", "REST API"]
    },
    {
      id: "swarm-drone",
      category: "iot",
      categoryLabel: "IoT & Robotics",
      title: "AeroLink Telemetry Grid",
      client: "Logistics Innovation Lab",
      year: "2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      summary: "Low-latency IoT sensor mesh providing live fleet health monitoring, predictive maintenance alerts, and web dashboards.",
      tech: ["LoRaWAN", "Embedded C", "WebSockets"]
    }
  ],

  events: [
    {
      id: "expo-2026",
      type: "expo",
      typeLabel: "Tech Expo",
      date: "Dec 14–16, 2026",
      location: "Jakarta Convention Hall",
      title: "TUT Tech Expo 2026: Future Systems Live",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
      summary: "Our flagship annual exhibition showcasing live robotics prototypes, AI products from TUT.Company, and top student innovations from TUT.EDU & TUT.Academy."
    },
    {
      id: "hack-2026",
      type: "competition",
      typeLabel: "Competition",
      date: "Jan 24–25, 2027",
      location: "TUT.Academy Hub, Bogor & Online",
      title: "TUT National AI & Web Hackathon",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      summary: "48-hour rapid engineering sprint challenging developers from beginner to pro to build impactful AI and web solutions."
    },
    {
      id: "robo-cup",
      type: "competition",
      typeLabel: "Robotics Arena",
      date: "Feb 18, 2027",
      location: "Bandung Tech Arena",
      title: "Autonomous Robotics & IoT Championship",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1000&q=80",
      summary: "High-energy hardware competition where teams deploy line-tracking rovers, smart IoT grids, and autonomous bots."
    },
    {
      id: "news-lab",
      type: "news",
      typeLabel: "Company News",
      date: "Nov 10, 2026",
      location: "TUT.Company HQ",
      title: "TUT.Company Launches Next-Gen Robotics Lab at TUT.Academy",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      summary: "Expanded offline engineering facilities now feature 3D prototyping stations, embedded IoT benches, and AI compute racks."
    }
  ]
};