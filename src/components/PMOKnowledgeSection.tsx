'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Layers,
    Target,
    BarChart3,
    BookOpen,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoItemProps {
    title: string;
    description?: string;
    icon: React.ReactNode;
    className?: string;
    iconClassName?: string;
    size?: 'small' | 'medium' | 'large' | 'wide';
}

function BentoItem({ title, description, icon, className, iconClassName, size = 'medium' }: BentoItemProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "group relative rounded-3xl border border-white/10 overflow-hidden cursor-pointer",
                "bg-gradient-to-br from-white/[0.03] to-transparent",
                "hover:border-electric-orange/40 hover:shadow-[0_0_40px_rgba(255,85,0,0.1)]",
                "transition-all duration-300",
                className
            )}
        >
            {/* Inner gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-orange/0 to-electric-orange/0 group-hover:from-electric-orange/5 group-hover:to-transparent transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Icon */}
                <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    "bg-white/5 border border-white/10",
                    "group-hover:bg-electric-orange/10 group-hover:border-electric-orange/30",
                    "transition-all duration-300",
                    iconClassName
                )}>
                    {icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-orange transition-colors duration-300">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>

                {/* Arrow indicator */}
                <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ArrowRight className="w-5 h-5 text-electric-orange" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function PMOKnowledgeSection() {
    return (
        <section className="py-32 bg-void-black relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-orange/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        PMO Knowledge
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                        Convertimos la teoría en herramientas efectivas. Nuestro directorio más grande de todo lo aprendido sobre Project Management durante estos últimos 10 años.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                    {/* Top Wide Card */}
                    <BentoItem
                        title="Biblioteca de Recursos"
                        description="Accede a más de 500 templates, guías y documentos esenciales para gestión de proyectos."
                        icon={<BookOpen className="w-6 h-6 text-white group-hover:text-electric-orange transition-colors" />}
                        className="md:col-span-4 h-auto min-h-[180px] md:h-[180px]"
                    />

                    {/* Left Tall Card */}
                    <BentoItem
                        title="Metodologías Ágiles"
                        description="Scrum, Kanban, SAFe y más. Domina las frameworks más utilizadas."
                        icon={<Layers className="w-6 h-6 text-white group-hover:text-electric-orange transition-colors" />}
                        className="md:col-span-1 md:row-span-2 h-auto min-h-[220px] md:h-auto"
                    />

                    {/* Center Medium Card - Featured */}
                    <BentoItem
                        title="Gestión de Riesgos"
                        description="Identifica, analiza y mitiga riesgos como un profesional."
                        icon={
                            <div className="relative">
                                <Sparkles className="w-6 h-6 text-electric-orange" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-electric-orange rounded-full animate-pulse" />
                            </div>
                        }
                        className="md:col-span-2 h-auto min-h-[180px] md:h-[200px] border-electric-orange/20 bg-gradient-to-br from-electric-orange/5 to-transparent"
                        iconClassName="bg-electric-orange/10 border-electric-orange/20"
                    />

                    {/* Right Small Card */}
                    <BentoItem
                        title="KPIs & Métricas"
                        icon={<BarChart3 className="w-6 h-6 text-white group-hover:text-electric-orange transition-colors" />}
                        className="md:col-span-1 h-auto min-h-[160px] md:h-[200px]"
                    />

                    {/* Bottom Left Medium Card */}
                    <BentoItem
                        title="PMO Setup"
                        description="Estructura tu oficina de proyectos desde cero."
                        icon={<Target className="w-6 h-6 text-white group-hover:text-electric-orange transition-colors" />}
                        className="md:col-span-2 h-auto min-h-[160px] md:h-[160px]"
                    />

                    {/* Bottom Right Card */}
                    <BentoItem
                        title="Documentación"
                        description="Charters, planes, reportes y plantillas profesionales."
                        icon={<FileText className="w-6 h-6 text-white group-hover:text-electric-orange transition-colors" />}
                        className="md:col-span-1 h-auto min-h-[160px] md:h-[160px]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
