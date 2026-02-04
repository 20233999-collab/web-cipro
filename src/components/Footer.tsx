'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-void-black pt-32 pb-16 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    {/* Brand Part */}
                    <div className="md:col-span-5">
                        <div className="text-3xl font-black text-white tracking-tighter mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent inline-block">
                            CIPRO.
                        </div>
                        <p className="text-gray-400 text-lg max-w-sm mb-10 leading-relaxed">
                            Formando la próxima generación de consultores líderes en gestión de proyectos. Consultoría Junior con mentalidad de élite.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Github, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Comunidad</h4>
                        <ul className="space-y-4">
                            {['Nosotros', 'Proyectos', 'Eventos', 'Blog'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-electric-orange transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Recursos</h4>
                        <ul className="space-y-4">
                            {['Metodologías', 'Plantillas', 'Casos de Éxito', 'E-books'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-electric-orange transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Join Us */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Únete a CIPRO</h4>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            ¿Listo para llevar tu carrera al siguiente nivel? Postula para ser miembro.
                        </p>
                        <a
                            href="https://github.com/20233999-collab/web-cipro"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-electric-orange hover:text-white transition-all group"
                        >
                            Postular Ahora <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} CIPRO - Círculo de Gestión de Proyectos. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Política de Privacidad</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
