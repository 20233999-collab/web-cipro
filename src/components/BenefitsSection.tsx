'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Users } from 'lucide-react';
import BenefitCard from '@/components/ui/benefit-card';

const benefits = [
    {
        icon: Calendar,
        title: "Eventos Exclusivos",
        description: "Acceso privilegiado a networking y conferencias con líderes de la industria.",
        imageSrc: "/images/cards/eventos_exclusivos.webp",
        imageAlt: "Eventos profesionales y networking"
    },
    {
        icon: BookOpen,
        title: "Recursos Premium",
        description: "Biblioteca curada de plantillas, guías y herramientas de gestión.",
        imageSrc: "/images/cards/recursos_premium.webp",
        imageAlt: "Recursos y materiales de aprendizaje"
    },
    {
        icon: Users,
        title: "Capacitaciones",
        description: "Workshops intensivos para dominar las metodologías ágiles modernas.",
        imageSrc: "/images/cards/capacitaciones.webp",
        imageAlt: "Capacitación y desarrollo profesional"
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
                        Gestionamos el presente, proyectamos el futuro.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            title={benefit.title}
                            description={benefit.description}
                            icon={benefit.icon}
                            imageSrc={benefit.imageSrc}
                            imageAlt={benefit.imageAlt}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
