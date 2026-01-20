import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicePricingCards = ({ title, subtitle, cards = [], linkTo }) => {
    // Helper to get color classes based on color name
    const getTheme = (color) => {
        const themes = {
            purple: {
                main: 'bg-[#b02a94]',
                dark: 'border-t-[#801f6b]', // Darker shade for the fold
                text: 'text-[#b02a94]',
                button: 'bg-[#b02a94] hover:bg-[#902278]',
                check: 'text-[#b02a94]',
                border: 'border-[#b02a94]',
                light: 'bg-purple-50'
            },
            blue: {
                main: 'bg-[#0092d6]',
                dark: 'border-t-[#006da2]',
                text: 'text-[#0092d6]',
                button: 'bg-[#0092d6] hover:bg-[#0070a8]',
                check: 'text-[#0092d6]',
                border: 'border-[#0092d6]',
                light: 'bg-blue-50'
            },
            orange: {
                main: 'bg-[#f47c00]',
                dark: 'border-t-[#b85d00]',
                text: 'text-[#f47c00]',
                button: 'bg-[#f47c00] hover:bg-[#c65f16]',
                check: 'text-[#f47c00]',
                border: 'border-[#f47c00]',
                light: 'bg-orange-50'
            },
            pink: {
                main: 'bg-[#c52c92]',
                dark: 'border-t-[#962170]',
                text: 'text-[#c52c92]',
                button: 'bg-[#c52c92] hover:bg-[#a61c6b]',
                check: 'text-[#c52c92]',
                border: 'border-[#c52c92]',
                light: 'bg-pink-50'
            }
        };
        return themes[color] || themes.blue;
    };

    if (!cards || cards.length === 0) return null;

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>}
                        {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {cards.map((card, idx) => {
                        const theme = getTheme(card.color);
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative bg-white rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.1)] pt-0 flex flex-col h-full border border-slate-100 mt-6"
                            >
                                {/* 3D Ribbon Header */}
                                <div className={`absolute -top-2 -left-4 w-[85%] z-10`}>
                                    {/* Main Ribbon Box */}
                                    <div className={`${theme.main} text-white py-4 px-5 relative rounded-tr-lg rounded-br-lg shadow-md`}>
                                        <h3 className="font-bold text-base uppercase leading-tight mb-2 min-h-[44px] flex items-center">{card.title}</h3>
                                        <div className="flex items-baseline gap-2 text-white/90 font-medium">
                                            <span className="text-sm">Rs.</span>
                                            <span className="text-base line-through decoration-white/70 decoration-1">Rs{card.originalPrice}/-</span>
                                            <span className="ml-1 text-sm">Rs</span>
                                            <span className="text-xl font-bold underline decoration-white decoration-1 underline-offset-4">{card.price}/-</span>
                                        </div>
                                    </div>

                                    {/* The 3D Fold Triangle */}
                                    <div className={`absolute top-full left-0 w-4 h-4 flex`}>
                                        <div className={`w-0 h-0 border-t-[16px] border-r-[16px] ${theme.dark} border-r-transparent`}></div>
                                    </div>
                                </div>

                                {/* Spacer for the ribbon overlap */}
                                <div className="mt-28"></div>

                                {/* Image Body */}
                                <div className="px-6 py-2 pb-6 text-center">
                                    <div className="relative mx-auto h-40 w-full flex items-center justify-center mb-4">
                                        {card.image ? (
                                            <img src={card.image} alt={card.title} className="max-h-full max-w-full object-contain drop-shadow-lg" />
                                        ) : (
                                            <div className="text-slate-300 text-xs">No Image</div>
                                        )}
                                    </div>

                                    {/* Grey Category Strip */}
                                    <div className="bg-slate-100 py-2 px-4 -mx-6 mb-6 text-center border-t border-b border-slate-200">
                                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                                            {card.category || "AMC Services"}
                                        </span>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-3 text-left mb-8">
                                        {card.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                <div className={`mt-0.5 w-5 h-5 rounded-full border ${theme.border} flex items-center justify-center flex-shrink-0 bg-white`}>
                                                    <Check className={`w-3 h-3 ${theme.check}`} strokeWidth={3} />
                                                </div>
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Footer Button */}
                                    <div className="mt-auto">
                                        {linkTo ? (
                                            <Link
                                                to={linkTo}
                                                className={`${theme.button} text-white font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase text-sm inline-block`}
                                            >
                                                {card.buttonText || "Read More"}
                                            </Link>
                                        ) : (
                                            <button
                                                className={`${theme.button} text-white font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase text-sm inline-block`}
                                            >
                                                {card.buttonText || "Read More"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicePricingCards;
