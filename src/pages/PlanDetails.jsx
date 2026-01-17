import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Send, Cpu, Server, Database, Loader2, Shield, Award, Users, Headphones, Wrench, Settings, Network, MonitorCog } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { plans } from '../data/plans';
import networkConfigImg from '../assets/network_config.png';
import desktopEngineerImg from '../assets/desktop_engineer.png';

const iconMap = {
    Cpu: <Cpu className="w-16 h-16 text-blue-500" />,
    Server: <Server className="w-16 h-16 text-indigo-500" />,
    Database: <Database className="w-16 h-16 text-purple-500" />,
};

const PlanDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("idle");

    const plan = plans.find(p => p.id === id);

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

        // We combine User Data + Fixed Plan Data
        const object = {
            ...formData,
            // These values are hardcoded from the selected plan
            plan_name: plan.name,
            plan_price: plan.price,
            plan_period: plan.period,
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

            const result = await res.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
                setTimeout(() => {
                    setShowModal(false);
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.log(error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Banner Section */}
            <div className={`relative bg-gradient-to-br ${plan.gradient} py-16 px-4 mb-12`}>
                <div className="max-w-7xl mx-auto">
                    <Link to="/#plans" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 group font-medium">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Plans
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Plan Info */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                                {iconMap[plan.iconName] && React.cloneElement(iconMap[plan.iconName], { className: "w-6 h-6" })}
                                <span className="font-semibold text-slate-700">AMC Service Plan</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-4">{plan.name}</h1>
                            <p className="text-xl text-slate-600 mb-6">{plan.description}</p>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-lg text-slate-500">{plan.period}</span>
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <Send className="w-5 h-5" />
                                Get This Plan
                            </button>
                        </div>

                        {/* Right: Hero Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-30"></div>
                                <img
                                    src={plan.id === 'standard' ? networkConfigImg : desktopEngineerImg}
                                    alt={plan.name}
                                    className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Plan Details (spans 2 cols) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* What's Included */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Check className="w-8 h-8 text-green-500" />
                                What's Included
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {plan.inclusions.map((item, idx) => (
                                    <div key={idx} className="flex items-start p-4 bg-green-50 rounded-xl">
                                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Overview */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailed Overview</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">{plan.detailedDescription}</p>
                        </div>

                        {/* Standard Plan Configuration Section */}
                        {plan.id === 'standard' && (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg border border-blue-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Settings className="w-8 h-8 text-blue-600" />
                                    Network & Configuration Services
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-100 rounded-xl">
                                            <Network className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">LAN/WAN Setup</h4>
                                            <p className="text-sm text-slate-500">Complete local and wide area network configuration</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-indigo-100 rounded-xl">
                                            <MonitorCog className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">System Optimization</h4>
                                            <p className="text-sm text-slate-500">Performance tuning and resource optimization</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-100 rounded-xl">
                                            <Server className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Server Config</h4>
                                            <p className="text-sm text-slate-500">Windows/Linux server setup and maintenance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-green-100 rounded-xl">
                                            <Shield className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Security Setup</h4>
                                            <p className="text-sm text-slate-500">Firewall and security protocol configuration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Quick CTA Card */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 text-center">
                            <div className="bg-slate-100 p-4 rounded-2xl inline-block mb-4">
                                {iconMap[plan.iconName]}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline justify-center gap-1 mb-4">
                                <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500">{plan.period}</span>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Ready to get started? Send us your enquiry!
                            </p>
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1"
                            >
                                Send Enquiry
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enquiry Section at Bottom */}
                <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Info Cards */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                Why Choose <span className="text-blue-600">Us?</span>
                            </h3>
                            <p className="text-slate-600 mb-8">
                                We are a trusted team of desktop engineers committed to keeping your systems running smoothly. With years of experience and dedication, we provide top-notch IT support.
                            </p>

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Award className="w-8 h-8 text-blue-500" />
                                        <h4 className="font-bold text-slate-800">10+ Years</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Industry Experience</p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="w-8 h-8 text-green-500" />
                                        <h4 className="font-bold text-slate-800">500+ Clients</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Trusted Partners</p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Headphones className="w-8 h-8 text-purple-500" />
                                        <h4 className="font-bold text-slate-800">24/7 Support</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Always Available</p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Wrench className="w-8 h-8 text-orange-500" />
                                        <h4 className="font-bold text-slate-800">Expert Team</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Certified Engineers</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    <Headphones className="w-5 h-5" />
                                    Get Expert Consultation
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Desktop Engineer Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30"></div>
                                <img
                                    src={desktopEngineerImg}
                                    alt="Desktop Engineer"
                                    className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-green-500" />
                                    <span className="font-bold text-slate-800">100% Reliable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enquiry Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center flex-shrink-0">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Enquiry Form</h3>
                                    <p className="text-sm text-slate-500">Please confirm your details below</p>
                                </div>
                                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-200 rounded-full transition">
                                    <X className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="overflow-y-auto">
                                {status === "success" ? (
                                    <div className="p-12 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900">Enquiry Sent!</h4>
                                        <p className="text-slate-600 mt-2">We have received your enquiry for the {plan.name}.</p>
                                        <button onClick={() => setShowModal(false)} className="mt-6 text-primary-600 font-semibold hover:underline">
                                            Close Window
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="p-8 space-y-5">

                                        {/* --- FIXED PLAN DETAILS SECTION --- */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-slate-700">Selected Plan</label>
                                                {/* ReadOnly Input for Plan Name */}
                                                <input
                                                    type="text"
                                                    value={plan.name}
                                                    readOnly
                                                    className="w-full px-4 py-2 bg-slate-100 text-slate-500 font-bold rounded-xl border border-slate-200 cursor-not-allowed outline-none"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-slate-700">Amount</label>
                                                {/* ReadOnly Input for Price */}
                                                <input
                                                    type="text"
                                                    value={plan.price}
                                                    readOnly
                                                    className="w-full px-4 py-2 bg-slate-100 text-slate-500 font-bold rounded-xl border border-slate-200 cursor-not-allowed outline-none"
                                                />
                                            </div>
                                        </div>
                                        {/* ---------------------------------- */}

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                                                placeholder="Enter Your Name"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                                                placeholder="Enter Your Phone Number"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                                                placeholder="Enter Your Email"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition h-20 resize-none"
                                                placeholder="Any specific requirements..."
                                            ></textarea>
                                        </div>

                                        {status === "error" && (
                                            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Enquiry</span>
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PlanDetails;