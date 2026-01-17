import { Award, Users, ThumbsUp, PenTool } from 'lucide-react';

const reasons = [
    {
        icon: <Award className="w-8 h-8 text-white" />,
        title: 'Certified Experts',
        description: 'Our team consists of certified professionals with years of experience.',
        color: 'bg-blue-500'
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: 'Client Centric',
        description: 'We prioritize your needs and offer tailored solutions for your business.',
        color: 'bg-indigo-500'
    },
    {
        icon: <ThumbsUp className="w-8 h-8 text-white" />,
        title: 'Quality Guarantee',
        description: 'We ensure top-notch service quality with a satisfaction guarantee.',
        color: 'bg-purple-500'
    },
    {
        icon: <PenTool className="w-8 h-8 text-white" />,
        title: 'Advanced Tools',
        description: 'Using the latest diagnostic tools to solve issues faster.',
        color: 'bg-pink-500'
    }
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose AMC Pro?</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">We deliver reliability, expertise, and peace of mind.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
                            <div className={`w-16 h-16 mx-auto ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 hover:rotate-6 transition-transform`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
