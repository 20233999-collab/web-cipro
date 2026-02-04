'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Users } from 'lucide-react';

const benefits = [
    {
        icon: Calendar,
        title: "Eventos Exclusivos",
        description: "Acceso privilegiado a networking y conferencias con líderes de la industria.",
    },
    {
        icon: BookOpen,
        title: "Recursos Premium",
        description: "Biblioteca curada de plantillas, guías y herramientas de gestión.",
    },
    {
        icon: Users,
        title: "Capacitaciones",
        description: "Workshops intensivos para dominar las metodologías ágiles modernas.",
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-32 bg-void-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-orange/5 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Más que una comunidad.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-gray-300 transition-colors">
                        Un ecosistema diseñado para potenciar tu crecimiento profesional desde el día uno.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-electric-orange/50 transition-colors duration-500 overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/0 to-electric-orange/0 group-hover:from-electric-orange/5 group-hover:to-transparent transition-all duration-500 ease-out" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-orange group-hover:text-white transition-colors duration-300">
                                    <benefit.icon className="w-6 h-6 text-white group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-orange transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
