import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Banner1Img from "../assets/banner1212.avif";
import Banner2Img from "../assets/banner22.png";
import Banner3Img from "../assets/banner111.png";

const banners = [
    {
        id: 1,
        title: "Premium Hardware Support",
        description: "Expert maintenance for servers, workstations, and peripherals to ensure zero downtime.",
        image: Banner1Img,
        gradient: "from-slate-900 to-blue-900",
    },
    {
        id: 2,
        title: "Software Solutions",
        description: "Installation, patching, and troubleshooting for all your essential business software.",
        image: Banner2Img,
        gradient: "from-indigo-950 to-slate-900",
    },
    {
        id: 3,
        title: "Network & Security",
        description: "Comprehensive network management and advanced security protocols to protect your data.",
        image: Banner3Img,
        gradient: "from-gray-900 to-slate-950",
    },
];

const Hero = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Handle manual scrolling
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                // Check if we are at the end
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    // Auto-scroll logic
    useEffect(() => {
        if (isPaused) return;

        const intervalId = setInterval(() => {
            if (scrollRef.current) {
                const { current } = scrollRef;
                // If at the end, go back to start, else scroll next
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                    setActiveIndex(0);
                } else {
                    current.scrollBy({ left: current.clientWidth, behavior: 'smooth' });
                    setActiveIndex(prev => prev + 1);
                }
            }
        }, 5000); // 5 seconds interval

        return () => clearInterval(intervalId);
    }, [isPaused]);

    // Update active index on manual scroll
    const handleScroll = () => {
        if (scrollRef.current) {
            const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') scroll('right');
            if (e.key === 'ArrowLeft') scroll('left');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            className="relative w-full h-[600px] overflow-hidden bg-slate-50 mt-4 rounded-3xl mx-auto max-w-7xl shadow-2xl group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {banners.map((banner) => (
                    <div
                        key={banner.id}
                        className="min-w-full h-full flex items-center justify-center snap-center relative text-white"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(30, 50, 70, 0.7)), url(${banner.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="max-w-7xl w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 z-10">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-5xl md:text-6xl font-bold leading-tight"
                                >
                                    {banner.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-xl text-blue-100 max-w-lg"
                                >
                                    {banner.description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <Link to="/contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                                        Get a Quote
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="flex justify-center md:justify-end relative h-64 md:h-full items-center mt-8 md:mt-0 order-first md:order-last">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full max-w-sm md:max-w-full h-full md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
                                >
                                    <img
                                        src={banner.image}
                                        alt={banner.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons (visible on group hover) */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition opacity-0 group-hover:opacity-100 z-10"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition opacity-0 group-hover:opacity-100 z-10"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollTo({ left: idx * scrollRef.current.clientWidth, behavior: 'smooth' });
                            }
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
