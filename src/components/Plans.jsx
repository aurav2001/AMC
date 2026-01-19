import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Cpu, Server, Database, Star, ArrowRight, Sparkles } from 'lucide-react';
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
                        <Sparkles className="w-4 h-4" />
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
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        Flexible maintenance plans designed to keep your systems running smoothly all year round.
                    </motion.p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                        <p className="text-slate-400 text-sm mt-1">Billed annually</p>
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

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-600 mb-4">Need a custom plan? We can tailor a solution for your business.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                    >
                        Contact us for custom pricing
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Plans;
