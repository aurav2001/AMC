import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Cpu, Server, Database } from 'lucide-react';
import { plans } from '../data/plans';

const iconMap = {
    Cpu: <Cpu className="w-12 h-12 text-blue-500" />,
    Server: <Server className="w-12 h-12 text-indigo-500" />,
    Database: <Database className="w-12 h-12 text-purple-500" />,
};

const Plans = () => {
    return (
        <section id="plans" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Service Plans</h2>
                    <p className="text-xl text-slate-600">Choose the perfect maintenance plan for your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.id} className="relative group">
                            <div className={`h-full rounded-2xl p-8 border border-slate-200 bg-gradient-to-br ${plan.gradient} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="pr-4">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                                        <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                        {iconMap[plan.iconName]}
                                    </div>
                                </div>


                                <div className="mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                        <span className="text-slate-500 ml-2">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700">
                                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={`/plan/${plan.id}`}
                                    className="block w-full py-4 text-center rounded-xl bg-slate-900 text-white font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
