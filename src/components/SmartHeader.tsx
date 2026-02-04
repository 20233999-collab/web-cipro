'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import clsx from 'clsx';

export default function SmartHeader() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest > 100) {
            setScrolled(true);
            if (latest > previous && latest > 150) {
                setHidden(true); // Hide when scrolling down
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
                type: "spring",
                stiffness: 400, // Respuesta instantánea
                damping: 40,   // Ralentización elegante al final
                mass: 1
            }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between transition-all duration-500",
                scrolled
                    ? "bg-void-black/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="text-2xl font-bold tracking-tighter text-white">
                CIPRO
            </div>

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
        </motion.header>
    );
}
