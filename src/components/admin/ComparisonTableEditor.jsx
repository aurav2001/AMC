import React from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const ComparisonTableEditor = ({ data, onChange }) => {
    // Helper to update top-level fields
    const handleFieldChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    // Helper to update headers
    const handleHeaderChange = (index, value) => {
        const newHeaders = [...(data?.headers || [])];
        newHeaders[index] = value;
        onChange({ ...data, headers: newHeaders });
    };

    const addHeader = () => {
        const newHeaders = [...(data?.headers || []), 'New Column'];
        // Also update all rows to have a corresponding value for this new column
        const newRows = (data?.rows || []).map(row => ({
            ...row,
            values: [...(row.values || []), false] // Default to false (X icon)
        }));

        onChange({ ...data, headers: newHeaders, rows: newRows });
    };

    const removeHeader = (index) => {
        const newHeaders = (data?.headers || []).filter((_, i) => i !== index);
        // Remove corresponding value from all rows
        const newRows = (data?.rows || []).map(row => ({
            ...row,
            values: (row.values || []).filter((_, i) => i !== index)
        }));

        onChange({ ...data, headers: newHeaders, rows: newRows });
    };

    // Helper to update rows
    const handleRowFeatureChange = (rowIndex, value) => {
        const newRows = [...(data?.rows || [])];
        newRows[rowIndex] = { ...newRows[rowIndex], feature: value };
        onChange({ ...data, rows: newRows });
    };

    const handleRowValueChange = (rowIndex, colIndex, value) => {
        const newRows = [...(data?.rows || [])];
        const newValues = [...(newRows[rowIndex].values || [])];

        // Handle boolean conversions properly
        if (value === 'true') value = true;
        if (value === 'false') value = false;

        newValues[colIndex] = value;
        newRows[rowIndex] = { ...newRows[rowIndex], values: newValues };
        onChange({ ...data, rows: newRows });
    };

    const addRow = () => {
        const newRows = [...(data?.rows || []), {
            feature: 'New Feature',
            values: Array((data?.headers || []).length).fill(false)
        }];
        onChange({ ...data, rows: newRows });
    };

    const removeRow = (index) => {
        const newRows = (data?.rows || []).filter((_, i) => i !== index);
        onChange({ ...data, rows: newRows });
    };

    const moveRow = (index, direction) => {
        const newRows = [...(data?.rows || [])];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newRows.length) {
            [newRows[index], newRows[newIndex]] = [newRows[newIndex], newRows[index]];
            onChange({ ...data, rows: newRows });
        }
    };

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Comparison Table</h2>

            {/* Table Title */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Table Title</label>
                <input
                    type="text"
                    value={data?.title || ''}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="e.g. Compare Plans"
                />
            </div>

            {/* Headers Configuration */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">Column Headers (Plans)</label>
                    <button onClick={addHeader} className="text-xs text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Add Column
                    </button>
                </div>
                <div className="grid grid-cols-2md:grid-cols-4 gap-2">
                    {(data?.headers || []).map((header, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={header}
                                onChange={(e) => handleHeaderChange(idx, e.target.value)}
                                className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                placeholder={`Header ${idx + 1}`}
                            />
                            <button onClick={() => removeHeader(idx)} className="text-red-500 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rows Configuration */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Feature Rows</h3>
                    <button
                        onClick={addRow}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Add Row
                    </button>
                </div>

                <div className="space-y-3">
                    {(data?.rows || []).map((row, rowIndex) => (
                        <div key={rowIndex} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex flex-col gap-1">
                                    <button
                                        onClick={() => moveRow(rowIndex, 'up')}
                                        disabled={rowIndex === 0}
                                        className="text-slate-400 hover:text-slate-600 disabled:opacity-30"
                                    >
                                        <ChevronUp className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => moveRow(rowIndex, 'down')}
                                        disabled={rowIndex === (data?.rows || []).length - 1}
                                        className="text-slate-400 hover:text-slate-600 disabled:opacity-30"
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={row.feature}
                                    onChange={(e) => handleRowFeatureChange(rowIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none font-medium"
                                    placeholder="Feature Name"
                                />
                                <button onClick={() => removeRow(rowIndex)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Values for each column */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pl-8">
                                {(data?.headers || []).map((header, colIndex) => (
                                    <div key={colIndex} className="space-y-1">
                                        <label className="text-xs text-slate-500 block truncate" title={header}>{header}</label>
                                        <select
                                            value={row.values?.[colIndex]?.toString() || 'false'}
                                            onChange={(e) => handleRowValueChange(rowIndex, colIndex, e.target.value)}
                                            className="w-full px-2 py-1.5 border border-slate-200 rounded text-sm focus:border-blue-500 focus:outline-none"
                                        >
                                            <option value="true">✅ Yes (Check)</option>
                                            <option value="false">❌ No (X)</option>
                                            <option value="custom">📝 Custom Text...</option>
                                        </select>
                                        {/* If value is not boolean, show text input */}
                                        {row.values?.[colIndex] !== true && row.values?.[colIndex] !== false && (
                                            <input
                                                type="text"
                                                value={row.values?.[colIndex] || ''}
                                                onChange={(e) => handleRowValueChange(rowIndex, colIndex, e.target.value)}
                                                className="w-full mt-1 px-2 py-1.5 border border-slate-200 rounded text-sm focus:border-blue-500 focus:outline-none"
                                                placeholder="Custom value"
                                                autoFocus
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComparisonTableEditor;
