"use client";

import { useState, useEffect, useRef, FC, ReactNode } from "react";
import "./CinemaIntro.css";

type Phase = "idle" | "zooming" | "done";

interface CinemaIntroProps {
  children: ReactNode;
}

const CinemaIntro: FC<CinemaIntroProps> = ({ children }) => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [cursorOnScreen, setCursorOnScreen] = useState(false);

  const theaterRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const darkenRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("cinema_entered")) {
      setPhase("done");
    }
  }, []);

  const handleEnter = () => {
    if (phase !== "idle") return;

    const theater = theaterRef.current;
    const bg = bgRef.current;
    const darken = darkenRef.current;
    const root = rootRef.current;
    const portfolio = portfolioRef.current;
    if (!theater || !bg || !darken || !root || !portfolio) return;

    setPhase("zooming");

    // Ensure no transition is active, then force reflow
    theater.style.transition = "none";
    theater.style.transform = "translateZ(0px)";
    void theater.offsetWidth;

    // Now apply the slow dolly zoom toward the screen
    theater.style.transition = "transform 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    theater.style.transform = "translateZ(1800px)";

    // Fade out the theater image and darken starting at 1.5s
    setTimeout(() => {
      bg.style.transition = "opacity 1.5s ease";
      bg.style.opacity = "0";
      darken.style.transition = "opacity 1.5s ease";
      darken.style.opacity = "0";
    }, 1500);

    // Fade in portfolio at 2s
    setTimeout(() => {
      portfolio.style.transition = "opacity 1.2s ease";
      portfolio.style.opacity = "1";
    }, 2000);

    // Fade out the whole cinema overlay starting at 2.5s
    setTimeout(() => {
      root.style.transition = "opacity 1s ease";
      root.style.opacity = "0";
    }, 2500);

    // Done at 3.5s
    setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("cinema_entered", "1");
    }, 3500);
  };

  const handleSkip = () => {
    setPhase("done");
    sessionStorage.setItem("cinema_entered", "1");
  };

  if (phase === "done") return <>{children}</>;

  return (
    <>
      {/* Portfolio renders behind, starts invisible */}
      <div ref={portfolioRef} className="ci-portfolio">
        {children}
      </div>

      <CursorDot onScreen={cursorOnScreen} />

      <div ref={rootRef} className="ci-root">
        <button className="ci-skip" onClick={handleSkip}>
          Skip &#8599;
        </button>

        <div className="ci-scene">
          <div ref={theaterRef} className="ci-theater">
            <div ref={bgRef} className="ci-bg" />
            <div ref={darkenRef} className="ci-darken" />

            <div
              className="ci-screen-wrap"
              onClick={handleEnter}
              onMouseEnter={() => setCursorOnScreen(true)}
              onMouseLeave={() => setCursorOnScreen(false)}
            >
              <div className="ci-screen">
                <div className="sc-inner">
                  <span className="sc-presenter">Presents</span>

                  <h1 className="sc-title">
                    Roshan
                    <br />
                    Shetty
                  </h1>

                  <div className="sc-rule" />

                  <span className="sc-role">
                    Software Engineer &middot; AI Systems &middot; Boston
                  </span>
                </div>

                <span className="sc-cta">Click to Enter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CursorDot: FC<{ onScreen: boolean }> = ({ onScreen }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className={`ci-cursor${onScreen ? " large" : ""}`}
      style={{ opacity: onScreen ? 1 : 0 }}
    />
  );
};

export default CinemaIntro;
