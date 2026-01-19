"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { contact, personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: contact.github, label: "GitHub" },
    { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${contact.email.primary}`, label: "Email" },
  ];

  return (
    <footer className="bg-cream-100 dark:bg-charcoal-900 border-t border-cream-300 dark:border-charcoal-700">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-2xl font-semibold text-charcoal-900 dark:text-cream-100">
              {personalInfo.name.split(" ")[0]}
              <span className="text-copper-500">.</span>
            </a>
            <p className="mt-2 text-sm text-charcoal-600 dark:text-cream-400">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cream-200 dark:bg-charcoal-800 text-charcoal-700 dark:text-cream-200 hover:bg-copper-500 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-cream-300 dark:border-charcoal-700 text-center">
          <p className="text-sm text-charcoal-600 dark:text-cream-400">
            © {currentYear} {personalInfo.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
