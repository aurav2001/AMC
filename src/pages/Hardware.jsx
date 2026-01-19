import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Monitor, Laptop, Server, HardDrive, Cpu, Wrench,
    CheckCircle, ArrowRight, Phone, Shield, Clock,
    Users, Zap, Settings, RefreshCw
} from 'lucide-react';
import WhyUs from '../components/WhyUs';
import BrandsSection from '../components/BrandsSection';
import sf1 from '../assets/sf1.jpg';

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Desktop Computer AMC",
        description: "Complete maintenance for desktop PCs including hardware diagnostics, cleaning, and performance optimization.",
        features: ["Hardware diagnostics", "Dust cleaning", "Component upgrades", "Performance tuning"]
    },
    {
        icon: <Laptop className="w-8 h-8" />,
        title: "Laptop Maintenance",
        description: "Professional laptop care including battery health, thermal management, and screen calibration.",
        features: ["Battery optimization", "Thermal paste replacement", "Keyboard cleaning", "Screen care"]
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: "Server Maintenance",
        description: "Enterprise-grade server support including RAID management, backup systems, and uptime monitoring.",
        features: ["RAID configuration", "Backup management", "24/7 monitoring", "Disaster recovery"]
    },
    {
        icon: <HardDrive className="w-8 h-8" />,
        title: "Storage Solutions",
        description: "Complete storage device management including HDD/SSD health monitoring and data recovery.",
        features: ["SSD optimization", "Data migration", "Health monitoring", "Recovery services"]
    },
];

const benefits = [
    { icon: <Shield className="w-6 h-6" />, title: "Extended Lifespan", desc: "Regular maintenance extends hardware life by 40%" },
    { icon: <Zap className="w-6 h-6" />, title: "Peak Performance", desc: "Keep your systems running at optimal speed" },
    { icon: <Clock className="w-6 h-6" />, title: "Minimize Downtime", desc: "Proactive maintenance prevents costly failures" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Support", desc: "Certified technicians at your service" },
];

const processSteps = [
    { step: "01", title: "Assessment", desc: "Complete hardware audit and health check" },
    { step: "02", title: "Planning", desc: "Custom maintenance schedule creation" },
    { step: "03", title: "Execution", desc: "Regular preventive maintenance visits" },
    { step: "04", title: "Reporting", desc: "Detailed reports and recommendations" },
];

const Hardware = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: "url('/images/banner1212.avif')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/20 rounded-full text-primary-400 text-sm font-medium mb-6">
                                <Monitor className="w-4 h-4" />
                                Hardware AMC Services
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Desktop & Laptop <span className="text-primary-400">Maintenance</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Keep your computers running at peak performance with our comprehensive hardware AMC services. From desktops to enterprise servers, we've got you covered.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg"
                                >
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="tel:+919810443288"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now
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
                                    src={sf1}
                                    alt="Hardware Maintenance"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-100 p-3 rounded-xl">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">500+</div>
                                            <div className="text-slate-600">Systems Maintained</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Hardware Services
                        </h2>
                        <p className="text-xl text-slate-600">
                            Comprehensive maintenance solutions for all your hardware needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="bg-primary-100 text-primary-600 p-4 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                        <p className="text-slate-600 mb-4">{service.description}</p>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyUs />

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Why Choose Our Hardware AMC?
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Protect your investment and maximize productivity with our expert hardware maintenance services.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="bg-primary-100 text-primary-600 p-3 rounded-xl">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                                            <p className="text-sm text-slate-600">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src= {sf1}
                                alt="Hardware Benefits"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Maintenance Process
                        </h2>
                        <p className="text-xl text-slate-400">
                            A systematic approach to keeping your hardware in top condition
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold text-primary-500 mb-4">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands We Support */}
            <BrandsSection />

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Protect Your Hardware?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Get a customized AMC plan for your desktop, laptop, or server infrastructure today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg"
                            >
                                Request Quote
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/#plans"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-400 transition-all border-2 border-white/20"
                            >
                                View Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hardware;
