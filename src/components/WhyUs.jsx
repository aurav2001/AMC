import DynamicIcon from './DynamicIcon';
import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, PenTool, Shield, Clock, Headphones, CheckCircle } from 'lucide-react';




const WhyUs = ({ data }) => {
    const whyUsData = data || { reasons: [], rightCard: { features: [] }, stats: [] };

    const reasons = whyUsData.reasons || [];
    const features = whyUsData.rightCard?.features || [];

    return (
        <section id="why-us" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
                    >
                        {whyUsData.badge || "Why Choose Us"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        {whyUsData.title || "Why AMC Pro is Your Best Choice"}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        {whyUsData.subtitle || "We deliver reliability, expertise, and peace of mind. Here's what sets us apart from the competition."}
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left - Features Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${reason.color || 'from-blue-500 to-blue-600'} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <DynamicIcon name={reason.icon} className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{reason.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{reason.description}</p>
                                <div className="pt-4 border-t border-slate-100">
                                    <span className="text-2xl font-bold text-slate-900">{reason.stat}</span>
                                    <span className="text-slate-500 text-sm ml-2">{reason.statLabel}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right - Feature List & CTA */}
                    <div className="lg:pl-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                {whyUsData.rightCard?.title || "Trusted by 100+ Businesses Across India"}
                            </h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                {whyUsData.rightCard?.description || "From startups to enterprises, businesses trust AMC Pro for their IT maintenance needs. Our comprehensive approach ensures your systems stay healthy and productive."}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="bg-primary-500/20 p-2 rounded-lg text-primary-400">
                                            {/* Handle both string (legacy) and object formats */}
                                            {typeof feature === 'string' ? (
                                                <DynamicIcon name="CheckCircle" className="w-5 h-5" />
                                            ) : (
                                                <DynamicIcon name={feature.icon || 'CheckCircle'} className="w-5 h-5" />
                                            )}
                                        </div>
                                        <span className="text-slate-200">
                                            {typeof feature === 'string' ? feature : feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`tel:${whyUsData.rightCard?.phone || "+919810443288"}`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
                                >
                                    <Headphones className="w-5 h-5" />
                                    Call: {whyUsData.rightCard?.phone || "+91 9810443288"}
                                </a>
                                <a
                                    href="#plans"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    View Plans
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Stats Bar - Only render if stats exist */}
                {whyUsData.stats && whyUsData.stats.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {whyUsData.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-4xl font-bold text-primary-600 mb-1">{stat.value}</div>
                                    <div className="text-slate-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default WhyUs;
