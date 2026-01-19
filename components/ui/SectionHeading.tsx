"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal-900 dark:text-cream-100">
        {title}
        <span className="text-copper-500">.</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-charcoal-600 dark:text-cream-400 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-20 h-1 bg-copper-500 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
