"use client";

import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "@/data/portfolio";
import { Github, ExternalLink, Clock, Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const allProjects = [...featuredProjects, ...otherProjects];

  // Premium gradients with more depth
  const gradients = [
    "from-indigo-600 via-purple-600 to-pink-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-orange-500 via-red-500 to-rose-500",
    "from-blue-600 via-indigo-600 to-violet-600",
    "from-amber-500 via-orange-500 to-red-500",
    "from-cyan-500 via-blue-500 to-indigo-500",
    "from-rose-500 via-pink-500 to-fuchsia-500",
    "from-teal-500 via-emerald-500 to-green-500",
    "from-violet-600 via-purple-600 to-indigo-600",
  ];

  return (
    <section id="projects" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-copper-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-copper-500/10 to-teal-500/10 border border-copper-500/20 text-copper-600 dark:text-copper-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Featured Work</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building with <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Selected projects showcasing complex system architecture and AI integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => {
            const gradientClass = gradients[index % gradients.length];

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-bg-secondary rounded-2xl overflow-hidden border border-border hover:border-copper-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-copper-500/10 flex flex-col h-full"
              >
                {/* Gradient Cover with Pattern Overlay */}
                <div className={`h-52 w-full bg-gradient-to-br ${gradientClass} relative overflow-hidden`}>
                  {/* Mesh pattern overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px]"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    {project.status === "completed" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        Completed
                      </span>
                    ) : project.status === "in-progress" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        In Progress
                      </span>
                    ) : null}
                  </div>

                  {/* Project icon/letter */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-display text-2xl font-bold border border-white/30">
                    {project.name.charAt(0)}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-copper-500 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-bg-primary rounded-md text-text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium rounded-lg border-2 border-charcoal-200 dark:border-charcoal-700 text-charcoal-700 dark:text-cream-200 hover:border-copper-500 hover:text-copper-500 dark:hover:border-copper-400 dark:hover:text-copper-400 transition-all group/btn"
                    >
                      <Github size={16} />
                      View Code
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
