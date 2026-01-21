'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get time-based greeting based on local browser time
 * - Hours 5-11 (5:00am - 11:59am): "Good morning"
 * - Hours 12-16 (12:00pm - 4:59pm): "Good afternoon"
 * - Hours 17-20 (5:00pm - 8:59pm): "Good evening"
 * - Hours 21-23, 0-4 (9:00pm - 4:59am): "Hey there, night owl"
 */
function getTimeBasedGreeting(): string {
    const hour = new Date().getHours(); // 0-23

    if (hour >= 5 && hour <= 11) return "Good morning";
    if (hour >= 12 && hour <= 16) return "Good afternoon";
    if (hour >= 17 && hour <= 20) return "Good evening";
    return "Hey there, night owl"; // 21-23, 0-4
}

/**
 * Get day-of-week special message
 * - Monday: "Monday momentum activated."
 * - Friday: "Happy Friday!"
 * - Weekend: "Weekend vibes."
 * - Other days: null
 */
function getDayOfWeekMessage(): string | null {
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

    if (day === 1) return "Monday mode.";
    if (day === 5) return "Happy Friday!";
    if (day === 0 || day === 6) return "Weekend vibes.";
    return null;
}

/**
 * Get holiday message (takes priority over day-of-week)
 */
function getHolidayMessage(): string | null {
    const today = new Date();
    const month = today.getMonth() + 1; // 1-12
    const day = today.getDate();

    // New Year's Day (Jan 1)
    if (month === 1 && day === 1) return "Happy New Year!";

    // Valentine's Day (Feb 14)
    if (month === 2 && day === 14) return "Happy Valentine's Day!";

    // Halloween (Oct 31)
    if (month === 10 && day === 31) return "Happy Halloween!";

    // Christmas Eve & Day (Dec 24-25)
    if (month === 12 && (day === 24 || day === 25)) return "Happy Holidays!";

    // New Year's Eve (Dec 31)
    if (month === 12 && day === 31) return "Happy New Year's Eve!";

    return null;
}

/**
 * Get random welcome message for new visitors
 */
function getRandomMessage(): string {
    const messages = [
        "Welcome.",
        "Thanks for visiting.",
        "Glad you're here.",
        "Let's build something.",
        "Coffee in hand?",
        "Pull up a chair.",
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Get random welcome back message for returning visitors
 */
function getReturningMessage(): string {
    const messages = [
        "Welcome back.",
        "Great to see you again.",
        "Thanks for returning.",
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Check if visitor has been here before using localStorage
 */
function checkReturningVisitor(): boolean {
    try {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('portfolio_visited') === 'true';
    } catch {
        // localStorage blocked (incognito, privacy settings, etc.)
        return false;
    }
}

/**
 * Mark visitor in localStorage for future visits
 */
function markVisitor(): void {
    try {
        if (typeof window === 'undefined') return;
        localStorage.setItem('portfolio_visited', 'true');
    } catch {
        // Silently fail if localStorage is blocked
    }
}

/**
 * Fetch weather-based message from wttr.in API
 * - 3 second timeout to prevent blocking
 * - Returns null on any error
 */
async function getWeatherMessage(): Promise<string | null> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

        const response = await fetch('https://wttr.in/?format=%C', {
            signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) return null;

        const condition = (await response.text()).toLowerCase();

        if (condition.includes('snow')) return "Staying warm?";
        if (condition.includes('rain')) return "Cozy coding weather.";
        if (condition.includes('sunny') || condition.includes('clear')) return "Nice out today.";
        if (condition.includes('cloud')) return "Perfect coding weather.";

        return null;
    } catch {
        // API failed, timed out, or network error - just skip weather
        return null;
    }
}

// ============================================
// GREETING BANNER COMPONENT
// ============================================

export function GreetingBanner() {
    const [displayedText, setDisplayedText] = useState('');
    const [fullGreeting, setFullGreeting] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Build greeting on mount
    useEffect(() => {
        setMounted(true);

        async function buildGreeting() {
            const timeGreeting = getTimeBasedGreeting();
            const holidayMessage = getHolidayMessage();
            const dayMessage = getDayOfWeekMessage();
            const isReturning = checkReturningVisitor();
            const personalMessage = isReturning ? getReturningMessage() : getRandomMessage();
            const weatherMessage = await getWeatherMessage();

            // Compose parts (holiday overrides day message) - STRICTLY MAX 2 SENTENCES
            // 1. Time or Holiday
            // 2. Personal welcome
            
            let firstPart = holidayMessage ? holidayMessage : timeGreeting + '.';
            setFullGreeting(`${firstPart} ${personalMessage}`);
            markVisitor();
        }

        buildGreeting();
    }, []);

    // Typing animation
    useEffect(() => {
        if (!fullGreeting) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullGreeting.length) {
                setDisplayedText(fullGreeting.slice(0, index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 50); // Slightly slower typing speed for retro feel

        return () => clearInterval(interval);
    }, [fullGreeting]);

    // SSR safety - return null until mounted
    // Return a fixed-height placeholder to prevent layout shift during hydration/typing
    if (!mounted) {
        return (
            <div className="h-6 mb-4 w-full" aria-hidden="true" />
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-xs text-charcoal-600 dark:text-cream-300 mb-4 text-center w-full whitespace-nowrap overflow-hidden h-6 flex items-center justify-center tracking-widest"
            style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.9rem', lineHeight: '1.5' }}
        >
            {displayedText}
            {isTyping && <span className="animate-pulse text-copper-500 ml-1 font-bold">|</span>}
        </motion.div>
    );
}
