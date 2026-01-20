import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

const ImageUpload = ({ value, onChange, label = "Image", className = "" }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (file) => {
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file (JPG, PNG, WebP, GIF)');
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size should be less than 5MB');
            return;
        }

        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
            onChange(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleInputChange = (e) => {
        const file = e.target.files?.[0];
        handleFileChange(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        handleFileChange(file);
    };

    const handleClear = () => {
        onChange('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {label}
                </label>
            )}

            {value ? (
                // Preview mode
                <div className="relative group">
                    <div className="border-2 border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                        <img
                            src={value}
                            alt="Preview"
                            className="w-full h-48 object-contain"
                        />
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button
                            type="button"
                            onClick={handleClick}
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            Change Image
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ) : (
                // Upload mode
                <div
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                        border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
                        transition-all duration-200
                        ${isDragging
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50'
                        }
                    `}
                >
                    <div className="flex flex-col items-center gap-3">
                        <div className={`p-3 rounded-full ${isDragging ? 'bg-blue-100' : 'bg-slate-200'}`}>
                            {isDragging ? (
                                <Upload className="w-6 h-6 text-blue-600" />
                            ) : (
                                <ImageIcon className="w-6 h-6 text-slate-600" />
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-700">
                                {isDragging ? 'Drop image here' : 'Click to upload or drag and drop'}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                PNG, JPG, WebP or GIF (max 5MB)
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
            />
        </div>
    );
};

export default ImageUpload;
