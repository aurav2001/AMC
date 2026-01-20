import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';

const FAQ = () => {
    const { content } = useContent();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = content.home?.faq || { questions: [] };
    const { title = "Frequently Asked Questions", subtitle = "Got questions? We've got answers.", questions = [] } = faqData;

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-xl text-slate-600">{subtitle}</p>
                </div>

                <div className="space-y-4">
                    {questions.map((faq, idx) => (
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
