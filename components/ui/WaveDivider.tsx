"use client";

interface WaveDividerProps {
    className?: string;
    flip?: boolean;
    color?: "cream" | "charcoal";
}

export default function WaveDivider({ className = "", flip = false, color = "cream" }: WaveDividerProps) {
    const fillColor = color === "cream"
        ? "fill-cream-100 dark:fill-charcoal-900"
        : "fill-cream-50 dark:fill-charcoal-950";

    return (
        <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={`w-full h-16 md:h-24 ${fillColor}`}
            >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.52,118.92,163.71,67.35,321.39,56.44Z" />
            </svg>
        </div>
    );
}
