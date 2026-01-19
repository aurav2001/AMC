import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
    {
        icon: <Phone className="w-6 h-6 text-primary-600" />,
        title: "Phone",
        content: "+91 9810443288",
        sub: "Mon-Fri from 8am to 5pm"
    },
    {
        icon: <Mail className="w-6 h-6 text-primary-600" />,
        title: "Email",
        content: "kkumar@uniotechit.com",
        sub: "Online support 24/7"
    },
    {
        icon: <MapPin className="w-6 h-6 text-primary-600" />,
        title: "Office",
        content: "Noida Sector-63, Haryana (India) Upper Ground Floor Plot No-273, Noida 201306",
        sub: "Cityville, Noida 201306"
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errors, setErrors] = useState({});
    const form = useRef();

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('submitting');

        const formDataObj = new FormData(e.target);
        // Add the Web3Forms access key
        formDataObj.append("access_key", "a0d2d69e-2cb3-44fd-a279-23dfcd46f457");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                if (form.current) form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Submission failed", data);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="min-h-screen pt-25 pb-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Have questions about our AMC plans? We&apos;re here to help you 24/7.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    {contactInfo.map((info, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow"
                        >
                            <div className="bg-primary-50 p-3 rounded-xl">
                                {info.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-lg">{info.title}</h3>
                                <p className="text-primary-600 font-medium">{info.content}</p>
                                <p className="text-slate-400 text-sm mt-1">{info.sub}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Map Embed */}
                    <div className="bg-slate-100 rounded-2xl overflow-hidden h-64 shadow-inner border border-slate-200">
                        <iframe
                            src="https://maps.google.com/maps?q=Plot+No-273,+Sector+63,+Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
                    >
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-slate-50 focus:bg-white`}
                                        placeholder="Enter Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-slate-50 focus:bg-white`}
                                        placeholder="Enter Your Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject (Optional)</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-slate-50 focus:bg-white"
                                    placeholder="Inquiry about Standard Plan..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-slate-50 focus:bg-white resize-none`}
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {status === 'submitting' ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle className="w-6 h-6 mr-2" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
