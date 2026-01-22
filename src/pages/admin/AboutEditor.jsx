import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Plus, Trash2, Layout, AlignLeft, AlignRight, Image as ImageIcon } from 'lucide-react';
import ImageUpload from '../../components/admin/ImageUpload';

const AboutEditor = () => {
    const { content, updateContent } = useContent();
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const addSection = () => {
        const newSections = [
            ...(content.about?.dynamicSections || []),
            {
                id: Date.now(),
                title: 'New Section',
                content: 'Add your content here...',
                image: '',
                imagePosition: 'left'
            }
        ];
        updateContent('about.dynamicSections', newSections);
    };

    const removeSection = (index) => {
        const newSections = (content.about?.dynamicSections || []).filter((_, i) => i !== index);
        updateContent('about.dynamicSections', newSections);
    };

    const handleSectionChange = (index, field, value) => {
        const newSections = [...(content.about?.dynamicSections || [])];
        newSections[index] = { ...newSections[index], [field]: value };
        updateContent('about.dynamicSections', newSections);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">About Page Editor</h1>
                    <p className="text-slate-600">Manage dynamic content sections on the About page</p>
                </div>
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                    <Save className="w-5 h-5" />
                    {saved ? 'Saved!' : 'Save Changes'}
                </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Dynamic Sections</h2>
                    <button onClick={addSection} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <Plus className="w-4 h-4" /> Add Section
                    </button>
                </div>

                <div className="space-y-8">
                    {content.about?.dynamicSections?.map((section, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900">Section {index + 1}</h3>
                                <button onClick={() => removeSection(index)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Section Title</label>
                                    <input
                                        type="text"
                                        value={section.title}
                                        onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl"
                                        placeholder="Enter title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Content</label>
                                    <textarea
                                        value={section.content}
                                        onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl min-h-[150px]"
                                        placeholder="Enter paragraph text..."
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <ImageUpload
                                            value={section.image || ''}
                                            onChange={(base64) => handleSectionChange(index, 'image', base64)}
                                            label="Section Image"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Image Position</label>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleSectionChange(index, 'imagePosition', 'left')}
                                                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${section.imagePosition === 'left' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300'}`}
                                            >
                                                <AlignLeft className="w-6 h-6 mb-2" />
                                                <span className="font-medium">Left</span>
                                            </button>
                                            <button
                                                onClick={() => handleSectionChange(index, 'imagePosition', 'right')}
                                                className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${section.imagePosition === 'right' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300'}`}
                                            >
                                                <AlignRight className="w-6 h-6 mb-2" />
                                                <span className="font-medium">Right</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {(!content.about?.dynamicSections || content.about.dynamicSections.length === 0) && (
                        <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                            <Layout className="w-12 h-12 mx-auto mb-3 opacity-20" />
                            <p>No sections added yet. Click "Add Section" to begin.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutEditor;
