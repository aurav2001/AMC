import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Code, Settings, RefreshCw, Shield, Database, Cloud,
    CheckCircle, ArrowRight, Phone, Zap, Clock,
    Users, FileCode, Terminal, Layout, Bug
} from 'lucide-react';
import amcsImg from "../assets/amcs1.webp";
import WhyUs from '../components/WhyUs';
import BrandsSection from '../components/BrandsSection';

const services = [
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Operating System Support",
        description: "Complete OS installation, configuration, updates, and troubleshooting for Windows, macOS, and Linux.",
        features: ["Windows 10/11 support", "macOS maintenance", "Linux administration", "OS migration"]
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Antivirus & Security",
        description: "Enterprise-grade security solutions including antivirus, firewall configuration, and threat protection.",
        features: ["Antivirus deployment", "Firewall setup", "Threat monitoring", "Security updates"]
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Database Management",
        description: "Professional database installation, optimization, backup, and recovery services.",
        features: ["SQL Server support", "MySQL/PostgreSQL", "Backup automation", "Performance tuning"]
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "Cloud & Email Setup",
        description: "Microsoft 365, Google Workspace, and cloud platform configuration and support.",
        features: ["M365 deployment", "Email migration", "Cloud backup", "User management"]
    },
    {
        icon: <FileCode className="w-8 h-8" />,
        title: "Business Software",
        description: "Installation and support for accounting, ERP, CRM, and other business applications.",
        features: ["Tally/SAP support", "CRM setup", "ERP configuration", "License management"]
    },
    {
        icon: <Bug className="w-8 h-8" />,
        title: "Troubleshooting",
        description: "Expert diagnosis and resolution for software crashes, errors, and performance issues.",
        features: ["Error diagnosis", "Crash recovery", "Performance fixes", "Compatibility issues"]
    },
];

const softwareList = [
    { name: "Windows 10/11", category: "Operating System" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Tally Prime", category: "Accounting" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Kaspersky", category: "Security" },
    { name: "Adobe Suite", category: "Creative" },
    { name: "AutoCAD", category: "Design" },
    { name: "SAP", category: "ERP" },
];

const stats = [
    { value: "50+", label: "Software Supported" },
    { value: "1000+", label: "Installations Done" },
    { value: "99%", label: "Issue Resolution" },
    { value: "24/7", label: "Support Available" },
];

const Software = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-15"
                        style={{ backgroundImage: "url('/images/amcs2.webp')" }}
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-purple-300 text-sm font-medium mb-6">
                                <Code className="w-4 h-4" />
                                Software Support Services
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Complete <span className="text-purple-400">Software</span> Solutions
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                From operating systems to enterprise applications, we provide comprehensive software installation, configuration, and ongoing support for your business.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-lg"
                                >
                                    Get Support Now
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="tel:+919810443288"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    <Phone className="w-5 h-5" />
                                    +91 9810443288
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                <img
                                    src="/images/banner22.png"
                                    alt="Software Solutions"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-purple-100 p-3 rounded-xl">
                                            <Terminal className="w-8 h-8 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">1000+</div>
                                            <div className="text-slate-600">Installations Done</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white py-8 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary-600">{stat.value}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Software Services
                        </h2>
                        <p className="text-xl text-slate-600">
                            Expert software support tailored to your business requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl w-fit mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyUs />

            {/* Software AMC Images Gallery */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Software AMC Services
                        </h2>
                        <p className="text-xl text-slate-600">
                            Professional software maintenance and support for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src={amcsImg}
                                alt="Software Installation"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-lg">Software Installation</h3>
                                    <p className="text-purple-200 text-sm">OS & application setup</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="/images/banner111.png"
                                alt="Security Solutions"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-lg">Security Solutions</h3>
                                    <p className="text-indigo-200 text-sm">Antivirus & firewall</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="/images/banner1212.avif"
                                alt="System Updates"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/40 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-lg">System Updates</h3>
                                    <p className="text-violet-200 text-sm">Patches & upgrades</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="/images/AMC1.jpg"
                                alt="Technical Support"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/90 via-fuchsia-900/40 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-lg">Technical Support</h3>
                                    <p className="text-fuchsia-200 text-sm">24/7 expert help</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Supported Software */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Software We Support
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We provide expert support for a wide range of business and enterprise software solutions.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {softwareList.map((software, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <div>
                                            <span className="font-medium text-slate-800">{software.name}</span>
                                            <span className="text-xs text-slate-500 ml-2">{software.category}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 mt-6 text-sm">
                                And many more... Contact us for specific software requirements.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/banner111.png"
                                alt="Supported Software"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Our Software Support?
                        </h2>
                        <p className="text-xl text-slate-400">
                            Professional, reliable, and comprehensive software services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8">
                            <div className="bg-purple-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Fast Resolution</h3>
                            <p className="text-slate-400">Quick diagnosis and resolution of software issues to minimize downtime</p>
                        </div>
                        <div className="text-center p-8">
                            <div className="bg-purple-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                            <p className="text-slate-400">Certified professionals with years of experience in enterprise software</p>
                        </div>
                        <div className="text-center p-8">
                            <div className="bg-purple-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                            <p className="text-slate-400">Round-the-clock support for critical business applications</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands We Support */}
            <BrandsSection title="Software & Hardware Brands" subtitle="We provide expert support for all major brands and platforms." />

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Need Software Assistance?
                        </h2>
                        <p className="text-xl text-purple-100 mb-8">
                            Get expert help with installation, configuration, or troubleshooting today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/#plans"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-400 transition-all border-2 border-white/20"
                            >
                                View AMC Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Software;
