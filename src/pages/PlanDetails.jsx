import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Send, Cpu, Server, Database, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { plans } from '../data/plans';

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
        <div className="min-h-screen pt-10 pb-20 px-4 max-w-7xl mx-auto">
            <Link to="/#plans" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group font-medium">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Plans
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Plan Details */}
                <div>
                    <div className={`p-8 rounded-3xl bg-gradient-to-br ${plan.gradient} border border-slate-200 shadow-xl mb-8`}>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-800 mb-2">{plan.name}</h1>
                                <p className="text-slate-600 text-lg">{plan.description}</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm">
                                {iconMap[plan.iconName]}
                            </div>
                        </div>

                        <div className="mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                            <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-1">Pricing</p>
                            <div className="flex items-baseline">
                                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-slate-600 font-medium ml-2">{plan.period}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-800">What's included:</h3>
                            <ul className="space-y-3">
                                {plan.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-slate-700">
                                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailed Overview</h3>
                        <p>{plan.detailedDescription}</p>
                    </div>
                </div>

                {/* Right: CTA Section */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to get started?</h3>
                        <p className="text-slate-600 mb-8">
                            Send us an enquiry regarding the <span className="font-bold text-primary-600">{plan.name}</span>.
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