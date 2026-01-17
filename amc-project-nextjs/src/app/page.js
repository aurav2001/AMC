import Hero from '@/components/Hero';
import Plans from '@/components/Plans';
import WhyUs from '@/components/WhyUs';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Home',
  description: 'AMC Pro offers comprehensive annual maintenance contracts for all your IT needs. Hardware support, software solutions, and 24/7 assistance.',
};

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Plans />
      <WhyUs />
      <FAQ />
      <Testimonials />
    </div>
  );
}
