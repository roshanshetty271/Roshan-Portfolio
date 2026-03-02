"use client";

import { useState, useEffect, useRef, createContext, useContext, FC, ReactNode } from "react";

/* ── Shared reduced-motion context (one listener for the entire tree) ── */
const MotionCtx = createContext(false);

export const MotionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const h = (e: MediaQueryListEvent) => setReduced(e.matches);
        mq.addEventListener("change", h);
        return () => mq.removeEventListener("change", h);
    }, []);
    return <MotionCtx.Provider value={reduced}>{children}</MotionCtx.Provider>;
};

/* ── useInView ─────────────────────────────────────────── */
function useInView(threshold = 0.08): [React.RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold },
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, [threshold]);
    return [ref, visible];
}

/* ── Reveal ────────────────────────────────────────────── */
interface RevealProps {
    children: ReactNode;
    delay?: number;
    up?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const Reveal: FC<RevealProps> = ({ children, delay = 0, up = 24, className, style }) => {
    const [ref, visible] = useInView();
    const reduced = useContext(MotionCtx);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible || reduced ? "translateY(0)" : `translateY(${up}px)`,
                transition: reduced
                    ? "none"
                    : `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}s`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
