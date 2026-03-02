"use client";

import { useRef, useState, FC, ReactNode, MouseEvent as ReactMouseEvent } from "react";

export const Magnetic: FC<{ children: ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: ReactMouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate the distance from the center of the element
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        // Dampen the movement so it doesn't move 1:1 with the mouse
        // Moving it roughly 25% of the distance from the center
        setPosition({ x: x * 0.25, y: y * 0.25 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{
                display: "inline-block",
                transform: `translate(${position.x}px, ${position.y}px)`,
                // A responsive spring-like transition
                transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
        >
            {children}
        </div>
    );
};
