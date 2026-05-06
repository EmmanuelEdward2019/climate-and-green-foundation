"use client";

import React, { useState, useEffect } from "react";
import { setStorageData, getStorageData } from "@/lib/admin/storage";
import { MonitorPlay, PaintBucket, Type, Image as ImageIcon, Save, RefreshCw } from "lucide-react";

export default function FrontendEditor() {
  const [themeOverrides, setThemeOverrides] = useState({
    primaryColor: "#16a34a",
    secondaryColor: "#047857",
    fontFamily: "Inter, sans-serif",
    heroHeading: "Climate & Greenworld Foundation",
    heroSubheading: "Empowering communities to protect our planet for future generations.",
    logoUrl: "/AFR100 logo with border.png.webp"
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedOverrides = getStorageData("admin_theme_overrides");
    if (savedOverrides && !Array.isArray(savedOverrides) && Object.keys(savedOverrides).length > 0) {
      setThemeOverrides(savedOverrides as any);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setThemeOverrides(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    setStorageData("admin_theme_overrides", themeOverrides);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset to default?")) {
      const defaults = {
        primaryColor: "#16a34a",
        secondaryColor: "#047857",
        fontFamily: "Inter, sans-serif",
        heroHeading: "Climate & Greenworld Foundation",
        heroSubheading: "Empowering communities to protect our planet for future generations.",
        logoUrl: "/AFR100 logo with border.png.webp"
      };
      setThemeOverrides(defaults);
      setStorageData("admin_theme_overrides", defaults);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Frontend Editor</h1>
          <p className="text-gray-500 mt-2 text-sm">Customize the visual appearance and global texts of the website.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors font-medium text-sm"
          >
            <RefreshCw size={16} /> Reset
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium text-sm shadow-sm"
          >
            {saved ? <MonitorPlay size={16} /> : <Save size={16} />}
            {saved ? "Published!" : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-green-700 mb-4 pb-4 border-b border-gray-100">
            <PaintBucket size={20} />
            <h2 className="text-lg font-semibold">Colors & Typography</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  name="primaryColor"
                  value={themeOverrides.primaryColor}
                  onChange={handleChange}
                  className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                />
                <input 
                  type="text" 
                  name="primaryColor"
                  value={themeOverrides.primaryColor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  name="secondaryColor"
                  value={themeOverrides.secondaryColor}
                  onChange={handleChange}
                  className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                />
                <input 
                  type="text" 
                  name="secondaryColor"
                  value={themeOverrides.secondaryColor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
            <select 
              name="fontFamily"
              value={themeOverrides.fontFamily}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
            >
              <option value="Inter, sans-serif">Inter</option>
              <option value="Roboto, sans-serif">Roboto</option>
              <option value="Outfit, sans-serif">Outfit</option>
              <option value="Playfair Display, serif">Playfair Display</option>
            </select>
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-green-700 mb-4 pb-4 border-b border-gray-100">
            <Type size={20} />
            <h2 className="text-lg font-semibold">Global Texts</h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hero Heading</label>
            <input 
              type="text"
              name="heroHeading"
              value={themeOverrides.heroHeading}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subheading</label>
            <textarea 
              name="heroSubheading"
              value={themeOverrides.heroSubheading}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all min-h-[100px]"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-6 lg:col-span-2">
          <div className="flex items-center gap-2 text-green-700 mb-4 pb-4 border-b border-gray-100">
            <ImageIcon size={20} />
            <h2 className="text-lg font-semibold">Media & Brand</h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
            <input 
              type="text"
              name="logoUrl"
              value={themeOverrides.logoUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
              placeholder="/logo.png"
            />
          </div>
          
          <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-xl bg-gray-50 flex items-center justify-center">
             <img 
               src={themeOverrides.logoUrl} 
               alt="Logo Preview" 
               className="max-h-24 object-contain opacity-80"
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />
             {!themeOverrides.logoUrl && <span className="text-gray-400">No logo preview</span>}
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 text-blue-800 p-6 rounded-2xl shadow-sm flex items-start gap-4">
        <MonitorPlay className="flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-lg">Live Visual Editor (Beta)</h3>
          <p className="mt-1 text-blue-700/80 text-sm">
            To edit elements directly on the page, navigate to the frontend of your site and append <code className="bg-white px-2 py-0.5 rounded text-blue-900 font-mono text-xs">?editMode=true</code> to the URL.
            You will be able to click on texts and images to replace them inline.
          </p>
        </div>
      </div>
    </div>
  );
}
