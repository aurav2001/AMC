import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Check, X, Send, Cpu, Server, Database, Loader2, Monitor, Shield, Clock, Users, Wrench, HardDrive, Wifi, Settings, Phone, Mail, Award, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import amc12 from "../assets/amc12.jpg";
import ComparisonTable from '../components/ComparisonTable';

// Plan-specific feature details for fallback images and text
const planFeatureDetails = {
    basic: {
        highlights: [
            { icon: <Monitor className="w-6 h-6" />, title: "Desktop Support", desc: "Complete desktop and laptop maintenance" },
            { icon: <Shield className="w-6 h-6" />, title: "Antivirus Protection", desc: "Installation & regular updates" },
            { icon: <Clock className="w-6 h-6" />, title: "Business Hours", desc: "9 AM - 6 PM support coverage" },
            { icon: <Wrench className="w-6 h-6" />, title: "2 Preventive Visits", desc: "Scheduled maintenance visits yearly" },
        ],
        images: [
            { src: amc12, alt: "Desktop Computer Support" },
            { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", alt: "Software Installation" },
            { src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80", alt: "Hardware Maintenance" },
            { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", alt: "System Diagnostics" },
        ],
        bestFor: "Home users, freelancers, and small office setups with 1-5 computers"
    },
    standard: {
        highlights: [
            { icon: <Server className="w-6 h-6" />, title: "Network Support", desc: "LAN/Wi-Fi setup and troubleshooting" },
            { icon: <HardDrive className="w-6 h-6" />, title: "Data Backup", desc: "Automated backup configuration" },
            { icon: <Users className="w-6 h-6" />, title: "Priority Support", desc: "24/7 priority response" },
            { icon: <Settings className="w-6 h-6" />, title: "4 Preventive Visits", desc: "Quarterly maintenance visits" },
        ],
        images: [
            { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", alt: "Network Infrastructure" },
            { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Office IT Setup" },
            { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", alt: "Server Configuration" },
            { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", alt: "Data Backup Solutions" },
        ],
        bestFor: "Small to medium businesses with 5-20 workstations and network requirements"
    },
    premium: {
        highlights: [
            { icon: <Database className="w-6 h-6" />, title: "Server Management", desc: "Windows/Linux server maintenance" },
            { icon: <Shield className="w-6 h-6" />, title: "Security Audit", desc: "Firewall and security assessments" },
            { icon: <Wifi className="w-6 h-6" />, title: "Unlimited Visits", desc: "On-demand support whenever needed" },
            { icon: <Users className="w-6 h-6" />, title: "Dedicated Manager", desc: "Personal account manager assigned" },
        ],
        images: [
            { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", alt: "Server Room Management" },
            { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", alt: "Enterprise Security" },
            { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", alt: "Cloud Infrastructure" },
            { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", alt: "24/7 Monitoring" },
        ],
        bestFor: "Enterprises and large organizations requiring comprehensive IT infrastructure management"
    }
};

const PlanDetails = () => {
    const { id } = useParams();
    const { content } = useContent();
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("idle");

    // Identify plan and service category
    let plan = location.state?.cardData;
    let serviceCategory = null;

    const findServiceForPlan = (planTitle) => {
        const services = ['networking', 'hardware', 'software', 'printer', 'cctv', 'business'];
        for (const service of services) {
            const found = content[service]?.pricingCards?.find(c =>
                c.title === planTitle ||
                c.title.toLowerCase().replace(/\s+/g, '-') === id
            );
            if (found) return service;
        }
        return null; // Return null if not found
    };

    if (!plan && content.plans?.[id]) {
        plan = content.plans[id];
    }

    if (!plan) {
        // Search in all services
        const services = ['networking', 'hardware', 'software', 'printer', 'cctv', 'business'];
        for (const service of services) {
            const found = content[service]?.pricingCards?.find(c =>
                c.title.toLowerCase().replace(/\s+/g, '-') === id
            );
            if (found) {
                plan = found;
                serviceCategory = service;
                if (!plan.description) plan.description = `${plan.title} for ${service} solutions.`;
                if (!plan.detailedDescription) plan.detailedDescription = plan.description;
                if (!plan.inclusions) plan.inclusions = plan.features;
                break;
            }
        }
    } else {
        // If plan passed via state, find service category
        serviceCategory = findServiceForPlan(plan.title);
    }

    // UPDATED: No fallback to 'basic' if ID doesn't match
    const featureDetails = planFeatureDetails[id] || {};

    if (!plan) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Plan Not Found</h2>
                    <Link to="/" className="text-primary-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const object = {
            ...formData,
            plan_name: plan.name || plan.title,
            plan_price: plan.price,
            access_key: "a0d2d69e-2cb3-44fd-a279-23dfcd46f457",
            subject: `New Enquiry for ${plan.name} (${plan.price})`,
            from_name: "Website Enquiry System"
        };
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const resData = await res.json();
            if (resData.success) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
                setTimeout(() => setShowModal(false), 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const comparisonTableData = serviceCategory ? content[serviceCategory]?.comparisonTable : null;

    return (
        <div className="min-h-screen bg-white">
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setShowModal(false);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative overflow-hidden"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-slate-500" />
                            </button>

                            <div className="text-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Enquire Now</h3>
                                <p className="text-slate-600 mt-2">Get detailed information about {plan.title || plan.name}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="I'm interested in..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Enquiry
                                        </>
                                    )}
                                </button>
                                {status === "success" && (
                                    <p className="text-green-600 text-sm text-center font-medium bg-green-50 py-2 rounded-lg">
                                        Enquiry sent successfully! We'll contact you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 text-sm text-center font-medium bg-red-50 py-2 rounded-lg">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 pt-24 lg:pt-32">

                <nav className="flex text-sm text-slate-500 mb-8">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-medium truncate">{plan.title || plan.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm relative group">
                            {plan.image || featureDetails.images?.[0]?.src ? (
                                <img
                                    src={plan.image || featureDetails.images[0].src}
                                    alt={plan.title}
                                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-400">
                                    <Monitor className="w-24 h-24 opacity-20" />
                                    <span className="ml-2 text-sm">No Image Available</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">
                                {plan.title || plan.name}
                            </h1>

                            <div className="flex items-baseline gap-4 mt-4">
                                {plan.originalPrice && (
                                    <span className="text-xl text-red-500 font-medium line-through decoration-red-500/60">
                                        Rs{plan.originalPrice}/-
                                    </span>
                                )}

                                <span className="text-3xl lg:text-4xl font-extrabold text-[#facc15] underline decoration-[#facc15] underline-offset-4">
                                    Rs {plan.price || 'Ask'}/-
                                </span>
                            </div>

                            <p className="text-slate-600 font-medium mt-3 text-lg border-b pb-4 border-slate-100">
                                {plan.description || "Comprehensive AMC services for your business."}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-normal text-slate-800 mb-4 border-b border-slate-200 pb-2 inline-block">
                                Description
                            </h3>

                            {/* Annual Price Selection Block */}
                            <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-4 mb-8 flex items-center justify-between min-h-[100px]">
                                <div className="pl-4">
                                    <div className="w-6 h-6 rounded-full border-2 border-slate-200 bg-slate-50"></div>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm border border-slate-100 py-2 px-6 text-center">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Annual Price</div>
                                    <div className="text-3xl font-bold text-slate-900">
                                        {plan.price ? plan.price.replace(/[^0-9]/g, '') : '0'}
                                    </div>
                                </div>
                            </div>

                            <div className="text-slate-600 space-y-2 leading-relaxed">
                                {plan.features && plan.features.length > 0 ? (
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="block">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{plan.detailedDescription}</p>
                                )}
                            </div>

                            <div className="mt-8 text-sm text-slate-500 space-y-4">
                                <p>
                                    24 X 7 X 365 of UNLIMITED Support & repair services across India.
                                </p>
                                <p>
                                    Repair & Support services for your HOME PC or Mac are included. Advise and help with virus/spyware issues Included, Support for MS Office, Home applications Included, Help in email Configuration & Troubleshooting is included. Regular computer optimization, repair & maintenance are included. Configure wifi at home and share files included; Help you install printer, scanner and shared devices Included.
                                </p>
                            </div>

                            <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 uppercase tracking-wide"
                                >
                                    Enquire Now
                                </button>
                                <Link
                                    to="/#plans"
                                    className="px-8 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wide"
                                >
                                    View All Plans
                                </Link>
                            </div>

                            {/* Best For Section - Only show if data exists */}
                            {featureDetails.bestFor && (
                                <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                                    <h4 className="font-bold text-indigo-900 mb-1">Recommended For</h4>
                                    <p className="text-indigo-700">{featureDetails.bestFor}</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </main>

            {comparisonTableData && (
                <div className="bg-slate-50 border-t border-slate-200 mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <ComparisonTable data={comparisonTableData} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlanDetails;
