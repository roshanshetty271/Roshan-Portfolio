"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="education" className="py-12 md:py-16 border-b border-charcoal-100 dark:border-charcoal-800">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-10"
                >
                    <GraduationCap className="w-6 h-6 text-copper-500" />
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Education
                    </h2>
                </motion.div>

                {/* Education Cards - Side by Side */}
                <div className="grid md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 bg-cream-50 dark:bg-charcoal-800/50 rounded-xl border border-charcoal-100 dark:border-charcoal-700 hover:border-copper-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="inline-block px-3 py-1 text-xs font-mono bg-copper-100 dark:bg-copper-900/30 text-copper-600 dark:text-copper-400 rounded-md mb-2">
                                        {edu.degree}
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-charcoal-900 dark:text-cream-100">
                                        {edu.field}
                                    </h3>
                                </div>
                            </div>

                            {/* Institution */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-600 dark:text-cream-400 mb-4">
                                <span className="flex items-center gap-1.5">
                                    <BookOpen size={14} className="text-copper-500" />
                                    {edu.institution}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={14} className="text-copper-500" />
                                    {edu.location}
                                </span>
                            </div>

                            {/* Relevant Coursework - Condensed */}
                            <div className="pt-4 border-t border-charcoal-100 dark:border-charcoal-700">
                                <span className="text-xs font-mono text-charcoal-400 dark:text-cream-500 uppercase tracking-wider mb-2 block">
                                    Key Coursework
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.slice(0, 4).map((course) => (
                                        <span
                                            key={course}
                                            className="px-2 py-1 text-xs bg-charcoal-100 dark:bg-charcoal-700 text-charcoal-600 dark:text-charcoal-300 rounded"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
