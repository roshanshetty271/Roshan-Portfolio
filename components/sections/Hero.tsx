"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Dynamic Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Decorative Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 z-0"></div>

            <div className="container-custom py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-700 dark:text-green-400 mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Open to Opportunities
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 dark:text-cream-100 leading-tight"
                        >
                            {personalInfo.name}
                            <span className="text-copper-500">.</span>
                        </motion.h1>

                        {/* Typewriter Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 flex items-center gap-3 h-10"
                        >
                            <Terminal size={20} className="text-copper-500" />
                            <span className="font-mono text-xl md:text-2xl text-charcoal-700 dark:text-cream-200">
                                {displayText}
                                <span className="animate-pulse text-copper-500">_</span>
                            </span>
                        </motion.div>

                        {/* Featured Testimonial Quote - Updated Jorge info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 mb-8 p-4 bg-white/50 dark:bg-charcoal-800/50 backdrop-blur-sm rounded-xl border border-copper-500/20 shadow-sm max-w-lg"
                        >
                            <div className="flex gap-3">
                                <Quote size={24} className="text-copper-500 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-display italic text-charcoal-800 dark:text-cream-100 leading-relaxed">
                                        "A rising talent in AI software engineering"
                                    </p>
                                    <p className="mt-2 text-sm text-charcoal-600 dark:text-cream-300">
                                        — <span className="font-semibold">Jorge Domenzain</span>, Director of AI Engineering at EasyBee AI
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* NEW Impact Numbers - Better stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-6 text-sm py-6 border-y border-dashed border-charcoal-200 dark:border-charcoal-800"
                        >
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-charcoal-900 dark:text-cream-100">3+</span>
                                <span className="text-charcoal-500 dark:text-cream-400 text-xs">Years Experience</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-copper-500">M.S.</span>
                                <span className="text-charcoal-500 dark:text-cream-400 text-xs">Northeastern</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-teal-600 dark:text-teal-400">AI</span>
                                <span className="text-charcoal-500 dark:text-cream-400 text-xs">Full-Stack + ML</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-8 flex items-center gap-4"
                        >
                            <a
                                href="#projects"
                                className="group relative px-6 py-3 bg-charcoal-900 dark:bg-cream-100 text-white dark:text-charcoal-900 text-sm font-semibold rounded-lg overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-copper-600 to-copper-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    View Work <ArrowDown size={16} />
                                </span>
                            </a>

                            <div className="flex gap-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg border border-charcoal-200 dark:border-charcoal-700 text-charcoal-600 dark:text-cream-300 hover:border-copper-500 hover:text-copper-500 dark:hover:text-copper-400 transition-colors"
                                        aria-label={link.label}
                                    >
                                        <link.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Photo Placeholder - REMOVED SAP badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="hidden lg:flex justify-center relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-copper-500/20 to-teal-500/20 rounded-[2rem] rotate-6 scale-105 blur-xl"></div>

                        <div className="relative w-80 h-96 bg-cream-50 dark:bg-charcoal-900 rounded-[2rem] border border-white/20 dark:border-white/10 shadow-2xl flex flex-col items-center justify-center overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c97856_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                            <div className="relative z-10 flex flex-col items-center p-8 text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-copper-100 to-cream-100 dark:from-charcoal-800 dark:to-charcoal-700 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                    <User size={48} className="text-copper-400" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-charcoal-800 dark:text-cream-100">Roshan Shetty</h3>
                                <p className="text-charcoal-500 dark:text-cream-400 text-sm mt-2">Software Engineer</p>

                                <div className="mt-6 flex gap-2">
                                    <span className="px-3 py-1 bg-copper-100/50 dark:bg-copper-900/30 text-copper-700 dark:text-copper-300 text-xs rounded-full font-medium">Full-Stack</span>
                                    <span className="px-3 py-1 bg-teal-100/50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium">AI/ML</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Scroll indicator */}
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{
                        opacity: { duration: 0.5, delay: 1.2 },
                        y: { duration: 1.5, repeat: Infinity, delay: 1.2 }
                    }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-400 dark:text-cream-500 hover:text-copper-500 transition-colors cursor-pointer z-10"
                >
                    <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
                    <ArrowDown size={14} />
                </motion.a>
            </div>
        </section>
    );
}
