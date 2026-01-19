import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const stats = [
    { label: 'Happy Clients', value: '100+', icon: <Users className="w-6 h-6 text-primary-500" /> },
    { label: 'Years Experience', value: '5+', icon: <Clock className="w-6 h-6 text-primary-500" /> },
    { label: 'Projects Completed', value: '500+', icon: <CheckCircle className="w-6 h-6 text-primary-500" /> },
    { label: 'Awards Won', value: '15', icon: <Award className="w-6 h-6 text-primary-500" /> },
];

const values = [
    { title: 'Reliability', description: 'We are there when you need us, guaranteed.' },
    { title: 'Integrity', description: 'Honest pricing and transparent service.' },
    { title: 'Innovation', description: 'Using the latest tech to solve your problems.' },
    { title: 'Customer First', description: 'Your satisfaction is our top priority.' },
];

const team = [
    { name: 'Mukesh Ambani', role: 'CEO & Founder', image: '/images/AMC1.jpg' },
    { name: 'Adani', role: 'Chief Technology Officer', image: '/images/banner22.png' },
    { name: 'Narayan', role: 'Lead Service Engineer', image: '/images/AMC1.jpg' },
];

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-20 pt-10">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-32 mt-4 overflow-hidden rounded-3xl mx-4">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Empowering Business Through Technology
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Since 2025, AMC Pro has been the trusted partner for over 100+ businesses, ensuring their IT infrastructure is robust, secure, and efficient.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 pt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center"
                        >
                            <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission & Values */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We believe that technology should be an enabler, not a bottleneck. Our mission is to provide proactive, reliable, and expert maintenance services that allow our clients to focus on what they do best—growing their business.
                            <br /><br />
                            We don&apos;t just fix computers; we optimize workflows, secure data, and future-proof your infrastructure.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((val, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="mr-4 mt-1 bg-primary-100 p-1 rounded">
                                        <CheckCircle className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{val.title}</h4>
                                        <p className="text-sm text-slate-500">{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-3 opacity-10 transform translate-x-4 translate-y-4"></div>
                        <img
                            src="/images/about1.webp"
                            alt="Team Collaboration"
                            className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                        />
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-24 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet Our Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-primary-400">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
