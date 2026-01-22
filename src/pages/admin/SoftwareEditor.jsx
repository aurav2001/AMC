import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import IconPicker from '../../components/admin/IconPicker';
import ImageUpload from '../../components/admin/ImageUpload';
import DynamicIcon from '../../components/DynamicIcon';
import ComparisonTableEditor from '../../components/admin/ComparisonTableEditor';
import DetailedSectionsEditor from '../../components/admin/DetailedSectionsEditor';


const SoftwareEditor = () => {
    const { content, updateContent } = useContent();
    const [saved, setSaved] = useState(false);
    const [iconPickerOpen, setIconPickerOpen] = useState(false);
    const [currentIconField, setCurrentIconField] = useState(null); // { type: 'service'|'reason'|'software', index: number }
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSectionEditor = (index) => {
        setExpandedSections(prev => ({ ...prev, [index]: !prev[index] }));
    };

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
        updateContent(`software.hero.${field}`, value);
    };

    const handleStatChange = (index, field, value) => {
        const newStats = [...(content.software?.stats || [])];
        newStats[index] = { ...newStats[index], [field]: value };
        updateContent('software.stats', newStats);
    };

    const handleServiceChange = (index, field, value) => {
        const newServices = [...(content.software?.services || [])];
        newServices[index] = { ...newServices[index], [field]: value };
        updateContent('software.services', newServices);
    };

    const handleFeatureChange = (serviceIndex, featureIndex, value) => {
        const newServices = [...(content.software?.services || [])];
        newServices[serviceIndex].features[featureIndex] = value;
        updateContent('software.services', newServices);
    };

    const addFeature = (serviceIndex) => {
        const newServices = [...(content.software?.services || [])];
        newServices[serviceIndex].features.push('');
        updateContent('software.services', newServices);
    };

    const removeFeature = (serviceIndex, featureIndex) => {
        const newServices = [...(content.software?.services || [])];
        newServices[serviceIndex].features = newServices[serviceIndex].features.filter((_, i) => i !== featureIndex);
        updateContent('software.services', newServices);
    };

    const addService = () => {
        const newServices = [...(content.software?.services || []), {
            title: 'New Service',
            description: 'Service description',
            features: ['Feature 1', 'Feature 2'],
            gradient: 'from-blue-500 to-purple-500',
            iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600'
        }];
        updateContent('software.services', newServices);
    };

    const removeService = (index) => {
        const newServices = (content.software?.services || []).filter((_, i) => i !== index);
        updateContent('software.services', newServices);
    };

    const moveService = (index, direction) => {
        const newServices = [...(content.software?.services || [])];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newServices.length) {
            [newServices[index], newServices[newIndex]] = [newServices[newIndex], newServices[index]];
            updateContent('software.services', newServices);
        }
    };

    const handleSoftwareListChange = (index, field, value) => {
        const newList = [...(content.software?.softwareList || [])];
        newList[index] = { ...newList[index], [field]: value };
        updateContent('software.softwareList', newList);
    };

    const addSoftwareItem = () => {
        const newList = [...(content.software?.softwareList || []), { name: 'New Software', category: 'Category', icon: '📦' }];
        updateContent('software.softwareList', newList);
    };

    const removeSoftwareItem = (index) => {
        const newList = (content.software?.softwareList || []).filter((_, i) => i !== index);
        updateContent('software.softwareList', newList);
    };

    // Gallery handlers
    const handleGalleryChange = (field, value) => {
        updateContent(`software.gallery.${field}`, value);
    };

    const handleGalleryImageChange = (index, field, value) => {
        const newImages = [...(content.software?.gallery?.images || [])];
        newImages[index] = { ...newImages[index], [field]: value };
        updateContent('software.gallery.images', newImages);
    };

    const addGalleryImage = () => {
        const newImages = [...(content.software?.gallery?.images || []), { url: '', title: 'New Image', description: 'Description' }];
        updateContent('software.gallery.images', newImages);
    };

    const removeGalleryImage = (index) => {
        const newImages = (content.software?.gallery?.images || []).filter((_, i) => i !== index);
        updateContent('software.gallery.images', newImages);
    };

    // Why Choose Us handlers
    const handleWhyChooseUsChange = (field, value) => {
        updateContent(`software.whyChooseUs.${field}`, value);
    };

    const handleReasonChange = (index, field, value) => {
        const newReasons = [...(content.software?.whyChooseUs?.reasons || [])];
        newReasons[index] = { ...newReasons[index], [field]: value };
        updateContent('software.whyChooseUs.reasons', newReasons);
    };

    const addReason = () => {
        const newReasons = [...(content.software?.whyChooseUs?.reasons || []), { title: 'New Reason', description: 'Description', stat: '0', statLabel: 'Label', color: 'from-blue-500 to-blue-600' }];
        updateContent('software.whyChooseUs.reasons', newReasons);
    };

    const removeReason = (index) => {
        const newReasons = (content.software?.whyChooseUs?.reasons || []).filter((_, i) => i !== index);
        updateContent('software.whyChooseUs.reasons', newReasons);
    };

    const handleFeatureTextChange = (index, value) => {
        const newFeatures = [...(content.software?.whyChooseUs?.features || [])];
        newFeatures[index] = value;
        updateContent('software.whyChooseUs.features', newFeatures);
    };

    const addFeatureText = () => {
        const newFeatures = [...(content.software?.whyChooseUs?.features || []), 'New Feature'];
        updateContent('software.whyChooseUs.features', newFeatures);
    };

    const removeFeatureText = (index) => {
        const newFeatures = (content.software?.whyChooseUs?.features || []).filter((_, i) => i !== index);
        updateContent('software.whyChooseUs.features', newFeatures);
    };

    // Pricing Cards handlers
    const handlePricingCardChange = (index, field, value) => {
        const newCards = [...(content.software?.pricingCards || [])];
        newCards[index] = { ...newCards[index], [field]: value };
        updateContent('software.pricingCards', newCards);
    };

    const addPricingCard = () => {
        const newCards = [...(content.software?.pricingCards || []), {
            title: 'New Plan',
            price: '0',
            originalPrice: '0',
            features: ['Feature 1'],
            color: 'blue',
            buttonText: 'Read More'
        }];
        updateContent('software.pricingCards', newCards);
    };

    const removePricingCard = (index) => {
        const newCards = (content.software?.pricingCards || []).filter((_, i) => i !== index);
        updateContent('software.pricingCards', newCards);
    };

    const handlePricingCardFeatureChange = (cardIndex, featureIndex, value) => {
        const newCards = [...(content.software?.pricingCards || [])];
        newCards[cardIndex].features[featureIndex] = value;
        updateContent('software.pricingCards', newCards);
    };

    const addPricingCardFeature = (cardIndex) => {
        const newCards = [...(content.software?.pricingCards || [])];
        newCards[cardIndex].features.push('New Feature');
        updateContent('software.pricingCards', newCards);
    };

    const removePricingCardFeature = (cardIndex, featureIndex) => {
        const newCards = [...(content.software?.pricingCards || [])];
        newCards[cardIndex].features = newCards[cardIndex].features.filter((_, i) => i !== featureIndex);
        updateContent('software.pricingCards', newCards);
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleComparisonTableChange = (newData) => {
        updateContent('software.comparisonTable', newData);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Software Page Editor</h1>
                    <p className="text-slate-600">Manage all software page content</p>
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
                            value={content.software?.hero?.title || ''}
                            onChange={(e) => handleHeroChange('title', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle</label>
                        <textarea
                            value={content.software?.hero?.subtitle || ''}
                            onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            rows="2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                        <input
                            type="tel"
                            value={content.software?.hero?.phone || ''}
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
                    {content.software?.stats?.map((stat, index) => (
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
                    {content.software?.services?.map((service, index) => (
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
                                        disabled={index === (content.software?.services || []).length - 1}
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

            {/* Software List */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Supported Software</h2>
                    <button
                        onClick={addSoftwareItem}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4" />
                        Add Software
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.software?.softwareList?.map((item, index) => (
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
                                    placeholder="Software name"
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
                        value={content.software?.gallery?.heading || ''}
                        onChange={(e) => handleGalleryChange('heading', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Gallery heading"
                    />
                    <input
                        type="text"
                        value={content.software?.gallery?.title || ''}
                        onChange={(e) => handleGalleryChange('title', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Gallery title"
                    />
                    <input
                        type="text"
                        value={content.software?.gallery?.subtitle || ''}
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
                    {content.software?.gallery?.images?.map((image, index) => (
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
                        value={content.software?.whyChooseUs?.badge || ''}
                        onChange={(e) => handleWhyChooseUsChange('badge', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Badge text"
                    />
                    <input
                        type="text"
                        value={content.software?.whyChooseUs?.heading || ''}
                        onChange={(e) => handleWhyChooseUsChange('heading', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Main heading"
                    />
                    <textarea
                        value={content.software?.whyChooseUs?.subtitle || ''}
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
                    {content.software?.whyChooseUs?.reasons?.map((reason, index) => (
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
                        value={content.software?.whyChooseUs?.ctaHeading || ''}
                        onChange={(e) => handleWhyChooseUsChange('ctaHeading', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="CTA heading"
                    />
                    <textarea
                        value={content.software?.whyChooseUs?.ctaDescription || ''}
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
                            {content.software?.whyChooseUs?.features?.map((feature, index) => (
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
                    {content.software?.pricingCards?.map((card, index) => (
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

                            <div className="mt-6 pt-4 border-t border-slate-200">
                                <button
                                    onClick={() => toggleSectionEditor(index)}
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    {expandedSections[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    {expandedSections[index] ? 'Hide Page Content Editor' : 'Manage Page Content (Plan Details)'}
                                </button>

                                {expandedSections[index] && (
                                    <div className="mt-6">
                                        <p className="text-sm text-slate-500 mb-4">
                                            Add dynamic sections that will appear on this plan's detailed page.
                                        </p>
                                        <DetailedSectionsEditor
                                            sections={card.detailedSections || []}
                                            onChange={(newSections) => handlePricingCardChange(index, 'detailedSections', newSections)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <ComparisonTableEditor
                    data={content.software?.comparisonTable}
                    onChange={handleComparisonTableChange}
                />
            </div>

            {/* Icon Picker Modal */}
            {iconPickerOpen && (
                <IconPicker
                    selectedIcon={
                        currentIconField?.type === 'service'
                            ? content.software.services[currentIconField.index].icon
                            : currentIconField?.type === 'reason'
                                ? content.software.whyChooseUs.reasons[currentIconField.index].icon
                                : currentIconField?.type === 'software'
                                    ? content.software.softwareList[currentIconField.index].icon
                                    : ''
                    }
                    onSelect={handleIconSelect}
                    onClose={() => setIconPickerOpen(false)}
                />
            )}
        </div>
    );
};

export default SoftwareEditor;
