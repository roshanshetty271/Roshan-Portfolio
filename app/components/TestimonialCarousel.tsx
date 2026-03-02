"use client";

import { useState, useEffect, FC } from "react";
import { C, type Critic } from "./palette";
import { Reveal } from "./Reveal";

interface Props { critics: Critic[]; }

const TestimonialCarousel: FC<Props> = ({ critics }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive(p => (p + 1) % critics.length), 5000);
        return () => clearInterval(t);
    }, [critics.length]);

    const cur = critics[active];

    return (
        <section style={{ padding: "96px 48px", borderTop: `1px solid ${C.inkGhost}` }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <Reveal>
                    <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, letterSpacing: "0.35em", textTransform: "uppercase", color: C.amber, fontWeight: 300, display: "block" }}>Critical Reception</span>
                    <span style={{ display: "block", width: 48, height: 1, background: C.amber, margin: "18px 0" }} />
                </Reveal>
                <div className="tc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                    <Reveal delay={.1} className="test-left" style={{ paddingRight: 52, paddingBottom: 32 }}>
                        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(24px,3.2vw,44px)", lineHeight: 1.3, color: C.ink, fontWeight: 300 }}>&quot;{cur.pull}&quot;</p>
                        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 18, lineHeight: 1.85, color: C.inkDim, marginTop: 22, fontStyle: "italic", fontWeight: 300 }}>{cur.body}</p>
                        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.amberDim, border: `1px solid rgba(212,130,74,.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant SC',serif", fontSize: 15, color: C.amber, flexShrink: 0 }}>{cur.initials}</div>
                            <div>
                                <div style={{ fontFamily: "'Cormorant SC',serif", fontSize: 17, color: C.ink }}>{cur.name}</div>
                                <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, letterSpacing: ".1em", color: C.amber, marginTop: 2, textTransform: "uppercase" }}>{cur.role} &middot; {cur.company}</div>
                            </div>
                        </div>
                        <div style={{ marginTop: 24, display: "flex", gap: 8, alignItems: "center" }}>
                            {critics.map((_, i) => (
                                <button key={i} onClick={() => setActive(i)} className="cdot" aria-label={`Review ${i + 1}`} style={{ background: i === active ? C.amber : C.inkGhost, transform: i === active ? "scale(1.5)" : "scale(1)" }} />
                            ))}
                            <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, letterSpacing: ".14em", color: C.inkDim, marginLeft: 8, textTransform: "uppercase" }}>{active + 1} / {critics.length}</span>
                        </div>
                    </Reveal>
                    <Reveal delay={.18} className="test-right" style={{ borderLeft: `1px solid ${C.inkGhost}`, paddingLeft: 52 }}>
                        {critics.map((c, i) => (
                            <button key={i} onClick={() => setActive(i)} className="crow" style={{ opacity: i === active ? 1 : 0.28 }}>
                                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 18, color: C.ink, lineHeight: 1.4 }}>&quot;{c.pull}&quot;</p>
                                <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, letterSpacing: ".1em", color: C.amber, marginTop: 4, textTransform: "uppercase" }}>&mdash; {c.name}, {c.company}</p>
                            </button>
                        ))}
                        <a href="https://linkedin.com/in/roshanshetty271" target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: 16, fontFamily: "'Crimson Pro',serif", fontSize: 14, letterSpacing: ".18em", textTransform: "uppercase", color: C.amber, textDecoration: "none" }}>All 9 Reviews on LinkedIn</a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
