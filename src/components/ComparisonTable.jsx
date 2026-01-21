import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const ComparisonTable = ({ data }) => {
    if (!data) return null;

    const { title = "Plan Comparison", headers = [], rows = [] } = data;

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="p-6 bg-slate-900 text-white text-center">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="text-slate-400 mt-2 text-sm">Compare features to find the best fit for your needs</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider text-left text-slate-800 w-1/4">
                                        Features
                                    </th>
                                    {headers.map((header, idx) => (
                                        <th
                                            key={idx}
                                            className="px-6 py-5 text-sm font-bold uppercase tracking-wider text-center text-slate-700 w-1/4"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {rows.map((row, rowIdx) => {
                                    // Support both legacy array format and new object format
                                    const isLegacy = Array.isArray(row);

                                    // If legacy, first item is feature, rest are values
                                    const feature = isLegacy ? row[0] : row.feature;
                                    const values = isLegacy ? row.slice(1) : row.values;

                                    return (
                                        <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                                            {/* Feature Name Column */}
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                                                {feature}
                                            </td>

                                            {/* Values Columns */}
                                            {values && values.map((cell, cellIdx) => (
                                                <td
                                                    key={cellIdx}
                                                    className="px-6 py-4 text-sm text-center text-slate-600"
                                                >
                                                    {typeof cell === 'boolean' ? (
                                                        cell ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                                                    ) : (
                                                        cell || <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
