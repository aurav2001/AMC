import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Server,
    Monitor,
    Printer,
    HardDrive,
    Cpu,
    Wifi,
    Shield,
    Clock,
    Users,
    CheckCircle,
    ArrowRight,
    Wrench,
    Zap,
    HeadphonesIcon
} from 'lucide-react';

const Hardware = () => {
    const services = [
        {
            icon: Server,
            title: "Server Maintenance",
            description: "Complete server maintenance including hardware diagnostics, component replacement, performance optimization, and preventive care.",
            features: ["24/7 Monitoring", "Hardware Diagnostics", "Component Replacement", "Performance Tuning"]
        },
        {
            icon: Monitor,
            title: "Desktop & Workstation Support",
            description: "Comprehensive support for desktops and workstations including repairs, upgrades, and regular maintenance.",
            features: ["Hardware Repairs", "RAM & Storage Upgrades", "Display Solutions", "Peripheral Setup"]
        },
        {
            icon: Printer,
            title: "Printer & Peripheral Care",
            description: "Expert maintenance for printers, scanners, and all peripheral devices to ensure smooth operations.",
            features: ["Printer Servicing", "Scanner Maintenance", "Ink & Toner Management", "Network Printer Setup"]
        },
        {
            icon: HardDrive,
            title: "Storage Solutions",
            description: "Data storage solutions including NAS setup, RAID configuration, backup systems, and data recovery services.",
            features: ["NAS Configuration", "RAID Setup", "Backup Solutions", "Data Recovery"]
        },
        {
            icon: Cpu,
            title: "Component Upgrades",
            description: "Hardware upgrades to boost performance including CPU, RAM, SSD, and graphics card installations.",
            features: ["CPU Upgrades", "Memory Expansion", "SSD Installation", "GPU Upgrades"]
        },
        {
            icon: Wifi,
            title: "Network Hardware",
            description: "Network infrastructure setup and maintenance including routers, switches, access points, and cabling.",
            features: ["Router Configuration", "Switch Management", "Access Point Setup", "Structured Cabling"]
        }
    ];

    const benefits = [
        { icon: Shield, title: "Extended Equipment Life", description: "Regular maintenance extends the lifespan of your hardware investments." },
        { icon: Clock, title: "Minimized Downtime", description: "Proactive care prevents unexpected breakdowns and costly interruptions." },
        { icon: Users, title: "Expert Technicians", description: "Our certified technicians handle all major hardware brands and models." },
        { icon: Zap, title: "Quick Response", description: "Fast turnaround times for repairs and emergency support." }
    ];

    const brands = [
        "Dell", "HP", "Lenovo", "ASUS", "Acer", "Apple", "Microsoft", "Cisco",
        "Netgear", "TP-Link", "Epson", "Canon", "Brother", "Samsung", "LG"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            Hardware Services
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Hardware</span> Support
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                            Keep your IT infrastructure running at peak performance with our comprehensive hardware maintenance and support services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/plan/hardware-amc" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
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
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Hardware Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            From servers to peripherals, we provide complete hardware support for your business.
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
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

            {/* Benefits Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Hardware Services?</h2>
                        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                            We deliver exceptional value with our expert hardware support solutions.
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
                                <p className="text-blue-100">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Brands */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Brands We Support</h2>
                        <p className="text-lg text-slate-600">Expert service for all major hardware brands.</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {brands.map((brand, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-6 py-3 bg-white rounded-full text-slate-700 font-medium shadow-md border border-slate-100 hover:border-blue-300 hover:shadow-lg transition"
                            >
                                {brand}
                            </motion.span>
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
                        <Wrench className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Optimize Your Hardware?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let our experts ensure your hardware runs smoothly. Contact us today for a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
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

export default Hardware;
