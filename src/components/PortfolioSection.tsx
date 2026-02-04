'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "Optimización de Procesos",
        category: "Consultoría Estratégica",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description: "Reducción del 30% en tiempos de entrega mediante metodologías Lean."
    },
    {
        title: "Transformación Digital",
        category: "Tech Implementation",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        description: "Implementación de ecosistema digital para gestión de inventarios."
    },
    {
        title: "Gestión de Riesgos",
        category: "Finanzas",
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
        description: "Análisis y mitigación de riesgos críticos en proyectos de infraestructura."
    }
];

export default function PortfolioSection() {
    return (
        <section id="portafolio" className="py-32 bg-void-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                            Proyectos con Impacto.
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Casos de éxito donde transformamos la gestión académica y profesional en resultados tangibles.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-2 text-white font-medium hover:text-electric-orange transition-colors"
                    >
                        Ver portafolio completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-white/5 border border-white/10 group-hover:border-electric-orange/50 transition-colors duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="w-10 h-10 rounded-full bg-electric-orange flex items-center justify-center text-white shadow-lg">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            <span className="text-electric-orange text-xs font-bold tracking-widest uppercase mb-2">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-orange transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
