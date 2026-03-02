"use client";

import { useState, FC, ReactNode } from "react";
import { C, type Film } from "./palette";
import { Reveal } from "./Reveal";

/* ── Status Pill ───────────────────────────────────────── */
const StatusPill: FC<{ status: Film["status"] }> = ({ status }) => {
    const live = status === "IN THEATRES";
    const prog = status === "IN PRODUCTION";
    return (
        <span style={{
            fontFamily: "'Crimson Pro', serif", fontSize: 11, letterSpacing: "0.2em",
            textTransform: "uppercase", padding: "3px 10px",
            background: live ? C.amberDim : prog ? "rgba(110,231,160,0.08)" : "rgba(232,224,208,0.04)",
            color: live ? C.amber : prog ? "#6EE7A0" : C.inkDim,
            border: "none",
            whiteSpace: "nowrap",
            borderRadius: 4,
            boxShadow: "0 1px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(232,224,208,0.05)",
        }}>
            {status}
        </span>
    );
};

/* ── Project Toggle (show all / show less) ─────────────── */
interface Props {
    otherFilms: Film[];
    children?: ReactNode;
}

const ProjectToggle: FC<Props> = ({ otherFilms }) => {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? otherFilms : otherFilms.slice(0, 5);

    return (
        <>
            <div style={{ borderTop: "none" }}>
                {visible.map((film, i) => (
                    <Reveal key={film.title} delay={i * .05}>
                        <div className="pr">
                            <span style={{ fontFamily: "'Cormorant SC',serif", fontSize: 10, letterSpacing: ".22em", color: C.silver, opacity: .7 }}>{film.chapter}</span>
                            <div>
                                <div className="prt">{film.title}</div>
                                <div style={{ marginTop: 4 }}>{film.tags.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}</div>
                            </div>
                            <div className="prs" style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                <StatusPill status={film.status} />
                                {film.liveHref ? <a href={film.liveHref} target="_blank" rel="noopener noreferrer" className="cs">Live</a> : null}
                                {film.githubHref ? <a href={film.githubHref} target="_blank" rel="noopener noreferrer" className="cs cs-dim">GitHub</a> : null}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
            {otherFilms.length > 5 ? (
                <Reveal>
                    <div style={{ marginTop: 28, textAlign: "center" }}>
                        <button
                            onClick={() => setShowAll(p => !p)}
                            style={{
                                fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".22em",
                                textTransform: "uppercase", color: C.amber,
                                border: "none", padding: "10px 28px",
                                cursor: "pointer", transition: "box-shadow .3s, transform .3s",
                                borderRadius: 6,
                                background: "rgba(232,224,208,0.05)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(232,224,208,0.06)",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(232,224,208,0.08)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(232,224,208,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            {showAll ? "Show Less" : `Show All ${otherFilms.length} Projects`}
                        </button>
                    </div>
                </Reveal>
            ) : null}
        </>
    );
};

export default ProjectToggle;
export { StatusPill };
