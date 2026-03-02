"use client";

import Image from "next/image";
import { FC } from "react";
import { C } from "./palette";

interface Props {
    href: string;
    imgSrc: string;
    title: string;
    description: string;
    tags: string[];
}

const FeaturedProjectCard: FC<Props> = ({ href, imgSrc, title, description, tags }) => (
    <div>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12, paddingLeft: 4 }}>
            <div style={{ width: 12, height: 1, background: C.amber, opacity: 0.6 }} />
            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: C.amber, fontWeight: 300 }}>Featured Project</span>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
            <div
                style={{
                    border: "none",
                    background: `linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                    backdropFilter: "blur(16px)",
                    overflow: "hidden",
                    borderRadius: 8,
                    transition: "transform .4s cubic-bezier(.4,0,.2,1), box-shadow .4s cubic-bezier(.4,0,.2,1)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
                {/* Project Screenshot */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "2/1", overflow: "hidden" }}>
                    <Image src={imgSrc} alt={title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,11,18,.55) 0%, rgba(7,11,18,.15) 30%, transparent 50%)" }} />
                    {/* Badge moved outside */}
                    <div style={{ position: "absolute", bottom: 12, right: 14 }}>
                        <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.amber, textShadow: "0 1px 4px rgba(0,0,0,.6)" }}>View Live &rarr;</span>
                    </div>
                </div>
                {/* Card Body */}
                <div style={{ padding: "16px 20px 18px" }}>
                    <div style={{ fontFamily: "'Cormorant SC',serif", fontSize: "clamp(18px,2vw,24px)", color: C.ink, letterSpacing: ".05em", lineHeight: 1.1 }}>{title}</div>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, color: C.inkDim, lineHeight: 1.65, marginTop: 6, fontWeight: 300 }}>{description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10 }}>
                        {tags.map(t => (
                            <span key={t} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", padding: "3px 9px", border: "none", borderRadius: 3, background: "rgba(255,255,255,0.05)", color: C.inkDim, boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
        {/* View More Projects */}
        <a href="#work" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, marginTop: 14, textDecoration: "none", transition: "opacity .2s" }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
        >
            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: C.inkDim }}>View More Projects</span>
            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: C.amber }}>&rarr;</span>
        </a>
    </div>
);

export default FeaturedProjectCard;
