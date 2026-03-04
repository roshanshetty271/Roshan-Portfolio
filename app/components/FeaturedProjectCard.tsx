"use client";

import { useState, useRef, FC } from "react";
import { C } from "./palette";

interface Props {
    href: string;
    imgSrc: string;
    title: string;
    description: string;
    tags: string[];
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(165deg, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0.9) 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <span style={{
                    fontFamily: "'Cormorant SC', serif", fontSize: 28, fontWeight: 300,
                    color: "rgba(212,175,55,0.4)", letterSpacing: "0.1em",
                }}>
                    {alt[0]}
                </span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
    );
}

const FeaturedProjectCard: FC<Props> = ({ href, imgSrc, title, description, tags }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.03)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    };

    return (
        <div>
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12, paddingLeft: 4 }}>
                <div style={{ width: 12, height: 1, background: C.amber, opacity: 0.6 }} />
                <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: C.amber, fontWeight: 300 }}>Featured Project</span>
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", perspective: 800 }}>
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        position: "relative",
                        border: "1px solid rgba(212,175,55,0.25)",
                        background: `linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, rgba(212,175,55,0.06) 100%)`,
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        overflow: "hidden",
                        borderRadius: 12,
                        transition: "transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s cubic-bezier(.4,0,.2,1), border-color .35s ease",
                        boxShadow: `
                            0 8px 32px rgba(0,0,0,0.5),
                            0 2px 8px rgba(0,0,0,0.3),
                            inset 0 1px 0 rgba(255,255,255,0.15),
                            inset 0 -1px 0 rgba(255,255,255,0.05),
                            0 0 20px rgba(212,175,55,0.08)
                        `,
                        transformStyle: "preserve-3d",
                    }}
                >



                    <div style={{ position: "relative", width: "100%", aspectRatio: "2/1", overflow: "hidden" }}>
                        <HeroImage src={imgSrc} alt={title} />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to top, rgba(7,11,18,.6) 0%, rgba(7,11,18,.2) 35%, transparent 55%)",
                        }} />
                        <div style={{ position: "absolute", bottom: 14, right: 16, zIndex: 4 }}>
                            <span style={{
                                fontFamily: "'Crimson Pro',serif", fontSize: 12, letterSpacing: ".18em",
                                textTransform: "uppercase", color: C.amber,
                                textShadow: "0 1px 6px rgba(0,0,0,.7), 0 0 12px rgba(212,175,55,0.3)",
                            }}>View Live &rarr;</span>
                        </div>
                    </div>
                    <div style={{
                        padding: "18px 22px 20px",
                        background: "transparent",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}>
                        <div style={{
                            fontFamily: "'Cormorant SC',serif", fontSize: "clamp(18px,2vw,24px)",
                            color: "#fff", letterSpacing: ".05em", lineHeight: 1.1,
                        }}>{title}</div>
                        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, color: "rgba(232,224,208,0.7)", lineHeight: 1.7, marginTop: 8, fontWeight: 300 }}>{description}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                            {tags.map(t => (
                                <span key={t} style={{
                                    fontFamily: "'Crimson Pro',serif", fontSize: 10, letterSpacing: ".15em",
                                    textTransform: "uppercase", padding: "4px 10px",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    borderRadius: 4,
                                    background: "rgba(255,255,255,0.05)",
                                    color: "rgba(232,224,208,0.8)",
                                    backdropFilter: "blur(8px)",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
            <a href="#projects" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, marginTop: 14, textDecoration: "none", transition: "opacity .2s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
                <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: C.inkDim }}>View More Projects</span>
                <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: C.amber }}>&rarr;</span>
            </a>
        </div>
    );
};

export default FeaturedProjectCard;
