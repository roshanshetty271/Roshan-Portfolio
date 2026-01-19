"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-cream-100/50 dark:bg-charcoal-900/50">
      <div className="container-custom">
        <SectionHeading
          title="Testimonials"
          subtitle="What colleagues and managers say about working with me"
        />

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-cream-50 dark:bg-charcoal-800 rounded-2xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <Quote className="w-12 h-12 text-copper-200 dark:text-copper-900/50" />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10 min-h-[250px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Highlight */}
                  <p className="text-copper-600 dark:text-copper-400 font-medium mb-4 italic">
                    &quot;{testimonials[activeIndex].highlight}&quot;
                  </p>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-charcoal-700 dark:text-cream-200 leading-relaxed mb-8">
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-copper-200 dark:bg-copper-900/50 rounded-full flex items-center justify-center mb-3">
                      <span className="font-display text-lg font-bold text-copper-600 dark:text-copper-400">
                        {testimonials[activeIndex].author.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p className="font-semibold text-charcoal-900 dark:text-cream-100">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-charcoal-600 dark:text-cream-400">
                      {testimonials[activeIndex].title}
                    </p>
                    <p className="text-sm text-copper-600 dark:text-copper-400">
                      {testimonials[activeIndex].company} • {testimonials[activeIndex].relationship}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-cream-200 dark:bg-charcoal-700 text-charcoal-700 dark:text-cream-200 hover:bg-copper-500 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-copper-500"
                        : "bg-cream-300 dark:bg-charcoal-600 hover:bg-copper-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-cream-200 dark:bg-charcoal-700 text-charcoal-700 dark:text-cream-200 hover:bg-copper-500 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 text-center">
            <p className="text-charcoal-600 dark:text-cream-400">
              <span className="font-display text-3xl font-bold text-copper-500">8</span>
              <span className="ml-2">LinkedIn Recommendations</span>
            </p>
            <a
              href="https://linkedin.com/in/roshanshetty271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-copper-600 dark:text-copper-400 hover:underline"
            >
              <Linkedin size={18} />
              View all on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
