"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        {/* Section Heading */}
        <SectionHeading
          title="About Me"
          subtitle={
            <span>
              Transforming Ideas into <span className="gradient-text">Intelligent Systems</span>
            </span>
          }
          align="left"
        />

        {/* Content Content - Text Left, Terminal Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-16 items-start"
        >
          {/* Text Content */}
          <div className="space-y-4">
            {personalInfo.about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-charcoal-600 dark:text-cream-300 leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
            <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed text-base md:text-lg">
              Let's connect:{" "}
              <a
                href="mailto:shetty.ros@northeastern.edu"
                className="text-copper-600 dark:text-copper-400 hover:underline font-medium"
              >
                shetty.ros@northeastern.edu
              </a>
            </p>
          </div>

          {/* Visual / Terminal */}
          <div className="w-full flex justify-center md:justify-end mt-4 md:mt-0">
            <div className="relative w-full max-w-md">
              <div className="w-full h-auto min-h-[16rem] bg-charcoal-900 dark:bg-charcoal-950 rounded-xl border border-charcoal-700 shadow-2xl overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-charcoal-800 border-b border-charcoal-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-charcoal-400 font-mono ml-2">roshanshetty.dev</span>
                </div>
                {/* Terminal Content */}
                <div className="p-4 pb-6 font-mono text-sm space-y-1">
                  <div className="text-green-400">$ focus</div>
                  <div className="text-cream-300 pl-2">→ AI/ML & RAG Systems</div>
                  <div className="text-cream-300 pl-2">→ Full-Stack Development</div>
                  <div className="text-cream-300 pl-2">→ Distributed Systems</div>
                  <div className="text-green-400 mt-4">$ stats</div>
                  <div className="text-cream-300 pl-2">→ 5 SAP Certifications</div>
                  <div className="text-cream-300 pl-2">→ 9 Recommendations</div>
                  <div className="text-cream-300 pl-2">→ 10+ Projects</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
