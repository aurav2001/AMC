import { createContext, useContext, useState, useEffect } from 'react';

// Initial content structure
const initialContent = {
    home: {
        hero: {
            slides: [
                {
                    title: "Computer & Laptop AMC Services",
                    description: "Complete annual maintenance for desktops, laptops, and workstations. Keep your systems running at peak performance with our expert support.",
                    image: "/src/assets/amc12.jpg",
                    cta: "Get Free Quote"
                }
            ],
            stats: [
                { value: "100+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "24/7", label: "Support" }
            ]
        },
        plansSection: {
            badge: "AMC Plans",
            title: "Choose Your Perfect Plan",
            subtitle: "Our Annual Maintenance Contracts (AMC) provide complete IT support to keep your business running smoothly. Choose from flexible plans designed for homes, small businesses, and enterprises.",
            overviewImage: null,
            mainFeatureTitle: "Live Demo",
            videoTitle: "Experience Our Service Standards",
            videoSubtitle: "Watch how we deliver excellence in every service call. Our dedicated team follows standard protocols to ensure consistent quality.",
        },
        whyUs: {
            badge: "Why Choose Us",
            title: "Why AMC Pro is Your Best Choice",
            subtitle: "We deliver reliability, expertise, and peace of mind. Here's what sets us apart from the competition.",
            reasons: [
                { title: "Certified Experts", description: "Our team consists of certified professionals with years of experience in IT maintenance.", icon: "Award", stat: "10+", statLabel: "Years Experience", color: "from-blue-500 to-blue-600" },
                { title: "Client Centric", description: "We prioritize your needs and offer tailored solutions for your business requirements.", icon: "Users", stat: "100+", statLabel: "Happy Clients", color: "from-indigo-500 to-indigo-600" },
                { title: "Quality Guarantee", description: "We ensure top-notch service quality with a satisfaction guarantee on all our work.", icon: "ThumbsUp", stat: "99%", statLabel: "Satisfaction Rate", color: "from-purple-500 to-purple-600" },
                { title: "Advanced Tools", description: "Using the latest diagnostic tools and technologies to solve issues faster.", icon: "PenTool", stat: "50+", statLabel: "Tools & Tech", color: "from-pink-500 to-pink-600" }
            ],
            rightCard: {
                title: "Trusted by 100+ Businesses Across India",
                description: "From startups to enterprises, businesses trust AMC Pro for their IT maintenance needs. Our comprehensive approach ensures your systems stay healthy and productive.",
                features: [
                    { text: "Data Security Guaranteed", icon: "Shield" },
                    { text: "Quick Response Time", "icon": "Clock" },
                    { text: "24/7 Support Available", "icon": "Headphones" },
                    { text: "No Hidden Charges", "icon": "CheckCircle" }
                ],
                phone: "+91 9810443288"
            },
            stats: [
                { value: "5+", label: "Years in Business" },
                { value: "500+", label: "Systems Maintained" },
                { value: "24/7", label: "Support Available" },
                { value: "2hr", label: "Avg. Response Time" }
            ]
        },
        brands: {
            title: "Brands We Support",
            subtitle: "Expert service for all major hardware brands.",
            list: [
                { name: 'Dell', category: 'hardware' },
                { name: 'HP', category: 'hardware' },
                { name: 'Lenovo', category: 'hardware' },
                { name: 'ASUS', category: 'hardware' },
                { name: 'Acer', category: 'hardware' },
                { name: 'Apple', category: 'hardware' },
                { name: 'Microsoft', category: 'software' },
                { name: 'Cisco', category: 'network' },
                { name: 'Netgear', category: 'network' },
                { name: 'TP-Link', category: 'network' },
                { name: 'Epson', category: 'printer' },
                { name: 'Canon', category: 'printer' },
                { name: 'Brother', category: 'printer' },
                { name: 'Samsung', category: 'hardware' },
                { name: 'LG', category: 'hardware' }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Got questions? We've got answers.",
            questions: [
                {
                    question: "What is included in the Annual Maintenance Contract?",
                    answer: "Our AMC covers regular preventive maintenance visits, unlimited breakdown calls, hardware troubleshooting, and software support. Specific inclusions depend on the plan chosen."
                },
                {
                    question: "How quickly do you respond to service calls?",
                    answer: "We guarantee a response time of within 2-4 hours for critical issues. For standard queries, we typically resolve them within the same business day."
                },
                {
                    question: "Do you provide replacement parts?",
                    answer: "In our Premium Plan, replacement of certain parts is included. For other plans, parts are charged at actuals, but we provide procurement assistance."
                },
                {
                    question: "Can I upgrade my plan later?",
                    answer: "Yes, you can upgrade your plan at any time. The cost will be adjusted on a pro-rata basis for the remaining period of your contract."
                }
            ]
        }
    },
    plans: {
        basic: {
            id: 'basic',
            name: 'Basic AMC',
            price: '₹2,500',
            period: '/ year',
            iconName: 'Cpu',
            description: 'Ideal for home users and small setups.',
            gradient: 'from-slate-50 to-slate-100',
            detailedDescription: 'The Basic AMC plan allows you to ensure your personal or small office computers are always running smoothly. It includes regular checkups and remote support for quick fixes.',
            features: [
                'Hardware Support',
                'Software Installation',
                '2 Preventive Visits',
                'Remote Support'
            ],
            inclusions: [
                'On-site hardware troubleshooting',
                'OS installation and patching',
                'Antivirus definition updates',
                'Standard business hours support'
            ]
        },
        standard: {
            id: 'standard',
            name: 'Standard AMC',
            price: '₹5,000',
            period: '/ year',
            iconName: 'Server',
            description: 'Perfect for small businesses and offices.',
            gradient: 'from-blue-50 to-indigo-50',
            detailedDescription: 'Designed for growing businesses, the Standard plan covers not just individual systems but your local network as well. Enjoy priority support and data backup solutions.',
            features: [
                'Hardware & Software',
                'Network Support',
                '4 Preventive Visits',
                '24/7 Priority Support',
                'Data Backup'
            ],
            inclusions: [
                'All Basic features',
                'LAN/Wi-Fi troubleshooting',
                'Printer/Scanner configuration',
                'Quarterly preventive maintenance',
                'Data backup configuration'
            ]
        },
        premium: {
            id: 'premium',
            name: 'Premium AMC',
            price: '₹10,000',
            period: '/ year',
            iconName: 'Database',
            description: 'Comprehensive coverage for enterprises.',
            gradient: 'from-indigo-50 to-purple-50',
            detailedDescription: 'Our top-tier plan for enterprises that cannot afford downtime. We provide a dedicated engineer and cover critical server infrastructure with faster response times.',
            features: [
                'Unlimited Visits',
                'Server Maintenance',
                'Advanced Security',
                'Dedicated Engineer',
                'Parts Included'
            ],
            inclusions: [
                'All Standard features',
                'Windows/Linux Server management',
                'Firewall and security audit',
                'Unlimited on-site visits',
                'Dedicated account manager'
            ]
        }
    },
    software: {
        hero: {
            title: "Complete Software Solutions",
            subtitle: "From operating systems to enterprise applications",
            phone: "+91 9810443288"
        },
        stats: [
            { value: "50+", label: "Software Supported" },
            { value: "1000+", label: "Installations Done" },
            { value: "99%", label: "Issue Resolution" },
            { value: "24/7", label: "Support Available" }
        ],
        services: [
            {
                title: "Operating System Support",
                description: "Complete OS installation, configuration, updates, and troubleshooting for Windows, macOS, and Linux.",
                features: ["Windows 10/11 support", "macOS maintenance", "Linux administration", "OS migration"],
                gradient: "from-violet-500 to-purple-500",
                iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
                icon: "Monitor"
            },
            {
                title: "Antivirus & Security",
                description: "Enterprise-grade security solutions including antivirus, firewall configuration, and threat protection.",
                features: ["Antivirus deployment", "Firewall setup", "Threat monitoring", "Security updates"],
                gradient: "from-rose-500 to-red-500",
                iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
                icon: "Shield"
            },
            {
                title: "Database Management",
                description: "Professional database installation, optimization, backup, and recovery services.",
                features: ["SQL Server support", "MySQL/PostgreSQL", "Backup automation", "Performance tuning"],
                gradient: "from-emerald-500 to-teal-500",
                iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
                icon: "Database"
            },
            {
                title: "Cloud & Email Setup",
                description: "Microsoft 365, Google Workspace, and cloud platform configuration and support.",
                features: ["M365 deployment", "Email migration", "Cloud backup", "User management"],
                gradient: "from-sky-500 to-blue-500",
                iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
                icon: "Cloud"
            },
            {
                title: "Business Software",
                description: "Installation and support for accounting, ERP, CRM, and other business applications.",
                features: ["Tally/SAP support", "CRM setup", "ERP configuration", "License management"],
                gradient: "from-amber-500 to-orange-500",
                iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
                icon: "Briefcase"
            },
            {
                title: "Troubleshooting",
                description: "Expert diagnosis and resolution for software crashes, errors, and performance issues.",
                features: ["Error diagnosis", "Crash recovery", "Performance fixes", "Compatibility issues"],
                gradient: "from-fuchsia-500 to-pink-500",
                iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
                icon: "Wrench"
            }
        ],
        softwareList: [
            { name: "Windows 10/11", category: "Operating System", icon: "🪟" },
            { name: "Microsoft 365", category: "Productivity", icon: "📊" },
            { name: "Tally Prime", category: "Accounting", icon: "💰" },
            { name: "QuickBooks", category: "Accounting", icon: "📒" },
            { name: "Kaspersky", category: "Security", icon: "🛡️" },
            { name: "Adobe Suite", category: "Creative", icon: "🎨" },
            { name: "AutoCAD", category: "Design", icon: "📐" },
            { name: "SAP", category: "ERP", icon: "🏢" }
        ],
        gallery: {
            heading: "Service Gallery",
            title: "Our Software AMC Services",
            subtitle: "Professional software maintenance and support for your business",
            images: [
                { url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80", title: "Software Installation", description: "OS & application setup" },
                { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", title: "Security Solutions", description: "Antivirus & protection" },
                { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", title: "Database Management", description: "Data optimization" },
                { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", title: "Cloud Services", description: "Cloud integration" }
            ]
        },
        whyChooseUs: {
            badge: "Why Choose Us",
            heading: "Why AMC Pro is Your Best Choice",
            subtitle: "We deliver reliability, expertise, and peace of mind. Here's what sets us apart from the competition.",
            reasons: [
                { title: "Certified Experts", description: "Our team consists of certified professionals with years of experience in IT maintenance.", stat: "10+", statLabel: "Years Experience", color: "from-blue-500 to-blue-600" },
                { title: "Client Centric", description: "We prioritize your needs and offer tailored solutions for your business requirements.", stat: "100+", statLabel: "Happy Clients", color: "from-indigo-500 to-indigo-600" },
                { title: "Quality Guarantee", description: "We ensure top-notch service quality with a satisfaction guarantee on all our work.", stat: "99%", statLabel: "Satisfaction Rate", color: "from-purple-500 to-purple-600" },
                { title: "Advanced Tools", description: "Using the latest diagnostic tools and technologies to solve issues faster.", stat: "50+", statLabel: "Tools & Tech", color: "from-pink-500 to-pink-600" }
            ],
            ctaHeading: "Trusted by 100+ Businesses Across India",
            ctaDescription: "From startups to enterprises, businesses trust AMC Pro for their IT maintenance needs. Our comprehensive approach ensures your systems stay healthy and productive.",
            features: [
                "Data Security Guaranteed",
                "Quick Response Time",
                "24/7 Support Available",
                "No Hidden Charges"
            ]
        },
        pricingCards: [
            {
                title: "Instant Remote Support AMC Services",
                price: "2000",
                originalPrice: "2500",
                image: "/images/remote-support.png", // Need dummy image
                color: "purple",
                category: "Quick Remote Support AMC Services",
                features: [
                    "Cost for Annual Remote Support",
                    "4 times Only Instant Remote",
                    "Any types of files Folder Issue",
                    "Browser / Email / MS office",
                    "Remote Support instance",
                    "Software Corrupt issue solve",
                    "Software Install for Extra cost"
                ],
                buttonText: "Read More"
            },
            {
                title: "Doorstep Computer AMC Services",
                price: "3500",
                originalPrice: "4000",
                image: "/images/desktop-amc.png",
                color: "blue",
                category: "Doorstep Computer AMC Services",
                features: [
                    "Cost for Annual AMC Support",
                    "Minimum 3 PC AMC Support Plan",
                    "Unlimited Visit Onsite Support",
                    "Unlimited Remote Support",
                    "Doorstep Service at your place",
                    "Install new S/W for additional cost",
                    "Support is provided on call"
                ],
                buttonText: "Read More"
            },
            {
                title: "Doorstep Laptop AMC Services",
                price: "4000",
                originalPrice: "4500",
                image: "/images/laptop-amc.png",
                color: "orange",
                category: "Doorstep Laptop AMC Services",
                features: [
                    "Cost for Annual AMC Support",
                    "Unlimited Visit Onsite Support",
                    "Unlimited Remote Support",
                    "Doorstep Service at your home",
                    "Minimum 3 Laptop AMC Support",
                    "Install new S/W for additional cost",
                    "Support is provided on call"
                ],
                buttonText: "Read More"
            },
            {
                title: "Doorstep Mac iMac AMC Services",
                price: "6000",
                originalPrice: "7000",
                image: "/images/mac-amc.png",
                color: "pink",
                category: "Doorstep MAC - iMAC AMC Services",
                features: [
                    "Cost for Annual AMC Support",
                    "Unlimited Visit Onsite Support",
                    "Unlimited Remote Support",
                    "Doorstep Service at your home",
                    "Minimum 3 iMac & Macbook Pro",
                    "Install new S/W for additional cost",
                    "Support is provided on call"
                ],
                buttonText: "Read More"
            }
        ],
        comparisonTable: {
            title: "Software Support Plans",
            headers: ["Basic", "Standard ⭐", "Premium"],
            rows: [
                { feature: "OS Support", values: [true, true, true] },
                { feature: "Virus Removal", values: ["Remote", "Remote+Onsite", "Unlimited"] },
                { feature: "Data Backup", values: [false, true, true] },
                { feature: "App Installation", values: [false, "5 Apps", "Unlimited"] }
            ]
        },
    },
    business: {
        hero: {
            title: "Complete Business IT Solutions",
            subtitle: "From IT consulting to infrastructure management",
            phone: "+91 9810443288"
        },
        stats: [
            { value: "100+", label: "Business Clients" },
            { value: "500+", label: "Projects Completed" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" }
        ],
        services: [],
        softwareList: [],
        pricingCards: [
            {
                title: "Business IT Support - Basic",
                price: "5000",
                originalPrice: "6000",
                image: "/images/business-basic.png",
                color: "blue",
                category: "Business IT Support",
                features: [
                    "IT Consultation Services",
                    "Network Setup & Configuration",
                    "Email & Cloud Setup",
                    "4 Preventive Maintenance Visits",
                    "Remote Support Available",
                    "Business Hours Support"
                ],
                buttonText: "Read More"
            },
            {
                title: "Business IT Support - Premium",
                price: "10000",
                originalPrice: "12000",
                image: "/images/business-premium.png",
                color: "purple",
                category: "Premium Business IT Support",
                features: [
                    "All Basic Features Included",
                    "Server Management & Monitoring",
                    "Data Backup & Recovery",
                    "Unlimited Onsite Visits",
                    "24/7 Priority Support",
                    "Dedicated Account Manager"
                ],
                buttonText: "Read More"
            }
        ],
        comparisonTable: {
            title: "Business IT Plans",
            headers: ["Startup", "Growth", "Enterprise"],
            rows: [
                { feature: "Workstations", values: ["Up to 5", "Up to 20", "Unlimited"] },
                { feature: "Server Support", values: [false, "Basic", "Advanced"] },
                { feature: "Network Security", values: ["Basic Firewall", "Advanced", "Zero Trust"] },
                { feature: "Onsite SLA", values: ["48h", "24h", "4h"] }
            ]
        },
        whyChooseUs: {}
    },
    printer: {
        hero: {
            title: "Complete Printer Solutions",
            subtitle: "From printer installation to maintenance and repair",
            phone: "+91 9810443288"
        },
        stats: [
            { value: "200+", label: "Printers Serviced" },
            { value: "50+", label: "Brands Supported" },
            { value: "99%", label: "Issue Resolution" },
            { value: "24/7", label: "Support Available" }
        ],
        services: [],
        softwareList: [],
        pricingCards: [
            {
                title: "Printer AMC - Basic",
                price: "2500",
                title: "Single Printer AMC",
                price: "2499",
                originalPrice: "3499",
                features: ["Unlimited Service Calls", "Driver Updates", "Network Config", "Part Replacement (Extra)"],
                color: "pink",
                buttonText: "Choose Plan"
            },
            {
                title: "Office Printer Pack",
                price: "8999",
                originalPrice: "11999",
                features: ["Up to 5 Printers", "Priority Support", "Consumables Discount", "Monthly Maintenance"],
                color: "blue",
                buttonText: "Choose Plan"
            }
        ],
        comparisonTable: {
            title: "Printing Solutions",
            headers: ["Basic", "Professional", "Enterprise"],
            rows: [
                { feature: "Cartridge Refill", values: [true, true, true] },
                { feature: "Paper Jam Fix", values: [true, true, true] },
                { feature: "Network Setup", values: [false, true, true] },
                { feature: "Parts Replacement", values: ["Discounted", "Included", "Included"] },
                { feature: "Response Time", values: ["48 Hours", "24 Hours", "4 Hours"] }
            ]
        },
        whyChooseUs: {}
    },
    networking: {
        hero: {
            title: "Complete Networking Solutions",
            subtitle: "From network setup to security and monitoring",
            phone: "+91 9810443288"
        },
        stats: [
            { value: "150+", label: "Networks Deployed" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "100+", label: "Security Audits" },
            { value: "24/7", label: "Monitoring" }
        ],
        services: [
            {
                title: "Network Design & Implementation",
                description: "Custom network architecture design and deployment for optimal performance and scalability.",
                features: ["LAN/WAN Design", "Wireless Planning", "VLAN Configuration", "Scalability Planning"],
                gradient: "from-blue-500 to-indigo-500",
                iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
                icon: "Network"
            },
            {
                title: "Network Security",
                description: "Comprehensive security solutions to protect your network from external and internal threats.",
                features: ["Firewall Setup", "VPN Configuration", "Intrusion Detection", "Security Audits"],
                gradient: "from-red-500 to-rose-500",
                iconBg: "bg-gradient-to-br from-red-500 to-rose-600",
                icon: "Shield"
            },
            {
                title: "Structured Cabling",
                description: "Professional cabling services ensuring organized and reliable physical connectivity.",
                features: ["Cat6/Fiber Optic", "Cable Management", "Server Room Setup", "Patch Panel Termination"],
                gradient: "from-amber-500 to-orange-500",
                iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
                icon: "Settings"
            },
            {
                title: "Monitoring & Maintenance",
                description: "24/7 network monitoring/proactive maintenance to minimize downtime.",
                features: ["Performance Monitoring", "Traffic Analysis", "Firmware Updates", "Preventive Maintenance"],
                gradient: "from-emerald-500 to-green-500",
                iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
                icon: "Activity"
            }
        ],
        softwareList: [
            { name: "Cisco IOS", category: "Network OS", icon: "🌐" },
            { name: "Wireshark", category: "Analysis", icon: "🔍" },
            { name: "SolarWinds", category: "Monitoring", icon: "📊" },
            { name: "PfSense", category: "Firewall", icon: "🛡️" },
            { name: "Ubiquiti", category: "Management", icon: "📡" },
            { name: "OpenVPN", category: "Security", icon: "🔒" }
        ],
        pricingCards: [
            {
                title: "Network AMC - Basic",
                price: "4000",
                originalPrice: "5000",
                image: "/images/network-basic.png",
                color: "cyan",
                category: "Network Maintenance",
                features: [
                    "Router & Switch Configuration",
                    "Wi-Fi Optimization",
                    "Quarterly Network Audits",
                    "Remote Monitoring",
                    "Security Updates",
                    "Business Hours Support"
                ],
                comparisonTable: {
                    title: "Networking Service Plans",
                    headers: ["Basic", "Enterprise"],
                    rows: [
                        { feature: "Router Config", values: [true, true] },
                        { feature: "Wi-Fi Optimization", values: [true, true] },
                        { feature: "Remote Support", values: ["Business Hours", "24/7"] },
                        { feature: "Onsite Visits", values: ["4/Year", "Unlimited"] },
                        { feature: "Security Audit", values: [false, true] },
                        { feature: "Dedicated Engineer", values: [false, true] }
                    ]
                }, buttonText: "Read More"
            },
            {
                title: "Network AMC - Enterprise",
                price: "8000",
                originalPrice: "10000",
                image: "/images/network-enterprise.png",
                color: "blue",
                category: "Enterprise Network Support",
                features: [
                    "All Basic Features Included",
                    "Firewall Management",
                    "24/7 Network Monitoring",
                    "Unlimited Service Calls",
                    "VPN Setup & Management",
                    "Dedicated Network Engineer"
                ],
                buttonText: "Read More"
            }
        ],
        whyChooseUs: {
            badge: "Why Choose Us",
            heading: "Expert Networking Solutions",
            subtitle: "Building reliable, secure, and fast networks involves more than just plugging in cables.",
            reasons: [
                { title: "Network Certified", description: "Our engineers are CCNA/CCNP certified experts.", stat: "100%", statLabel: "Certified Team", color: "from-blue-500 to-indigo-600" },
                { title: "Custom Design", description: "Networks tailored specifically to your office layout and needs.", stat: "500+", statLabel: "Networks Built", color: "from-purple-500 to-fuchsia-600" },
                { title: "Security First", description: "We prioritize security in every layer of your network design.", stat: "0", statLabel: "Security Breaches", color: "from-green-500 to-emerald-600" },
                { title: "Rapid Support", description: "Quick onsite and remote troubleshooting for connectivity issues.", stat: "30min", statLabel: "Avg Response", color: "from-orange-500 to-red-600" }
            ],
            ctaHeading: "Upgrade Your Network Infrastructure",
            ctaDescription: "Get a free network audit today and discover how to improve your business connectivity and security.",
            features: [
                "Free Site Survey",
                "Detailed Network Map",
                "Security Vulnerability Scan",
                "Bandwidth Optimization"
            ]
        },
        brands: {
            title: "Networking Brands We Support",
            subtitle: "We work with top-tier networking hardware manufacturers.",
            list: [
                { name: 'Cisco', category: 'network' },
                { name: 'Juniper', category: 'network' },
                { name: 'Ubiquiti', category: 'network' },
                { name: 'TP-Link', category: 'network' },
                { name: 'D-Link', category: 'network' },
                { name: 'MikroTik', category: 'network' },
                { name: 'Fortinet', category: 'security' },
                { name: 'Sophos', category: 'security' }
            ]
        }
    },
    cctv: {
        hero: {
            title: "Complete CCTV Solutions",
            subtitle: "From CCTV installation to monitoring and maintenance",
            phone: "+91 9810443288"
        },
        stats: [
            { value: "300+", label: "Cameras Installed" },
            { value: "100+", label: "Sites Secured" },
            { value: "24/7", label: "Monitoring" },
            { value: "99%", label: "Uptime" }
        ],
        services: [],
        softwareList: [],
        pricingCards: [
            {
                title: "4 Channel Setup",
                price: "3999",
                originalPrice: "5999",
                features: ["4 Camera Maintenance", "DVR/NVR Check", "Wiring Check", "Remote View Setup"],
                color: "blue",
                buttonText: "Choose Plan"
            },
            {
                title: "8-16 Channel Setup",
                price: "7999",
                originalPrice: "9999",
                features: ["Up to 16 Cameras", "Storage Health Check", "Firmware Updates", "Lens Cleaning"],
                color: "purple",
                buttonText: "Choose Plan"
            }
        ],
        comparisonTable: {
            title: "CCTV Maintenance Covers",
            headers: ["4 Channel", "8-16 Channel", "Enterprise (>32)"],
            rows: [
                { feature: "Camera Cleaning", values: ["Quarterly", "Bi-Monthly", "Monthly"] },
                { feature: "DVR/NVR Check", values: [true, true, true] },
                { feature: "Storage Health", values: ["Basic Check", "Deep Scan", "RAID Management"] },
                { feature: "Remote View Config", values: [true, true, true] },
                { feature: "Cable Replacement", values: ["Upto 10m Free", "Upto 25m Free", "Included"] },
                { feature: "Response Time", values: ["48 Hours", "24 Hours", "4 Hours"] }
            ]
        },
        whyChooseUs: {}
    },
    hardware: {
        hero: {
            title: "Desktop & Laptop Maintenance",
            subtitle: "Keep your computers running at peak performance",
            phone: "+91 9810443288"
        },
        stats: [
            { value: "500+", label: "Systems Maintained" },
            { value: "40%", label: "Extended Lifespan" },
            { value: "99%", label: "Peak Performance" },
            { value: "2hrs", label: "Minimize Downtime" }
        ],
        services: [
            {
                title: "Desktop Computer AMC",
                description: "Complete maintenance for desktop PCs including hardware diagnostics, cleaning, and performance optimization.",
                features: ["Drive cloning", "Data recovery", "SSD upgrades", "NAS configuration"],
                gradient: "from-orange-500 to-amber-500",
                iconBg: "bg-orange-500",
                icon: "HardDrive"
            },
            {
                title: "Network Maintenance",
                description: "Full network support including router configuration, Wi-Fi optimization, and cabling.",
                features: ["Router setup", "Wi-Fi optimization", "Cabling check", "Security audit"],
                gradient: "from-indigo-500 to-violet-500",
                iconBg: "bg-indigo-500",
                icon: "Wifi"
            },
            {
                title: "Peripherals Support",
                description: "Maintenance for printers, scanners, and other peripheral devices.",
                features: ["Printer repair", "Scanner setup", "Driver updates", "Connectivity fix"],
                gradient: "from-pink-500 to-rose-500",
                iconBg: "bg-pink-500",
                icon: "Printer"
            }
        ],
        benefits: [
            {
                title: "Cost Effective",
                desc: "Save up to 40% on maintenance costs compared to per-incident billing.",
                icon: "DollarSign",
                stat: "40%"
            },
            {
                title: "Expert Support",
                desc: "Access to certified professionals for all your hardware needs.",
                icon: "Users",
                stat: "100%"
            },
            {
                title: "Priority Service",
                desc: "Guaranteed response times for all contracted clients.",
                icon: "Clock",
                stat: "2hr"
            },
            {
                title: "Original Parts",
                desc: "We only use genuine spare parts for replacements.",
                icon: "Shield",
                stat: "100%"
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Analysis",
                desc: "We analyze your hardware and requirements",
                icon: "Search"
            },
            {
                step: "02",
                title: "Proposal",
                desc: "Customized AMC proposal for your needs",
                icon: "FileText"
            },
            {
                step: "03",
                title: "Onboarding",
                desc: "Initial maintenance and system indexing",
                icon: "CheckCircle"
            },
            {
                step: "04",
                title: "Support",
                desc: "Regular visits and priority support",
                icon: "Headphones"
            }
        ],
        whyChooseUs: {
            badge: "Why Choose Us",
            heading: "Why Choose Our Hardware Support?",
            subtitle: "Expert maintenance for reliable performance.",
            reasons: [
                { title: "Expert Support", description: "Certified technicians for all hardware brands.", stat: "10+", statLabel: "Years Experience", color: "from-blue-500 to-blue-600" },
                { title: "Peak Performance", description: "Regular optimization keeps systems running fast.", stat: "99%", statLabel: "Uptime", color: "from-green-500 to-green-600" },
                { title: "Fast Response", description: "Minimal downtime with our quick support service.", stat: "2hr", statLabel: "Response", color: "from-orange-500 to-orange-600" },
                { title: "Extended Life", description: "Proactive care extends hardware lifespan significantly.", stat: "40%", statLabel: "Longer Life", color: "from-purple-500 to-purple-600" }
            ],
            ctaHeading: "Ready to Protect Your Hardware?",
            ctaDescription: "Get a customized AMC plan for your desktop, laptop, or server infrastructure today.",
            features: [
                "Hardware Diagnostics",
                "Dust Cleaning",
                "Component Upgrades",
                "24/7 Support"
            ]
        },
        pricingCards: [
            {
                title: "Instant Remote Support AMC Services",
                price: "2000",
                originalPrice: "2500",
                image: "/images/remote-support.png",
                color: "purple",
                category: "Quick Remote Support AMC Services",
                features: [
                    "Cost for Annual Remote Support",
                    "4 times Only Instant Remote",
                    "Any types of files Folder Issue",
                    "Browser / Email / MS office",
                    "Remote Support instance",
                    "Software Corrupt issue solve",
                    "Software Install for Extra cost"
                ],
                buttonText: "Read More"
            },
            {
                title: "Doorstep Computer AMC Services",
                price: "3500",
                originalPrice: "4000",
                image: "/images/desktop-amc.png",
                color: "blue",
                category: "Doorstep Computer AMC Services",
                features: [
                    "Cost for Annual AMC Support",
                    "Minimum 3 PC AMC Support Plan",
                    "Unlimited Visit Onsite Support",
                    "Unlimited Remote Support",
                    "Doorstep Service at your place",
                    "Install new S/W for additional cost",
                    "Support is provided on call"
                ],
                buttonText: "Read More"
            },
            {
                title: "Doorstep Laptop AMC Services",
                price: "4000",
                originalPrice: "4500",
                image: "/images/laptop-amc.png",
                color: "orange",
                category: "Doorstep Laptop AMC Services",
                features: [
                    "Cost for Annual AMC Support",
                    "Unlimited Visit Onsite Support",
                    "Unlimited Remote Support",
                    "Doorstep Service at your home",
                    "Minimum 3 Laptop AMC Support",
                    "Install new S/W for additional cost",
                    "Support is provided on call"
                ],
                buttonText: "Read More"
            },
            {
                title: "Doorstep Mac iMac AMC Services",
                price: "6000",
                originalPrice: "7000",
                image: "/images/mac-amc.png",
                color: "pink",
                category: "Doorstep MAC - iMAC AMC Services",
                features: [
                    "Cost for Annual AMC Support",
                    "Unlimited Visit Onsite Support",
                    "Unlimited Remote Support",
                    "Doorstep Service at your home",
                    "Minimum 3 iMac & Macbook Pro",
                    "Install new S/W for additional cost",
                    "Support is provided on call"
                ],
                buttonText: "Read More"
            }
        ],
        comparisonTable: {
            title: "Hardware AMC Plans",
            headers: ["Silver", "Gold", "Platinum"],
            rows: [
                { feature: "PM Visits", values: ["2/Year", "4/Year", "Monthly"] },
                { feature: "Parts Included", values: [false, "Discounted", true] },
                { feature: "Standby Device", values: [false, false, true] },
                { feature: "Remote Support", values: [true, true, true] }
            ]
        },
    },
    contact: {
        phone: "+91 9810443288",
        email: "kkumar@uniotechit.com",
        address: "Delhi, India"
    },
    general: {
        companyName: "AMC Pro",
        tagline: "Your IT Partner"
    }
};

const ContentContext = createContext();

const API_URL = 'http://localhost:5000/api/content';

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(() => {
        // Load from localStorage if available, otherwise use initialContent
        const saved = localStorage.getItem('websiteContent');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Patch missing features
            if (parsed.home?.whyUs?.rightCard && !parsed.home.whyUs.rightCard.features) {
                parsed.home.whyUs.rightCard.features = initialContent.home.whyUs.rightCard.features;
            }
            return parsed;
        }
        return initialContent;
    });

    // Fetch from API on mount
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch(API_URL);
                if (res.ok) {
                    const data = await res.json();
                    if (data && Object.keys(data).length > 0) {
                        // Merge strategies can be complex. Here we prioritize DB data.
                        // However, if we just added new fields (like hardware.whyChooseUs) and the DB is old,
                        // we might miss them. Ideally, we should merge.
                        // For now, let's use a shallow merge for top-level keys to be safe?
                        // No, deep merge is needed. But assuming the user wants DB state:
                        // We will setContent to data. But if data is missing 'hardware.whyChooseUs', it will be gone.
                        // To fix this, we can assume if 'data' is missing keys that 'initialContent' has, we fill them.
                        // A simple way is to spread initialContent and then data?
                        // const merged = deepMerge(initialContent, data);
                        // Let's rely on the user Resetting if they want the new structure, OR we seed it if empty.
                        // Patch missing features for existing data
                        if (data.home?.whyUs?.rightCard && !data.home.whyUs.rightCard.features) {
                            data.home.whyUs.rightCard.features = initialContent.home.whyUs.rightCard.features;
                        }

                        setContent(data);
                        localStorage.setItem('websiteContent', JSON.stringify(data));
                    } else {
                        // DB is empty, seed it with current content
                        await saveToBackend(content);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch content:", error);
                // Keep using local content
            }
        };
        fetchContent();
    }, []);

    const saveToBackend = async (data) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error("Failed to save to backend:", error);
        }
    };

    const updateContent = (path, value) => {
        setContent(prev => {
            const newContent = { ...prev };
            const keys = path.split('.');
            let current = newContent;

            for (let i = 0; i < keys.length - 1; i++) {
                current[keys[i]] = { ...current[keys[i]] };
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = value;

            // Persist to localStorage
            localStorage.setItem('websiteContent', JSON.stringify(newContent));

            // Persist to Backend (send partial update)
            saveToBackend({ [path]: value });

            return newContent;
        });
    };

    const resetContent = async () => {
        setContent(initialContent);
        localStorage.setItem('websiteContent', JSON.stringify(initialContent));
        // Reset Backend
        await saveToBackend(initialContent);
        // Note: Controller uses $set, so sending full object updates all fields. 
        // Ideally we might want a DELETE /api/content/reset or similar, but sending full initialContent works with $set upsert.
    };

    const exportContent = () => {
        const dataStr = JSON.stringify(content, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'website-content.json';
        link.click();
    };

    const importContent = async (jsonString) => {
        try {
            const imported = JSON.parse(jsonString);
            setContent(imported);
            localStorage.setItem('websiteContent', JSON.stringify(imported));
            await saveToBackend(imported);
            return true;
        } catch (error) {
            console.error('Failed to import content:', error);
            return false;
        }
    };

    return (
        <ContentContext.Provider value={{
            content,
            updateContent,
            resetContent,
            exportContent,
            importContent
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within ContentProvider');
    }
    return context;
};
