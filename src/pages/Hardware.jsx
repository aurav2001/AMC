import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Monitor, Laptop, Server, HardDrive, Cpu, Wrench,
    CheckCircle, ArrowRight, Phone, Shield, Clock,
    Users, Zap, Settings, RefreshCw, Star, Award, Sparkles
} from 'lucide-react';
import WhyUs from '../components/WhyUs';
import BrandsSection from '../components/BrandsSection';
import sf1 from '../assets/sf1.jpg';

const services = [
    {
        icon: <Monitor className="w-10 h-10" />,
        title: "Desktop Computer AMC",
        description: "Complete maintenance for desktop PCs including hardware diagnostics, cleaning, and performance optimization.",
        features: ["Hardware diagnostics", "Dust cleaning", "Component upgrades", "Performance tuning"],
        gradient: "from-blue-500 to-cyan-500",
        iconBg: "bg-blue-500"
    },
    {
        icon: <Laptop className="w-10 h-10" />,
        title: "Laptop Maintenance",
        description: "Professional laptop care including battery health, thermal management, and screen calibration.",
        features: ["Battery optimization", "Thermal paste replacement", "Keyboard cleaning", "Screen care"],
        gradient: "from-purple-500 to-pink-500",
        iconBg: "bg-purple-500"
    },
    {
        icon: <Server className="w-10 h-10" />,
        title: "Server Maintenance",
        description: "Enterprise-grade server support including RAID management, backup systems, and uptime monitoring.",
        features: ["RAID configuration", "Backup management", "24/7 monitoring", "Disaster recovery"],
        gradient: "from-emerald-500 to-teal-500",
        iconBg: "bg-emerald-500"
    },
    {
        icon: <HardDrive className="w-10 h-10" />,
        title: "Storage Solutions",
        description: "Complete storage device management including HDD/SSD health monitoring and data recovery.",
        features: ["SSD optimization", "Data migration", "Health monitoring", "Recovery services"],
        gradient: "from-orange-500 to-red-500",
        iconBg: "bg-orange-500"
    },
];

const benefits = [
    { icon: <Shield className="w-7 h-7" />, title: "Extended Lifespan", desc: "Regular maintenance extends hardware life by 40%", stat: "40%" },
    { icon: <Zap className="w-7 h-7" />, title: "Peak Performance", desc: "Keep your systems running at optimal speed", stat: "99%" },
    { icon: <Clock className="w-7 h-7" />, title: "Minimize Downtime", desc: "Proactive maintenance prevents costly failures", stat: "2hrs" },
    { icon: <Users className="w-7 h-7" />, title: "Expert Support", desc: "Certified technicians at your service", stat: "10+" },
];

const processSteps = [
    { step: "01", title: "Assessment", desc: "Complete hardware audit and health check", icon: <Settings className="w-6 h-6" /> },
    { step: "02", title: "Planning", desc: "Custom maintenance schedule creation", icon: <Cpu className="w-6 h-6" /> },
    { step: "03", title: "Execution", desc: "Regular preventive maintenance visits", icon: <Wrench className="w-6 h-6" /> },
    { step: "04", title: "Reporting", desc: "Detailed reports and recommendations", icon: <RefreshCw className="w-6 h-6" /> },
];

const Hardware = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section - Professional Design */}
            <section className="relative bg-slate-900 text-white py-28 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30">
                                <Monitor className="w-4 h-4" />
                                Hardware AMC Services
                                <span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">Premium</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Desktop & Laptop <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Maintenance</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Keep your computers running at peak performance with our comprehensive hardware AMC services. From desktops to enterprise servers, we've got you covered.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <Award className="w-5 h-5 text-cyan-400" />
                                    <span className="text-sm">10+ Years</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <Users className="w-5 h-5 text-green-400" />
                                    <span className="text-sm">500+ Clients</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                                >
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+919810443288"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
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
                                {/* Decorative Ring Removed for cleaner look */}
                                <img
                                    src={sf1}
                                    alt="Hardware Maintenance"
                                    className="relative rounded-3xl shadow-2xl border border-white/10"
                                />
                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-xl shadow-lg">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-slate-900">500+</div>
                                            <div className="text-slate-600">Systems Maintained</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Support Card */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-2xl text-white">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-6 h-6" />
                                        <div>
                                            <div className="font-bold">24/7 Support</div>
                                            <div className="text-xs text-cyan-100">Always Available</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid - Card Style */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            <Cpu className="w-4 h-4" />
                            Hardware Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            What We <span className="text-primary-600">Maintain</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Comprehensive maintenance solutions for all your hardware needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-transparent transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Gradient Border on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} style={{ padding: '2px' }}>
                                    <div className="bg-white h-full w-full rounded-3xl" />
                                </div>

                                <div className="relative flex items-start gap-6">
                                    <div className={`${service.iconBg} text-white p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                        <p className="text-slate-600 mb-6">{service.description}</p>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <CheckCircle className="w-3 h-3 text-green-600" />
                                                    </div>
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

            {/* Benefits Section - Gradient Cards */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                                <Award className="w-4 h-4" />
                                Why Choose Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Benefits of Our <span className="text-primary-600">Hardware AMC</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10">
                                Protect your investment and maximize productivity with our expert hardware maintenance services.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {benefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all group"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="bg-gradient-to-br from-primary-500 to-blue-600 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                                {benefit.icon}
                                            </div>
                                            <span className="text-2xl font-bold text-primary-600">{benefit.stat}</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-slate-600">{benefit.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
                            <img
                                src={sf1}
                                alt="Hardware Benefits"
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section - Timeline Style */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-cyan-300 text-sm font-medium mb-4 border border-cyan-500/30">
                            <RefreshCw className="w-4 h-4" />
                            Our Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            How We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Work</span>
                        </h2>
                        <p className="text-xl text-slate-400">
                            A systematic approach to keeping your hardware in top condition
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative text-center group"
                            >
                                {/* Connector Line */}
                                {idx < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
                                )}

                                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <div className="text-5xl font-bold text-cyan-500/30 mb-2">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-slate-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands We Support */}
            <BrandsSection />

            {/* CTA Section - Premium Design */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-[2rem] p-12 md:p-16 text-white overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl" />

                        <div className="relative text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4" />
                                Get Started Today
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Protect Your Hardware?
                            </h2>
                            <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
                                Get a customized AMC plan for your desktop, laptop, or server infrastructure today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-all shadow-lg"
                                >
                                    Request Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/#plans"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
                                >
                                    View Plans
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Hardware;
