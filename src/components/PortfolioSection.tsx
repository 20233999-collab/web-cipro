'use client';

import React, { useState } from 'react';
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
    const totalProjects = projects.length;

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
        <section id="portafolio" className="py-32 bg-void-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Proyectos con Propósito.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Es el centro del círculo. Casos de éxito donde transformamos la gestión en resultados tangibles.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative flex items-center justify-center h-[500px]">

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:left-8 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Cards */}
                    <div className="relative flex items-center justify-center w-full h-full">
                        <AnimatePresence mode="popLayout">
                            {visibleCards.map(({ project, actualIndex, offset }) => {
                                const isCenter = offset === 0;
                                const rotation = offset * 10;
                                const translateX = offset * 120;
                                const scale = isCenter ? 1 : 0.75 - Math.abs(offset) * 0.05;
                                const opacity = isCenter ? 1 : 0.6 - Math.abs(offset) * 0.15;
                                const zIndex = 10 - Math.abs(offset);

                                return (
                                    <motion.div
                                        key={actualIndex}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity,
                                            scale,
                                            x: translateX,
                                            rotate: rotation,
                                            zIndex,
                                        }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        onClick={() => goToSlide(actualIndex)}
                                        className="absolute cursor-pointer"
                                        style={{ zIndex }}
                                    >
                                        {/* Card */}
                                        <motion.div
                                            whileHover={isCenter ? { scale: 1.05, boxShadow: "0 0 80px rgba(255,255,255,0.5)" } : {}}
                                            className={cn(
                                                "w-[240px] h-[280px] md:w-[280px] md:h-[320px] rounded-3xl overflow-hidden",
                                                "border-2 transition-all duration-300",
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
                                        <motion.div
                                            className="mt-6 text-center max-w-[280px]"
                                            animate={{
                                                opacity: isCenter ? 1 : 0,
                                                y: isCenter ? 0 : 10
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
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
                        className="absolute right-0 md:right-8 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
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
