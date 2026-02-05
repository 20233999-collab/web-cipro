'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    imageSrc: string;
    imageAlt: string;
    index?: number;
}

export default function BenefitCard({
    title,
    description,
    icon: Icon,
    imageSrc,
    imageAlt,
    index = 0,
}: BenefitCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Preload image to prevent flicker
    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => setIsImageLoaded(true);
    }, [imageSrc]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer",
                "border border-white/10 hover:border-electric-orange/50",
                "transition-all duration-500",
                !isImageLoaded && "bg-white/5 animate-pulse"
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                {isImageLoaded && (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${imageSrc})` }}
                        role="img"
                        aria-label={imageAlt}
                    />
                )}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0">
                {/* Default gradient - diagonal from top-right dark to bottom-left light */}
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        "benefit-card-gradient",
                        isHovered && "opacity-0"
                    )}
                />

                {/* Hover gradient - very dark, almost black */}
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-500 opacity-0",
                        "bg-black/90",
                        isHovered && "opacity-100"
                    )}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8">

                {/* Top Section - Title + Icon */}
                <div className="flex items-start gap-3">
                    {/* Icon - appears from left on hover */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-10 h-10 rounded-lg bg-electric-orange/20 backdrop-blur-sm border border-electric-orange/30 flex items-center justify-center flex-shrink-0"
                            >
                                <Icon className="w-5 h-5 text-electric-orange" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Title - shifts right when icon appears */}
                    <motion.h3
                        animate={{
                            x: isHovered ? 0 : -53, // Negative to compensate for icon width
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl font-bold text-white"
                    >
                        {title}
                    </motion.h3>
                </div>

                {/* Bottom Section - Description + CTA (only on hover) */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="space-y-3"
                        >
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {description}
                            </p>

                            {/* CTA with bouncing arrow */}
                            <div className="flex items-center gap-2 text-electric-orange font-semibold text-sm">
                                <span>Ver más</span>
                                <motion.div
                                    animate={{
                                        x: [0, 4, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Glassmorphism Border Enhancement */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </motion.div>
    );
}
