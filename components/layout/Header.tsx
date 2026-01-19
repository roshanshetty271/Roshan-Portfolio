"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { navigation, personalInfo } from "@/data/portfolio";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
        ? "bg-cream-50/95 dark:bg-charcoal-950/95 backdrop-blur-sm shadow-sm border-b border-charcoal-200/50 dark:border-white/10"
        : "bg-cream-50 dark:bg-charcoal-950 border-b border-transparent"
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl md:text-2xl font-semibold text-charcoal-900 dark:text-cream-100"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-copper-500">.</span>
          </motion.a>

          {/* Desktop Navigation - NO NUMBERS */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium text-charcoal-600 dark:text-cream-300 hover:text-copper-500 dark:hover:text-copper-400 transition-colors link-underline"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-cream-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-cream-200 hover:bg-cream-300 dark:hover:bg-charcoal-700 transition-colors"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 bg-charcoal-900 dark:bg-cream-100 text-white dark:text-charcoal-900 text-sm font-medium rounded-lg hover:bg-charcoal-800 dark:hover:bg-cream-200 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-cream-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-cream-200"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-700 dark:text-cream-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-cream-50 dark:bg-charcoal-950 z-40 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-charcoal-100 dark:border-charcoal-800">
                <span className="font-display text-xl font-semibold text-charcoal-900 dark:text-cream-100">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal-700 dark:text-cream-200 bg-cream-200 dark:bg-charcoal-800 rounded-full hover:bg-copper-500 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 items-center text-center mt-8 px-6 overflow-y-auto">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-medium text-charcoal-800 dark:text-cream-100 py-2 hover:text-copper-500 dark:hover:text-copper-400"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 w-full max-w-xs"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3 bg-charcoal-900 dark:bg-cream-100 text-white dark:text-charcoal-900 text-base font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
