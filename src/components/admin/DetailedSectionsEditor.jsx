import React from 'react';
import { Plus, Trash2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import ImageUpload from './ImageUpload';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const DetailedSectionsEditor = ({ sections = [], onChange }) => {

    const handleAddSection = () => {
        const newSections = [
            ...sections,
            {
                id: Date.now(),
                title: "New Section",
                content: "",
                image: "",
                imagePosition: "right"
            }
        ];
        onChange(newSections);
    };

    const handleRemoveSection = (index) => {
        const newSections = sections.filter((_, i) => i !== index);
        onChange(newSections);
    };

    const handleSectionChange = (index, field, value) => {
        const newSections = [...sections];
        newSections[index] = { ...newSections[index], [field]: value };
        onChange(newSections);
    };

    const handleMoveSection = (index, direction) => {
        const newSections = [...sections];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newSections.length) {
            [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
            onChange(newSections);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-800">Page Content Sections</h3>
                <button
                    onClick={handleAddSection}
                    className="flex items-center gap-2 text-sm bg-blue-600 text-white hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Section
                </button>
            </div>

            <div className="space-y-6">
                {sections.map((section, index) => (
                    <div key={section.id || index} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                            <span className="font-semibold text-slate-700">Section {index + 1}</span>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => handleMoveSection(index, 'up')}
                                    disabled={index === 0}
                                    className="p-1.5 text-slate-500 hover:bg-slate-100 rounded disabled:opacity-30"
                                    title="Move Up"
                                >
                                    <ChevronUp className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleMoveSection(index, 'down')}
                                    disabled={index === sections.length - 1}
                                    className="p-1.5 text-slate-500 hover:bg-slate-100 rounded disabled:opacity-30"
                                    title="Move Down"
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleRemoveSection(index)}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded ml-2"
                                    title="Delete Section"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Title & Position */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Section Title</label>
                                    <input
                                        type="text"
                                        value={section.title || ''}
                                        onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:blue-500 focus:outline-none text-sm"
                                        placeholder="e.g. Overview"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Image Position</label>
                                    <div className="flex bg-slate-100 p-1 rounded-lg">
                                        <button
                                            onClick={() => handleSectionChange(index, 'imagePosition', 'left')}
                                            className={`flex-1 py-1 text-xs font-medium rounded-md transition-all ${section.imagePosition === 'left' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                                        >
                                            Left
                                        </button>
                                        <button
                                            onClick={() => handleSectionChange(index, 'imagePosition', 'right')}
                                            className={`flex-1 py-1 text-xs font-medium rounded-md transition-all ${section.imagePosition === 'right' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                                        >
                                            Right
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Image & Content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Image</label>
                                    <ImageUpload
                                        value={section.image || ''}
                                        onChange={(base64) => handleSectionChange(index, 'image', base64)}
                                        label="Upload Image"
                                        className="h-48"
                                    />
                                </div>
                                <div className="h-64 flex flex-col">
                                    <label className="block text-xs font-semibold text-slate-600 mb-1">Content</label>
                                    <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col">
                                        <ReactQuill
                                            theme="snow"
                                            value={section.content || ''}
                                            onChange={(value) => handleSectionChange(index, 'content', value)}
                                            modules={{
                                                toolbar: [
                                                    ['bold', 'italic', 'underline', 'strike'],
                                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                    ['clean']
                                                ],
                                            }}
                                            className="flex-1 overflow-y-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {sections.length === 0 && (
                    <div className="text-center py-8 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-slate-500 text-sm">
                        No sections added yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailedSectionsEditor;
