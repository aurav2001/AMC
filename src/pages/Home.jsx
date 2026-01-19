import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Plans from '../components/Plans';
import WhyUs from '../components/WhyUs';
import FAQ from '../components/FAQ';
import { useLocation } from 'react-router-dom';
import BrandsSection from '../components/BrandsSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const { hash } = useLocation();

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
            <Plans />
            <WhyUs />
            <BrandsSection />
            <FAQ />
            <Testimonials />
        </div>
    );
};

export default Home;
