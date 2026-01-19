"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, education } from "@/data/portfolio";

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

            {/* Education - inline and simple */}
            <div className="pt-6 border-t border-charcoal-200 dark:border-charcoal-700">
              <span className="font-mono text-xs text-charcoal-400 dark:text-cream-500 uppercase tracking-wider">
                Education
              </span>
              <div className="mt-3 space-y-2">
                {education.map((edu) => (
                  <p key={edu.institution} className="text-sm text-charcoal-600 dark:text-cream-400">
                    <span className="font-medium text-charcoal-900 dark:text-cream-100">
                      {edu.degree}
                    </span>
                    {" · "}
                    {edu.institution}
                    {" · "}
                    <span className="text-charcoal-400 dark:text-cream-500">{edu.graduationDate}</span>
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Photo - simple and clean */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="/headshot.png"
              alt={personalInfo.name}
              width={200}
              height={200}
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
