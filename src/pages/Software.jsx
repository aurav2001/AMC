import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code,
    Database,
    Cloud,
    Lock,
    RefreshCw,
    Settings,
    Shield,
    Clock,
    Users,
    CheckCircle,
    ArrowRight,
    Laptop,
    Zap,
    HeadphonesIcon,
    FileCode,
    Globe
} from 'lucide-react';

const Software = () => {
    const services = [
        {
            icon: Code,
            title: "Software Installation & Setup",
            description: "Professional installation and configuration of business software, ensuring optimal settings and compatibility.",
            features: ["OS Installation", "Application Setup", "License Management", "Configuration Optimization"]
        },
        {
            icon: RefreshCw,
            title: "Updates & Patch Management",
            description: "Keep your software secure and up-to-date with our comprehensive patch management services.",
            features: ["Security Patches", "Feature Updates", "Compatibility Testing", "Rollback Support"]
        },
        {
            icon: Lock,
            title: "Security Software",
            description: "Implementation and management of antivirus, firewall, and endpoint protection solutions.",
            features: ["Antivirus Management", "Firewall Configuration", "Threat Detection", "Security Audits"]
        },
        {
            icon: Database,
            title: "Database Management",
            description: "Database installation, optimization, backup, and maintenance for reliable data management.",
            features: ["DB Installation", "Performance Tuning", "Backup Solutions", "Data Migration"]
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description: "Cloud software deployment, migration, and management for modern business operations.",
            features: ["Cloud Migration", "SaaS Setup", "Integration Services", "Cloud Backup"]
        },
        {
            icon: Settings,
            title: "System Optimization",
            description: "Performance tuning and optimization to ensure your systems run at peak efficiency.",
            features: ["Performance Analysis", "Resource Optimization", "Startup Management", "Disk Cleanup"]
        }
    ];

    const technologies = [
        { name: "Windows Server", category: "Operating Systems" },
        { name: "Linux", category: "Operating Systems" },
        { name: "Microsoft 365", category: "Productivity" },
        { name: "Google Workspace", category: "Productivity" },
        { name: "SQL Server", category: "Database" },
        { name: "MySQL", category: "Database" },
        { name: "Azure", category: "Cloud" },
        { name: "AWS", category: "Cloud" },
        { name: "VMware", category: "Virtualization" },
        { name: "Hyper-V", category: "Virtualization" },
        { name: "Tally", category: "Business" },
        { name: "SAP", category: "Business" }
    ];

    const benefits = [
        { icon: Shield, title: "Enhanced Security", description: "Protect your business from cyber threats with updated software." },
        { icon: Clock, title: "Improved Efficiency", description: "Optimized software means faster operations and productivity." },
        { icon: Users, title: "Expert Support", description: "Access to skilled technicians for all your software needs." },
        { icon: Zap, title: "Reduced Costs", description: "Prevent expensive downtime with proactive software maintenance." }
    ];

    const solutions = [
        {
            icon: Laptop,
            title: "Endpoint Management",
            description: "Centralized management of all endpoint software across your organization."
        },
        {
            icon: FileCode,
            title: "Custom Software Support",
            description: "Support for industry-specific and custom-developed applications."
        },
        {
            icon: Globe,
            title: "Remote Support",
            description: "Quick remote assistance for software issues without on-site visits."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                            Software Services
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Software</span> Solutions
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                            From installation to optimization, we handle all your software needs to keep your business running smoothly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/plan/software-amc" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition">
                                View AMC Plans
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Software Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Comprehensive software support to maximize your technology investments.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Solutions */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Additional Solutions</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Beyond standard services, we offer specialized software solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-8"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <solution.icon className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                                <p className="text-slate-600">{solution.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Software Services?</h2>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            We ensure your software ecosystem works seamlessly for your business.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-purple-100">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies We Support</h2>
                        <p className="text-lg text-slate-600">Expert support for a wide range of software platforms.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-white rounded-xl p-4 text-center shadow-md border border-slate-100 hover:border-purple-300 hover:shadow-lg transition"
                            >
                                <span className="font-semibold text-slate-800">{tech.name}</span>
                                <p className="text-xs text-slate-500 mt-1">{tech.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl"
                    >
                        <Code className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Streamline Your Software?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let us handle your software management so you can focus on growing your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition">
                                <HeadphonesIcon className="w-5 h-5" /> Contact Us
                            </Link>
                            <a href="tel:+919810443288" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
                                Call: +91 98104 43288
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Software;
