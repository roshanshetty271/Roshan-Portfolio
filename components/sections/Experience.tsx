"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container-custom">
        <SectionHeading
          title="Experience"
          subtitle="Building enterprise solutions and AI-powered systems"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-copper-200 dark:bg-copper-900 -translate-x-1/2 hidden md:block" />

            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                  }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="w-4 h-4 bg-copper-500 rounded-full border-4 border-cream-50 dark:border-charcoal-950" />
                </div>

                {/* Card */}
                <div
                  className={`bg-cream-50 dark:bg-charcoal-800 rounded-2xl p-6 md:p-8 card-hover ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                >
                  {/* Header */}
                  <div className={`flex flex-col items-start gap-2 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                    <div className="flex items-center gap-2 text-copper-600 dark:text-copper-400">
                      <Briefcase size={16} />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal-900 dark:text-cream-100">
                      {job.title}
                    </h3>
                    <div className={`flex flex-wrap gap-3 text-sm text-charcoal-500 dark:text-cream-400 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {job.startDate === job.endDate ? job.startDate : `${job.startDate} - ${job.endDate}`}
                      </span>
                    </div>
                    {job.type && (
                      <Badge variant="accent" size="sm">{job.type}</Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`mt-4 text-charcoal-600 dark:text-cream-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`mt-6 space-y-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {job.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-charcoal-600 dark:text-cream-400 flex gap-3 leading-relaxed"
                      >
                        <span className="text-copper-500 flex-shrink-0">
                          →
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {job.technologies.slice(0, 8).map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {job.technologies.length > 8 && (
                      <Badge variant="default" size="sm">
                        +{job.technologies.length - 8} more
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
