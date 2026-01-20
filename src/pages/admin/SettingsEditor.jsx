import { useContent } from '../../context/ContentContext';
import { Save } from 'lucide-react';
import { useState } from 'react';

const SettingsEditor = () => {
    const { content, updateContent, resetContent } = useContent();
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Settings</h1>
                    <p className="text-slate-600">General website settings</p>
                </div>
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${saved
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    <Save className="w-5 h-5" />
                    {saved ? 'Saved!' : 'Save Changes'}
                </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">General Information</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            value={content.general?.companyName || ''}
                            onChange={(e) => updateContent('general.companyName', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Tagline
                        </label>
                        <input
                            type="text"
                            value={content.general?.tagline || ''}
                            onChange={(e) => updateContent('general.tagline', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={content.contact?.phone || ''}
                            onChange={(e) => updateContent('contact.phone', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={content.contact?.email || ''}
                            onChange={(e) => updateContent('contact.email', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Address
                        </label>
                        <textarea
                            value={content.contact?.address || ''}
                            onChange={(e) => updateContent('contact.address', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            rows="3"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 shadow-lg border border-red-100">
                <h2 className="text-2xl font-bold text-red-900 mb-2">Danger Zone</h2>
                <p className="text-red-700 mb-6">Reset all content to original defaults. This cannot be undone.</p>
                <button
                    onClick={() => {
                        if (window.confirm('Are you sure you want to reset all content? This will lose all your changes.')) {
                            resetContent();
                            window.location.reload();
                        }
                    }}
                    className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all"
                >
                    Reset to Defaults
                </button>
            </div>
        </div>
    );
};

export default SettingsEditor;
