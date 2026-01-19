"use client";

import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "@/data/portfolio";
import { Github, ExternalLink, Clock, Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  // Featured projects are top 3, rest go to grid
  const topFeatured = featuredProjects.slice(0, 3);
  const remainingProjects = [...featuredProjects.slice(3), ...otherProjects];

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

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building with <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Selected projects showcasing complex system architecture and AI integration.
          </p>
        </motion.div>

        {/* Featured Projects Highlight Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {topFeatured.map((project, index) => {
              const gradientClass = gradients[index % gradients.length];
              return (
                <motion.a
                  key={project.name}
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-full flex flex-col bg-bg-secondary rounded-2xl overflow-hidden border border-border hover:border-copper-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-copper-500/10"
                >
                  {/* Gradient Cover with Pattern Overlay */}
                  <div className={`h-48 w-full bg-gradient-to-br ${gradientClass} relative overflow-hidden flex-shrink-0`}>
                    {/* Mesh pattern overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px]"></div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <Sparkles size={12} className="text-yellow-300" />
                        Featured
                      </span>
                    </div>

                    {/* Project icon/letter */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-display text-2xl font-bold border border-white/30">
                      {project.name.charAt(0)}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow bg-charcoal-900 dark:bg-charcoal-800">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl font-bold text-cream-100 group-hover:text-copper-400 transition-colors">
                        {project.name}
                      </h3>
                      <ArrowUpRight size={20} className="text-charcoal-500 group-hover:text-copper-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <p className="text-charcoal-400 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-charcoal-800/50 border border-charcoal-700 text-charcoal-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Section Divider/Heading for Other Projects */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-charcoal-200 dark:bg-charcoal-800 flex-grow"></div>
          <span className="text-sm font-mono text-charcoal-500 dark:text-charcoal-400 uppercase tracking-wider">Other Projects</span>
          <div className="h-px bg-charcoal-200 dark:bg-charcoal-800 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingProjects.map((project, index) => {
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-white dark:bg-charcoal-800 rounded-2xl border border-charcoal-100 dark:border-charcoal-700 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-copper-500 to-teal-500 opacity-0 group-hover:opacity-100 -z-10 blur-[2px] transition-opacity duration-300"></div>
                <div className="absolute inset-[1px] rounded-[15px] bg-white dark:bg-charcoal-800 -z-10"></div>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper-500 via-teal-500 to-copper-500 rounded-t-2xl opacity-60"></div>

                <div className="flex items-start justify-between mb-4">
                  {/* Gradient icon background */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal-100 to-charcoal-200 dark:from-charcoal-700 dark:to-charcoal-600 flex items-center justify-center text-charcoal-700 dark:text-cream-100 font-display text-lg font-bold shadow-inner">
                    {project.name.charAt(0)}
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-charcoal-50 dark:bg-charcoal-700 text-charcoal-500 dark:text-cream-300 hover:text-copper-500 hover:bg-copper-50 dark:hover:bg-copper-900/20 transition-all">
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <h3 className="font-display text-lg font-bold text-charcoal-900 dark:text-cream-100 mb-2 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-charcoal-600 dark:text-charcoal-300 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-charcoal-100 dark:border-charcoal-700">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-charcoal-50 to-charcoal-100 dark:from-charcoal-700 dark:to-charcoal-600 text-charcoal-600 dark:text-charcoal-200 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
