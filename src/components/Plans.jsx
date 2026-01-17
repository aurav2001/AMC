import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Cpu, Server, Database, Clock, Shield, Award, Headphones, Users, Wrench } from 'lucide-react';
import { plans } from '../data/plans';
import desktopEngineerImg from '../assets/desktop_engineer.png';

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

                {/* Enquiry Section with Desktop Engineer */}
                <div className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Info Cards */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                Why Choose <span className="text-blue-600">Us?</span>
                            </h3>
                            <p className="text-slate-600 mb-8">
                                We are a trusted team of desktop engineers committed to keeping your systems running smoothly. With years of experience and dedication, we provide top-notch IT support.
                            </p>

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Award className="w-8 h-8 text-blue-500" />
                                        <h4 className="font-bold text-slate-800">10+ Years</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Industry Experience</p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="w-8 h-8 text-green-500" />
                                        <h4 className="font-bold text-slate-800">500+ Clients</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Trusted Partners</p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Headphones className="w-8 h-8 text-purple-500" />
                                        <h4 className="font-bold text-slate-800">24/7 Support</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Always Available</p>
                                </div>

                                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Wrench className="w-8 h-8 text-orange-500" />
                                        <h4 className="font-bold text-slate-800">Expert Team</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">Certified Engineers</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    <Headphones className="w-5 h-5" />
                                    Get Expert Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Desktop Engineer Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30"></div>
                                <img
                                    src={desktopEngineerImg}
                                    alt="Desktop Engineer"
                                    className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-green-500" />
                                    <span className="font-bold text-slate-800">100% Reliable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;
