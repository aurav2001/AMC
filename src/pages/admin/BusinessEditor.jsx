import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import IconPicker from '../../components/admin/IconPicker';
import ImageUpload from '../../components/admin/ImageUpload';
import DynamicIcon from '../../components/DynamicIcon';
import ComparisonTableEditor from '../../components/admin/ComparisonTableEditor';


const BusinessEditor = () => {
    const { content, updateContent } = useContent();
    const [saved, setSaved] = useState(false);
    const [iconPickerOpen, setIconPickerOpen] = useState(false);
    const [currentIconField, setCurrentIconField] = useState(null); // { type: 'service'|'reason'|'software', index: number }

    const openIconPicker = (type, index) => {
        setCurrentIconField({ type, index });
        setIconPickerOpen(true);
    };

    const handleIconSelect = (iconName) => {
        if (!currentIconField) return;
        const { type, index } = currentIconField;

        if (type === 'service') {
            handleServiceChange(index, 'icon', iconName);
        } else if (type === 'reason') {
            handleReasonChange(index, 'icon', iconName);
        } else if (type === 'software') {
            handleSoftwareListChange(index, 'icon', iconName);
        }
        setIconPickerOpen(false);
    };


    const handleHeroChange = (field, value) => {
        updateContent(`business.hero.${field}`, value);
    };

    const handleStatChange = (index, field, value) => {
        const newStats = [...(content.business?.stats || [])];
        newStats[index] = { ...newStats[index], [field]: value };
        updateContent('business.stats', newStats);
    };

    const handleServiceChange = (index, field, value) => {
        const newServices = [...(content.business?.services || [])];
        newServices[index] = { ...newServices[index], [field]: value };
        updateContent('business.services', newServices);
    };

    const handleFeatureChange = (serviceIndex, featureIndex, value) => {
        const newServices = [...(content.business?.services || [])];
        newServices[serviceIndex].features[featureIndex] = value;
        updateContent('business.services', newServices);
    };

    const addFeature = (serviceIndex) => {
        const newServices = [...(content.business?.services || [])];
        newServices[serviceIndex].features.push('');
        updateContent('business.services', newServices);
    };

    const removeFeature = (serviceIndex, featureIndex) => {
        const newServices = [...(content.business?.services || [])];
        newServices[serviceIndex].features = newServices[serviceIndex].features.filter((_, i) => i !== featureIndex);
        updateContent('business.services', newServices);
    };

    const addService = () => {
        const newServices = [...(content.business?.services || []), {
            title: 'New Service',
            description: 'Service description',
            features: ['Feature 1', 'Feature 2'],
            gradient: 'from-blue-500 to-purple-500',
            iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600'
        }];
        updateContent('business.services', newServices);
    };

    const removeService = (index) => {
        const newServices = (content.business?.services || []).filter((_, i) => i !== index);
        updateContent('business.services', newServices);
    };

    const moveService = (index, direction) => {
        const newServices = [...(content.business?.services || [])];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newServices.length) {
            [newServices[index], newServices[newIndex]] = [newServices[newIndex], newServices[index]];
            updateContent('business.services', newServices);
        }
    };

    const handleSoftwareListChange = (index, field, value) => {
        const newList = [...(content.business?.softwareList || [])];
        newList[index] = { ...newList[index], [field]: value };
        updateContent('business.softwareList', newList);
    };

    const addSoftwareItem = () => {
        const newList = [...(content.business?.softwareList || []), { name: 'New Item', category: 'Category', icon: '📦' }];
        updateContent('business.softwareList', newList);
    };

    const removeSoftwareItem = (index) => {
        const newList = (content.business?.softwareList || []).filter((_, i) => i !== index);
        updateContent('business.softwareList', newList);
    };

    // Gallery handlers
    const handleGalleryChange = (field, value) => {
        updateContent(`business.gallery.${field}`, value);
    };

    const handleGalleryImageChange = (index, field, value) => {
        const newImages = [...(content.business?.gallery?.images || [])];
        newImages[index] = { ...newImages[index], [field]: value };
        updateContent('business.gallery.images', newImages);
    };

    const addGalleryImage = () => {
        const newImages = [...(content.business?.gallery?.images || []), { url: '', title: 'New Image', description: 'Description' }];
        updateContent('business.gallery.images', newImages);
    };

    const removeGalleryImage = (index) => {
        const newImages = (content.business?.gallery?.images || []).filter((_, i) => i !== index);
        updateContent('business.gallery.images', newImages);
    };

    // Why Choose Us handlers
    const handleWhyChooseUsChange = (field, value) => {
        updateContent(`business.whyChooseUs.${field}`, value);
    };

    const handleReasonChange = (index, field, value) => {
        const newReasons = [...(content.business?.whyChooseUs?.reasons || [])];
        newReasons[index] = { ...newReasons[index], [field]: value };
        updateContent('business.whyChooseUs.reasons', newReasons);
    };

    const addReason = () => {
        const newReasons = [...(content.business?.whyChooseUs?.reasons || []), { title: 'New Reason', description: 'Description', stat: '0', statLabel: 'Label', color: 'from-blue-500 to-blue-600' }];
        updateContent('business.whyChooseUs.reasons', newReasons);
    };

    const removeReason = (index) => {
        const newReasons = (content.business?.whyChooseUs?.reasons || []).filter((_, i) => i !== index);
        updateContent('business.whyChooseUs.reasons', newReasons);
    };

    const handleFeatureTextChange = (index, value) => {
        const newFeatures = [...(content.business?.whyChooseUs?.features || [])];
        newFeatures[index] = value;
        updateContent('business.whyChooseUs.features', newFeatures);
    };

    const addFeatureText = () => {
        const newFeatures = [...(content.business?.whyChooseUs?.features || []), 'New Feature'];
        updateContent('business.whyChooseUs.features', newFeatures);
    };

    const removeFeatureText = (index) => {
        const newFeatures = (content.business?.whyChooseUs?.features || []).filter((_, i) => i !== index);
        updateContent('business.whyChooseUs.features', newFeatures);
    };

    // Pricing Cards handlers
    const handlePricingCardChange = (index, field, value) => {
        const newCards = [...(content.business?.pricingCards || [])];
        newCards[index] = { ...newCards[index], [field]: value };
        updateContent('business.pricingCards', newCards);
    };

    const addPricingCard = () => {
        const newCards = [...(content.business?.pricingCards || []), {
            title: 'New Plan',
            price: '0',
            originalPrice: '0',
            features: ['Feature 1'],
            color: 'blue',
            buttonText: 'Read More'
        }];
        updateContent('business.pricingCards', newCards);
    };

    const removePricingCard = (index) => {
        const newCards = (content.business?.pricingCards || []).filter((_, i) => i !== index);
        updateContent('business.pricingCards', newCards);
    };

    const handlePricingCardFeatureChange = (cardIndex, featureIndex, value) => {
        const newCards = [...(content.business?.pricingCards || [])];
        newCards[cardIndex].features[featureIndex] = value;
        updateContent('business.pricingCards', newCards);
    };

    const addPricingCardFeature = (cardIndex) => {
        const newCards = [...(content.business?.pricingCards || [])];
        newCards[cardIndex].features.push('New Feature');
        updateContent('business.pricingCards', newCards);
    };

    const removePricingCardFeature = (cardIndex, featureIndex) => {
        const newCards = [...(content.business?.pricingCards || [])];
        newCards[cardIndex].features = newCards[cardIndex].features.filter((_, i) => i !== featureIndex);
        updateContent('business.pricingCards', newCards);
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleComparisonTableChange = (newData) => {
        updateContent('business.comparisonTable', newData);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Business Page Editor</h1>
                    <p className="text-slate-600">Manage all business page content</p>
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
                            value={content.business?.hero?.title || ''}
                            onChange={(e) => handleHeroChange('title', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle</label>
                        <textarea
                            value={content.business?.hero?.subtitle || ''}
                            onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            rows="2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                        <input
                            type="tel"
                            value={content.business?.hero?.phone || ''}
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
                    {content.business?.stats?.map((stat, index) => (
                        <div key={index} className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                            <input
                                type="text"
                                value={stat.value}
                                onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none mb-2"
                                placeholder="Value"
                            />
                            <input
                                type="text"
                                value={stat.label}
                                onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
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
                    {content.business?.services?.map((service, index) => (
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
                                        disabled={index === (content.business?.services || []).length - 1}
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
                                    rows="2"
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
                                            placeholder="from-blue-500 to-purple-500"
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

            {/* Software Level/Tools List */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Associated Tools/Items</h2>
                    <button
                        onClick={addSoftwareItem}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Item
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.business?.softwareList?.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div onClick={() => openIconPicker('software', index)} className="cursor-pointer">
                                <input
                                    type="text"
                                    value={item.icon}
                                    readOnly
                                    className="w-16 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-center cursor-pointer hover:bg-slate-50"
                                    placeholder="Icon"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <input
                                    type="text"
                                    value={item.name}
                                    onChange={(e) => handleSoftwareListChange(index, 'name', e.target.value)}
                                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                    placeholder="Name"
                                />
                                <input
                                    type="text"
                                    value={item.category}
                                    onChange={(e) => handleSoftwareListChange(index, 'category', e.target.value)}
                                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                    placeholder="Category"
                                />
                            </div>
                            <button
                                onClick={() => removeSoftwareItem(index)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Gallery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Gallery</h2>
                <div className="space-y-4 mb-6">
                    <input
                        type="text"
                        value={content.business?.gallery?.heading || ''}
                        onChange={(e) => handleGalleryChange('heading', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Gallery heading"
                    />
                    <input
                        type="text"
                        value={content.business?.gallery?.title || ''}
                        onChange={(e) => handleGalleryChange('title', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Gallery title"
                    />
                    <input
                        type="text"
                        value={content.business?.gallery?.subtitle || ''}
                        onChange={(e) => handleGalleryChange('subtitle', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Gallery subtitle"
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Gallery Images</h3>
                    <button
                        onClick={addGalleryImage}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Add Image
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.business?.gallery?.images?.map((image, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-slate-700">Image {index + 1}</span>
                                <button
                                    onClick={() => removeGalleryImage(index)}
                                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <input
                                type="url"
                                value={image.url}
                                onChange={(e) => handleGalleryImageChange(index, 'url', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Image URL"
                            />
                            {image.url && (
                                <img src={image.url} alt="Preview" className="w-full h-32 object-cover rounded-lg mb-2" />
                            )}
                            <input
                                type="text"
                                value={image.title}
                                onChange={(e) => handleGalleryImageChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                value={image.description}
                                onChange={(e) => handleGalleryImageChange(index, 'description', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                placeholder="Description"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us Section</h2>
                <div className="space-y-4 mb-6">
                    <input
                        type="text"
                        value={content.business?.whyChooseUs?.badge || ''}
                        onChange={(e) => handleWhyChooseUsChange('badge', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Badge text"
                    />
                    <input
                        type="text"
                        value={content.business?.whyChooseUs?.heading || ''}
                        onChange={(e) => handleWhyChooseUsChange('heading', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Main heading"
                    />
                    <textarea
                        value={content.business?.whyChooseUs?.subtitle || ''}
                        onChange={(e) => handleWhyChooseUsChange('subtitle', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        rows="2"
                        placeholder="Subtitle"
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Reasons</h3>
                    <button
                        onClick={addReason}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        Add Reason
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {content.business?.whyChooseUs?.reasons?.map((reason, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-slate-700">Reason {index + 1}</span>
                                <button
                                    onClick={() => removeReason(index)}
                                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={reason.title}
                                onChange={(e) => handleReasonChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                placeholder="Title"
                            />
                            <textarea
                                value={reason.description}
                                onChange={(e) => handleReasonChange(index, 'description', e.target.value)}
                                className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none mb-2 text-sm"
                                rows="2"
                                placeholder="Description"
                            />
                            <div className="mt-2">
                                <label className="block text-xs font-semibold text-slate-500 mb-1">Icon</label>
                                <div className="flex items-center gap-2">
                                    <div className="bg-white p-1.5 rounded border border-slate-200">
                                        <DynamicIcon name={reason.icon} className="w-4 h-4 text-slate-600" />
                                    </div>
                                    <button
                                        onClick={() => openIconPicker('reason', index)}
                                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Change Icon
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    value={reason.stat}
                                    onChange={(e) => handleReasonChange(index, 'stat', e.target.value)}
                                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                    placeholder="Stat (e.g., 10+)"
                                />
                                <input
                                    type="text"
                                    value={reason.statLabel}
                                    onChange={(e) => handleReasonChange(index, 'statLabel', e.target.value)}
                                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                    placeholder="Label"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <input
                        type="text"
                        value={content.business?.whyChooseUs?.ctaHeading || ''}
                        onChange={(e) => handleWhyChooseUsChange('ctaHeading', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="CTA heading"
                    />
                    <textarea
                        value={content.business?.whyChooseUs?.ctaDescription || ''}
                        onChange={(e) => handleWhyChooseUsChange('ctaDescription', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        rows="2"
                        placeholder="CTA description"
                    />

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-semibold text-slate-700">Features List</label>
                            <button
                                onClick={addFeatureText}
                                className="text-sm text-blue-600 hover:text-blue-700"
                            >
                                + Add Feature
                            </button>
                        </div>
                        <div className="space-y-2">
                            {content.business?.whyChooseUs?.features?.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={feature}
                                        onChange={(e) => handleFeatureTextChange(index, e.target.value)}
                                        className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                                    />
                                    <button
                                        onClick={() => removeFeatureText(index)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
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
                    {content.business?.pricingCards?.map((card, index) => (
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

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <ComparisonTableEditor
                    data={content.business?.comparisonTable}
                    onChange={handleComparisonTableChange}
                />
            </div>

            {/* Icon Picker Modal */}
            {iconPickerOpen && (
                <IconPicker
                    selectedIcon={
                        currentIconField?.type === 'service'
                            ? content.business.services[currentIconField.index].icon
                            : currentIconField?.type === 'reason'
                                ? content.business.whyChooseUs.reasons[currentIconField.index].icon
                                : currentIconField?.type === 'software'
                                    ? content.business.softwareList[currentIconField.index].icon
                                    : ''
                    }
                    onSelect={handleIconSelect}
                    onClose={() => setIconPickerOpen(false)}
                />
            )}
        </div>
    );
};

export default BusinessEditor;
