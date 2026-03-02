import { NextResponse } from "next/server";

const SITE_URL = "https://roshanshetty.dev";

const projects = [
    {
        title: "ShipOrSkip — Multi-Agent Startup Idea Evaluator",
        description:
            "LangGraph multi-agent orchestration with SSE streaming and deep research mode. Evaluates startup ideas across market viability, competition, and technical feasibility.",
        url: `${SITE_URL}/#work`,
        date: "2026-02-15",
    },
    {
        title: "Worth The Watch — AI Movie Verdict Engine",
        description:
            "Scrapes 10+ critic sources and Reddit in real time. 4-stage async pipeline generates AI verdicts in 15 seconds. 500+ titles indexed.",
        url: "https://worth-the-watch.vercel.app",
        date: "2026-01-20",
    },
    {
        title: "Diverge — Serverless Decision-Debate Platform",
        description:
            "Dual-Lambda architecture on AWS with 16 LLM invocations per session via Strands Agents SDK. Monte Carlo simulation (1,000 runs). AWS AIdeas Semi-Finalist.",
        url: `${SITE_URL}/#work`,
        date: "2026-02-28",
    },
    {
        title: "SparkyAI — Interactive AI Resume with D3.js Reasoning Graph",
        description:
            "LangGraph RAG pipeline with real-time D3.js visualization of the agent reasoning graph. WebSocket streaming shows each node activating as the agent thinks.",
        url: `${SITE_URL}/#work`,
        date: "2025-12-01",
    },
    {
        title: "Contagion Simulator — D3.js Network Simulation at 60fps",
        description:
            "Dual SIR+ epidemic and systemic risk network simulation. 200+ nodes at 60fps in-browser. Models disease spread and financial crisis cascading.",
        url: `${SITE_URL}/#work`,
        date: "2025-11-15",
    },
];

export async function GET() {
    const items = projects
        .map(
            (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(p.url)}</link>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <guid isPermaLink="false">${escapeXml(p.url)}</guid>
    </item>`
        )
        .join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Roshan Shetty — Projects</title>
    <link>${SITE_URL}</link>
    <description>Full-stack &amp; AI engineer portfolio. Latest projects and technical work by Roshan Shetty.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

    return new NextResponse(rss, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}

function escapeXml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
