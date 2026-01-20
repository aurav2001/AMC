import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Home, CreditCard, Code, Cpu,
    Settings, LogOut, Save, RotateCcw, Download, Upload,
    Menu, X, Building2, Printer, Network, Camera
} from 'lucide-react';

import { useContent } from '../../context/ContentContext';

const AdminLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { resetContent, exportContent } = useContent();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const menuItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/home', icon: Home, label: 'Home Page' },
        { path: '/admin/plans', icon: CreditCard, label: 'Plans & Pricing' },
        { path: '/admin/software', icon: Code, label: 'Software Page' },
        { path: '/admin/hardware', icon: Cpu, label: 'Hardware Page' },
        { path: '/admin/business', icon: Building2, label: 'Business Page' },
        { path: '/admin/printer', icon: Printer, label: 'Printer Page' },
        { path: '/admin/networking', icon: Network, label: 'Networking Page' },
        { path: '/admin/cctv', icon: Camera, label: 'CCTV Page' },
        { path: '/admin/settings', icon: Settings, label: 'Settings' },
    ];

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuth');
        navigate('/admin');
    };

    const handleReset = () => {
        if (showResetConfirm) {
            resetContent();
            setShowResetConfirm(false);
            alert('Content reset to defaults!');
        } else {
            setShowResetConfirm(true);
            setTimeout(() => setShowResetConfirm(false), 3000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 flex flex-col`}>
                {/* Header */}
                <div className="p-6 border-b border-slate-700">
                    <div className="flex items-center justify-between">
                        {isSidebarOpen && (
                            <div>
                                <h1 className="text-xl font-bold">AMC Admin</h1>
                                <p className="text-xs text-slate-400">Content Manager</p>
                            </div>
                        )}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                        >
                            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`}
                                title={!isSidebarOpen ? item.label : ''}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions */}
                <div className="p-4 border-t border-slate-700 space-y-2">
                    <button
                        onClick={exportContent}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white rounded-xl transition-all"
                        title={!isSidebarOpen ? 'Export Content' : ''}
                    >
                        <Download className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span>Export</span>}
                    </button>
                    <button
                        onClick={handleReset}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${showResetConfirm
                            ? 'bg-red-600 text-white'
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                            }`}
                        title={!isSidebarOpen ? 'Reset Content' : ''}
                    >
                        <RotateCcw className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span>{showResetConfirm ? 'Click to Confirm' : 'Reset'}</span>}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-red-600 hover:text-white rounded-xl transition-all"
                        title={!isSidebarOpen ? 'Logout' : ''}
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto relative">
                {/* Exit to Home Button */}
                <button
                    onClick={() => navigate('/')}
                    className="fixed top-6 right-6 z-50 p-3 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-red-300 group"
                    title="Exit to Home Page"
                >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
