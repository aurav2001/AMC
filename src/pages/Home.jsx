import React, { useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import FAQ from '../components/FAQ';
import { useLocation } from 'react-router-dom';
import BrandsSection from '../components/BrandsSection';
import Testimonials from '../components/Testimonials';
import Plans from '../components/Plans';

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

            {/* Dynamic Plans Display */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Plans />
            </div>

            <WhyUs data={content.home?.whyUs} />
            <BrandsSection />
            <FAQ />
            <Testimonials />
        </div>
    );
};

export default Home;
