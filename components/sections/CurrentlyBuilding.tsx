"use client";

import { motion } from "framer-motion";
import { Rocket, Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { currentlyBuilding } from "@/data/portfolio";

export default function CurrentlyBuilding() {
    return (
        <section className="section-padding bg-gradient-to-b from-cream-100/30 to-transparent dark:from-charcoal-900/30">
            <div className="container-custom">
                <SectionHeading
                    title="Currently Building"
                    subtitle="Active projects I'm working on right now"
                />

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {currentlyBuilding.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-cream-50 dark:bg-charcoal-800 rounded-2xl p-6 card-hover overflow-hidden group"
                        >
                            {/* Active indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 bg-copper-100 dark:bg-copper-900/30 rounded-xl flex items-center justify-center mb-4">
                                <Rocket className="w-6 h-6 text-copper-600 dark:text-copper-400" />
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-cream-100 mb-1">
                                {project.name}
                            </h3>
                            <p className="text-sm text-copper-600 dark:text-copper-400 mb-3">
                                {project.subtitle}
                            </p>
                            <p className="text-sm text-charcoal-600 dark:text-cream-400 mb-4">
                                {project.description}
                            </p>

                            {/* Progress bar */}
                            <div className="mb-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-charcoal-500 dark:text-cream-400">Progress</span>
                                    <span className="font-medium text-copper-600 dark:text-copper-400">{project.progress}%</span>
                                </div>
                                <div className="h-2 bg-cream-200 dark:bg-charcoal-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${project.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="h-full bg-gradient-to-r from-copper-500 to-copper-400 rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 bg-cream-200 dark:bg-charcoal-700 text-charcoal-600 dark:text-cream-300 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-charcoal-500 dark:text-cream-400 hover:text-copper-500 transition-colors"
                                    >
                                        <Github size={18} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-charcoal-500 dark:text-cream-400 hover:text-copper-500 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                            {/* Last updated */}
                            <p className="absolute bottom-4 right-4 text-xs text-charcoal-400 dark:text-cream-500">
                                Updated {project.lastUpdated}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
