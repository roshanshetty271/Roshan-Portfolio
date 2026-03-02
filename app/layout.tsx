import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roshan Shetty | Software Engineer",
  description: "Full-Stack Software Engineer with 3+ years of experience building AI-powered systems, distributed architectures, and production web applications. Based in Boston, MA.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "React",
    "Python",
    "TypeScript",
    "Next.js",
    "RAG",
    "Machine Learning",
    "Boston",
    "Northeastern University",
  ],
  authors: [{ name: "Roshan Shetty", url: "https://github.com/roshanshetty271" }],
  creator: "Roshan Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roshanshetty.dev",
    siteName: "Roshan Shetty Portfolio",
    title: "Roshan Shetty | Software Engineer",
    description: "Full-Stack Software Engineer with 3+ years building AI-powered systems and production web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Shetty - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Shetty | Software Engineer",
    description: "Full-Stack Software Engineer with 3+ years building AI-powered systems and production web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://roshanshetty.dev"),
  alternates: {
    canonical: "https://roshanshetty.dev",
  },
  other: {
    "article:modified_time": "2026-03-01T00:00:00Z",
    "article:published_time": "2025-12-01T00:00:00Z",
  },
};

// JSON-LD structured data — Person schema
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roshan Shetty",
  jobTitle: "Full-Stack & AI Software Engineer",
  description:
    "Full-stack engineer specializing in React/Next.js, Python, and AI/RAG systems. 3+ years building production web applications and AI pipelines.",
  url: "https://roshanshetty.dev",
  image: "https://roshanshetty.dev/Roshan-photo.jpg",
  email: "shetty.ros@northeastern.edu",
  sameAs: [
    "https://github.com/roshanshetty271",
    "https://linkedin.com/in/roshanshetty271",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Northeastern University",
    department: "Information Systems",
  },
  worksFor: {
    "@type": "Organization",
    name: "Available for Hire",
  },
  knowsAbout: [
    "Python", "Java", "JavaScript", "TypeScript",
    "React", "Next.js", "FastAPI", "Node.js",
    "PostgreSQL", "AWS", "Docker",
    "Machine Learning", "RAG Pipelines", "LangGraph",
    "D3.js", "Data Visualization",
    "SAP ABAP", "SAP S/4HANA",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US",
  },
};

// JSON-LD — WebSite schema
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Roshan Shetty — Portfolio",
  url: "https://roshanshetty.dev",
  description:
    "Full-stack & AI engineer portfolio featuring production web applications, AI systems, and data visualization projects.",
};

// JSON-LD — ProfilePage schema (content freshness signal)
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: { "@type": "Person", name: "Roshan Shetty" },
  dateCreated: "2025-12-01",
  dateModified: "2026-03-01",
};

// JSON-LD — FAQ schema for featured projects (GEO sub-query matching)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is ShipOrSkip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ShipOrSkip is a multi-agent startup idea evaluator built with LangGraph orchestration and SSE streaming. It runs deep research across market viability, competition, and technical feasibility using a FastAPI backend and Next.js frontend. It offers a $9 lifetime Pro tier via Lemon Squeezy.",
      },
    },
    {
      "@type": "Question",
      name: "What is Worth The Watch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Worth The Watch is an AI-powered movie verdict engine that scrapes 10+ critic sources and Reddit in real time. Its 4-stage async pipeline generates AI verdicts in 15 seconds using a 3-tier LLM failover system. Built with Next.js, FastAPI, PostgreSQL, and Playwright. 500+ titles indexed.",
      },
    },
    {
      "@type": "Question",
      name: "What is Diverge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diverge is a serverless decision-debate platform on AWS. It uses dual-Lambda architecture with Cognito authorizer and 16 LLM invocations per session via AWS Bedrock Strands Agents SDK. Includes Monte Carlo simulation (1,000 runs). Semi-finalist in the AWS 10,000 AIdeas competition.",
      },
    },
    {
      "@type": "Question",
      name: "What is SparkyAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SparkyAI is an AI-powered interactive resume that uses a LangGraph RAG pipeline with real-time D3.js visualization of the agent reasoning graph. WebSocket streaming shows each node activating as the agent thinks. Includes Langfuse observability. Built with Next.js, FastAPI, and D3.js.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Contagion Simulator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Contagion Simulator is a dual SIR+ epidemic and systemic risk network simulation that renders 200+ nodes at 60fps in-browser. It models both disease spread and financial crisis cascading through banking networks using D3.js force-directed graphs. Built with Next.js and TypeScript.",
      },
    },
    {
      "@type": "Question",
      name: "What is DocuMind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DocuMind is a distributed RAG system using Akka Cluster with fault-tolerant nodes. It processes documents with Word2Vec 300-dimensional embeddings, Qdrant vector database, and sliding-window chunking (60% overlap) with keyword re-ranking. Built with Java, Spring Boot, and Docker.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#070B12" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cormorant+SC:wght@300;400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
        <link rel="alternate" type="application/rss+xml" title="Roshan Shetty — Projects" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body style={{ background: "#070B12", color: "#E8E0D0" }}>
        {children}
      </body>
    </html>
  );
}

