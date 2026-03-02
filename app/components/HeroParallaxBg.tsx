"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { FC, ReactNode } from "react";

export const HeroParallaxBg: FC<{ children: ReactNode }> = ({ children }) => {
    // Parallax logic for Hero
    const { scrollY } = useScroll();
    const yHeroBg = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
    const yHeroProps = useTransform(scrollY, [0, 1000], ["0%", "15%"]);

    return (
        <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
            {/* Content Slot */}
            {children}
        </section>
    );
};
