import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary-500 p-2 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">AMC Pro</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Providing top-tier Annual Maintenance Contracts for all your computing needs. Reliable, fast, and professional service guaranteed.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="/#plans" className="text-slate-300 hover:text-white transition-colors">Our Plans</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-slate-300">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>Noida Sector-63, UP (India) Upper 2nd Floor Plot No-273, Noida 201306</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-300">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>+91 9810443288</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-300">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>kkumar@uniotechit.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-400">Follow Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} AMC Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
