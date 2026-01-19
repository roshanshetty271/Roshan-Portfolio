import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Warm Copper Color Scheme
        copper: {
          50: "#fdf8f6",
          100: "#f9ebe5",
          200: "#f3d5c8",
          300: "#e9b8a3",
          400: "#dc9478",
          500: "#c97856", // Primary accent
          600: "#b5623f",
          700: "#974f34",
          800: "#7c422f",
          900: "#673a2b",
          950: "#371c14",
        },
        // Light mode backgrounds
        cream: {
          50: "#fefdfb",
          100: "#faf8f5",
          200: "#f5f0ea",
          300: "#ebe4da",
          400: "#ddd2c3",
        },
        // Dark mode backgrounds
        charcoal: {
          700: "#2a2a2a",
          800: "#1f1f1f",
          900: "#171717",
          950: "#0f0f0f",
        },
      },
      fontFamily: {
        // Distinctive typography choices
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
