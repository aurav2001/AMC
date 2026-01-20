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
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.path
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isServiceActive
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                        }`}
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                                        >
                                            <div className="p-2">
                                                {serviceLinks.map((service) => (
                                                    <Link
                                                        key={service.name}
                                                        to={service.path}
                                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all ${pathname === service.path
                                                            ? 'bg-primary-50'
                                                            : 'hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className={`p-2.5 rounded-lg ${pathname === service.path
                                                            ? 'bg-primary-600 text-white'
                                                            : 'bg-slate-100 text-slate-600'
                                                            }`}>
                                                            {service.icon}
                                                        </div>
                                                        <div>
                                                            <span className={`font-semibold block ${pathname === service.path
                                                                ? 'text-primary-600'
                                                                : 'text-slate-800'
                                                                }`}>
                                                                {service.name}
                                                            </span>
                                                            <span className="text-sm text-slate-500">{service.desc}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="bg-slate-50 p-4 border-t border-slate-100">
                                                <Link
                                                    to="/#plans"
                                                    className="flex items-center justify-between text-sm font-medium text-slate-600 hover:text-primary-600"
                                                >
                                                    <span>View All AMC Plans</span>
                                                    <ChevronDown className="w-4 h-4 -rotate-90" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Plans Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setPlansOpen(true)}
                                onMouseLeave={() => setPlansOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname.startsWith('/plan')
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                        }`}
                                >
                                    Plans
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${plansOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {plansOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                                        >
                                            <div className="p-2">
                                                {planLinks.map((plan) => (
                                                    <Link
                                                        key={plan.name}
                                                        to={plan.path}
                                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all ${pathname === plan.path
                                                            ? 'bg-primary-50'
                                                            : 'hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className={`p-2.5 rounded-lg ${pathname === plan.path
                                                            ? 'bg-primary-600 text-white'
                                                            : 'bg-slate-100 text-slate-600'
                                                            }`}>
                                                            {plan.icon}
                                                        </div>
                                                        <div>
                                                            <span className={`font-semibold block ${pathname === plan.path
                                                                ? 'text-primary-600'
                                                                : 'text-slate-800'
                                                                }`}>
                                                                {plan.name}
                                                            </span>
                                                            <span className="text-sm text-slate-500">{plan.desc}</span>
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
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.path
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
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
