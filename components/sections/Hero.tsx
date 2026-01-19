"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Quote, User, Terminal } from "lucide-react";
import { personalInfo, contact, heroTypewriterWords } from "@/data/portfolio";

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [delta, setDelta] = useState(100);

    // Typewriter effect
    useEffect(() => {
        const currentWord = heroTypewriterWords[currentWordIndex];

        const tick = () => {
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                setDelta(50);
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                setDelta(100);
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % heroTypewriterWords.length);
            }
        };

        const timer = setTimeout(tick, delta);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentWordIndex, delta]);

    const socialLinks = [
        { icon: Github, href: contact.github, label: "GitHub" },
        { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
        { icon: Mail, href: `mailto:${contact.email.primary}`, label: "Email" },
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
            <div className="container-custom py-8 md:py-12 relative z-10 flex-1 flex flex-col justify-center">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Content (Text) - Order 2 on mobile, 1 on desktop */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-800 dark:bg-charcoal-900 border border-charcoal-700 text-xs font-mono mb-6 shadow-lg max-w-full"
                        >
                            <span className="text-green-400">$</span>
                            <span className="text-cream-400 whitespace-nowrap">status:</span>
                            <span className="relative flex h-2 w-2 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 leading-tight text-left">Actively Seeking Full-Time Roles</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 dark:text-cream-100 leading-tight"
                        >
                            {personalInfo.name}
                            <span className="text-copper-500">.</span>
                        </motion.h1>

                        {/* Typewriter Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 flex items-center justify-center lg:justify-start gap-3 h-10"
                        >
                            <Terminal size={20} className="text-copper-500 flex-shrink-0" />
                            <span className="font-mono text-lg md:text-2xl text-charcoal-700 dark:text-cream-200 truncate">
                                {displayText}
                                <span className="animate-pulse text-copper-500">_</span>
                            </span>
                        </motion.div>

                        {/* Featured Testimonial Quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 mb-8 p-4 bg-white/50 dark:bg-charcoal-800/50 backdrop-blur-sm rounded-xl border border-copper-500/20 shadow-sm max-w-lg mx-auto lg:mx-0 text-left"
                        >
                            <div className="flex gap-3">
                                <Quote size={24} className="text-copper-500 flex-shrink-0" />
                                <div>
                                    <p className="text-base md:text-lg font-display italic text-charcoal-800 dark:text-cream-100 leading-relaxed">
                                        "A rising talent in AI software engineering"
                                    </p>
                                    <p className="mt-2 text-xs md:text-sm text-charcoal-600 dark:text-cream-300">
                                        — <span className="font-semibold">Jorge Domenzain</span>, CTO at Aosenuma
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Impact Numbers */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-12 text-sm py-6 border-y border-dashed border-charcoal-200 dark:border-charcoal-800"
                        >
                            <div className="flex flex-col items-center sm:block text-center">
                                <span className="block text-2xl font-bold text-charcoal-900 dark:text-cream-100">3+</span>
                                <span className="text-charcoal-500 dark:text-cream-400 text-xs">Years Experience</span>
                            </div>
                            <div className="flex flex-col items-center sm:block text-center">
                                <span className="block text-2xl font-bold text-copper-500">M.S.</span>
                                <span className="text-charcoal-500 dark:text-cream-400 text-xs">Northeastern</span>
                            </div>
                            <div className="flex flex-col items-center sm:block text-center">
                                <span className="block text-2xl font-bold text-teal-600 dark:text-teal-400">&lt;/&gt;</span>
                                <span className="text-charcoal-500 dark:text-cream-400 text-xs">Full Stack Dev</span>
                            </div>
                        </motion.div>


                    </div>

                    {/* Right Content (Photo) - Order 1 on mobile, 2 on desktop */}
                    <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative mb-8 lg:mb-0 z-10">
                        <div className="relative mb-4">
                            <div className="absolute inset-0 bg-gradient-to-tr from-copper-500/20 to-teal-500/20 rounded-full lg:rounded-[2rem] rotate-6 scale-105 blur-xl"></div>

                            {/* Responsive Image Container */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-80 bg-cream-50 dark:bg-charcoal-900 rounded-full lg:rounded-[2rem] border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 mx-auto">
                                <Image
                                    src="/Roshan-photo.jpg"
                                    alt="Roshan Shetty"
                                    fill
                                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Social Links - Moved below photo */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-3"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-charcoal-200 dark:border-charcoal-700 text-charcoal-600 dark:text-cream-300 hover:border-copper-500 hover:text-copper-500 dark:hover:text-copper-400 transition-colors bg-white/50 dark:bg-charcoal-800/50 backdrop-blur-sm shadow-sm"
                                    aria-label={link.label}
                                >
                                    <link.icon size={20} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator - absolute at bottom of section */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                    opacity: { duration: 0.5, delay: 1.2 },
                    y: { duration: 1.5, repeat: Infinity, delay: 1.2 }
                }}
                className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-charcoal-400 dark:text-cream-500 hover:text-copper-500 transition-colors cursor-pointer z-20"
            >
                <span className="text-[10px] font-mono uppercase tracking-wider">Scroll</span>
                <ArrowDown size={14} />
            </motion.a>
        </section>
    );
}
