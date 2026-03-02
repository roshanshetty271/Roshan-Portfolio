"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { C, type Film } from "@/app/components/palette";
import ProjectToggle, { StatusPill } from "@/app/components/ProjectToggle";
import "./ProjectCarousel.css";

function CardImage({ screenshot, title }: { screenshot?: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (!screenshot || failed) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${C.amberDim} 0%, rgba(0,0,0,0.95) 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant SC', serif",
            fontSize: 32,
            fontWeight: 300,
            color: C.amberDim,
            letterSpacing: "0.1em",
          }}
        >
          {title[0]}
        </span>
      </div>
    );
  }

  return (
    <img
      src={screenshot}
      alt={title}
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
    />
  );
}

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return mobile;
}

function getCardStyle(offset: number, mobile: boolean): React.CSSProperties {
  const absOff = Math.abs(offset);
  const sideOffset = mobile ? 200 : 380;
  const farOffset = mobile ? 340 : 620;
  const sideScale = mobile ? 0.65 : 0.72;
  const farScale = mobile ? 0.45 : 0.52;

  if (absOff === 0) {
    return {
      transform: "translateX(0px) translateZ(0px) rotateY(0deg) scale(0.97)",
      filter: "brightness(1) blur(0px)",
      zIndex: 10,
      opacity: 1,
    };
  }
  if (absOff === 1) {
    const dir = offset > 0 ? 1 : -1;
    return {
      transform: `translateX(${dir * sideOffset}px) translateZ(-180px) rotateY(${-dir * 38}deg) scale(${sideScale})`,
      filter: "brightness(0.55) blur(1.5px)",
      zIndex: 7,
      opacity: 0.85,
    };
  }
  if (absOff === 2) {
    const dir = offset > 0 ? 1 : -1;
    return {
      transform: `translateX(${dir * farOffset}px) translateZ(-340px) rotateY(${-dir * 52}deg) scale(${farScale})`,
      filter: "brightness(0.3) blur(3px)",
      zIndex: 4,
      opacity: 0.5,
    };
  }
  return {
    transform: `translateX(${offset > 0 ? 800 : -800}px) translateZ(-500px) scale(0.4)`,
    filter: "brightness(0.15) blur(6px)",
    zIndex: 1,
    opacity: 0,
    pointerEvents: "none",
  };
}

interface ProjectCarouselProps {
  featuredFilms: Film[];
  otherFilms: Film[];
}

export default function ProjectCarousel({ featuredFilms, otherFilms }: ProjectCarouselProps) {
  const [view, setView] = useState<"carousel" | "grid">("carousel");
  const mobile = useIsMobile();
  const allFilms = [...featuredFilms, ...otherFilms];

  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const dragThreshold = 60;
  const total = allFilms.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  useEffect(() => {
    if (view !== "carousel") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, view]);

  const scrollAccum = useRef(0);
  const decayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const SCROLL_THRESHOLD = 80;

  useEffect(() => {
    if (view !== "carousel") return;
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      scrollAccum.current += e.deltaX;
      if (decayTimer.current) clearTimeout(decayTimer.current);
      decayTimer.current = setTimeout(() => { scrollAccum.current = 0; }, 200);
      if (scrollAccum.current > SCROLL_THRESHOLD) {
        next();
        scrollAccum.current = 0;
      } else if (scrollAccum.current < -SCROLL_THRESHOLD) {
        prev();
        scrollAccum.current = 0;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (decayTimer.current) clearTimeout(decayTimer.current);
    };
  }, [prev, next, view]);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStart(e.clientX);
    setDragDelta(0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragDelta(e.clientX - dragStart);
  };
  const onMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta < -dragThreshold) next();
    else if (dragDelta > dragThreshold) prev();
    setDragDelta(0);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragDelta(0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    setDragDelta(e.touches[0].clientX - dragStart);
  };
  const onTouchEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta < -dragThreshold) next();
    else if (dragDelta > dragThreshold) prev();
    setDragDelta(0);
  };

  return (
    <section className="carousel-section" id="projects">
      <div className="carousel-header">
        <span className="carousel-eyebrow">Filmography</span>
        <h2 className="carousel-title">Projects</h2>

        <div className="view-toggle">
          <button
            className={`view-toggle-btn${view === "carousel" ? " active" : ""}`}
            onClick={() => setView("carousel")}
            aria-label="Carousel view"
          >
            &#9654; Carousel
          </button>
          <button
            className={`view-toggle-btn${view === "grid" ? " active" : ""}`}
            onClick={() => setView("grid")}
            aria-label="Grid view"
          >
            &#9638; Grid
          </button>
        </div>
      </div>

      {view === "carousel" ? (
        <>
          <div
            ref={containerRef}
            className="carousel-stage"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {allFilms.map((film, i) => {
              const offset =
                ((i - active + total + Math.floor(total / 2)) % total) -
                Math.floor(total / 2);
              const isActive = offset === 0;
              const style = getCardStyle(offset, mobile);

              return (
                <div
                  key={film.title}
                  className={`carousel-card${isActive ? " is-active" : ""}`}
                  style={style}
                  onClick={() => {
                    if (!isActive && Math.abs(offset) === 1) {
                      offset > 0 ? next() : prev();
                    }
                  }}
                >
                  <div className="carousel-card-inner">
                    <div style={{ position: "absolute", inset: 0 }}>
                      <CardImage screenshot={film.screenshot} title={film.title} />
                    </div>

                    <div className="card-base-overlay" />

                    {isActive && (
                      <div className="card-overlay">
                        <div className="overlay-title">{film.title}</div>
                        <p className="overlay-logline">{film.logline}</p>
                        <div className="overlay-tags">
                          {film.tags.map((t) => (
                            <span key={t} className="overlay-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="overlay-links">
                          {film.liveHref && (
                            <a
                              href={film.liveHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="overlay-link live"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live &#8599;
                            </a>
                          )}
                          {film.githubHref && (
                            <a
                              href={film.githubHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="overlay-link gh"
                              onClick={(e) => e.stopPropagation()}
                            >
                              GitHub &#8599;
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-label">
            <div className="carousel-label-title">{allFilms[active].title}</div>
            <StatusPill status={allFilms[active].status} />
          </div>

          <div className="carousel-nav">
            <button className="nav-arrow" onClick={prev} aria-label="Previous project">
              &#8592;
            </button>
            <div className="nav-dots">
              {allFilms.map((_, i) => (
                <button
                  key={i}
                  className="nav-dot"
                  onClick={() => setActive(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: i === active ? 24 : 7,
                    height: 7,
                    borderRadius: i === active ? 4 : "50%",
                    background: i === active ? C.amber : C.inkGhost,
                  }}
                />
              ))}
            </div>
            <button className="nav-arrow" onClick={next} aria-label="Next project">
              &#8594;
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <span
              style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.silver,
              }}
            >
              &#8592; &#8594; keys &middot; drag &middot; swipe
            </span>
          </div>
        </>
      ) : (
        <div className="grid-view">
          <div className="fg" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 20 }}>
            {featuredFilms.map((film) => (
              <div key={film.title} className="fc">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, position: "relative", zIndex: 1 }}>
                  <span style={{ fontFamily: "'Cormorant SC',serif", fontSize: 12, letterSpacing: ".28em", color: C.amber, opacity: .6 }}>Ch. {film.chapter}</span>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    {film.badge ? <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: C.amber, border: `1px solid ${C.amberDim}`, padding: "2px 6px", borderRadius: 2, background: "rgba(0,0,0,0.3)" }}>{film.badge}</span> : null}
                    <StatusPill status={film.status} />
                  </div>
                </div>
                <h3 className="ft" style={{ marginBottom: 14, position: "relative", zIndex: 1 }}>{film.title}</h3>
                <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.8, color: C.inkDim, fontWeight: 300, marginBottom: 20, position: "relative", zIndex: 1, flex: 1 }}>{film.logline}</p>
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 20, position: "relative", zIndex: 1 }}>{film.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                <div style={{ display: "flex", gap: 16, position: "relative", zIndex: 1 }}>
                  {film.liveHref ? <a href={film.liveHref} target="_blank" rel="noopener noreferrer" className="cs">Live</a> : null}
                  {film.githubHref ? <a href={film.githubHref} target="_blank" rel="noopener noreferrer" className="cs cs-dim">GitHub</a> : null}
                </div>
              </div>
            ))}
          </div>
          <ProjectToggle otherFilms={otherFilms} />
        </div>
      )}

      <div style={{ textAlign: "center" }}>
        <a
          href="https://github.com/roshanshetty271?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-link"
        >
          View All Projects &#8599;
        </a>
      </div>
    </section>
  );
}
