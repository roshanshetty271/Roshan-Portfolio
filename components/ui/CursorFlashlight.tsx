"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CursorFlashlight() {
    const elementRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const positionRef = useRef({ x: 0, y: 0 });

    const updatePosition = useCallback(() => {
        if (elementRef.current) {
            elementRef.current.style.background = `radial-gradient(600px circle at ${positionRef.current.x}px ${positionRef.current.y}px, rgba(201, 120, 86, 0.06), transparent 40%)`;
        }
        rafRef.current = null;
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            positionRef.current = { x: e.clientX, y: e.clientY };

            // Only schedule RAF if not already scheduled
            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(updatePosition);
            }
        };

        const handleMouseEnter = () => {
            if (elementRef.current) {
                elementRef.current.style.opacity = "1";
            }
        };

        const handleMouseLeave = () => {
            if (elementRef.current) {
                elementRef.current.style.opacity = "0";
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [updatePosition]);

    return (
        <div
            ref={elementRef}
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                opacity: 0,
                willChange: "background",
            }}
        />
    );
}
