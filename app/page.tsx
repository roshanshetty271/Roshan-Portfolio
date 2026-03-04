import Image from "next/image";
import "./page.css";

/* ── Server-side data (zero client JS cost) ────────────── */
import { C, type Film, type Critic, type Experience, type SkillGroup } from "./components/palette";

import Nav from "./components/Nav";
import { MotionProvider, Reveal } from "./components/Reveal";
import { Magnetic } from "./components/Magnetic";
import { HeroParallaxBg } from "./components/HeroParallaxBg";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ExperienceAccordion from "./components/ExperienceAccordion";
import ProjectCarousel from "@/components/ProjectCarousel";
// import CinemaIntro from "@/components/CinemaIntro";
import ContactForm from "./components/ContactForm";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import SocialIcons from "./components/SocialIcons";

/* ── Static helpers (rendered at build time) ───────────── */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: C.silver, fontWeight: 300, display: "block" }}>{children}</span>
);
const Rule = () => <span style={{ display: "block", width: 48, height: 1, background: "#222", margin: "18px 0" }} />;
const Divider = () => <hr style={{ border: "none", borderTop: `1px solid ${C.inkGhost}`, margin: 0 }} />;

/* ── DATA ──────────────────────────────────────────────── */

const featuredFilms: Film[] = [
  {
    chapter: "I", title: "Worth The Watch",
    logline: "AI movie review aggregator that scrapes 10+ critic sources and Reddit in real time, synthesizes opinions through a 4-stage async pipeline, and generates verdicts in 15 seconds. 3-tier LLM failover that never crashes, race-to-5 parallel fetching (2-3x faster), and regex opinion grep reducing 100K tokens to 5-8K before synthesis. 24 Playwright E2E tests with CI/CD against production.",
    tags: ["Next.js", "FastAPI", "LLMs", "asyncio", "PostgreSQL", "SSE"],
    status: "IN THEATRES",
    liveHref: "https://worth-the-watch.vercel.app",
    githubHref: "https://github.com/roshanshetty271/WorthTheWatch",
    screenshot: "/projects/worththewatch.jpg",
    featured: true,
  },
  {
    chapter: "II", title: "ShipOrSkip",
    logline: "AI-powered idea validation platform for builders and founders. Describe your idea in plain English and get competitive landscape analysis, market gap identification, pros & cons, and a Ship or Skip verdict. Fast mode in ~15s, Deep Research mode streams real-time multi-source intelligence in ~45-90s.",
    tags: ["Next.js", "FastAPI", "GPT-4o", "Tavily", "Supabase", "SSE"],
    status: "IN PRODUCTION",
    githubHref: "https://github.com/roshanshetty271/ShipOrSkip",
    screenshot: "/projects/shipOrSkip.png",
    featured: true,
  },
  {
    chapter: "III", title: "VISUALify",
    logline: "Connects to your Spotify and turns whatever you're listening to into real-time D3.js visualizations. Four immersive modes — Galaxy, Terrain, Neural, and River — all BPM-synced to the beat of your music.",
    tags: ["Next.js", "TypeScript", "D3.js", "Spotify API", "NextAuth"],
    status: "IN PRODUCTION",
    githubHref: "https://github.com/roshanshetty271/VISUALify",
    screenshot: "/projects/visualify.png",
    featured: true,
  },
  {
    chapter: "IV", title: "SoundClash Festival",
    logline: "Fictional music festival landing page built to push creative frontend limits. Distressed textures, glitch typography, a custom bass guitar cursor that follows your mouse, and a live Web Audio API visualizer. Smooth scroll powered by Lenis.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis"],
    status: "IN THEATRES",
    liveHref: "https://sound-clash-festival.vercel.app",
    githubHref: "https://github.com/roshanshetty271/SoundClash-Festival",
    screenshot: "/projects/soundClash.png",
    featured: true,
  },
  {
    chapter: "V", title: "DocuMind",
    logline: "Upload documents and ask questions in natural language. Distributed RAG system using Akka Cluster with fault-tolerant nodes and Actor Model for concurrent query processing. OpenAI GPT via Spring AI, semantic search with Word2Vec embeddings, Qdrant vector DB, and sliding-window chunking with keyword re-ranking.",
    tags: ["Java", "Spring Boot", "Akka Cluster", "Qdrant", "Word2Vec", "Docker"],
    status: "COMPLETED",
    featured: true,
  },
];

const otherFilms: Film[] = [];

const critics: Critic[] = [
  { pull: "A rising talent in AI software engineering", body: "Roshan showed quality and strong attention to detail. What truly sets him apart is his ability to learn fast \u2014 in just a few months, he evolved into a competent full-stack developer, successfully integrating AI solutions into production environments.", name: "Jorge Domenzain", role: "CTO", company: "Aosenuma", initials: "JD" },
  { pull: "Professional, proactive, and results-oriented", body: "Roshan exhibited a professional, proactive, and results-oriented attitude, making him a highly recommendable candidate for roles related to AI or software development.", name: "Fabi\u00E1n Casaubon", role: "CEO", company: "Aosenuma", initials: "FC" },
  { pull: "He spotted what needed doing and jumped in", body: "He didn't wait to be told what to do \u2014 he spotted what needed doing and jumped in. He handled some of the most critical parts of the project.", name: "Sathwik Matcha", role: "AI Engineer", company: "Aosenuma", initials: "SM" },
  { pull: "Results that far exceeded expectations", body: "He consistently delivered results that far exceeded expectations. His initiative was evident from the outset.", name: "Israel Ayala Illan", role: "Electronics Engineer", company: "Aosenuma", initials: "IA" },
  { pull: "Analytical thinking and hands-on development skills", body: "I was consistently impressed by his professionalism, strong technical abilities, and collaborative spirit.", name: "Zenan Fan", role: "Information Systems Student", company: "Northeastern University", initials: "ZF" },
  { pull: "Given responsibility to lead as a fresher", body: "Roshan was a fresher when we joined our project and he was given the responsibility to lead the SAP Syclo team. He did a tremendous job.", name: "Harish VS", role: "Manager SAP PM", company: "Capgemini", initials: "HV" },
  { pull: "Ability to handle high priority issues", body: "I was particularly impressed with his ability to handle high priority issues. He has excellent communication skills.", name: "Tharun Kumar", role: "SAP S/4 HANA Consultant", company: "Capgemini", initials: "TK" },
  { pull: "Innovative approaches to tackling problems", body: "I have seen him working his way through challenges and crises using innovative approaches to solving problems.", name: "Keerthana Krishna Murthy", role: "Associate Consultant SAP ABAP", company: "Capgemini", initials: "KK" },
  { pull: "One of the greatest mentors I had", body: "Roshan is one of the greatest mentors that I had. All that I know about Syclo application or consulting in general I came to know from him.", name: "Saprativo Kundu", role: "Software Developer", company: "Capgemini", initials: "SK" },
];

const experiences: Experience[] = [
  {
    company: "Aosenuma", role: "AI Software Developer", type: "Internship", period: "Jan 2025 \u2014 May 2025", location: "Texas, USA",
    body: "Architected full-stack applications and AI pipelines. Scaled document intelligence using RAG and Graph structures.",
    bullets: [
      "Architected a full-stack application (Python/Flask and Next.js/React/TypeScript) contributing to all Agile SDLC phases from MVP to CI/CD; deployed with Docker, AWS ECS, Vercel, and Cloudflare, optimizing performance with Supabase and Redis caching",
      "Implemented a RAG system using Sentence-Transformers, OpenAI API, Neo4j knowledge graphs, and Supabase/pgvector for querying large datasets; developed ETL pipelines in Python with Pandas for automated data extraction, semantic chunking, and embedding generation",
      "Created a Python-based framework with a custom vector store, semantic search, and multi-platform integration (Discord, Telegram, Voiceflow), enabling no-code personalization via Airtable",
    ],
    tags: ["Python", "Flask", "Django", "Next.js", "React", "TypeScript", "AWS ECS", "Vercel", "Cloudflare", "OpenAI API", "Neo4j", "pgvector", "Sentence-Transformers", "Pandas", "Kafka", "Docker"],
  },
  {
    company: "Capgemini", role: "Software Developer", type: "Full-time", period: "Nov 2020 \u2014 Jun 2023", location: "Mumbai, India",
    body: "Managed and supported 100+ global users. Orchestrated Syclo team software development and QA testing processes. Earned 5 SAP certifications.",
    bullets: [
      "Orchestrated the Syclo team\u2019s software development and QA testing process, achieving a deployment that reduced post-launch support tickets by 40%; managed and supported 100+ users across the globe",
      "Led development of Fiori web applications using HTML, CSS, and JavaScript, decreasing production issue resolution time by 20%; introduced backend label printing features in ABAP improving task efficiency by 15%",
      "Mentored and trained 5 new team members, providing guidance and comprehensive training in Syclo Inventory Manager",
    ],
    tags: ["JavaScript", "VueJS", "Java", "HTML5", "CSS3", "C++", "SAP ABAP", "SAP HANA", "OpenSearch", "GraphQL", "Kafka", "SQL"],
  },
];

const skillGroups: SkillGroup[] = [
  { dept: "Languages", items: ["Python", "Java", "SQL", "C++"] },
  { dept: "Frontend", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Recharts"] },
  { dept: "AI & ML", items: ["RAG", "LLMs", "OpenAI API", "Embeddings", "Word2Vec", "Semantic Search", "Sentence-Transformers", "Pandas"] },
  { dept: "Backend & Systems", items: ["Flask", "FastAPI", "Spring Boot", "Node.js", "REST APIs", "Microservices", "Akka Cluster"] },
  { dept: "Cloud & Tools", items: ["AWS (Lambda, API Gateway, DynamoDB, Cognito, Bedrock, S3, SAM)", "Docker", "CI/CD", "Git", "GitHub", "Playwright"] },
  { dept: "Databases", items: ["PostgreSQL", "Redis", "Neo4j", "Elasticsearch", "Qdrant", "pgvector"] },
];

/* ── PAGE (Server Component — zero client JS for static content) ── */

export default function PortfolioPage() {

  return (
    <MotionProvider>
      <Nav />

      {/* ─── HERO ──────────────────────────────────────── */}
      <section>
        <HeroParallaxBg>
          <div className="hg" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 40, width: "100%", maxWidth: 1100, margin: "auto", alignItems: "stretch", position: "relative", zIndex: 1, padding: "120px 20px 60px 20px" }}>

            {/* ── LEFT: Identity ──────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0 24px" }}>
              <div style={{ animation: "hUp 1.2s cubic-bezier(.16,1,.3,1) forwards", opacity: 0, display: "flex", alignItems: "center", gap: 8, marginBottom: 16, paddingLeft: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6EE7A0", boxShadow: "0 0 8px #6EE7A0" }} />
                <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: C.inkDim, fontWeight: 300 }}>Available Full-Time</span>
              </div>
              <div className="hero-identity" style={{ animation: "hUp 1.2s cubic-bezier(.16,1,.3,1) forwards", opacity: 0, display: "flex", alignItems: "stretch", gap: 20 }}>
                <div className="hero-photo" style={{ width: 120, overflow: "hidden", border: `1px solid rgba(212,130,74,.3)`, flexShrink: 0, boxShadow: "0 4px 24px rgba(212,130,74,0.12), 0 0 0 1px rgba(212,130,74,0.08)", borderRadius: 4 }}>
                  <Image src="/Roshan-photo.jpg" alt="Roshan Shetty" width={120} height={160} style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }} priority />
                </div>
                <h1 style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(32px,5vw,60px)", lineHeight: .88, letterSpacing: ".07em", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  Roshan<br />
                  <span style={{ color: "transparent", WebkitTextStroke: `1px rgba(255,255,255,.35)` }}>Shetty</span>
                </h1>
              </div>

              <p style={{ animation: "hUp 1.2s cubic-bezier(.16,1,.3,1) .08s forwards", opacity: 0, marginTop: 18, fontFamily: "'Crimson Pro',serif", fontStyle: "italic", fontSize: "clamp(13px, 1.4vw, 16px)", letterSpacing: ".04em", color: "rgba(232,215,175,0.5)", fontWeight: 300, lineHeight: 1.5 }}>
                AI Engineer &amp; Full-Stack Developer &middot; Building Intelligent Systems
              </p>

              <div style={{ animation: "hUp 1.2s cubic-bezier(.16,1,.3,1) .12s forwards", opacity: 0, marginTop: 28, display: "flex", gap: 14, alignItems: "center" }}>
                <Magnetic><a href="#projects" className="cp" style={{ display: "block" }}>View Projects</a></Magnetic>
                <Magnetic><a href="#contact" className="cg" style={{ display: "block" }}>Get in Touch</a></Magnetic>
              </div>

              <div style={{ animation: "hUp 1.2s cubic-bezier(.16,1,.3,1) .18s forwards", opacity: 0, marginTop: 28 }}>
                <SocialIcons />
              </div>
            </div>

            {/* ── RIGHT: Project Card ────────────────── */}
            <div className="hp" style={{ position: "relative", animation: "hIn 1.6s ease .2s forwards", opacity: 0, display: "flex", width: "100%" }}>
              <div style={{ width: "100%", padding: "0" }}>
                <FeaturedProjectCard
                  href="https://worth-the-watch.vercel.app"
                  imgSrc="/projects/worththewatch.jpg"
                  title="Worth The Watch"
                  description="Scrapes 10+ critic sources and Reddit in real time. 4-stage async pipeline generates AI verdicts in 15 seconds."
                  tags={["Next.js", "FastAPI", "LLMs", "asyncio", "PostgreSQL"]}
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hm" style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 2 }}>
            <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${C.amber}, transparent)`, opacity: .5 }} />
            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 10, letterSpacing: ".28em", textTransform: "uppercase", color: C.inkDim }}>Scroll</span>
          </div>
        </HeroParallaxBg>
      </section>

      {/* ─── TESTIMONIALS (client island) ──────────────── */}
      <TestimonialCarousel critics={critics} />

      {/* ─── SELECTED WORK (3D Carousel) ──────────────── */}
      <ProjectCarousel featuredFilms={featuredFilms} otherFilms={otherFilms} />

      {/* ─── EXPERIENCE (client accordion) ─────────────── */}
      <section id="experience" style={{ padding: "112px 48px", borderTop: `1px solid ${C.inkGhost}`, background: `linear-gradient(to bottom, transparent, rgba(255,255,255,.02), transparent)` }}>
        <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <Eyebrow>Production History</Eyebrow><Rule />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 32 }}>
              <div style={{ width: 2, height: 90, background: C.amber, marginTop: 12 }} />
              <h2 style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(38px,7.5vw,92px)", lineHeight: .9, letterSpacing: ".07em", marginBottom: 64, textWrap: "balance" as const }}>Experience</h2>
            </div>
          </Reveal>
          <ExperienceAccordion experiences={experiences} />
        </div>
      </section>

      {/* ─── EDUCATION (static RSC) ────────────────────── */}
      <section id="education" style={{ padding: "100px 48px", borderTop: `1px solid ${C.inkGhost}`, background: C.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <Eyebrow>Formation</Eyebrow><Rule />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
              <div style={{ width: 2, height: 45, background: C.amber, marginTop: 6 }} />
              <h2 style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(26px,4vw,50px)", lineHeight: .9, letterSpacing: ".07em", marginBottom: 56 }}>Education</h2>
            </div>
          </Reveal>
          <div className="tc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { degree: "Master of Science", field: "Information Systems", school: "Northeastern University", location: "Boston, MA", period: "Dec 2025", gpa: "3.8", courses: ["Program Structure and Algorithms", "AI Agent Infrastructure", "Database Management and Design", "Big Data Indexing"] },
              { degree: "Bachelor of Engineering", field: "Electronics and Telecommunication", school: "Mumbai University", location: "Mumbai, India", period: "Nov 2020", gpa: "3.5", courses: ["Structured Programming Approach", "Object-Oriented Programming", "Digital Business Communication"] },
            ].map((edu, i) => (
              <Reveal key={edu.school} delay={i * .1}>
                <div className="brutal-hover" style={{ padding: "40px 32px", border: "none", height: "100%", borderRadius: 8, background: "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)", boxShadow: "0 4px 16px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
                  <Eyebrow>{edu.degree}</Eyebrow>
                  <div style={{ fontFamily: "'Cormorant SC',serif", fontSize: "clamp(16px,2.2vw,24px)", fontWeight: 300, letterSpacing: ".05em", color: C.ink, marginTop: 12, marginBottom: 6, lineHeight: 1.2 }}>{edu.field}</div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: C.amber, marginBottom: 3 }}>{edu.school} &middot; {edu.period}</div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: C.inkDim, marginBottom: 12 }}>{edu.location} &middot; GPA: {edu.gpa}</div>
                  <div style={{ width: 28, height: 1, background: C.inkGhost, marginBottom: 14 }} />
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#444", marginBottom: 8 }}>Key Coursework</div>
                  {edu.courses.map(c => <div key={c} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: C.inkDim, lineHeight: 1.85, fontWeight: 300 }}>{c}</div>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS (static RSC) ───────────────────────── */}
      <section id="skills" style={{ padding: "100px 48px", borderTop: `1px solid ${C.inkGhost}`, background: `linear-gradient(to bottom, transparent, rgba(212,130,74,.03), transparent)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <Eyebrow>Technical Arsenal</Eyebrow><Rule />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
              <div style={{ width: 2, height: 50, background: C.amber, marginTop: 6 }} />
              <h2 style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(30px,4.5vw,56px)", lineHeight: .9, letterSpacing: ".07em", marginBottom: 56 }}>Skills</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {skillGroups.map(({ dept, items }, i) => (
              <Reveal key={dept} delay={i * .06} style={{ height: "100%" }}>
                <div className="brutal-hover" style={{ height: "100%", padding: "32px 28px", border: "none", borderRadius: 8, background: "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)", boxShadow: "0 4px 16px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", color: C.silver, marginBottom: 16 }}>{dept}</div>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>{items.map(item => <span key={item} className="tag" style={{ marginBottom: 4 }}>{item}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT (static RSC) ────────────────────────── */}
      <section id="about" style={{ padding: "100px 48px", borderTop: `1px solid ${C.inkGhost}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="tc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <Reveal>
              <Eyebrow>About</Eyebrow><Rule />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                <div style={{ width: 2, height: 45, background: C.amber, marginTop: 6 }} />
                <h2 style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(28px,4vw,48px)", lineHeight: .9, letterSpacing: ".07em", marginBottom: 28 }}>About Me</h2>
              </div>
              <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(13px,1.4vw,15px)", lineHeight: 1.9, color: C.inkDim, fontWeight: 300, marginBottom: 14 }}>
                Software Engineer with 3+ years of experience building full-stack applications and AI-powered systems. Solo-built a production-deployed AI platform orchestrating 10+ APIs in parallel and a serverless AWS application with multi-agent LLM orchestration.
              </p>
              <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(13px,1.4vw,15px)", lineHeight: 1.9, color: C.inkDim, fontWeight: 300, marginBottom: 14 }}>
                Reduced global support tickets by 40% at Capgemini. Proficient in Python, Java, TypeScript, REST APIs, and cloud infrastructure. At Aosenuma, built RAG pipelines with OpenAI embeddings, semantic search with vector databases, and knowledge graphs using Neo4j.
              </p>
              <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(13px,1.4vw,15px)", lineHeight: 1.9, color: C.inkDim, fontWeight: 300, marginBottom: 28 }}>Currently seeking full-time software engineering roles.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="mailto:shetty.ros@northeastern.edu" className="cp">Email Me</a>
                <a href="https://linkedin.com/in/roshanshetty271" target="_blank" rel="noopener noreferrer" className="cg">LinkedIn</a>
                <a href="https://github.com/roshanshetty271" target="_blank" rel="noopener noreferrer" className="cg">GitHub</a>
              </div>
            </Reveal>
            <Reveal delay={.15}>
              <Eyebrow>Quick Stats</Eyebrow><Rule />
              {([["3+", "Years of Professional Experience"], ["9", "LinkedIn Recommendations"], ["5", "SAP Certifications"], ["18+", "Projects Built"], ["M.S.", "Information Systems, Northeastern"], ["B.E.", "Electronics & Telecom, Mumbai"]] as [string, string][]).map(([v, l]) => (
                <div key={l} style={{ display: "flex", gap: 20, alignItems: "baseline", padding: "14px 0", borderBottom: `1px solid ${C.inkGhost}` }}>
                  <div style={{ fontFamily: "'Cormorant SC',serif", fontSize: 22, fontWeight: 300, color: C.ink, lineHeight: 1, minWidth: 52 }}>{v}</div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, color: C.inkDim, lineHeight: 1.5 }}>{l}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CONTACT (client form + static info) ───────── */}
      <section id="contact" style={{ padding: "112px 48px", borderTop: `1px solid ${C.inkGhost}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="tc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <Reveal>
              <Eyebrow>Contact</Eyebrow><Rule />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                <div style={{ width: 3, height: 110, background: C.amber, marginTop: 8 }} />
                <h2 style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(32px,5vw,64px)", lineHeight: .88, letterSpacing: ".07em", marginBottom: 28 }}>
                  Get in<br /><span style={{ color: "transparent", WebkitTextStroke: `1px rgba(255,255,255,.18)` }}>Touch.</span>
                </h2>
              </div>
              <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(13px,1.4vw,16px)", color: C.inkDim, lineHeight: 1.75, marginBottom: 32, fontWeight: 300 }}>Open to full-time software engineering roles. If you have a position or just want to talk tech, I would like to hear from you.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.silver, marginBottom: 6 }}>Email</div>
                  <a href="mailto:shetty.ros@northeastern.edu" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(14px,1.6vw,18px)", color: C.ink, textDecoration: "none" }}>shetty.ros@northeastern.edu</a>
                </div>
                <div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.silver, marginBottom: 6 }}>Location</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(14px,1.6vw,18px)", color: C.inkDim }}>Boston, MA</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.silver, marginBottom: 10 }}>Find me on</div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href="https://linkedin.com/in/roshanshetty271" target="_blank" rel="noopener noreferrer" className="cg" style={{ fontSize: 12, padding: "8px 20px" }}>LinkedIn</a>
                    <a href="https://github.com/roshanshetty271" target="_blank" rel="noopener noreferrer" className="cg" style={{ fontSize: 12, padding: "8px 20px" }}>GitHub</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER (static RSC) ───────────────────────── */}
      <footer style={{ padding: "48px 48px 28px", borderTop: `1px solid ${C.inkGhost}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontFamily: "'Cormorant SC',serif", fontSize: 13, letterSpacing: ".4em", color: C.inkGhost }}>Roshan Shetty</div>
            <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".24em", color: C.inkGhost, marginTop: 5, textTransform: "uppercase" }}>Boston, MA</div>
          </div>
          <Divider />
          <div style={{ marginTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <span style={{ fontFamily: "'Cormorant SC',serif", fontSize: 16, letterSpacing: ".1em", color: C.amber }}>RS</span>
            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, color: C.inkDim }}>Full-Stack Software Engineer</span>
            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.inkGhost }}>&copy; 2026</span>
          </div>
        </div>
      </footer>
    </MotionProvider>
  );
}
