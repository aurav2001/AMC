'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mx-4 mt-4
        ${scrolled ? 'bg-white/80' : 'bg-white/60'}
        backdrop-blur-lg border border-white/20 shadow-lg
        rounded-2xl max-w-7xl mx-auto
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary-600 p-2 rounded-lg">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                            AMC Pro
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${pathname === link.path
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                        }
                  `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[100] md:hidden"
                        />
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-64 bg-white z-[101] shadow-2xl md:hidden p-6"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold text-primary-600">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition"
                                >
                                    <X className="w-6 h-6 text-slate-600" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary-600 text-white px-4 py-3 rounded-xl text-lg font-bold hover:bg-primary-700 transition shadow-lg mt-8"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
