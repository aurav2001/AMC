import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2, Image as ImageIcon, Layout, Award, Grid, HelpCircle, Home, ChevronDown, ChevronUp } from 'lucide-react';
import IconPicker from '../../components/admin/IconPicker';
import ImageUpload from '../../components/admin/ImageUpload';
import DynamicIcon from '../../components/DynamicIcon';


const HomeEditor = () => {
    const { content, updateContent } = useContent();
    const [saved, setSaved] = useState(false);
    const [activeTab, setActiveTab] = useState('hero');
    const [iconPickerOpen, setIconPickerOpen] = useState(false);
    const [currentIconField, setCurrentIconField] = useState(null); // { type: 'whyUs' | 'whyUsFeature', index: number }

    const openIconPicker = (type, index) => {
        setCurrentIconField({ type, index });
        setIconPickerOpen(true);
    };

    const handleIconSelect = (iconName) => {
        if (!currentIconField) return;
        const { type, index } = currentIconField;

        if (type === 'whyUs') {
            handleWhyUsReasonChange(index, 'icon', iconName);
        } else if (type === 'whyUsFeature') {
            handleWhyUsFeatureChange(index, 'icon', iconName);
        }

        setIconPickerOpen(false);
    };


    // Image compression function
    const compressImage = (file, maxWidth = 1920, quality = 0.7) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    if (width > maxWidth) {
                        height = (height * maxWidth) / width;
                        width = maxWidth;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
                    resolve(compressedBase64);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    // --- Hero Section Handlers ---
    const handleHeroSlideChange = (index, field, value) => {
        const newSlides = [...(content.home?.hero?.slides || [])];
        newSlides[index] = { ...newSlides[index], [field]: value };
        updateContent('home.hero.slides', newSlides);
    };

    const handleHeroStatChange = (index, field, value) => {
        const newStats = [...content.home.hero.stats];
        newStats[index] = { ...newStats[index], [field]: value };
        updateContent('home.hero.stats', newStats);
    };

    const addHeroSlide = () => {
        const newSlides = [
            ...(content.home?.hero?.slides || []),
            { title: '', description: '', image: '', cta: 'Learn More' }
        ];
        updateContent('home.hero.slides', newSlides);
    };

    const removeHeroSlide = (index) => {
        const newSlides = (content.home?.hero?.slides || []).filter((_, i) => i !== index);
        updateContent('home.hero.slides', newSlides);
    };

    // --- Plans Section Handlers ---
    const handlePlansInfoChange = (field, value) => {
        updateContent(`home.plansSection.${field}`, value);
    };

    // --- Why Us Handlers ---
    const handleWhyUsInfoChange = (field, value) => {
        updateContent(`home.whyUs.${field}`, value);
    };

    const handleWhyUsReasonChange = (index, field, value) => {
        const newReasons = [...(content.home?.whyUs?.reasons || [])];
        newReasons[index] = { ...newReasons[index], [field]: value };
        updateContent('home.whyUs.reasons', newReasons);
    };

    const handleWhyUsRightCardChange = (field, value) => {
        updateContent(`home.whyUs.rightCard.${field}`, value);
    };

    const addWhyUsReason = () => {
        const newReasons = [...(content.home?.whyUs?.reasons || []), {
            title: 'New Reason',
            description: 'Description',
            stat: '0+',
            statLabel: 'Label',
            icon: 'CheckCircle'
        }];
        updateContent('home.whyUs.reasons', newReasons);
    };

    const removeWhyUsReason = (index) => {
        const newReasons = (content.home?.whyUs?.reasons || []).filter((_, i) => i !== index);
        updateContent('home.whyUs.reasons', newReasons);
    };

    // --- Why Us Right Card Features Handlers ---
    const handleWhyUsFeatureChange = (index, field, value) => {
        const newFeatures = [...(content.home?.whyUs?.rightCard?.features || [])];
        // Handle legacy string data if necessary, though we recommend resetting content
        let feature = newFeatures[index];
        if (typeof feature === 'string') {
            feature = { text: feature, icon: 'CheckCircle' };
        }
        newFeatures[index] = { ...feature, [field]: value };
        updateContent('home.whyUs.rightCard.features', newFeatures);
    };

    const addWhyUsFeature = () => {
        const newFeatures = [...(content.home?.whyUs?.rightCard?.features || []), {
            text: 'New Feature',
            icon: 'CheckCircle'
        }];
        updateContent('home.whyUs.rightCard.features', newFeatures);
    };

    const removeWhyUsFeature = (index) => {
        const newFeatures = (content.home?.whyUs?.rightCard?.features || []).filter((_, i) => i !== index);
        updateContent('home.whyUs.rightCard.features', newFeatures);
    };


    // --- FAQ Handlers ---
    const handleFaqChange = (index, field, value) => {
        const newQuestions = [...(content.home?.faq?.questions || [])];
        newQuestions[index] = { ...newQuestions[index], [field]: value };
        updateContent('home.faq.questions', newQuestions);
    };

    const addFaq = () => {
        const newQuestions = [...(content.home?.faq?.questions || []), { question: '', answer: '' }];
        updateContent('home.faq.questions', newQuestions);
    };

    const removeFaq = (index) => {
        const newQuestions = (content.home?.faq?.questions || []).filter((_, i) => i !== index);
        updateContent('home.faq.questions', newQuestions);
    };

    // --- Brands Handlers ---
    const handleBrandChange = (index, field, value) => {
        const newList = [...(content.home?.brands?.list || [])];
        newList[index] = { ...newList[index], [field]: value };
        updateContent('home.brands.list', newList);
    };

    const addBrand = () => {
        const newList = [...(content.home?.brands?.list || []), { name: '', category: 'hardware' }];
        updateContent('home.brands.list', newList);
    };

    const removeBrand = (index) => {
        const newList = (content.home?.brands?.list || []).filter((_, i) => i !== index);
        updateContent('home.brands.list', newList);
    };


    const tabs = [
        { id: 'hero', label: 'Hero Slider', icon: Home },
        { id: 'plans', label: 'Plans Section', icon: Layout },
        { id: 'whyus', label: 'Why Choose Us', icon: Award },
        { id: 'brands', label: 'Brands', icon: Grid },
        { id: 'faq', label: 'FAQ', icon: HelpCircle },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Home Page Editor</h1>
                    <p className="text-slate-600">Prepare content for your main landing page</p>
                </div>
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    <Save className="w-5 h-5" />
                    {saved ? 'Saved!' : 'Save Changes'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${activeTab === tab.id
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <tab.icon className="w-5 h-5" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">

                {/* HERO EDITOR */}
                {activeTab === 'hero' && (
                    <div className="space-y-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">Hero Slider</h2>
                            <button onClick={addHeroSlide} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                <Plus className="w-4 h-4" /> Add Slide
                            </button>
                        </div>
                        <div className="space-y-6">
                            {content.home?.hero?.slides?.map((slide, index) => (
                                <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-slate-900">Slide {index + 1}</h3>
                                        {content.home.hero.slides.length > 1 && (
                                            <button onClick={() => removeHeroSlide(index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                    <div className="space-y-4">
                                        <input type="text" value={slide.title} onChange={(e) => handleHeroSlideChange(index, 'title', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="Title" />
                                        <textarea value={slide.description} onChange={(e) => handleHeroSlideChange(index, 'description', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" rows="2" placeholder="Description" />
                                        <ImageUpload
                                            value={slide.image || ''}
                                            onChange={(base64) => handleHeroSlideChange(index, 'image', base64)}
                                            label="Slide Image"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* PLANS SECTION EDITOR */}
                {activeTab === 'plans' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Plans Section Content</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Badge Text</label>
                                <input type="text" value={content.home.plansSection?.badge || ''} onChange={(e) => handlePlansInfoChange('badge', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                                <input type="text" value={content.home.plansSection?.title || ''} onChange={(e) => handlePlansInfoChange('title', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle</label>
                                <textarea value={content.home.plansSection?.subtitle || ''} onChange={(e) => handlePlansInfoChange('subtitle', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" rows="3" />
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Video / Demo Section</h3>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Badge Text</label>
                                    <input type="text" value={content.home.plansSection?.mainFeatureTitle || ''} onChange={(e) => handlePlansInfoChange('mainFeatureTitle', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="Live Demo" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Video Title</label>
                                    <input type="text" value={content.home.plansSection?.videoTitle || ''} onChange={(e) => handlePlansInfoChange('videoTitle', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Video Subtitle</label>
                                    <textarea value={content.home.plansSection?.videoSubtitle || ''} onChange={(e) => handlePlansInfoChange('videoSubtitle', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" rows="2" />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Video URL (YouTube Embed or MP4)</label>
                                    <input type="text" value={content.home.plansSection?.videoUrl || ''} onChange={(e) => handlePlansInfoChange('videoUrl', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="https://www.youtube.com/embed/..." />
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Plans Overview Image</h3>
                                <ImageUpload
                                    value={content.home.plansSection?.overviewImage || ''}
                                    onChange={(base64) => handlePlansInfoChange('overviewImage', base64)}
                                    label="Overview Image"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* WHY US EDITOR */}
                {activeTab === 'whyus' && (
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900">Why Choose Us Header</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" value={content.home.whyUs?.title || ''} onChange={(e) => handleWhyUsInfoChange('title', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="Title" />
                                <input type="text" value={content.home.whyUs?.badge || ''} onChange={(e) => handleWhyUsInfoChange('badge', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="Badge" />
                            </div>
                            <textarea value={content.home.whyUs?.subtitle || ''} onChange={(e) => handleWhyUsInfoChange('subtitle', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" rows="2" placeholder="Subtitle" />
                        </div>

                        <div className="space-y-4 border-t pt-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-slate-900">Reasons Cards</h2>
                                <button
                                    onClick={addWhyUsReason}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Reason
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {content.home?.whyUs?.reasons?.map((reason, idx) => (
                                    <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-bold">Card {idx + 1}</h4>
                                            <button onClick={() => removeWhyUsReason(idx)} className="text-red-600 hover:text-red-700">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-xs font-semibold text-slate-500">Icon</label>
                                            <div className="flex items-center gap-2">
                                                <div className="bg-white p-2 rounded-lg border border-slate-200">
                                                    <DynamicIcon name={reason.icon} className="w-5 h-5 text-slate-600" />
                                                </div>
                                                <button
                                                    onClick={() => openIconPicker('whyUs', idx)}
                                                    className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 font-medium"
                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div>
                                        <input type="text" value={reason.title} onChange={(e) => handleWhyUsReasonChange(idx, 'title', e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="Title" />
                                        <textarea value={reason.description} onChange={(e) => handleWhyUsReasonChange(idx, 'description', e.target.value)} className="w-full px-3 py-2 border rounded-lg" rows="2" placeholder="Description" />
                                        <div className="flex gap-2">
                                            <input type="text" value={reason.stat} onChange={(e) => handleWhyUsReasonChange(idx, 'stat', e.target.value)} className="w-1/2 px-3 py-2 border rounded-lg" placeholder="Stat (e.g. 10+)" />
                                            <input type="text" value={reason.statLabel} onChange={(e) => handleWhyUsReasonChange(idx, 'statLabel', e.target.value)} className="w-1/2 px-3 py-2 border rounded-lg" placeholder="Label" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 border-t pt-6">
                            <h2 className="text-2xl font-bold text-slate-900">Right Side Content</h2>
                            <input type="text" value={content.home.whyUs?.rightCard?.title || ''} onChange={(e) => handleWhyUsRightCardChange('title', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="Title" />
                            <textarea value={content.home.whyUs?.rightCard?.description || ''} onChange={(e) => handleWhyUsRightCardChange('description', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" rows="3" placeholder="Description" />
                            <input type="text" value={content.home.whyUs?.rightCard?.phone || ''} onChange={(e) => handleWhyUsRightCardChange('phone', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" placeholder="Phone" />

                            <div className="space-y-4 pt-4 border-t border-slate-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-700">Features List</h3>
                                    <button
                                        onClick={addWhyUsFeature}
                                        className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-sm"
                                    >
                                        <Plus className="w-4 h-4" /> Add
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {content.home?.whyUs?.rightCard?.features?.map((feature, idx) => {
                                        const isString = typeof feature === 'string';
                                        const text = isString ? feature : feature.text;
                                        const icon = isString ? 'CheckCircle' : (feature.icon || 'CheckCircle');

                                        return (
                                            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-white p-2 rounded shadow-sm">
                                                        <DynamicIcon name={icon} className="w-4 h-4 text-slate-600" />
                                                    </div>
                                                    <button
                                                        onClick={() => openIconPicker('whyUsFeature', idx)}
                                                        className="px-2 py-1 text-xs bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
                                                    >
                                                        Icon
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    value={text}
                                                    onChange={(e) => handleWhyUsFeatureChange(idx, 'text', e.target.value)}
                                                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                                                    placeholder="Feature text"
                                                />
                                                <button onClick={() => removeWhyUsFeature(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ EDITOR */}
                {activeTab === 'faq' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
                            <button onClick={addFaq} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                <Plus className="w-4 h-4" /> Add Question
                            </button>
                        </div>
                        {content.home?.faq?.questions?.map((q, index) => (
                            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
                                <button onClick={() => removeFaq(index)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                                <div className="space-y-4">
                                    <input type="text" value={q.question} onChange={(e) => handleFaqChange(index, 'question', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl font-semibold" placeholder="Question" />
                                    <textarea value={q.answer} onChange={(e) => handleFaqChange(index, 'answer', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl" rows="3" placeholder="Answer" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* BRANDS EDITOR (Simple array list for names) */}
                {activeTab === 'brands' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900">Brands</h2>
                        <input type="text" value={content.home.brands?.title || ''} onChange={(e) => updateContent('home.brands.title', e.target.value)} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl mb-4" placeholder="Section Title" />
                        {/* Implementing a simple text area for bulk edit or map - sticking to simple title for now as array is long */}
                        {/* Brands List Editor */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-slate-700">Brand List</h3>
                                <button onClick={addBrand} className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(content.home?.brands?.list || []).map((brand, idx) => (
                                    <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                                        <div className="flex-1 space-y-2">
                                            <input
                                                type="text"
                                                value={brand.name}
                                                onChange={(e) => handleBrandChange(idx, 'name', e.target.value)}
                                                className="w-full px-2 py-1 border rounded text-sm font-medium"
                                                placeholder="Brand Name"
                                            />
                                            <select
                                                value={brand.category}
                                                onChange={(e) => handleBrandChange(idx, 'category', e.target.value)}
                                                className="w-full px-2 py-1 border rounded text-xs bg-white text-slate-600"
                                            >
                                                <option value="hardware">Hardware</option>
                                                <option value="software">Software</option>
                                                <option value="network">Network</option>
                                                <option value="printer">Printer</option>
                                            </select>
                                        </div>
                                        <button onClick={() => removeBrand(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded self-start mt-1">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Icon Picker Modal */}
                {iconPickerOpen && (
                    <IconPicker
                        selectedIcon={
                            currentIconField?.type === 'whyUs'
                                ? content.home.whyUs.reasons[currentIconField.index].icon
                                : currentIconField?.type === 'whyUsFeature'
                                    ? (typeof content.home.whyUs.rightCard.features[currentIconField.index] === 'string'
                                        ? 'CheckCircle'
                                        : content.home.whyUs.rightCard.features[currentIconField.index].icon)
                                    : ''
                        }
                        onSelect={handleIconSelect}
                        onClose={() => setIconPickerOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default HomeEditor;
