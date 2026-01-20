import { useState } from 'react';
import { iconLibrary } from '../../utils/iconLibrary';
import { Search, X } from 'lucide-react';

const IconPicker = ({ selectedIcon, onSelect, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sort icons: matches first, then alphabetical
    const filteredIcons = Object.keys(iconLibrary).filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort();

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">Select an Icon</h3>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search icons (e.g. 'user', 'settings', 'server')..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            autoFocus
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                        {filteredIcons.map(name => {
                            const Icon = iconLibrary[name];
                            const isSelected = selectedIcon === name;
                            return (
                                <button
                                    key={name}
                                    onClick={() => onSelect(name)}
                                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${isSelected
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-transparent hover:bg-slate-50 hover:border-slate-200 text-slate-600'
                                        }`}
                                    title={name}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-[10px] truncate w-full text-center font-medium">{name}</span>
                                </button>
                            );
                        })}
                    </div>
                    {filteredIcons.length === 0 && (
                        <div className="text-center py-12 text-slate-500">
                            No icons found matching "{searchTerm}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IconPicker;
