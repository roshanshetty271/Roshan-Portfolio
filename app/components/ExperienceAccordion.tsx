"use client";

import { useState, FC } from "react";
import { C, type Experience } from "./palette";
import { Reveal } from "./Reveal";

interface Props { experiences: Experience[]; }

const ExperienceAccordion: FC<Props> = ({ experiences }) => {
    const [collapsed, setCollapsed] = useState<Set<number>>(new Set());

    const toggle = (i: number) => {
        setCollapsed(prev => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });
    };

    return (
        <>
            {experiences.map((exp, i) => {
                const isOpen = !collapsed.has(i);
                return (
                    <Reveal key={exp.company} delay={i * .08}>
                        <button
                            type="button"
                            onClick={() => toggle(i)}
                            aria-expanded={isOpen}
                            style={{
                                borderBottom: `1px solid rgba(255,255,255,0.06)`, borderTop: "none",
                                borderLeft: "none", borderRight: "none", cursor: "pointer",
                                background: "none", width: "100%", textAlign: "left",
                                font: "inherit", color: "inherit", padding: 0,
                            }}
                        >
                            <div className="eg" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 44, padding: "48px 0 36px", alignItems: "start" }}>
                                <div>
                                    <div style={{ fontFamily: "'Cormorant SC',serif", fontWeight: 300, fontSize: "clamp(24px,3.8vw,52px)", lineHeight: 1, color: C.ink, letterSpacing: ".05em" }}>{exp.company}</div>
                                    <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase", color: C.inkDim, marginTop: 10 }}>{exp.period}</div>
                                    <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, letterSpacing: ".13em", textTransform: "uppercase", color: C.inkGhost, marginTop: 3 }}>{exp.location}</div>
                                    <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, letterSpacing: ".13em", textTransform: "uppercase", color: "rgba(255,255,255,.2)", marginTop: 3 }}>{exp.type}</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(15px,1.7vw,20px)", color: C.ink, fontWeight: 300, marginBottom: 10 }}>{exp.role}</div>
                                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.85, color: C.inkDim, fontWeight: 300, marginBottom: isOpen ? 16 : 0 }}>{exp.body}</p>
                                    {isOpen ? (
                                        <div style={{ marginBottom: 16 }}>
                                            {exp.bullets.map((b, j) => (
                                                <div key={j} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                                                    <span style={{ color: C.amber, flexShrink: 0, fontFamily: "'Crimson Pro',serif", fontSize: 13, marginTop: 1 }}>&rarr;</span>
                                                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(12px,1.2vw,14px)", lineHeight: 1.8, color: C.inkDim, fontWeight: 300 }}>{b}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                    <div style={{ display: "flex", flexWrap: "wrap" }}>{exp.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                                    <div style={{ marginTop: 12, fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: C.amber, opacity: .7 }}>{isOpen ? "Collapse" : "Details"}</div>
                                </div>
                            </div>
                        </button>
                    </Reveal>
                );
            })}
        </>
    );
};

export default ExperienceAccordion;
