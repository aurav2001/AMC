import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2 } from 'lucide-react';

const PlansEditor = () => {
    const { content, updateContent } = useContent();
    const [saved, setSaved] = useState(false);

    const planTypes = ['basic', 'standard', 'premium'];

    const handlePlanChange = (planType, field, value) => {
        updateContent(`plans.${planType}.${field}`, value);
    };

    const handleFeatureChange = (planType, index, value) => {
        const newFeatures = [...content.plans[planType].features];
        newFeatures[index] = value;
        updateContent(`plans.${planType}.features`, newFeatures);
    };

    const addFeature = (planType) => {
        const newFeatures = [...content.plans[planType].features, ''];
        updateContent(`plans.${planType}.features`, newFeatures);
    };

    const removeFeature = (planType, index) => {
        const newFeatures = content.plans[planType].features.filter((_, i) => i !== index);
        updateContent(`plans.${planType}.features`, newFeatures);
    };

    const handleInclusionChange = (planType, index, value) => {
        const newInclusions = [...content.plans[planType].inclusions];
        newInclusions[index] = value;
        updateContent(`plans.${planType}.inclusions`, newInclusions);
    };

    const addInclusion = (planType) => {
        const newInclusions = [...content.plans[planType].inclusions, ''];
        updateContent(`plans.${planType}.inclusions`, newInclusions);
    };

    const removeInclusion = (planType, index) => {
        const newInclusions = content.plans[planType].inclusions.filter((_, i) => i !== index);
        updateContent(`plans.${planType}.inclusions`, newInclusions);
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Plans & Pricing Editor</h1>
                    <p className="text-slate-600">Manage your AMC plans and pricing</p>
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {planTypes.map((planType) => {
                    const plan = content.plans[planType];
                    const colors = {
                        basic: 'border-blue-200 bg-blue-50',
                        standard: 'border-purple-200 bg-purple-50',
                        premium: 'border-orange-200 bg-orange-50'
                    };

                    return (
                        <div key={planType} className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors[planType]}`}>
                            <h2 className="text-xl font-bold text-slate-900 mb-6 capitalize">{planType} Plan</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Plan Name
                                    </label>
                                    <input
                                        type="text"
                                        value={plan.name}
                                        onChange={(e) => handlePlanChange(planType, 'name', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        value={plan.price}
                                        onChange={(e) => handlePlanChange(planType, 'price', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="₹10,000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Period
                                    </label>
                                    <input
                                        type="text"
                                        value={plan.period}
                                        onChange={(e) => handlePlanChange(planType, 'period', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="/ year"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        value={plan.description}
                                        onChange={(e) => handlePlanChange(planType, 'description', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        rows="2"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Detailed Description
                                    </label>
                                    <textarea
                                        value={plan.detailedDescription}
                                        onChange={(e) => handlePlanChange(planType, 'detailedDescription', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        rows="3"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="block text-sm font-semibold text-slate-700">
                                            Features
                                        </label>
                                        <button
                                            onClick={() => addFeature(planType)}
                                            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        {(plan.features || []).map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={feature}
                                                    onChange={(e) => handleFeatureChange(planType, index, e.target.value)}
                                                    className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                                    placeholder="Feature name"
                                                />
                                                <button
                                                    onClick={() => removeFeature(planType, index)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="block text-sm font-semibold text-slate-700">
                                            Inclusions
                                        </label>
                                        <button
                                            onClick={() => addInclusion(planType)}
                                            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        {(plan.inclusions || []).map((inclusion, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={inclusion}
                                                    onChange={(e) => handleInclusionChange(planType, index, e.target.value)}
                                                    className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                                    placeholder="Inclusion detail"
                                                />
                                                <button
                                                    onClick={() => removeInclusion(planType, index)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlansEditor;
