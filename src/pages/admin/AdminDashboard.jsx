import { useContent } from '../../context/ContentContext';
import { BarChart3, Users, FileText, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
    const { content } = useContent();

    const stats = [
        { icon: FileText, label: 'Total Pages', value: '6', color: 'bg-blue-500' },
        { icon: BarChart3, label: 'Content Sections', value: '20+', color: 'bg-purple-500' },
        { icon: Users, label: 'Plans', value: '3', color: 'bg-green-500' },
        { icon: TrendingUp, label: 'Last Updated', value: 'Today', color: 'bg-orange-500' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
                <p className="text-slate-600">Manage your website content from one place</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`${stat.color} p-3 rounded-xl text-white`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                        href="/admin/home"
                        className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all border border-blue-200"
                    >
                        <h3 className="font-bold text-slate-900 mb-2">Edit Home Page</h3>
                        <p className="text-sm text-slate-600">Update hero slider and stats</p>
                    </a>
                    <a
                        href="/admin/plans"
                        className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all border border-purple-200"
                    >
                        <h3 className="font-bold text-slate-900 mb-2">Manage Plans</h3>
                        <p className="text-sm text-slate-600">Edit pricing and features</p>
                    </a>
                    <a
                        href="/admin/settings"
                        className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all border border-green-200"
                    >
                        <h3 className="font-bold text-slate-900 mb-2">Settings</h3>
                        <p className="text-sm text-slate-600">General configuration</p>
                    </a>
                </div>
            </div>

            {/* Current Content Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Content</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <div className="font-semibold text-slate-700 mb-2">Company Name</div>
                        <div className="text-slate-900">{content.general?.companyName || 'AMC Pro'}</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <div className="font-semibold text-slate-700 mb-2">Contact Phone</div>
                        <div className="text-slate-900">{content.contact?.phone || '+91 9810443288'}</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <div className="font-semibold text-slate-700 mb-2">Hero Slides</div>
                        <div className="text-slate-900">{content.home?.hero?.slides?.length || 3} slides configured</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
