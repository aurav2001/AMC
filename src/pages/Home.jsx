import React, { useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Briefcase, Printer, Network, Camera } from 'lucide-react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import FAQ from '../components/FAQ';
import { useLocation } from 'react-router-dom';
import BrandsSection from '../components/BrandsSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const { hash } = useLocation();
    const { content } = useContent();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className="bg-white">
            <Hero />

            {/* Service Navigation Buttons */}
            <section className="py-[25px] bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <HomeIcon className="w-5 h-5 text-orange-600" />
                            <span className="font-medium text-slate-700">Home</span>
                        </Link>

                        <Link
                            to="/services/business"
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <Briefcase className="w-5 h-5 text-orange-600" />
                            <span className="font-medium text-orange-600">Business</span>
                        </Link>

                        <Link
                            to="/services/printer"
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <Printer className="w-5 h-5 text-slate-600" />
                            <span className="font-medium text-slate-700">Printer</span>
                        </Link>

                        <Link
                            to="/services/networking"
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <Network className="w-5 h-5 text-cyan-600" />
                            <span className="font-medium text-slate-700">Networking</span>
                        </Link>

                        <Link
                            to="/services/cctv"
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <Camera className="w-5 h-5 text-cyan-600" />
                            <span className="font-medium text-cyan-600">CCTV</span>
                        </Link>
                    </div>
                </div>
            </section>

            <WhyUs data={content.home?.whyUs} />
            <BrandsSection />
            <FAQ />
            <Testimonials />
        </div>
    );
};

export default Home;
