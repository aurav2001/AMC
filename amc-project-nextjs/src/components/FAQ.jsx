'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is included in the Annual Maintenance Contract?",
        answer: "Our AMC covers regular preventive maintenance visits, unlimited breakdown calls, hardware troubleshooting, and software support. Specific inclusions depend on the plan chosen."
    },
    {
        question: "How quickly do you respond to service calls?",
        answer: "We guarantee a response time of within 2-4 hours for critical issues. For standard queries, we typically resolve them within the same business day."
    },
    {
        question: "Do you provide replacement parts?",
        answer: "In our Premium Plan, replacement of certain parts is included. For other plans, parts are charged at actuals, but we provide procurement assistance."
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Yes, you can upgrade your plan at any time. The cost will be adjusted on a pro-rata basis for the remaining period of your contract."
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-600">Got questions? We've got answers.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:bg-white transition-colors">
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                                {activeIndex === idx ? (
                                    <Minus className="w-5 h-5 text-primary-600" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
