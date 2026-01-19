import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from "../assets/amc12.jpg";
import img2 from "../assets/amc11.jpg";
import img3 from "../assets/banner111.png";

const banners = [
    {
        id: 1,
        title: "Computer & Laptop AMC Services",
        description: "Complete annual maintenance for desktops, laptops, and workstations. Keep your systems running at peak performance with our expert support.",
        image: img1,
        cta: "Get Free Quote"
    },
    {
        id: 2,
        title: "Software Support & Solutions",
        description: "Professional software installation, updates, troubleshooting, and maintenance. We handle everything from OS to enterprise applications.",
        image: img2,
        cta: "Explore Plans"
    },
    {
        id: 3,
        title: "Network & IT Infrastructure",
        description: "End-to-end network setup, maintenance, and security solutions. Protect your business with our comprehensive IT support.",
        image: "/images/banner1.png",
        cta: "Contact Us"
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
    };

    // Auto-scroll
    useEffect(() => {
        if (isPaused) return;
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [isPaused, activeIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const currentBanner = banners[activeIndex];

    return (
        <section
            className="relative w-full min-h-[650px] md:min-h-[700px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Image with Overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${currentBanner.image})` }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[650px] md:min-h-[700px] flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {/* Tagline */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-primary-400 font-semibold text-lg tracking-wide"
                                >
                                    AMC Pro — Your IT Partner
                                </motion.p>

                                {/* Title */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                                >
                                    {currentBanner.title}
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg md:text-xl text-slate-300 leading-relaxed"
                                >
                                    {currentBanner.description}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-wrap gap-4 pt-4"
                                >
                                    <Link
                                        to="/contact"
                                        className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg"
                                    >
                                        {currentBanner.cta}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <a
                                        href="tel:+919810443288"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
                                    >
                                        <Phone className="w-5 h-5" />
                                        +91 9810443288
                                    </a>
                                </motion.div>

                                {/* Trust Badges */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center gap-8 pt-8 border-t border-white/10"
                                >
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white">100+</div>
                                        <div className="text-sm text-slate-400">Happy Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white">5+</div>
                                        <div className="text-sm text-slate-400">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white">24/7</div>
                                        <div className="text-sm text-slate-400">Support</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all z-20 border border-white/10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx
                                ? 'w-10 bg-primary-500'
                                : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
