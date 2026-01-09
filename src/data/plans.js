
export const plans = [
    {
        id: 'basic',
        name: 'Basic AMC',
        price: '₹2,500',
        period: '/ year',
        iconName: 'Cpu',
        features: ['Hardware Support', 'Software Installation', '2 Preventive Visits', 'Remote Support'],
        description: 'Ideal for home users and small setups.',
        gradient: 'from-slate-50 to-slate-100',
        detailedDescription: 'The Basic AMC plan allows you to ensure your personal or small office computers are always running smoothly. It includes regular checkups and remote support for quick fixes.',
        inclusions: [
            'On-site hardware troubleshooting',
            'OS installation and patching',
            'Antivirus definition updates',
            'Standard business hours support'
        ]
    },
    {
        id: 'standard',
        name: 'Standard AMC',
        price: '₹5,000',
        period: '/ year',
        iconName: 'Server',
        features: ['Hardware & Software', 'Network Support', '4 Preventive Visits', '24/7 Priority Support', 'Data Backup'],
        description: 'Perfect for small businesses and offices.',
        gradient: 'from-blue-50 to-indigo-50',
        detailedDescription: 'Designed for growing businesses, the Standard plan covers not just individual systems but your local network as well. Enjoy priority support and data backup solutions.',
        inclusions: [
            'All Basic features',
            'LAN/Wi-Fi troubleshooting',
            'Printer/Scanner configuration',
            'Quarterly preventive maintenance',
            'Data backup configuration'
        ]
    },
    {
        id: 'premium',
        name: 'Premium AMC',
        price: '₹10,000',
        period: '/ year',
        iconName: 'Database',
        features: ['Unlimited Visits', 'Server Maintenance', 'Advanced Security', 'Dedicated Engineer', 'Parts Included'],
        description: 'Comprehensive coverage for enterprises.',
        gradient: 'from-indigo-50 to-purple-50',
        detailedDescription: 'Our top-tier plan for enterprises that cannot afford downtime. We provide a dedicated engineer and cover critical server infrastructure with faster response times.',
        inclusions: [
            'All Standard features',
            'Windows/Linux Server management',
            'Firewall and security audit',
            'Unlimited on-site visits',
            'Dedicated account manager'
        ]
    },
];
