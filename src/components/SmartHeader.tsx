'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import clsx from 'clsx';

export default function SmartHeader() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest > 100) {
            setScrolled(true);
            if (latest > previous && latest > 150) {
                setHidden(true); // Hide when scrolling down
                setMobileMenuOpen(false); // Close mobile menu when scrolling down
            } else {
                setHidden(false); // Show when scrolling up
            }
        } else {
            setScrolled(false);
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between transition-all duration-500",
                scrolled || mobileMenuOpen
                    ? "bg-void-black/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="text-2xl font-bold tracking-tighter text-white z-50">
                CIPRO
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {['Repositorio', 'Portafolio', 'Nosotros'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-white/70 hover:text-electric-orange transition-colors"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <button className="hidden md:block px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/5">
                Login
            </button>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={clsx("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen ? "rotate-45 translate-y-2" : "")} />
                    <span className={clsx("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen ? "opacity-0" : "")} />
                    <span className={clsx("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : "")} />
                </div>
            </button>

            {/* Mobile Navigation Overlay */}
            <div className={clsx(
                "fixed inset-0 bg-void-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
                mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                {['Repositorio', 'Portafolio', 'Nosotros'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-2xl font-bold text-white hover:text-electric-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
                <button className="px-8 py-3 text-lg font-medium bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/5">
                    Login
                </button>
            </div>
        </motion.header>
    );
}
