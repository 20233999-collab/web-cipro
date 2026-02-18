'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
    {
        title: "Ingeniero Locaso",
        description: "Sistema automatizado de gestión académica con IA.",
        image: "/images/proyectos/ingeniero-locaso.png",
    },
    {
        title: "Transformación Digital",
        description: "Red de integración de datos para empresas en crecimiento.",
        image: "/images/proyectos/transformacion-digital.png",
    },
    {
        title: "Gestión Ágil",
        description: "Visualización de flujos de trabajo con metodología Scrum.",
        image: "/images/proyectos/gestion-agil.png",
    },
    {
        title: "PMO Estratégica",
        description: "Oficina de proyectos con enfoque en entrega de valor.",
        image: "/images/proyectos/pmo-estrategica.png",
    },
    {
        title: "Optimización de Procesos",
        description: "Eficiencia y productividad a través de mejora continua.",
        image: "/images/proyectos/optimizacion-procesos.png",
    },
];

export default function PortfolioSection() {
    const [centerIndex, setCenterIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const totalProjects = projects.length;

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Get index with wrapping
    const getWrappedIndex = (index: number) => {
        return ((index % totalProjects) + totalProjects) % totalProjects;
    };

    // Navigate to previous
    const prevSlide = () => {
        setCenterIndex(getWrappedIndex(centerIndex - 1));
    };

    // Navigate to next
    const nextSlide = () => {
        setCenterIndex(getWrappedIndex(centerIndex + 1));
    };

    // Click on card to center it
    const goToSlide = (index: number) => {
        setCenterIndex(index);
    };

    // Get visible cards (5 cards: -2, -1, center, +1, +2)
    const getVisibleCards = () => {
        const positions = [-2, -1, 0, 1, 2];
        return positions.map(offset => {
            const actualIndex = getWrappedIndex(centerIndex + offset);
            return {
                project: projects[actualIndex],
                actualIndex,
                offset,
            };
        });
    };

    const visibleCards = getVisibleCards();

    return (
        <section id="portafolio" className="py-8 md:py-32 bg-void-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-white/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Proyectos con Propósito.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg px-4">
                        Es el centro del círculo. Casos de éxito donde transformamos la gestión en resultados tangibles.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative flex items-center justify-center h-[480px] md:h-[600px]">

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-8 top-[40%] md:top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Cards */}
                    <div className="relative flex items-center justify-center w-full h-full perspective-1000">
                        <AnimatePresence mode="popLayout">
                            {visibleCards.map(({ project, actualIndex, offset }) => {
                                // On mobile, hide cards with offset > 1
                                if (isMobile && Math.abs(offset) > 1) return null;

                                const isCenter = offset === 0;
                                const rotation = offset * 10;
                                // Adjust translation for mobile with explicit centering
                                const xOffset = isMobile ? offset * 50 : offset * 120;
                                const translateX = `calc(-50% + ${xOffset}px)`;
                                const scale = isCenter ? 1 : (isMobile ? 0.8 : 0.75) - Math.abs(offset) * 0.05;
                                const opacity = isCenter ? 1 : 0.6 - Math.abs(offset) * 0.15;
                                const zIndex = 10 - Math.abs(offset);

                                return (
                                    <motion.div
                                        key={actualIndex}
                                        initial={{ opacity: 0, scale: 0.8, x: "calc(-50% + 0px)" }}
                                        animate={{
                                            opacity,
                                            scale,
                                            x: translateX,
                                            rotate: rotation,
                                            zIndex,
                                        }}
                                        exit={{ opacity: 0, scale: 0.8, x: "calc(-50% + 0px)" }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        onClick={() => goToSlide(actualIndex)}
                                        className="absolute cursor-pointer left-1/2 top-[10%] md:top-1/2 -translate-y-1/2 flex flex-col items-center"
                                        style={{ zIndex }}
                                    >
                                        {/* Card */}
                                        <motion.div
                                            whileHover={isCenter ? { scale: 1.05, boxShadow: "0 0 80px rgba(255,255,255,0.5)" } : {}}
                                            className={cn(
                                                "w-[200px] h-[280px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden bg-void-black",
                                                "border-2 transition-all duration-300 relative",
                                                isCenter
                                                    ? "border-white/40 shadow-[0_0_60px_rgba(255,255,255,0.35)]"
                                                    : "border-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                                            )}
                                        >
                                            {/* Image */}
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                        {/* Text below card - only visible for center */}
                                        {/* We use absolute positioning to avoid affecting the vertical center of the card */}
                                        <motion.div
                                            className="absolute top-[calc(100%+1.5rem)] text-center w-[280px] md:w-[400px]"
                                            animate={{
                                                opacity: isCenter ? 1 : 0,
                                                y: isCenter ? 0 : 10,
                                                pointerEvents: isCenter ? "auto" : "none"
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2 px-4">
                                                {project.description}
                                            </p>

                                            {/* "ir" link */}
                                            <motion.div
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 cursor-pointer group rounded-full hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <span>ir</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-8 top-[40%] md:top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-10">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === centerIndex
                                    ? "bg-white w-6"
                                    : "bg-white/30 hover:bg-white/50"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
