import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Banner1Img from "../assets/amc11.jpg";
import Banner2Img from "../assets/amc12.jpg";
import Banner3Img from "../assets/banner111.png";

const banners = [
    {
        id: 1,
        title: "Reliable Hardware Support",
        subtitle: "for Your Business",
        description: "Expert maintenance for servers, workstations, and all IT hardware. We keep your infrastructure running smoothly.",
        image: Banner1Img,
        cta: "Learn More",
        ctaLink: "/services/hardware"
    },
    {
        id: 2,
        title: "Complete Software",
        subtitle: "Management Solutions",
        description: "From installation to updates and security patches. We handle all your software needs professionally.",
        image: Banner2Img,
        cta: "Explore Services",
        ctaLink: "/services/software"
    },
    {
        id: 3,
        title: "Secure Your Business",
        subtitle: "with Expert IT Support",
        description: "Network security, data protection, and 24/7 monitoring. Your business deserves reliable IT infrastructure.",
        image: Banner3Img,
        cta: "Get Started",
        ctaLink: "/contact"
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % banners.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const goToSlide = (index) => setActiveIndex(index);
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % banners.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);

    const currentBanner = banners[activeIndex];

    return (
        <div
            className="relative w-full h-[600px] md:h-[650px] overflow-hidden mt-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={currentBanner.image}
                        alt={currentBanner.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-xl"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                            {currentBanner.title}
                            <span className="text-blue-400 block">{currentBanner.subtitle}</span>
                        </h1>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            {currentBanner.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to={currentBanner.ctaLink}
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                {currentBanner.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition border border-white/20"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`h-2 rounded-full transition-all ${activeIndex === idx
                                ? 'w-8 bg-blue-500'
                                : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
