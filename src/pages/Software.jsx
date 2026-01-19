import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Code, Settings, RefreshCw, Shield, Database, Cloud,
    CheckCircle, ArrowRight, Phone, Zap, Clock,
    Users, FileCode, Terminal, Layout, Bug, Star, Award, Sparkles, Layers
} from 'lucide-react';
import amcsImg from "../assets/amcs1.webp";
import WhyUs from '../components/WhyUs';
import BrandsSection from '../components/BrandsSection';

const services = [
    {
        icon: <Settings className="w-10 h-10" />,
        title: "Operating System Support",
        description: "Complete OS installation, configuration, updates, and troubleshooting for Windows, macOS, and Linux.",
        features: ["Windows 10/11 support", "macOS maintenance", "Linux administration", "OS migration"],
        gradient: "from-violet-500 to-purple-500",
        iconBg: "bg-gradient-to-br from-violet-500 to-purple-600"
    },
    {
        icon: <Shield className="w-10 h-10" />,
        title: "Antivirus & Security",
        description: "Enterprise-grade security solutions including antivirus, firewall configuration, and threat protection.",
        features: ["Antivirus deployment", "Firewall setup", "Threat monitoring", "Security updates"],
        gradient: "from-rose-500 to-red-500",
        iconBg: "bg-gradient-to-br from-rose-500 to-red-600"
    },
    {
        icon: <Database className="w-10 h-10" />,
        title: "Database Management",
        description: "Professional database installation, optimization, backup, and recovery services.",
        features: ["SQL Server support", "MySQL/PostgreSQL", "Backup automation", "Performance tuning"],
        gradient: "from-emerald-500 to-teal-500",
        iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
        icon: <Cloud className="w-10 h-10" />,
        title: "Cloud & Email Setup",
        description: "Microsoft 365, Google Workspace, and cloud platform configuration and support.",
        features: ["M365 deployment", "Email migration", "Cloud backup", "User management"],
        gradient: "from-sky-500 to-blue-500",
        iconBg: "bg-gradient-to-br from-sky-500 to-blue-600"
    },
    {
        icon: <FileCode className="w-10 h-10" />,
        title: "Business Software",
        description: "Installation and support for accounting, ERP, CRM, and other business applications.",
        features: ["Tally/SAP support", "CRM setup", "ERP configuration", "License management"],
        gradient: "from-amber-500 to-orange-500",
        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
        icon: <Bug className="w-10 h-10" />,
        title: "Troubleshooting",
        description: "Expert diagnosis and resolution for software crashes, errors, and performance issues.",
        features: ["Error diagnosis", "Crash recovery", "Performance fixes", "Compatibility issues"],
        gradient: "from-fuchsia-500 to-pink-500",
        iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600"
    },
];

const softwareList = [
    { name: "Windows 10/11", category: "Operating System", icon: "🪟" },
    { name: "Microsoft 365", category: "Productivity", icon: "📊" },
    { name: "Tally Prime", category: "Accounting", icon: "💰" },
    { name: "QuickBooks", category: "Accounting", icon: "📒" },
    { name: "Kaspersky", category: "Security", icon: "🛡️" },
    { name: "Adobe Suite", category: "Creative", icon: "🎨" },
    { name: "AutoCAD", category: "Design", icon: "📐" },
    { name: "SAP", category: "ERP", icon: "🏢" },
];

const stats = [
    { value: "50+", label: "Software Supported", icon: <Layers className="w-6 h-6" /> },
    { value: "1000+", label: "Installations Done", icon: <Settings className="w-6 h-6" /> },
    { value: "99%", label: "Issue Resolution", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
];

const Software = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section - Professional Design */}
            <section className="relative bg-slate-900 text-white py-28 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Floating Code Elements Removed for cleaner look */}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full text-fuchsia-300 text-sm font-medium mb-6 border border-fuchsia-500/30">
                                <Code className="w-4 h-4" />
                                Software Support Services
                                <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">Expert</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Complete <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Software</span> Solutions
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                From operating systems to enterprise applications, we provide comprehensive software installation, configuration, and ongoing support for your business.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm">Top Rated</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <Terminal className="w-5 h-5 text-purple-400" />
                                    <span className="text-sm">50+ Software</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <Zap className="w-5 h-5 text-amber-400" />
                                    <span className="text-sm">Fast Support</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-fuchsia-600 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                                >
                                    Get Support Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+919810443288"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
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
                                {/* Decorative Ring Removed */}
                                <img
                                    src="/images/banner22.png"
                                    alt="Software Solutions"
                                    className="relative rounded-3xl shadow-2xl border border-white/10"
                                />
                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-purple-500 to-fuchsia-500 p-4 rounded-xl shadow-lg">
                                            <Terminal className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-slate-900">1000+</div>
                                            <div className="text-slate-600">Installations Done</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Support Card */}
                                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-4 shadow-2xl text-white">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-6 h-6" />
                                        <div>
                                            <div className="font-bold">Security First</div>
                                            <div className="text-xs text-purple-200">Enterprise Grade</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar - Gradient Cards */}
            <section className="py-12 bg-white border-b border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-fuchsia-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">{stat.value}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid - Premium Cards */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-40 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-20 left-0 w-80 h-80 bg-fuchsia-100 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                            <Code className="w-4 h-4" />
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Software <span className="text-purple-600">Solutions</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Expert software support tailored to your business requirements
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Gradient Top Border */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

                                <div className={`${service.iconBg} text-white p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-3 h-3 text-green-600" />
                                            </div>
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

            {/* Software AMC Images Gallery - Enhanced */}
            <section className="py-24 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                            <Layout className="w-4 h-4" />
                            Service Gallery
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our Software <span className="text-purple-600">AMC Services</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Professional software maintenance and support for your business
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <img
                                src={amcsImg}
                                alt="Software Installation"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent flex items-end p-6">
                                <div>
                                    <div className="bg-purple-500/30 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                        <Settings className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl">Software Installation</h3>
                                    <p className="text-purple-200 text-sm">OS & application setup</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <img
                                src="/images/banner111.png"
                                alt="Security Solutions"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-transparent flex items-end p-6">
                                <div>
                                    <div className="bg-indigo-500/30 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl">Security Solutions</h3>
                                    <p className="text-indigo-200 text-sm">Antivirus & firewall</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <img
                                src="/images/banner1212.avif"
                                alt="System Updates"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-900 via-violet-900/50 to-transparent flex items-end p-6">
                                <div>
                                    <div className="bg-violet-500/30 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                        <RefreshCw className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl">System Updates</h3>
                                    <p className="text-violet-200 text-sm">Patches & upgrades</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <img
                                src="/images/AMC1.jpg"
                                alt="Technical Support"
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900 via-fuchsia-900/50 to-transparent flex items-end p-6">
                                <div>
                                    <div className="bg-fuchsia-500/30 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl">Technical Support</h3>
                                    <p className="text-fuchsia-200 text-sm">24/7 expert help</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Supported Software - Enhanced */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                                <Layers className="w-4 h-4" />
                                Supported Software
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Software We <span className="text-purple-600">Support</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10">
                                We provide expert support for a wide range of business and enterprise software solutions.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {softwareList.map((software, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all group"
                                    >
                                        <span className="text-2xl">{software.icon}</span>
                                        <div>
                                            <span className="font-semibold text-slate-800 block">{software.name}</span>
                                            <span className="text-xs text-purple-600">{software.category}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-slate-500 mt-8 text-sm flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-purple-500" />
                                And many more... Contact us for specific software requirements.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-20" />
                            <img
                                src="/images/banner111.png"
                                alt="Supported Software"
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section - Premium Cards */}
            <section className="py-24 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-fuchsia-300 text-sm font-medium mb-4 border border-fuchsia-500/30">
                            <Award className="w-4 h-4" />
                            Why Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Software Support?</span>
                        </h2>
                        <p className="text-xl text-slate-400">
                            Professional, reliable, and comprehensive software services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Zap className="w-10 h-10" />, title: "Fast Resolution", desc: "Quick diagnosis and resolution of software issues to minimize downtime", gradient: "from-amber-500 to-orange-500" },
                            { icon: <Users className="w-10 h-10" />, title: "Expert Team", desc: "Certified professionals with years of experience in enterprise software", gradient: "from-purple-500 to-fuchsia-500" },
                            { icon: <Clock className="w-10 h-10" />, title: "24/7 Support", desc: "Round-the-clock support for critical business applications", gradient: "from-cyan-500 to-blue-500" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                            >
                                <div className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands We Support */}
            <BrandsSection title="Software & Hardware Brands" subtitle="We provide expert support for all major brands and platforms." />

            {/* CTA Section - Premium Design */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 rounded-[2rem] p-12 md:p-16 text-white overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-400/20 rounded-full blur-2xl" />
                        <div className="absolute top-1/2 left-1/4 text-white/5 text-8xl font-mono">&lt;/&gt;</div>

                        <div className="relative text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                Get Started Today
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Need Software Assistance?
                            </h2>
                            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                                Get expert help with installation, configuration, or troubleshooting today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold hover:bg-purple-50 transition-all shadow-lg"
                                >
                                    Contact Us
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/#plans"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
                                >
                                    View AMC Plans
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Software;
