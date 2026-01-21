import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronDown, Monitor, Code, Briefcase, Printer, Network, Camera, Cpu, Server, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [plansOpen, setPlansOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

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

    const serviceLinks = [
        {
            name: 'Hardware / Desktop AMC',
            path: '/services/hardware',
            icon: <Monitor className="w-5 h-5" />,
            desc: 'Computer & laptop maintenance'
        },
        {
            name: 'Software Support',
            path: '/services/software',
            icon: <Code className="w-5 h-5" />,
            desc: 'Software solutions & support'
        },
        {
            name: 'Business',
            path: '/services/business',
            icon: <Briefcase className="w-5 h-5" />,
            desc: 'Business IT solutions'
        },
        {
            name: 'Printer',
            path: '/services/printer',
            icon: <Printer className="w-5 h-5" />,
            desc: 'Printer maintenance & support'
        },
        {
            name: 'Networking',
            path: '/services/networking',
            icon: <Network className="w-5 h-5" />,
            desc: 'Network setup & management'
        },
        {
            name: 'CCTV',
            path: '/services/cctv',
            icon: <Camera className="w-5 h-5" />,
            desc: 'CCTV installation & monitoring'
        },
    ];

    const planLinks = [
        {
            name: 'Basic Plan',
            path: '/plan/basic',
            icon: <Cpu className="w-5 h-5" />,
            desc: 'For Home Users'
        },
        {
            name: 'Standard Plan',
            path: '/plan/standard',
            icon: <Server className="w-5 h-5" />,
            desc: 'For Small Business'
        },
        {
            name: 'Premium Plan',
            path: '/plan/premium',
            icon: <Database className="w-5 h-5" />,
            desc: 'For Enterprise'
        },
    ];

    const isServiceActive = pathname.startsWith('/services');

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-white/95 backdrop-blur-md'
                    }`}
            >
                {/* Top Bar */}
                <div className="bg-slate-900 text-white py-2 px-4 hidden md:block">
                    <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                        <div className="flex items-center gap-6">
                            <span>📞 +91 9810443288</span>
                            <span>✉️ kkumar@uniotechit.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2.5 rounded-xl shadow-lg group-hover:shadow-primary-500/30 transition-all">
                                <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                                    AMC Pro
                                </span>
                                <p className="text-xs text-slate-500 -mt-1">IT Maintenance Experts</p>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.slice(0, 1).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${pathname === link.path
                                        ? 'text-primary-600'
                                        : 'text-slate-700 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div
                                className="relative group/idx"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 relative group ${isServiceActive
                                        ? 'text-primary-600'
                                        : 'text-slate-700 hover:text-primary-600'
                                        }`}
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${isServiceActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </button>

                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100/60 overflow-hidden backdrop-blur-xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/50" />
                                            <div className="relative p-6 grid grid-cols-2 gap-3">
                                                {serviceLinks.map((service) => (
                                                    <Link
                                                        key={service.name}
                                                        to={service.path}
                                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group hover:translate-x-1 hover:shadow-lg hover:shadow-slate-200/50 border border-transparent hover:border-slate-100 hover:bg-white ${pathname === service.path
                                                            ? 'bg-primary-50 shadow-inner'
                                                            : ''
                                                            }`}
                                                    >
                                                        <div className={`p-3 rounded-xl transition-all duration-300 shadow-sm ${pathname === service.path
                                                            ? 'bg-primary-600 text-white scale-110'
                                                            : 'bg-white text-slate-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-md ring-1 ring-slate-100 group-hover:ring-primary-600'
                                                            }`}>
                                                            {service.icon}
                                                        </div>
                                                        <div>
                                                            <span className={`font-bold block mb-1 text-base transition-colors duration-200 ${pathname === service.path
                                                                ? 'text-primary-700'
                                                                : 'text-slate-700 group-hover:text-primary-700'
                                                                }`}>
                                                                {service.name}
                                                            </span>
                                                            <span className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-slate-600">{service.desc}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="relative bg-slate-50/80 p-4 border-t border-slate-100 flex justify-end">
                                                <Link
                                                    to="/#plans"
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
                                                >
                                                    <span className="bg-primary-100 p-1 rounded-full group-hover/link:bg-primary-200 transition-colors">
                                                        <ShieldCheck className="w-4 h-4" />
                                                    </span>
                                                    View All Maintenance Plans
                                                    <ChevronDown className="w-4 h-4 -rotate-90 group-hover/link:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Plans Dropdown */}
                            <div
                                className="relative group/idx"
                                onMouseEnter={() => setPlansOpen(true)}
                                onMouseLeave={() => setPlansOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 relative group ${pathname.startsWith('/plan')
                                        ? 'text-primary-600'
                                        : 'text-slate-700 hover:text-primary-600'
                                        }`}
                                >
                                    Plans
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${plansOpen ? 'rotate-180' : ''}`} />
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${pathname.startsWith('/plan') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </button>

                                <AnimatePresence>
                                    {plansOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100/60 overflow-hidden backdrop-blur-xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/50" />
                                            <div className="relative p-3 space-y-1">
                                                {planLinks.map((plan) => (
                                                    <Link
                                                        key={plan.name}
                                                        to={plan.path}
                                                        className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-300 group hover:translate-x-1 hover:bg-slate-50 ${pathname === plan.path
                                                            ? 'bg-primary-50'
                                                            : ''
                                                            }`}
                                                    >
                                                        <div className={`p-2.5 rounded-xl transition-all duration-300 ${pathname === plan.path
                                                            ? 'bg-primary-600 text-white shadow-md'
                                                            : 'bg-white text-slate-500 shadow-sm ring-1 ring-slate-100 group-hover:bg-primary-600 group-hover:text-white group-hover:ring-primary-600 group-hover:shadow-md'
                                                            }`}>
                                                            {plan.icon}
                                                        </div>
                                                        <div>
                                                            <span className={`font-bold block text-sm mb-0.5 transition-colors ${pathname === plan.path
                                                                ? 'text-primary-700'
                                                                : 'text-slate-700 group-hover:text-primary-700'
                                                                }`}>
                                                                {plan.name}
                                                            </span>
                                                            <span className="text-xs text-slate-500 font-medium group-hover:text-slate-600">{plan.desc}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${pathname === link.path
                                        ? 'text-primary-600'
                                        : 'text-slate-700 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left transition-transform duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="ml-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-primary-500/30"
                            >
                                Get Free Quote
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg text-slate-700 hover:text-primary-600 hover:bg-slate-100 transition-colors"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                        >
                            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                                {navLinks.slice(0, 1).map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === link.path
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* Mobile Services */}
                                <div className="space-y-2">
                                    <span className="block px-4 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                        Services
                                    </span>
                                    {serviceLinks.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === service.path
                                                ? 'text-primary-600 bg-primary-50'
                                                : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            {service.icon}
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile Plans */}
                                <div className="space-y-2">
                                    <span className="block px-4 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                        Plans
                                    </span>
                                    {planLinks.map((plan) => (
                                        <Link
                                            key={plan.name}
                                            to={plan.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === plan.path
                                                ? 'text-primary-600 bg-primary-50'
                                                : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            {plan.icon}
                                            {plan.name}
                                        </Link>
                                    ))}
                                </div>

                                {navLinks.slice(1).map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === link.path
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-xl text-base font-semibold mt-4"
                                >
                                    Get Free Quote
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* Spacer for fixed navbar */}
            <div className="h-20 md:h-28" />
        </>
    );
};

export default Navbar;
