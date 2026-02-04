'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

const TOTAL_FRAMES = 141;
const FPS = 30;
const BASE_URL = '/sequence/loop_cipro/';

export default function HeroHybrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const requestRef = useRef<number>();
    const frameIndexRef = useRef(0);
    const lastFrameTimeRef = useRef(0);

    // Smart Preloader
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];
        let isMounted = true;

        const preloadImages = () => {
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, '0');
                img.src = `${BASE_URL}ezgif-frame-${paddedIndex}.jpg`;

                img.onload = () => {
                    if (!isMounted) return;
                    loadedCount++;
                    setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
                    if (loadedCount === TOTAL_FRAMES) {
                        setTimeout(() => setIsLoading(false), 800);
                    }
                };

                img.onerror = () => {
                    if (!isMounted) return;
                    console.error(`Failed to load frame ${i}`);
                    loadedCount++;
                    if (loadedCount === TOTAL_FRAMES) {
                        setTimeout(() => setIsLoading(false), 800);
                    }
                };

                images.push(img);
            }
            imagesRef.current = images;
        };

        preloadImages();

        return () => {
            isMounted = false;
            imagesRef.current = [];
        };
    }, []);

    // Animation Loop
    useEffect(() => {
        if (isLoading || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Initial setup
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Draw first frame immediately to avoid black flash
            if (imagesRef.current[0]) {
                // drawFrame(ctx, imagesRef.current[0], canvas.width, canvas.height); 
                // logic duplicated below, so let loop handle it
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        const animate = (time: number) => {
            if (!lastFrameTimeRef.current) lastFrameTimeRef.current = time;
            const deltaTime = time - lastFrameTimeRef.current;
            const interval = 1000 / FPS;

            if (deltaTime > interval) {
                // Update Logic
                frameIndexRef.current = (frameIndexRef.current + 1) % TOTAL_FRAMES;

                // Render Logic
                const img = imagesRef.current[frameIndexRef.current];
                if (img) {
                    // Responsive sizing: 50% of viewport width max
                    const isMobile = canvas.width < 768;
                    const scaleFactor = isMobile ? 0.9 : 0.5; // Larger on mobile

                    const aspectRatio = img.naturalWidth / img.naturalHeight;

                    let targetWidth = canvas.width * scaleFactor;
                    let targetHeight = targetWidth / aspectRatio;

                    // Centering - distance to top reduced by 65% (new y is 35% of center point)
                    const x = (canvas.width - targetWidth) / 2;
                    const y = ((canvas.height - targetHeight) / 2) * 0.35;

                    // Clear and Draw
                    // Optimization: Only clear dirty rect if needed, but for full screen video-like, fillRect is safest
                    ctx.fillStyle = '#020202';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, x, y, targetWidth, targetHeight);
                }
                lastFrameTimeRef.current = time - (deltaTime % interval);
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [isLoading]);


    return (
        <section className="relative w-full h-screen bg-void-black overflow-hidden flex flex-col items-center justify-center">
            {/* Loader */}
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        className="absolute inset-0 z-50 flex items-center justify-center bg-void-black"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col items-center gap-6">
                            <motion.span
                                className="text-electric-orange text-8xl font-bold tracking-tighter"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {progress}%
                            </motion.span>
                            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-electric-orange"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Overlay Content */}
            {!isLoading && (
                <div className="relative z-10 text-center space-y-10 mt-[12rem]"> {/* Reducida la distancia al loop un 25% */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-black via-white to-black bg-clip-text text-transparent pb-2 drop-shadow-2xl">
                            Gestión de Proyectos
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <MovingBorderButton
                            borderRadius="9999px"
                            duration={3000}
                            containerClassName="h-auto w-auto shadow-[0_0_30px_rgba(255,85,0,0.4)] hover:shadow-[0_0_50px_rgba(255,85,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                            className="bg-electric-orange border-none text-white font-semibold text-lg tracking-wide px-8 py-4"
                        >
                            ÚNETE AHORA
                        </MovingBorderButton>
                    </motion.div>
                </div>
            )}
        </section>
    );
};
