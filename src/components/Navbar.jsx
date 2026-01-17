import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronDown, Monitor, Code, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceLinks = [
        { name: 'Hardware Services', path: '/services/hardware', icon: Monitor },
        { name: 'Software Services', path: '/services/software', icon: Code },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-md'
                    : 'bg-white/95'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-gray-900">
                            AMC Pro
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        <Link
                            to="/"
                            className={`px-3 py-2 text-sm font-medium rounded-md transition ${location.pathname === '/'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button
                                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition ${location.pathname.startsWith('/services')
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                Services
                                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                    >
                                        {serviceLinks.map((service) => (
                                            <Link
                                                key={service.name}
                                                to={service.path}
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition"
                                            >
                                                <service.icon className="w-4 h-4 text-gray-400" />
                                                {service.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/about"
                            className={`px-3 py-2 text-sm font-medium rounded-md transition ${location.pathname === '/about'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className={`px-3 py-2 text-sm font-medium rounded-md transition ${location.pathname === '/contact'
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-3">
                        <a href="tel:+919810443288" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition">
                            <Phone className="w-4 h-4" />
                            <span className="font-medium">+91 98104 43288</span>
                        </a>
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 py-3 space-y-1">
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                                Home
                            </Link>
                            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">Services</div>
                            {serviceLinks.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md pl-6"
                                >
                                    <service.icon className="w-4 h-4 text-gray-400" />
                                    {service.name}
                                </Link>
                            ))}
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                                Contact
                            </Link>
                            <div className="pt-3 border-t border-gray-100 mt-3">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium"
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
