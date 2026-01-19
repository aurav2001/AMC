import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, PenTool, Shield, Clock, Headphones, CheckCircle } from 'lucide-react';

const reasons = [
    {
        icon: <Award className="w-8 h-8" />,
        title: 'Certified Experts',
        description: 'Our team consists of certified professionals with years of experience in IT maintenance.',
        color: 'from-blue-500 to-blue-600',
        stat: '10+',
        statLabel: 'Years Experience'
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: 'Client Centric',
        description: 'We prioritize your needs and offer tailored solutions for your business requirements.',
        color: 'from-indigo-500 to-indigo-600',
        stat: '100+',
        statLabel: 'Happy Clients'
    },
    {
        icon: <ThumbsUp className="w-8 h-8" />,
        title: 'Quality Guarantee',
        description: 'We ensure top-notch service quality with a satisfaction guarantee on all our work.',
        color: 'from-purple-500 to-purple-600',
        stat: '99%',
        statLabel: 'Satisfaction Rate'
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: 'Advanced Tools',
        description: 'Using the latest diagnostic tools and technologies to solve issues faster.',
        color: 'from-pink-500 to-pink-600',
        stat: '50+',
        statLabel: 'Tools & Tech'
    },
];

const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Data Security Guaranteed' },
    { icon: <Clock className="w-5 h-5" />, text: 'Quick Response Time' },
    { icon: <Headphones className="w-5 h-5" />, text: '24/7 Support Available' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'No Hidden Charges' },
];

const WhyUs = () => {
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
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Why AMC Pro is Your <span className="text-primary-600">Best Choice</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        We deliver reliability, expertise, and peace of mind. Here's what sets us apart from the competition.
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
                                <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    {reason.icon}
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
                                Trusted by 100+ Businesses Across India
                            </h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                From startups to enterprises, businesses trust AMC Pro for their IT maintenance needs. Our comprehensive approach ensures your systems stay healthy and productive.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="bg-primary-500/20 p-2 rounded-lg text-primary-400">
                                            {feature.icon}
                                        </div>
                                        <span className="text-slate-200">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+919810443288"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
                                >
                                    <Headphones className="w-5 h-5" />
                                    Call: +91 9810443288
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

                {/* Bottom Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-1">5+</div>
                            <div className="text-slate-600">Years in Business</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-1">500+</div>
                            <div className="text-slate-600">Systems Maintained</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-1">24/7</div>
                            <div className="text-slate-600">Support Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-1">2hr</div>
                            <div className="text-slate-600">Avg. Response Time</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
