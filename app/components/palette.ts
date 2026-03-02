/* Shared color palette & types for the cinematic portfolio */

export const C = {
    bg: "#000000",
    bgAlt: "#050505",
    ink: "#FFFFFF",
    inkDim: "rgba(255,255,255,0.70)",
    inkGhost: "rgba(255,255,255,0.12)",
    amber: "#D4AF37", // Bespoke Gold
    amberDim: "rgba(212,175,55,0.25)",
    sepia: "rgba(212,175,55,0.06)",
    silver: "#666666", // Muted structural color
} as const;

export interface Film {
    chapter: string;
    title: string;
    logline: string;
    tags: string[];
    status: "IN THEATRES" | "IN PRODUCTION" | "COMPLETED";
    liveHref?: string;
    githubHref?: string;
    screenshot?: string;
    featured?: boolean;
    badge?: string;
}

export interface Critic {
    pull: string;
    body: string;
    name: string;
    role: string;
    company: string;
    initials: string;
}

export interface Experience {
    company: string;
    role: string;
    type: string;
    period: string;
    location: string;
    body: string;
    bullets: string[];
    tags: string[];
}

export interface SkillGroup {
    dept: string;
    items: string[];
}
