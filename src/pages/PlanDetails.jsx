import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, X, Send, Cpu, Server, Database, Loader2, Monitor, Shield, Clock, Users, Wrench, HardDrive, Wifi, Settings, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { plans } from '../data/plans';

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
            { src: "/images/banner1212.avif", alt: "Desktop Computer Support" },
            { src: "/images/banner22.png", alt: "Software Installation" },
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
            { src: "/images/banner111.png", alt: "Network Infrastructure" },
            { src: "/images/banner1212.avif", alt: "Office IT Setup" },
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
            { src: "/images/banner22.png", alt: "Server Room" },
            { src: "/images/banner111.png", alt: "Enterprise Security" },
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

    const plan = plans.find(p => p.id === id);
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
        <div className="min-h-screen pt-10 pb-20 bg-slate-50">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4">
                <Link to="/#plans" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group font-medium">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Plans
                </Link>

                {/* Hero Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${plan.gradient} border border-slate-200 shadow-xl mb-12`}
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
                                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">{plan.name}</h1>
                                    <p className="text-xl text-slate-600 font-medium">{plan.description}</p>
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left Column - Plan Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Random Video Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 overflow-hidden"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience Our Service</h2>
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

                        {/* Detailed Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Detailed Overview</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">{plan.detailedDescription}</p>

                            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                                <h3 className="font-bold text-primary-800 mb-2">Best Suited For:</h3>
                                <p className="text-primary-700">{featureDetails.bestFor}</p>
                            </div>
                        </motion.div>

                        {/* What's Included */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {plan.inclusions.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                        <div className="bg-green-100 p-1 rounded-lg flex-shrink-0">
                                            <Check className="w-5 h-5 text-green-600" />
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
                            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features & Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {featureDetails.highlights.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl hover:shadow-md transition-shadow">
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
                            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our AMC Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Features */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100"
                        >
                            <h3 className="font-bold text-slate-800 mb-4">Plan Highlights</h3>
                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Support Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white"
                        >
                            <h3 className="font-bold mb-4">Need Help Choosing?</h3>
                            <p className="text-slate-300 text-sm mb-4">Our experts are here to help you select the perfect plan for your business needs.</p>
                            <div className="space-y-3">
                                <a href="tel:+919810443288" className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                    <span>+91 9810443288</span>
                                </a>
                                <a href="mailto:kkumar@uniotechit.com" className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                    <span>kkumar@uniotechit.com</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Compare Plans CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-slate-100 rounded-3xl p-6"
                        >
                            <h3 className="font-bold text-slate-800 mb-2">Compare All Plans</h3>
                            <p className="text-slate-600 text-sm mb-4">View all plans side by side to find the best fit.</p>
                            <Link
                                to="/#plans"
                                className="block w-full py-3 text-center bg-white rounded-xl font-semibold text-slate-800 hover:bg-slate-50 transition-colors border border-slate-200"
                            >
                                View All Plans
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Enquiry Section - Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-xl text-primary-100 mb-8">
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