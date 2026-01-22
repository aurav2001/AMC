import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2 } from 'lucide-react';
import ImageUpload from '../../components/admin/ImageUpload';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

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
                                        value={plan.name || ''}
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
                                        value={plan.price || ''}
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
                                        value={plan.period || ''}
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
                                        value={plan.description || ''}
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
                                        value={plan.detailedDescription || ''}
                                        onChange={(e) => handlePlanChange(planType, 'detailedDescription', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        rows="3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Plan Image
                                    </label>
                                    <ImageUpload
                                        value={plan.image || ''}
                                        onChange={(base64) => handlePlanChange(planType, 'image', base64)}
                                        label="Upload Plan Image"
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

            {/* Comparison Table Editor */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 mt-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Comparison Table</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Table Title</label>
                        <input
                            type="text"
                            value={content.plans.comparisonTable?.title || ''}
                            onChange={(e) => updateContent('plans.comparisonTable.title', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="block text-sm font-semibold text-slate-700">Comparison Rows</label>
                            <button
                                onClick={() => {
                                    const newRows = [...(content.plans.comparisonTable?.rows || [])];
                                    newRows.push({ feature: '', values: ['', '', ''] });
                                    updateContent('plans.comparisonTable.rows', newRows);
                                }}
                                className="flex items-center gap-2 text-sm text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Add Row
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 font-semibold text-sm text-slate-500 px-2">
                                <div className="col-span-3">Feature</div>
                                <div className="col-span-2 text-center">Basic</div>
                                <div className="col-span-2 text-center">Standard</div>
                                <div className="col-span-2 text-center">Premium</div>
                                <div className="col-span-1"></div>
                            </div>

                            {(content.plans.comparisonTable?.rows || []).map((row, index) => (
                                <div key={index} className="grid grid-cols-12 gap-4 items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <div className="col-span-3">
                                        <input
                                            type="text"
                                            value={row.feature || ''}
                                            onChange={(e) => {
                                                const newRows = [...content.plans.comparisonTable.rows];
                                                newRows[index].feature = e.target.value;
                                                updateContent('plans.comparisonTable.rows', newRows);
                                            }}
                                            className="w-full px-3 py-1.5 border border-slate-300 rounded focus:border-blue-500 text-sm"
                                            placeholder="Feature Name"
                                        />
                                    </div>
                                    {[0, 1, 2].map((valIdx) => (
                                        <div key={valIdx} className="col-span-2">
                                            <input
                                                type="text"
                                                value={row.values[valIdx] || ''}
                                                onChange={(e) => {
                                                    const newRows = [...content.plans.comparisonTable.rows];
                                                    const newValues = [...newRows[index].values];
                                                    newValues[valIdx] = e.target.value; // Keep as string for flexibility (true/false strings or custom text)
                                                    newRows[index].values = newValues;
                                                    updateContent('plans.comparisonTable.rows', newRows);
                                                }}
                                                className="w-full px-3 py-1.5 border border-slate-300 rounded focus:border-blue-500 text-sm text-center"
                                                placeholder={valIdx === 0 ? "Basic val" : valIdx === 1 ? "Std val" : "Prem val"}
                                            />
                                        </div>
                                    ))}
                                    <div className="col-span-1 text-right">
                                        <button
                                            onClick={() => {
                                                const newRows = content.plans.comparisonTable.rows.filter((_, i) => i !== index);
                                                updateContent('plans.comparisonTable.rows', newRows);
                                            }}
                                            className="p-2 text-red-500 hover:bg-red-100 rounded transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info Section Editor */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 mt-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Additional Information Section</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Section Title</label>
                        <input
                            type="text"
                            value={content.plans.additionalInfo?.title || ''}
                            onChange={(e) => updateContent('plans.additionalInfo.title', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                            placeholder="e.g., Understanding Our Plans"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Description / Details</label>
                        <textarea
                            value={content.plans.additionalInfo?.description || ''}
                            onChange={(e) => updateContent('plans.additionalInfo.description', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                            rows="4"
                            placeholder="Write your details here..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Section Image</label>
                        <ImageUpload
                            value={content.plans.additionalInfo?.image || ''}
                            onChange={(base64) => updateContent('plans.additionalInfo.image', base64)}
                            label="Upload Section Image"
                        />
                    </div>
                </div>
                {/* Detailed Sections Editor (Rich Text & Alternating Layout) */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 mt-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Detailed Content Sections</h2>
                        <button
                            onClick={() => {
                                const newSections = [...(content.plans.detailedSections || [])];
                                newSections.push({
                                    id: Date.now(),
                                    title: "New Section",
                                    content: "",
                                    image: "",
                                    imagePosition: "right"
                                });
                                updateContent('plans.detailedSections', newSections);
                            }}
                            className="flex items-center gap-2 text-sm bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Section
                        </button>
                    </div>

                    <div className="space-y-8">
                        {(content.plans.detailedSections || []).map((section, index) => (
                            <div key={section.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button
                                        onClick={() => {
                                            const newSections = content.plans.detailedSections.filter((_, i) => i !== index);
                                            updateContent('plans.detailedSections', newSections);
                                        }}
                                        className="p-2 text-red-500 hover:bg-red-100 rounded transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Top Row: Title and Controls */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Section Title</label>
                                            <input
                                                type="text"
                                                value={section.title || ''}
                                                onChange={(e) => {
                                                    const newSections = [...content.plans.detailedSections];
                                                    newSections[index].title = e.target.value;
                                                    updateContent('plans.detailedSections', newSections);
                                                }}
                                                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Image Position</label>
                                            <div className="flex gap-4 h-[42px] items-center">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={section.imagePosition === 'left'}
                                                        onChange={() => {
                                                            const newSections = [...content.plans.detailedSections];
                                                            newSections[index].imagePosition = 'left';
                                                            updateContent('plans.detailedSections', newSections);
                                                        }}
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-sm font-medium">Image Left</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={section.imagePosition === 'right'}
                                                        onChange={() => {
                                                            const newSections = [...content.plans.detailedSections];
                                                            newSections[index].imagePosition = 'right';
                                                            updateContent('plans.detailedSections', newSections);
                                                        }}
                                                        className="w-4 h-4 text-blue-600"
                                                    />
                                                    <span className="text-sm font-medium">Image Right</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content: Image and Text Stacked */}
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Section Image</label>
                                            <div className="max-w-md">
                                                <ImageUpload
                                                    value={section.image || ''}
                                                    onChange={(base64) => {
                                                        const newSections = [...content.plans.detailedSections];
                                                        newSections[index].image = base64;
                                                        updateContent('plans.detailedSections', newSections);
                                                    }}
                                                    label=""
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Content (Rich Text)</label>
                                            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={section.content || ''}
                                                    onChange={(value) => {
                                                        const newSections = [...content.plans.detailedSections];
                                                        newSections[index].content = value;
                                                        updateContent('plans.detailedSections', newSections);
                                                    }}
                                                    modules={{
                                                        toolbar: [
                                                            [{ 'header': [1, 2, 3, false] }],
                                                            ['bold', 'italic', 'underline', 'strike'],
                                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                            ['link', 'code-block', 'clean']
                                                        ],
                                                    }}
                                                    className="h-64 mb-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlansEditor;
