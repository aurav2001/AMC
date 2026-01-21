import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import IconPicker from '../../components/admin/IconPicker';
import ImageUpload from '../../components/admin/ImageUpload';
import DynamicIcon from '../../components/DynamicIcon';
import ComparisonTableEditor from '../../components/admin/ComparisonTableEditor';

const HardwareEditor = () => {
    const { content, updateContent } = useContent();
    const [saved, setSaved] = useState(false);
    const [activeTab, setActiveTab] = useState('services');
    const [iconPickerOpen, setIconPickerOpen] = useState(false);
    const [currentIconField, setCurrentIconField] = useState(null); // { type: 'service'|'benefit'|'process', index: number }

    const openIconPicker = (type, index) => {
        setCurrentIconField({ type, index });
        setIconPickerOpen(true);
    };

    const handleIconSelect = (iconName) => {
        if (!currentIconField) return;
        const { type, index } = currentIconField;

        if (type === 'service') {
            handleServiceChange(index, 'icon', iconName);
        } else if (type === 'benefit') {
            handleBenefitChange(index, 'icon', iconName);
        } else if (type === 'process') {
            handleProcessStepChange(index, 'icon', iconName); // Assuming handleProcessStepChange is the correct function for process steps
        }
        setIconPickerOpen(false);
    };

    // --- Services Handlers ---
    const handleHeroChange = (field, value) => {
        updateContent(`hardware.hero.${field}`, value);
    };

    const handleStatChange = (index, field, value) => {
        const newStats = [...(content.hardware?.stats || [])];
        newStats[index] = { ...newStats[index], [field]: value };
        updateContent('hardware.stats', newStats);
    };

    const handleServiceChange = (index, field, value) => {
        const newServices = [...(content.hardware?.services || [])];
        newServices[index] = { ...newServices[index], [field]: value };
        updateContent('hardware.services', newServices);
    };

    const handleFeatureChange = (serviceIndex, featureIndex, value) => {
        const newServices = [...(content.hardware?.services || [])];
        newServices[serviceIndex].features[featureIndex] = value;
        updateContent('hardware.services', newServices);
    };

    const addFeature = (serviceIndex) => {
        const newServices = [...(content.hardware?.services || [])];
        newServices[serviceIndex].features.push('');
        updateContent('hardware.services', newServices);
    };

    const removeFeature = (serviceIndex, featureIndex) => {
        const newServices = [...(content.hardware?.services || [])];
        newServices[serviceIndex].features = newServices[serviceIndex].features.filter((_, i) => i !== featureIndex);
        updateContent('hardware.services', newServices);
    };

    const addService = () => {
        const newServices = [...(content.hardware?.services || []), {
            title: 'New Service',
            description: 'Service description',
            features: ['Feature 1', 'Feature 2'],
            gradient: 'from-blue-500 to-cyan-500',
            iconBg: 'bg-blue-500'
        }];
        updateContent('hardware.services', newServices);
    };

    const removeService = (index) => {
        const newServices = (content.hardware?.services || []).filter((_, i) => i !== index);
        updateContent('hardware.services', newServices);
    };

    const moveService = (index, direction) => {
        const newServices = [...(content.hardware?.services || [])];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newServices.length) {
            [newServices[index], newServices[newIndex]] = [newServices[newIndex], newServices[index]];
            updateContent('hardware.services', newServices);
        }
    };

    const handleBenefitChange = (index, field, value) => {
        const newBenefits = [...(content.hardware?.benefits || [])];
        newBenefits[index] = { ...newBenefits[index], [field]: value };
        updateContent('hardware.benefits', newBenefits);
    };

    const addBenefit = () => {
        const newBenefits = [...(content.hardware?.benefits || []), { title: 'New Benefit', desc: 'Description', stat: '0%' }];
        updateContent('hardware.benefits', newBenefits);
    };

    const removeBenefit = (index) => {
        const newBenefits = (content.hardware?.benefits || []).filter((_, i) => i !== index);
        updateContent('hardware.benefits', newBenefits);
    };

    const handleProcessStepChange = (index, field, value) => {
        const newSteps = [...(content.hardware?.processSteps || [])];
        newSteps[index] = { ...newSteps[index], [field]: value };
        updateContent('hardware.processSteps', newSteps);
    };

    const addProcessStep = () => {
        const stepNum = ((content.hardware?.processSteps || []).length + 1).toString().padStart(2, '0');
        const newSteps = [...(content.hardware?.processSteps || []), { step: stepNum, title: 'New Step', desc: 'Description' }];
        updateContent('hardware.processSteps', newSteps);
    };

    const removeProcessStep = (index) => {
        const newSteps = (content.hardware?.processSteps || []).filter((_, i) => i !== index);
        updateContent('hardware.processSteps', newSteps);
    };

    // Why Choose Us Handlers
    const handleWhyChooseUsChange = (field, value) => {
        updateContent(`hardware.whyChooseUs.${field}`, value);
    };

    const handleReasonChange = (index, field, value) => {
        const newReasons = [...(content.hardware?.whyChooseUs?.reasons || [])];
        newReasons[index] = { ...newReasons[index], [field]: value };
        updateContent('hardware.whyChooseUs.reasons', newReasons);
    };

    const addReason = () => {
        const newReasons = [...(content.hardware?.whyChooseUs?.reasons || []), {
            title: 'New Reason',
            description: 'Description',
            stat: '10+',
            statLabel: 'Label',
            color: 'from-blue-500 to-blue-600'
        }];
        updateContent('hardware.whyChooseUs.reasons', newReasons);
    };

    const removeReason = (index) => {
        const newReasons = (content.hardware?.whyChooseUs?.reasons || []).filter((_, i) => i !== index);
        updateContent('hardware.whyChooseUs.reasons', newReasons);
    };

    const handleFeatureTextChange = (index, value) => {
        const newFeatures = [...(content.hardware?.whyChooseUs?.features || [])];
        newFeatures[index] = value;
        updateContent('hardware.whyChooseUs.features', newFeatures);
    };

    const addFeatureText = () => {
        const newFeatures = [...(content.hardware?.whyChooseUs?.features || []), 'New Feature'];
        updateContent('hardware.whyChooseUs.features', newFeatures);
    };

    const removeFeatureText = (index) => {
        const newFeatures = (content.hardware?.whyChooseUs?.features || []).filter((_, i) => i !== index);
        updateContent('hardware.whyChooseUs.features', newFeatures);
    };

    // Pricing Cards handlers
    const handlePricingCardChange = (index, field, value) => {
        const newCards = [...(content.hardware?.pricingCards || [])];
        newCards[index] = { ...newCards[index], [field]: value };
        updateContent('hardware.pricingCards', newCards);
    };

    const addPricingCard = () => {
        const newCards = [...(content.hardware?.pricingCards || []), {
            title: 'New Plan',
            price: '0',
            originalPrice: '0',
            features: ['Feature 1'],
            color: 'blue',
            buttonText: 'Read More'
        }];
        updateContent('hardware.pricingCards', newCards);
    };

    const removePricingCard = (index) => {
        const newCards = (content.hardware?.pricingCards || []).filter((_, i) => i !== index);
        updateContent('hardware.pricingCards', newCards);
    };

    const handlePricingCardFeatureChange = (cardIndex, featureIndex, value) => {
        const newCards = [...(content.hardware?.pricingCards || [])];
        newCards[cardIndex].features[featureIndex] = value;
        updateContent('hardware.pricingCards', newCards);
    };

    const addPricingCardFeature = (cardIndex) => {
        const newCards = [...(content.hardware?.pricingCards || [])];
        newCards[cardIndex].features.push('New Feature');
        updateContent('hardware.pricingCards', newCards);
    };

    const removePricingCardFeature = (cardIndex, featureIndex) => {
        const newCards = [...(content.hardware?.pricingCards || [])];
        newCards[cardIndex].features = newCards[cardIndex].features.filter((_, i) => i !== featureIndex);
        updateContent('hardware.pricingCards', newCards);
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleComparisonTableChange = (newData) => {
        updateContent('hardware.comparisonTable', newData);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Hardware Page Editor</h1>
                    <p className="text-slate-600">Manage all hardware page content</p>
                </div>
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    <Save className="w-5 h-5" />
                    {saved ? 'Saved!' : 'Save Changes'}
                </button>
            </div>

            {/* Hero Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Hero Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                        <input
                            type="text"
                            value={content.hardware?.hero?.title || ''}
                            onChange={(e) => handleHeroChange('title', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle</label>
                        <textarea
                            value={content.hardware?.hero?.subtitle || ''}
                            onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            rows="2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                        <input
                            type="tel"
                            value={content.hardware?.hero?.phone || ''}
                            onChange={(e) => handleHeroChange('phone', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {content.hardware?.stats?.map((stat, index) => (
                        <div key={index} className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                            <input
                                type="text"
                                value={stat.value}
                                onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none mb-2"
                                placeholder="Value"
                            />
                            <input
                                type="text"
                                value={stat.label}
                                onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none"
                                placeholder="Label"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Service Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Service Cards</h2>
                    <button
                        onClick={addService}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Service
                    </button>
                </div>

                <div className="space-y-6">
                    {content.hardware?.services?.map((service, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900">Service {index + 1}</h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => moveService(index, 'up')}
                                        disabled={index === 0}
                                        className="p-2 text-slate-600 hover:bg-slate-200 rounded disabled:opacity-30"
                                    >
                                        <ChevronUp className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => moveService(index, 'down')}
                                        disabled={index === (content.hardware?.services || []).length - 1}
                                        className="p-2 text-slate-600 hover:bg-slate-200 rounded disabled:opacity-30"
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => removeService(index)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    value={service.title}
                                    onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    placeholder="Service title"
                                />
                                <textarea
                                    value={service.description}
                                    onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    placeholder="Description"
                                />

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Icon</label>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-100 p-2 rounded-lg">
                                            <DynamicIcon name={service.icon} className="w-6 h-6 text-slate-600" />
                                        </div>
                                        <button
                                            onClick={() => openIconPicker('service', index)}
                                            className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-medium transition-colors"
                                        >
                                            Change Icon
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm font-semibold text-slate-700">Features</label>
                                        <button
                                            onClick={() => addFeature(index)}
                                            className="text-sm text-blue-600 hover:text-blue-700"
                                        >
                                            + Add Feature
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        {(service.features || []).map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={feature}
                                                    onChange={(e) => handleFeatureChange(index, fIndex, e.target.value)}
                                                    className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                                />
                                                <button
                                                    onClick={() => removeFeature(index, fIndex)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Gradient</label>
                                        <input
                                            type="text"
                                            value={service.gradient}
                                            onChange={(e) => handleServiceChange(index, 'gradient', e.target.value)}
                                            className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                            placeholder="from-blue-500 to-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Icon Background</label>
                                        <input
                                            type="text"
                                            value={service.iconBg}
                                            onChange={(e) => handleServiceChange(index, 'iconBg', e.target.value)}
                                            className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                            placeholder="bg-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Benefits</h2>
                    <button
                        onClick={addBenefit}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Benefit
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.hardware?.benefits?.map((benefit, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-slate-700">Benefit {index + 1}</span>
                                <button
                                    onClick={() => removeBenefit(index)}
                                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={benefit.title}
                                onChange={(e) => handleBenefitChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                value={benefit.desc}
                                onChange={(e) => handleBenefitChange(index, 'desc', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Description"
                            />
                            <input
                                type="text"
                                value={benefit.stat}
                                onChange={(e) => handleBenefitChange(index, 'stat', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                placeholder="Stat (e.g., 40%)"
                            />
                            <div className="mt-2">
                                <label className="block text-xs font-semibold text-slate-500 mb-1">Icon</label>
                                <div className="flex items-center gap-2">
                                    <div className="bg-white p-1.5 rounded border border-slate-200">
                                        <DynamicIcon name={benefit.icon} className="w-4 h-4 text-slate-600" />
                                    </div>
                                    <button
                                        onClick={() => openIconPicker('benefit', index)}
                                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Change Icon
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us Section</h2>

                {/* Header Info */}
                <div className="space-y-4 mb-8">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Badge</label>
                        <input
                            type="text"
                            value={content.hardware?.whyChooseUs?.badge || ''}
                            onChange={(e) => handleWhyChooseUsChange('badge', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Heading</label>
                        <input
                            type="text"
                            value={content.hardware?.whyChooseUs?.heading || ''}
                            onChange={(e) => handleWhyChooseUsChange('heading', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle</label>
                        <textarea
                            value={content.hardware?.whyChooseUs?.subtitle || ''}
                            onChange={(e) => handleWhyChooseUsChange('subtitle', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                            rows="2"
                        />
                    </div>
                </div>

                {/* Reasons List */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-lg font-semibold text-slate-900">Reasons Cards</label>
                        <button onClick={addReason} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            + Add Reason
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {(content.hardware?.whyChooseUs?.reasons || []).map((reason, idx) => (
                            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-sm">Reason {idx + 1}</span>
                                    <button onClick={() => removeReason(idx)} className="text-red-500 hover:text-red-700">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={reason.title}
                                        onChange={(e) => handleReasonChange(idx, 'title', e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Title"
                                    />
                                    <input
                                        type="text"
                                        value={reason.stat}
                                        onChange={(e) => handleReasonChange(idx, 'stat', e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Stat (e.g. 10+)"
                                    />
                                    <input
                                        type="text"
                                        value={reason.statLabel}
                                        onChange={(e) => handleReasonChange(idx, 'statLabel', e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Stat Label"
                                    />
                                    <input
                                        type="text"
                                        value={reason.description}
                                        onChange={(e) => handleReasonChange(idx, 'description', e.target.value)}
                                        className="w-full px-3 py-2 border rounded md:col-span-2"
                                        placeholder="Description"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card / CTA */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Right Card (CTA)</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Card Title</label>
                            <input
                                type="text"
                                value={content.hardware?.whyChooseUs?.ctaHeading || ''}
                                onChange={(e) => handleWhyChooseUsChange('ctaHeading', e.target.value)}
                                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Card Description</label>
                            <textarea
                                value={content.hardware?.whyChooseUs?.ctaDescription || ''}
                                onChange={(e) => handleWhyChooseUsChange('ctaDescription', e.target.value)}
                                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                rows="2"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-semibold text-slate-700">Features List</label>
                                <button onClick={addFeatureText} className="text-sm text-blue-600 hover:text-blue-700">
                                    + Add Feature Item
                                </button>
                            </div>
                            <div className="space-y-2">
                                {(content.hardware?.whyChooseUs?.features || []).map((text, idx) => (
                                    <div key={idx} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={text}
                                            onChange={(e) => handleFeatureTextChange(idx, e.target.value)}
                                            className="w-full px-3 py-2 border rounded"
                                        />
                                        <button onClick={() => removeFeatureText(idx)} className="text-red-500 px-2">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Plans */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Pricing Plans</h2>
                    <button
                        onClick={addPricingCard}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Plan
                    </button>
                </div>

                <div className="space-y-6">
                    {content.hardware?.pricingCards?.map((card, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900">Plan {index + 1}</h3>
                                <button
                                    onClick={() => removePricingCard(index)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={card.title || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'title', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Plan Title"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={card.price || ''}
                                            onChange={(e) => handlePricingCardChange(index, 'price', e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            placeholder="Price"
                                        />
                                        <input
                                            type="text"
                                            value={card.originalPrice || ''}
                                            onChange={(e) => handlePricingCardChange(index, 'originalPrice', e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            placeholder="Original Price"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={card.category || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'category', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Category Tag"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <select
                                        value={card.color}
                                        onChange={(e) => handlePricingCardChange(index, 'color', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="purple">Purple</option>
                                        <option value="blue">Blue</option>
                                        <option value="orange">Orange</option>
                                        <option value="pink">Pink</option>
                                    </select>
                                    <ImageUpload
                                        value={card.image || ''}
                                        onChange={(base64) => handlePricingCardChange(index, 'image', base64)}
                                        label="Card Image"
                                    />
                                    <input
                                        type="text"
                                        value={card.buttonText || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'buttonText', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Button Text"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-semibold text-slate-700">Features</label>
                                    <button
                                        onClick={() => addPricingCardFeature(index)}
                                        className="text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        + Add Feature
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {(card.features || []).map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={feature || ''}
                                                onChange={(e) => handlePricingCardFeatureChange(index, fIndex, e.target.value)}
                                                className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => removePricingCardFeature(index, fIndex)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Process Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Process Steps</h2>
                    <button
                        onClick={addProcessStep}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Step
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(content.hardware?.processSteps || []).map((step, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-slate-700">Step {index + 1}</span>
                                    <div className="bg-slate-100 p-1.5 rounded-lg flex items-center gap-2">
                                        <DynamicIcon name={step.icon} className="w-4 h-4 text-slate-600" />
                                        <button
                                            onClick={() => openIconPicker('process', index)}
                                            className="text-xs text-blue-600 hover:text-blue-800 font-medium px-1"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeProcessStep(index)}
                                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={step.step}
                                onChange={(e) => handleProcessStepChange(index, 'step', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Step number (e.g., 01)"
                            />
                            <input
                                type="text"
                                value={step.title}
                                onChange={(e) => handleProcessStepChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                value={step.desc}
                                onChange={(e) => handleProcessStepChange(index, 'desc', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                placeholder="Description"
                            />
                        </div>
                    ))}
                </div>
            </div >

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <ComparisonTableEditor
                    data={content.hardware?.comparisonTable}
                    onChange={handleComparisonTableChange}
                />
            </div>

            {/* Pricing Plans */}
            < div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100" >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Pricing Plans</h2>
                    <button
                        onClick={addPricingCard}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Plan
                    </button>
                </div>

                <div className="space-y-6">
                    {content.hardware?.pricingCards?.map((card, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900">Plan {index + 1}</h3>
                                <button
                                    onClick={() => removePricingCard(index)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={card.title || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'title', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Plan Title"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={card.price || ''}
                                            onChange={(e) => handlePricingCardChange(index, 'price', e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            placeholder="Price"
                                        />
                                        <input
                                            type="text"
                                            value={card.originalPrice || ''}
                                            onChange={(e) => handlePricingCardChange(index, 'originalPrice', e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            placeholder="Original Price"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={card.category || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'category', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Category Tag"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <select
                                        value={card.color}
                                        onChange={(e) => handlePricingCardChange(index, 'color', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="purple">Purple</option>
                                        <option value="blue">Blue</option>
                                        <option value="orange">Orange</option>
                                        <option value="pink">Pink</option>
                                    </select>
                                    <ImageUpload
                                        value={card.image || ''}
                                        onChange={(base64) => handlePricingCardChange(index, 'image', base64)}
                                        label="Card Image"
                                    />
                                    <input
                                        type="text"
                                        value={card.buttonText}
                                        onChange={(e) => handlePricingCardChange(index, 'buttonText', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Button Text"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-semibold text-slate-700">Features</label>
                                    <button
                                        onClick={() => addPricingCardFeature(index)}
                                        className="text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        + Add Feature
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {(card.features || []).map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={(e) => handlePricingCardFeatureChange(index, fIndex, e.target.value)}
                                                className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => removePricingCardFeature(index, fIndex)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            {/* Pricing Plans */}
            < div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100" >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Pricing Plans</h2>
                    <button
                        onClick={addPricingCard}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Plan
                    </button>
                </div>

                <div className="space-y-6">
                    {content.hardware?.pricingCards?.map((card, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900">Plan {index + 1}</h3>
                                <button
                                    onClick={() => removePricingCard(index)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={card.title || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'title', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Plan Title"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={card.price || ''}
                                            onChange={(e) => handlePricingCardChange(index, 'price', e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            placeholder="Price"
                                        />
                                        <input
                                            type="text"
                                            value={card.originalPrice || ''}
                                            onChange={(e) => handlePricingCardChange(index, 'originalPrice', e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                            placeholder="Original Price"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={card.category || ''}
                                        onChange={(e) => handlePricingCardChange(index, 'category', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Category Tag"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <select
                                        value={card.color}
                                        onChange={(e) => handlePricingCardChange(index, 'color', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="purple">Purple</option>
                                        <option value="blue">Blue</option>
                                        <option value="orange">Orange</option>
                                        <option value="pink">Pink</option>
                                    </select>
                                    <ImageUpload
                                        value={card.image || ''}
                                        onChange={(base64) => handlePricingCardChange(index, 'image', base64)}
                                        label="Card Image"
                                    />
                                    <input
                                        type="text"
                                        value={card.buttonText}
                                        onChange={(e) => handlePricingCardChange(index, 'buttonText', e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder="Button Text"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-semibold text-slate-700">Features</label>
                                    <button
                                        onClick={() => addPricingCardFeature(index)}
                                        className="text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        + Add Feature
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {(card.features || []).map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={(e) => handlePricingCardFeatureChange(index, fIndex, e.target.value)}
                                                className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => removePricingCardFeature(index, fIndex)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            {/* Icon Picker Modal */}
            {
                iconPickerOpen && (
                    <IconPicker
                        selectedIcon={
                            currentIconField?.type === 'service'
                                ? content.hardware.services[currentIconField.index].icon
                                : currentIconField?.type === 'benefit'
                                    ? content.hardware.benefits[currentIconField.index].icon
                                    : currentIconField?.type === 'process'
                                        ? content.hardware.processSteps[currentIconField.index].icon
                                        : ''
                        }
                        onSelect={handleIconSelect}
                        onClose={() => setIconPickerOpen(false)}
                    />
                )
            }
        </div >
    );
};

export default HardwareEditor;
