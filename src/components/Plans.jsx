import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Cpu, Server, Database, Star, ArrowRight, FileCheck, Shield, Clock, Headphones, Wrench, Users, Zap } from 'lucide-react';
import { plans } from '../data/plans';

const iconMap = {
    Cpu: <Cpu className="w-8 h-8" />,
    Server: <Server className="w-8 h-8" />,
    Database: <Database className="w-8 h-8" />,
};

const gradientColors = {
    basic: {
        bg: 'from-blue-50 to-white',
        accent: 'bg-blue-500',
        icon: 'text-blue-600 bg-blue-100',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-700'
    },
    standard: {
        bg: 'from-indigo-50 to-white',
        accent: 'bg-indigo-500',
        icon: 'text-indigo-600 bg-indigo-100',
        button: 'bg-indigo-600 hover:bg-indigo-700',
        badge: 'bg-indigo-100 text-indigo-700',
        popular: true
    },
    premium: {
        bg: 'from-purple-50 to-white',
        accent: 'bg-purple-500',
        icon: 'text-purple-600 bg-purple-100',
        button: 'bg-purple-600 hover:bg-purple-700',
        badge: 'bg-purple-100 text-purple-700'
    },
};

const planBenefits = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Comprehensive Coverage",
        description: "All our plans include hardware diagnostics, software support, and preventive maintenance."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Quick Response Time",
        description: "Get support within 2-4 hours for critical issues. Priority support for Premium members."
    },
    {
        icon: <Headphones className="w-6 h-6" />,
        title: "Dedicated Support",
        description: "Access to trained technicians via phone, email, or on-site visits as per your plan."
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        title: "Preventive Maintenance",
        description: "Regular scheduled visits to clean, optimize, and check your systems proactively."
    },
];

const planComparison = [
    { feature: "Number of Systems", basic: "1-3", standard: "4-10", premium: "Unlimited" },
    { feature: "Response Time", basic: "24 hours", standard: "4 hours", premium: "2 hours" },
    { feature: "On-site Visits", basic: "2/year", standard: "4/year", premium: "Unlimited" },
    { feature: "Remote Support", basic: "Business hours", standard: "Extended hours", premium: "24/7" },
    { feature: "Hardware Repair", basic: "Extra charge", standard: "Discounted", premium: "Included" },
    { feature: "Priority Queue", basic: "❌", standard: "✓", premium: "✓ VIP" },
];

const Plans = () => {
    return (
        <section id="plans" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
                    >
                        <FileCheck className="w-4 h-4" />
                        AMC Plans
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Choose Your Perfect <span className="text-primary-600">Plan</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Our Annual Maintenance Contracts (AMC) provide complete IT support to keep your business running smoothly.
                        Choose from flexible plans designed for homes, small businesses, and enterprises.
                    </motion.p>
                </div>

                {/* What's Included Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 mb-16"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">What's Included in Every Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {planBenefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="bg-primary-100 text-primary-600 p-3 rounded-xl flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">{benefit.title}</h4>
                                    <p className="text-sm text-slate-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, idx) => {
                        const colors = gradientColors[plan.id] || gradientColors.basic;
                        const isPopular = colors.popular;

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                {/* Popular Badge */}
                                {isPopular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                        <div className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                            <Star className="w-4 h-4 fill-current" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className={`h-full rounded-3xl bg-gradient-to-br ${colors.bg} border-2 ${isPopular ? 'border-indigo-300 shadow-xl shadow-indigo-100' : 'border-slate-200'} p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:border-primary-300`}>
                                    {/* Top Color Bar */}
                                    <div className={`w-full h-1.5 ${colors.accent} rounded-full mb-6`} />

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-2 ${colors.badge}`}>
                                                {plan.name}
                                            </span>
                                            <p className="text-slate-500 text-sm">{plan.description}</p>
                                        </div>
                                        <div className={`p-3 rounded-2xl ${colors.icon} group-hover:scale-110 transition-transform shadow-sm`}>
                                            {iconMap[plan.iconName]}
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline">
                                            <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                            <span className="text-slate-500 ml-2 text-lg">{plan.period}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm mt-1">Billed annually • GST Extra</p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-0.5">
                                                    <Check className="w-5 h-5 text-green-500" />
                                                </div>
                                                <span className="text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Buttons */}
                                    <div className="space-y-3">
                                        <Link
                                            to={`/plan/${plan.id}`}
                                            className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-semibold ${colors.button} transition-all shadow-lg hover:shadow-xl group/btn`}
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="flex items-center justify-center w-full py-3 rounded-xl text-slate-700 font-medium border-2 border-slate-200 hover:border-primary-300 hover:text-primary-600 transition-all"
                                        >
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Plan Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-16"
                >
                    <div className="p-6 bg-slate-900 text-white">
                        <h3 className="text-2xl font-bold text-center">Compare Our Plans</h3>
                        <p className="text-slate-300 text-center mt-2">See what's included in each plan at a glance</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-slate-700 font-semibold">Feature</th>
                                    <th className="px-6 py-4 text-center text-blue-600 font-semibold">Basic</th>
                                    <th className="px-6 py-4 text-center text-indigo-600 font-semibold bg-indigo-50">Standard ⭐</th>
                                    <th className="px-6 py-4 text-center text-purple-600 font-semibold">Premium</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {planComparison.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-slate-700 font-medium">{row.feature}</td>
                                        <td className="px-6 py-4 text-center text-slate-600">{row.basic}</td>
                                        <td className="px-6 py-4 text-center text-slate-600 bg-indigo-50/50">{row.standard}</td>
                                        <td className="px-6 py-4 text-center text-slate-600">{row.premium}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* How It Works */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white mb-16"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">How Our AMC Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                            <h4 className="font-semibold mb-2">Choose a Plan</h4>
                            <p className="text-primary-100 text-sm">Select the plan that fits your needs and budget</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                            <h4 className="font-semibold mb-2">Site Assessment</h4>
                            <p className="text-primary-100 text-sm">Our team audits your systems and creates a plan</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                            <h4 className="font-semibold mb-2">Regular Maintenance</h4>
                            <p className="text-primary-100 text-sm">Scheduled visits to keep systems running smoothly</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                            <h4 className="font-semibold mb-2">24/7 Support</h4>
                            <p className="text-primary-100 text-sm">Call anytime for emergencies and quick assistance</p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-slate-600 mb-4">Need a custom plan? We can tailor a solution for your business.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
                        >
                            <Headphones className="w-5 h-5" />
                            Contact Us for Custom Quote
                        </Link>
                        <a
                            href="tel:+919810443288"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-600 transition-all"
                        >
                            Call: +91 9810443288
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Plans;
