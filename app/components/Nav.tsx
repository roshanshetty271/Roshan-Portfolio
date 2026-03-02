"use client";

import { useState, useEffect } from "react";
import { C } from "./palette";

export default function Nav() {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

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

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const scrolled = scrollY > 80;
    const links = ["Work", "Experience", "Education", "Skills", "Contact"] as const;

    return (
        <>
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

                <div className="nav-links" style={{ display: "flex", gap: 32 }}>
                    {links.map(l => (
                        <a key={l} href={`#${l.toLowerCase()}`} className="nl">{l}</a>
                    ))}
                </div>

                <a href="/resume.pdf" className="nl nav-resume" style={{ color: C.amber, border: `1px solid rgba(46,91,255,0.28)`, padding: "6px 14px", borderRadius: 4 }}>Resume</a>

                {/* Hamburger — hidden on desktop via CSS */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    style={{
                        display: "none",
                        flexDirection: "column",
                        gap: 5,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 6,
                        zIndex: 110,
                    }}
                >
                    <span style={{
                        display: "block", width: 22, height: 1.5,
                        background: menuOpen ? C.amber : "rgba(255,255,255,0.7)",
                        transition: "transform .3s, background .3s",
                        transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                    }} />
                    <span style={{
                        display: "block", width: 22, height: 1.5,
                        background: menuOpen ? "transparent" : "rgba(255,255,255,0.7)",
                        transition: "opacity .2s",
                    }} />
                    <span style={{
                        display: "block", width: 22, height: 1.5,
                        background: menuOpen ? C.amber : "rgba(255,255,255,0.7)",
                        transition: "transform .3s, background .3s",
                        transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                    }} />
                </button>
            </nav>

            {/* Mobile overlay menu */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 99,
                    background: "rgba(0,0,0,0.97)",
                    backdropFilter: "blur(20px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 32,
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition: "opacity .35s ease",
                }}
            >
                {links.map((l, i) => (
                    <a
                        key={l}
                        href={`#${l.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            fontFamily: "'Cormorant SC',serif",
                            fontSize: 28,
                            letterSpacing: ".12em",
                            color: C.ink,
                            textDecoration: "none",
                            transition: "color .2s, transform .3s",
                            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                            transitionDelay: `${i * 0.05}s`,
                        }}
                    >
                        {l}
                    </a>
                ))}
                <a
                    href="/resume.pdf"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        fontFamily: "'Crimson Pro',serif",
                        fontSize: 14,
                        letterSpacing: ".25em",
                        textTransform: "uppercase",
                        color: C.amber,
                        textDecoration: "none",
                        border: `1px solid rgba(212,175,55,0.3)`,
                        padding: "10px 28px",
                        borderRadius: 4,
                        marginTop: 8,
                    }}
                >
                    Resume
                </a>
            </div>
        </>
    );
}
