import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, X, Send, Cpu, Server, Database, Loader2, Monitor, Shield, Clock, Users, Wrench, HardDrive, Wifi, Settings, Phone, Mail, Award, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import amc12 from "../assets/amc12.jpg";

const iconMap = {
    Cpu: <Cpu className="w-16 h-16 text-blue-500" />,
    Server: <Server className="w-16 h-16 text-indigo-500" />,
    Database: <Database className="w-16 h-16 text-purple-500" />,
};

// Plan-specific feature details
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


// Video playlist for random selection
const videoList = [
    "https://www.youtube.com/embed/wklUhIyg2DY?autoplay=1&mute=1&loop=1&playlist=wklUhIyg2DY", // Office Short
    "https://www.youtube.com/embed/rOkSBf9CPaI?autoplay=1&mute=1&loop=1&playlist=rOkSBf9CPaI", // Laptop Typing Short
];


const PlanDetails = () => {
    const { id } = useParams();
    const { content } = useContent();
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    // Random video selection on mount
    useEffect(() => {
        const random = videoList[Math.floor(Math.random() * videoList.length)];
        setSelectedVideo(random);
    }, []);


    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("idle");

    const plan = content.plans?.[id];
    const featureDetails = planFeatureDetails[id] || planFeatureDetails.basic;

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
        <div className="min-h-screen pt-16 pb-24 bg-gradient-to-b from-slate-50 to-white">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/#plans" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group font-medium">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Plans
                </Link>

                {/* Hero Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${plan.gradient} border-2 border-slate-200 shadow-2xl mb-16`}
                >
                    <div className="absolute inset-0">
                        {selectedVideo ? (
                            <video
                                key={selectedVideo}
                                src={selectedVideo}
                                autoPlay
                                muted
                                loop
                                className="w-full h-full object-cover opacity-30"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="absolute inset-0 bg-[url('/images/banner1212.avif')] bg-cover bg-center opacity-10" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60 backdrop-blur-[2px]" />
                    </div>
                    <div className="relative p-8 md:p-12 z-10 form-style">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="bg-white p-5 rounded-2xl shadow-lg">
                                    {iconMap[plan.iconName]}
                                </div>
                                <div>
                                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-3 tracking-tight">{plan.name}</h1>
                                    <p className="text-xl md:text-2xl text-slate-700 font-medium">{plan.description}</p>
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-1">Annual Price</p>
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-600 font-medium ml-2">{plan.period}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="mb-16">
                    {/* Main Content */}
                    <div className="space-y-10">
                        {/* Random Video Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 overflow-hidden"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Experience Our Service</h2>
                            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video">
                                {selectedVideo && (
                                    selectedVideo.includes("youtube") ? (
                                        <iframe
                                            src={selectedVideo}
                                            className="w-full h-full object-cover"
                                            title="Experience Our Service"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            frameBorder="0"
                                        ></iframe>
                                    ) : (
                                        <video
                                            key={selectedVideo}
                                            src={selectedVideo}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            className="w-full h-full object-cover"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    )
                                )}
                                {!selectedVideo.includes("youtube") && (
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                                )}
                            </div>
                            <p className="text-slate-500 text-sm mt-4 text-center">
                                * Video demonstration of our maintenance standards. Refresh page to see more.
                            </p>
                        </motion.div>

                        {/* Enhanced Detailed Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                                {/* Left Side - Gradient Accent */}
                                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 flex flex-col justify-center relative overflow-hidden">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl" />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-6">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-lg font-bold text-white/80 uppercase tracking-wider mb-3">Perfect For</h3>
                                        <p className="text-white text-xl leading-relaxed font-medium">
                                            {featureDetails.bestFor}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="md:col-span-3 p-8 md:p-10">
                                    <div className="flex items-start gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Briefcase className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Plan Overview</h2>
                                            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {plan.detailedDescription}
                                    </p>
                                </div>
                            </div>
                        </motion.div>


                        {/* What's Included */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">What's Included</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {(plan.inclusions || []).map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                            <Check className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Features & Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featureDetails.highlights.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100">
                                        <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
                                            <p className="text-slate-600 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* AMC Service Images */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our AMC Services</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {featureDetails.images.map((img, idx) => (
                                    <div key={idx} className="relative group overflow-hidden rounded-2xl">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                                            <span className="text-white font-semibold text-lg">{img.alt}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>





                    </div>
                </div>

                {/* Bottom Sections - Plan Highlights & Compare Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Plan Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200"
                    >
                        <h3 className="text-3xl font-bold text-slate-900 mb-8">Plan Highlights</h3>
                        <ul className="space-y-5">
                            {(plan.features || []).map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-slate-700 text-lg">
                                    <Check className="w-7 h-7 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Compare Plans */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-10 shadow-2xl group"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            {/* Icon Header */}
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Database className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">Compare All Plans</h3>
                            <p className="text-blue-100 text-base mb-8 leading-relaxed">
                                View detailed side-by-side comparison of all our AMC plans to find your perfect match.
                            </p>

                            {/* Quick Comparison Points */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    <span>Feature-by-feature breakdown</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    <span>Pricing transparency</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    <span>Expert recommendations</span>
                                </div>
                            </div>

                            <Link
                                to="/#plans"
                                className="block w-full py-4 text-center bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group/btn"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    View All Plans
                                    <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover/btn:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Enquiry Section - Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl md:text-2xl text-primary-100 mb-10">
                            Send us an enquiry for the <span className="font-bold text-white">{plan.name}</span> and our team will get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowModal(true)}
                                className="px-10 py-4 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Send Enquiry Now
                            </button>
                            <a
                                href="tel:+919810443288"
                                className="px-10 py-4 bg-primary-500 text-white rounded-2xl font-bold text-lg hover:bg-primary-400 transition-all border-2 border-white/20"
                            >
                                Call Us: +91 9810443288
                            </a>
                        </div>
                    </div>
                </motion.div>
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
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-slate-700">Selected Plan</label>
                                                <input
                                                    type="text"
                                                    value={plan.name}
                                                    readOnly
                                                    className="w-full px-4 py-2 bg-slate-100 text-slate-500 font-bold rounded-xl border border-slate-200 cursor-not-allowed outline-none"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-slate-700">Amount</label>
                                                <input
                                                    type="text"
                                                    value={plan.price}
                                                    readOnly
                                                    className="w-full px-4 py-2 bg-slate-100 text-slate-500 font-bold rounded-xl border border-slate-200 cursor-not-allowed outline-none"
                                                />
                                            </div>
                                        </div>

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