"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, awards } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Certifications & Awards"
          subtitle="Professional credentials and recognition"
        />

        {/* SAP Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-copper-100 dark:bg-copper-900/30 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-copper-600 dark:text-copper-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-cream-100">
              SAP Certifications (5x Certified)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-cream-50 dark:bg-charcoal-800 rounded-xl p-5 card-hover block"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-[#0070F2]/10 rounded-lg flex items-center justify-center">
                    {/* SAP Logo placeholder */}
                    <span className="font-bold text-[#0070F2] text-sm">SAP</span>
                  </div>
                  <ExternalLink 
                    size={16} 
                    className="text-charcoal-400 dark:text-cream-500 group-hover:text-copper-500 transition-colors" 
                  />
                </div>

                <h4 className="font-medium text-charcoal-900 dark:text-cream-100 text-sm leading-tight mb-2 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">
                  {cert.name}
                </h4>

                <div className="flex items-center justify-between text-xs text-charcoal-500 dark:text-cream-400">
                  <span>{cert.date}</span>
                  {cert.examCode && (
                    <span className="font-mono bg-cream-200 dark:bg-charcoal-700 px-2 py-0.5 rounded">
                      {cert.examCode}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-copper-100 dark:bg-copper-900/30 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-copper-600 dark:text-copper-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-cream-100">
              Awards & Recognition
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-cream-50 dark:bg-charcoal-800 rounded-xl p-6 border-l-4 border-copper-500"
              >
                <h4 className="font-semibold text-charcoal-900 dark:text-cream-100 mb-1">
                  {award.title}
                </h4>
                {award.description && (
                  <p className="text-sm text-charcoal-600 dark:text-cream-400 mb-2">
                    {award.description}
                  </p>
                )}
                <div className="flex items-center gap-2 text-sm text-copper-600 dark:text-copper-400">
                  <span>{award.organization}</span>
                  <span>•</span>
                  <span>{award.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
