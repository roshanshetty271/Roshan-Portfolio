// Portfolio data - All verified information from consolidated sources
// Last updated: January 2026

export const personalInfo = {
  name: "Roshan Shetty",
  fullName: "Roshan Sadashiv Shetty",
  title: "Software Engineer",
  tagline: "Full-Stack Software Engineer | AI/ML Enthusiast | 5x SAP Certified",
  headline: "Building intelligent systems that make a difference",
  location: "Boston, MA",
  about: `Software developer with 3+ years of experience building full-stack enterprise applications and AI systems.

Most recently at Aosenuma, I built RAG pipelines with OpenAI embeddings, semantic search with vector databases, and knowledge graphs using Neo4j for intelligent document processing. Before that, I spent nearly 3 years at Capgemini as a Software Developer, supporting 100+ global users and earning 5 SAP certifications.

I work across the full stack. Python, Java, React, Node, and I have a strong interest in AI/ML systems. I enjoy turning complex technical problems into working solutions.

Currently seeking full-time software engineering roles.`,
  openToWork: true,
  targetRoles: ["Full-Stack Developer", "Backend Engineer", "AI/ML Engineer", "Software Engineer"],
};

export const contact = {
  email: {
    primary: "shetty.ros@northeastern.edu",
    secondary: "roshanshetty271@gmail.com",
  },
  linkedin: "https://linkedin.com/in/roshanshetty271",
  github: "https://github.com/roshanshetty271",
  portfolio: "https://roshanshetty271.wixsite.com/roshan-shetty",
};

export const education = [
  {
    institution: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science",
    field: "Information Systems",
    graduationDate: "Dec 2025",
    gpa: "3.8",
    coursework: [
      "Program Structure and Algorithms",
      "AI Agent Infrastructure",
      "Web Design & UX Engineering",
      "Database Management and Design",
      "Big Data Indexing",
      "Application Engineering and Development",
    ],
  },
  {
    institution: "Mumbai University",
    location: "Mumbai, India",
    degree: "Bachelor of Engineering",
    field: "Electronics and Telecommunication",
    graduationDate: "Nov 2020",
    gpa: "3.5",
    coursework: [
      "Structured Programming Approach",
      "Object-Oriented Programming using Java",
      "Digital Business Communication",
    ],
  },
];

export const experience = [
  {
    company: "Aosenuma",
    location: "Texas, USA",
    title: "AI Software Developer",
    startDate: "Jan 2025",
    endDate: "May 2025",
    duration: "5 months",
    type: "Internship",
    description: "Built AI-driven ESG Reporting Platform as sole frontend owner, implementing RAG pipelines and semantic search systems.",
    achievements: [
      "Built RAG-powered document querying system with OpenAI embeddings, pgvector, and Neo4j knowledge graphs for automated PDF/Excel/Word processing",
      "Developed semantic search with 300-dimensional embeddings and cosine similarity; created Python data pipelines with Flask REST APIs",
      "Delivered full-stack platform (React/Next.js/TypeScript + Python) with 15 D3.js visualizations using Docker and CI/CD",
    ],
    technologies: ["Python", "Flask", "Next.js", "React", "TypeScript", "OpenAI API", "Neo4j", "PostgreSQL", "pgvector", "Redis", "Supabase", "Docker", "D3.js", "AWS ECS"],
  },
  {
    company: "Capgemini",
    location: "Mumbai, India",
    title: "Software Developer",
    startDate: "Nov 2020",
    endDate: "Jun 2023",
    duration: "2 years 8 months",
    type: "Full-time",
    description: "Technical point of contact for enterprise SAP Inventory Manager application supporting 100+ global users.",
    achievements: [
      "Reduced support tickets by 40% building enterprise web applications (JavaScript, HTML5, CSS3, Java, SAP ABAP) serving 100+ global users",
      "Improved issue resolution time by 20% through application performance optimization and database query tuning",
      "Managed complete SDLC in Agile environment; trained 5 team members, reducing onboarding time by 30%",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "SAP ABAP", "SAP HANA", "SAP Fiori", "Java", "SQL"],
  },
];

export const skills = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "SAP ABAP", "C", "C++"],
  aiml: {
    label: "AI/ML Technologies",
    items: ["RAG (Retrieval-Augmented Generation)", "Large Language Models", "OpenAI API", "Word2Vec", "Embeddings", "Semantic Search", "NLP", "Vector Databases"],
  },
  frontend: {
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux", "TypeScript", "HTML5", "CSS3", "D3.js", "Tailwind CSS"],
  },
  backend: {
    label: "Backend & APIs",
    items: ["Flask", "FastAPI", "Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices"],
  },
  databases: {
    label: "Databases",
    sql: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "SAP HANA"],
    nosql: ["MongoDB", "Redis", "Neo4j"],
    vector: ["Qdrant", "ChromaDB", "pgvector", "Supabase"],
  },
  distributed: {
    label: "Distributed Systems",
    items: ["Akka Cluster", "Actor Model", "RabbitMQ", "Elasticsearch", "Event-Driven Architecture"],
  },
  devops: {
    label: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "AWS (ECS, EC2, S3)", "CI/CD", "Git", "GitHub", "Maven", "Agile/Scrum"],
  },
};

export const featuredProjects = [
  {
    name: "DocuMind",
    subtitle: "Distributed AI Document Intelligence System",
    date: "Sep 2025 - Dec 2025",
    status: "completed",
    category: ["AI/ML", "Distributed Systems", "Full-Stack"],
    description: "A distributed RAG system for intelligent document querying and analysis using Akka Cluster and semantic search.",
    highlights: [
      "Architected distributed RAG system using Akka Cluster with fault-tolerant nodes and Actor Model for high availability",
      "Built semantic search pipeline with Word2Vec (300-dim embeddings), Qdrant vector database, and sliding-window chunking",
      "Integrated OpenAI GPT via Spring AI with custom prompt engineering for context-aware answer generation",
      "Developed Java Spring Boot REST API with async endpoints and React frontend, containerized with Docker",
    ],
    technologies: ["Java", "Spring Boot", "Spring AI", "Akka Cluster", "Word2Vec", "Qdrant", "OpenAI GPT", "React", "Docker"],
    github: null,
  },
  {
    name: "RadioX Healthcare Platform",
    subtitle: "Medical Imaging System",
    date: "Sep 2023 - Dec 2023",
    status: "completed",
    category: ["Full-Stack", "Healthcare"],
    description: "Full-stack healthcare management system with DICOM medical imaging viewer.",
    highlights: [
      "Reduced medical imaging processing time by 25% with full-stack platform (React, TypeScript, Redux, Express/Node.js)",
      "Implemented 22 REST API endpoints across 6 MongoDB collections with 9 interactive data visualization tools",
      "Built browser-based DICOM medical imaging viewer, eliminating need for external viewing software",
    ],
    technologies: ["React", "TypeScript", "Redux", "Express.js", "Node.js", "MongoDB", "REST APIs", "DICOM"],
    github: "https://github.com/roshanshetty271/RadioX-Web-Application",
  },
  {
    name: "Medical Insurance Plan API",
    subtitle: "RESTful Microservice",
    date: "Sep 2025 - Dec 2025",
    status: "completed",
    category: ["Backend", "Microservices", "API"],
    description: "A sophisticated microservice for managing hierarchical medical insurance data with advanced caching and search.",
    highlights: [
      "Designed Python Flask microservice with Redis decomposed storage enabling O(1) partial updates",
      "Built Elasticsearch parent-child indexing for hierarchical queries with smart PATCH operations",
      "Integrated RabbitMQ for async processing; secured with Google OAuth 2.0/RS256 JWT",
      "Orchestrated 4-service Docker Compose infrastructure with JSON Schema validation",
    ],
    technologies: ["Python", "Flask", "Redis", "Elasticsearch", "RabbitMQ", "Docker Compose", "OAuth 2.0", "JWT"],
    github: null,
  },
  {
    name: "Recruiter Radar",
    subtitle: "AI-Powered Recruiting Platform",
    date: "Oct 2025 - Present",
    status: "in-progress",
    category: ["AI/ML", "Full-Stack"],
    description: "An intelligent recruiting platform using semantic search to match candidates beyond keyword filtering.",
    highlights: [
      "Building AI-powered recruiting platform with FastAPI backend featuring 11 REST API endpoints",
      "Implementing semantic search with ChromaDB vector database and OpenAI embeddings",
      "RAG-powered search to find relevant candidate matches beyond simple keyword filtering",
      "Supporting PDF, Word, and JSON resume formats",
    ],
    technologies: ["Python", "FastAPI", "React", "Next.js", "ChromaDB", "OpenAI API"],
    github: "https://github.com/roshanshetty271/recruiter-radar",
  },
];

export const otherProjects = [
  {
    name: "PDF Analyzer Chatbot",
    description: "Interactive chatbot for PDF document analysis and Q&A with real-time streaming responses.",
    technologies: ["Next.js", "React", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/roshanshetty271/PDF-ANALYZER-CHATBOT",
  },
  {
    name: "VISUALify",
    description: "Real-time Spotify music visualization web application.",
    technologies: ["TypeScript", "Spotify API"],
    github: "https://github.com/roshanshetty271/VISUALify",
    status: "in-progress",
  },
  {
    name: "Supply Chain Management Database",
    description: "14-table normalized database with Power BI dashboards for real-time analytics.",
    technologies: ["Microsoft SQL Server", "Power BI", "ERD Design"],
    github: "https://github.com/roshanshetty271/supply-chain-management",
  },
  {
    name: "Nutri Health Application",
    description: "Health and nutrition UI/UX design with personalized nutrition plans and AI nutritionist.",
    technologies: ["Figma", "Moqups", "UI/UX Design"],
    github: "https://github.com/roshanshetty271/nutri-health-app",
  },
  {
    name: "Smart Blind Stick",
    description: "IoT assistive device for vision-impaired individuals with obstacle detection and location sharing.",
    technologies: ["Python", "OpenCV", "Arduino", "Raspberry Pi", "IoT"],
    github: null,
  },
  {
    name: "Xerox Range Pricing Application",
    description: "Business optimization application for pricing analysis with top negotiated solutions tracking.",
    technologies: ["Java", "Java Swing"],
    github: "https://github.com/roshanshetty271/Xerox-Range-Pricing-Application",
  },
  {
    name: "HealthHub",
    description: "Healthcare platform connecting patients with doctors, helpers, and support staff.",
    technologies: ["Java", "Java Swing"],
    github: "https://github.com/roshanshetty271/HealthHub",
  },
  {
    name: "Alternative Coursera Platform",
    description: "Educational platform with professor management, student registration, and reputation system.",
    technologies: ["Java", "Java Swing"],
    github: "https://github.com/roshanshetty271/Alternative-Coursera-Platform-",
  },
  {
    name: "YouTube Clone",
    description: "Video platform UI clone built with HTML and CSS.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/roshanshetty271/Youtube-Clone",
  },
];

export const certifications = [
  {
    name: "SAP Certified Application Associate - SAP S/4HANA Asset Management",
    examCode: "C_TS413_2020",
    issuer: "SAP",
    date: "Dec 2022",
    verifyUrl: "https://www.credly.com/go/HkBfaebG",
  },
  {
    name: "SAP Certified Development Specialist - ABAP for SAP HANA 2.0",
    examCode: "E_HANAAW_17",
    issuer: "SAP",
    date: "Nov 2022",
    verifyUrl: "https://www.credly.com/go/lfFFjrQF",
  },
  {
    name: "SAP Certified Development Associate - SAP Fiori Application Developer",
    examCode: "C_FIORDEV_21",
    issuer: "SAP",
    date: "Nov 2022",
    verifyUrl: "https://www.credly.com/go/tkXshqgf",
  },
  {
    name: "SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50",
    issuer: "SAP",
    date: "Mar 2022",
    verifyUrl: "https://www.credly.com/go/NWgLTwK4",
  },
  {
    name: "SAP Certified Associate - Utilities with SAP ERP 6.0",
    issuer: "SAP",
    date: "Jan 2022",
    verifyUrl: "https://www.credly.com/go/0a4h9PFD",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Roshan exhibited a professional, proactive, and results-oriented attitude, making him a highly recommendable candidate for roles related to AI or software development. I am confident that Roshan will continue to achieve great success in his career and bring value to any team he joins.",
    author: "Fabián Casaubon",
    title: "CEO",
    company: "Aosenuma",
    relationship: "Executive",
    highlight: "Professional, proactive, and results-oriented",
  },
  {
    id: 2,
    quote: "I had the pleasure of working with Roshan during his internship as an AI Developer, and can confidently say he is a rising talent in AI software engineering. Roshan showed quality and strong attention to detail. What truly sets Roshan apart is his ability to learn fast — in just a few months, he evolved into a competent full-stack developer, operating multiple tools and successfully integrating AI solutions into production environments.",
    author: "Jorge Domenzain",
    title: "CTO",
    company: "Aosenuma",
    relationship: "Manager",
    highlight: "A rising talent in AI software engineering",
  },
  {
    id: 3,
    quote: "From the start, Roshan brought a lot more than just enthusiasm — he brought real impact. He handled some of the more critical parts of the project, especially around analyzing structured documents. What stood out to me most was how dependable and proactive he was. He didn't wait to be told what to do — he spotted what needed doing and jumped in.",
    author: "Sathwik Matcha",
    title: "AI Engineer | Data Science & Full-Stack",
    company: "Aosenuma",
    relationship: "Colleague",
    highlight: "He spotted what needed doing and jumped in",
  },
  {
    id: 4,
    quote: "I was consistently impressed by his professionalism, strong technical abilities, and collaborative spirit. Roshan brings a unique combination of analytical thinking and hands-on development skills. He demonstrated a solid understanding of system design and consistently delivered high-quality code. His willingness to help others and positive attitude greatly contributed to our team's success.",
    author: "Zenan Fan",
    title: "Information Systems Student",
    company: "Northeastern University",
    relationship: "Colleague",
    highlight: "Analytical thinking and hands-on development skills",
  },
  {
    id: 5,
    quote: "Roshan has been an outstanding software developer on our team. During his time working on one of our most complex projects, he consistently delivered results that far exceeded expectations. His initiative was evident from the outset, as he proactively identified potential issues and implemented effective solutions. His positive attitude and commitment made him a role model for others.",
    author: "Israel Ayala Illan",
    title: "Electronics Engineer",
    company: "Aosenuma",
    relationship: "Colleague",
    highlight: "Results that far exceeded expectations",
  },
  {
    id: 6,
    quote: "Roshan was a fresher when we joined our project and he was given the responsibility to lead the SAP Syclo team and I can say that he did a tremendous job. He is technically very good and he did a great job as a developer and consultant. He also has great leadership and communication skills. We worked together for almost two years and I enjoyed working with him a lot.",
    author: "Harish VS",
    title: "Manager SAP PM",
    company: "Capgemini",
    relationship: "Colleague",
    highlight: "Given responsibility to lead as a fresher",
  },
  {
    id: 7,
    quote: "I worked with Roshan on many requirements and developments related to SAP Syclo and Fiori and we also worked on resolving many issues together. I was particularly impressed with his ability to handle high priority issues. He also has excellent communication skills and he used to deal with Clients and users very well. He's very patient and a very helpful guy.",
    author: "Tharun Kumar",
    title: "SAP S/4 HANA SCM Consultant",
    company: "Capgemini",
    relationship: "Colleague",
    highlight: "Ability to handle high priority issues",
  },
  {
    id: 8,
    quote: "We have worked together on a project, and I found him a highly skilled and dedicated professional. He is not only friendly and helpful but also goes above and beyond to maintain the team spirit. I have seen him working his way through challenges and crises using innovative approaches. He is such an inspiration for me, and I feel proud to have worked under his guidance.",
    author: "Keerthana Krishna Murthy",
    title: "Associate Consultant | SAP ABAP",
    company: "Capgemini",
    relationship: "Direct Report",
    highlight: "Innovative approaches to tackling problems",
  },
  {
    id: 9,
    quote: "Roshan is one of the greatest mentors that I had in my time that I worked with him. All that I know about Syclo application or consulting in general I came to know from him. Apart from work he is a great person with a very good attitude. It was a joyous experience to work with him.",
    author: "Saprativo Kundu",
    title: "Software Developer",
    company: "Capgemini",
    relationship: "Direct Report",
    highlight: "One of the greatest mentors I had",
  },
];

export const awards = [
  {
    title: "STAR Award",
    description: "Outstanding performance and lasting contribution",
    organization: "Capgemini",
    date: "Jun 2022",
  },
  {
    title: "Winner - Poster Presentation Competition",
    organization: "IEEE SIES GST",
    date: "Oct 2018",
  },
];

export const keyDifferentiators = [
  {
    title: "Full-Stack + AI",
    description: "Rare combination of traditional full-stack development with modern AI/ML capabilities including RAG, LLMs, and embeddings",
  },
  {
    title: "5x SAP Certified",
    description: "Comprehensive enterprise certifications in ABAP, HANA, Fiori, S/4HANA, and Utilities",
  },
  {
    title: "Proven Impact",
    description: "Consistent track record of measurable improvements: 40% ticket reduction, 25% processing improvement",
  },
  {
    title: "Leadership Early",
    description: "Led SAP Syclo team as a fresher, mentored team members, managed direct reports",
  },
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

// Currently building projects - shows active work
export const currentlyBuilding = [
  {
    name: "Recruiter Radar",
    subtitle: "AI-Powered Recruiting Platform",
    description: "Building semantic search with ChromaDB and OpenAI embeddings to match candidates beyond keyword filtering. FastAPI backend with 11 REST endpoints.",
    progress: 65,
    technologies: ["Python", "FastAPI", "React", "Next.js", "ChromaDB", "OpenAI API"],
    github: "https://github.com/roshanshetty271/recruiter-radar",
    demo: null,
    lastUpdated: "Jan 2026",
  },
  {
    name: "VISUALify",
    subtitle: "Spotify Music Visualization",
    description: "Real-time audio visualization synchronized with Spotify playback. Building with TypeScript and the Spotify Web API.",
    progress: 30,
    technologies: ["TypeScript", "React", "Spotify API", "Canvas API"],
    github: "https://github.com/roshanshetty271/VISUALify",
    demo: null,
    lastUpdated: "Jan 2026",
  },
];

// Typewriter words for hero section
export const heroTypewriterWords = [
  "Full-Stack Developer",
  "Frontend Specialist",
  "AI Engineer",
  "Distributed Systems Builder",
];

// Resume download URL - update with actual path
export const resumeUrl = "/resume.pdf";
