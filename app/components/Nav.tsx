"use client";

import { useState, useEffect } from "react";
import { C } from "./palette";

export default function Nav() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const fn = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const scrolled = scrollY > 80;

    return (
        <nav
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                padding: "18px 48px", display: "flex", alignItems: "center",
                justifyContent: "space-between",
                background: scrolled ? "rgba(0,0,0,0.93)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? `1px solid ${C.inkGhost}` : "none",
                transition: "background .5s, backdrop-filter .5s, border-bottom .5s",
            }}
        >
            <a href="#" style={{ fontFamily: "'Cormorant SC',serif", fontSize: 17, letterSpacing: ".15em", color: C.amber, fontWeight: 300, textDecoration: "none" }}>RS</a>
            <div style={{ display: "flex", gap: 32 }}>
                {(["Work", "Experience", "Education", "Skills", "Contact"] as const).map(l => (
                    <a key={l} href={`#${l.toLowerCase()}`} className="nl">{l}</a>
                ))}
            </div>
            <a href="/resume.pdf" className="nl" style={{ color: C.amber, border: `1px solid rgba(46,91,255,0.28)`, padding: "6px 14px", borderRadius: 4 }}>Resume</a>
        </nav>
    );
}
