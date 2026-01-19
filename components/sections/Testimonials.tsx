"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream-50 dark:bg-charcoal-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="text-charcoal-500 dark:text-cream-500">
              Feedback from colleagues and managers
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-600 dark:text-cream-300 hover:bg-copper-500 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-600 dark:text-cream-300 hover:bg-copper-500 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[400px] snap-start"
            >
              <div className="h-full p-6 bg-white dark:bg-charcoal-800 rounded-xl border border-charcoal-100 dark:border-charcoal-700 shadow-sm">
                {/* Highlight Quote */}
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="w-8 h-8 text-copper-400 flex-shrink-0" />
                  <p className="text-copper-600 dark:text-copper-400 font-medium italic text-lg leading-snug">
                    "{testimonial.highlight}"
                  </p>
                </div>

                {/* Truncated Quote */}
                <p className="text-charcoal-600 dark:text-cream-400 text-sm leading-relaxed mb-6 line-clamp-4">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100 dark:border-charcoal-700">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-copper-500 to-copper-600 flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal-900 dark:text-cream-100">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-charcoal-500 dark:text-cream-500">
                      {testimonial.company} • {testimonial.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://linkedin.com/in/roshanshetty271"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-copper-600 dark:text-copper-400 hover:underline font-medium"
          >
            <Linkedin size={18} />
            View all 8 recommendations on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
