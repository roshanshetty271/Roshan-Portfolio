"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-copper-600 dark:text-copper-400 uppercase tracking-wider"
        >
          About
        </motion.span>

        {/* Content Grid */}
        <div className="mt-8 grid md:grid-cols-[1fr_200px] gap-12 items-start">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {personalInfo.about.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-charcoal-600 dark:text-cream-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Photo - simple and clean */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            {/* Code Terminal Visual - replaces duplicate photo */}
            <div className="relative">
              <div className="w-64 h-56 bg-charcoal-900 dark:bg-charcoal-950 rounded-xl border border-charcoal-700 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-charcoal-800 border-b border-charcoal-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-charcoal-400 font-mono ml-2">roshan.dev</span>
                </div>
                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm space-y-1.5">
                  <div className="text-green-400">$ whoami</div>
                  <div className="text-cream-300 pl-2">Full-Stack Developer</div>
                  <div className="text-green-400 mt-3">$ skills --top</div>
                  <div className="text-copper-400 pl-2">Python, Java, React, Node.js</div>
                  <div className="text-green-400 mt-3">$ experience</div>
                  <div className="text-teal-400 pl-2 pb-2">3+ years in enterprise dev</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
