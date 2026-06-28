"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getStorageData, setStorageData } from "@/lib/admin/storage";

// The inner component using useSearchParams
function LiveEditorInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [themeOverrides, setThemeOverrides] = useState<any>({});
  
  const [imageModal, setImageModal] = useState<{isOpen: boolean, target: HTMLImageElement | null}>({isOpen: false, target: null});
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (searchParams?.get("editMode") === "true") {
      setIsEditMode(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchOverrides = async () => {
      // Load theme overrides from global storage
      const overrides = await getStorageData("admin_theme_overrides");
      if (overrides && !Array.isArray(overrides) && Object.keys(overrides).length > 0) {
        setThemeOverrides(overrides);
        
        // Apply CSS variables
        if (overrides.primaryColor) {
          document.documentElement.style.setProperty('--forest-green', overrides.primaryColor);
        }
        if (overrides.secondaryColor) {
          document.documentElement.style.setProperty('--lime-green', overrides.secondaryColor);
        }
        if (overrides.fontFamily) {
          document.documentElement.style.fontFamily = overrides.fontFamily;
        }
      }
    };
    fetchOverrides();
  }, []);

  useEffect(() => {
    const applyTextsAndImages = async () => {
      // Apply previously saved texts on load
      const savedTexts = await getStorageData("admin_edited_texts");
      if (savedTexts && !Array.isArray(savedTexts)) {
        const applySavedTexts = () => {
          Object.keys(savedTexts).forEach(key => {
            let element = document.querySelector(`[data-editable-id="${key}"]`) as HTMLElement;
            if (!element) element = document.getElementById(key) as HTMLElement;
            
            if (element) {
              element.innerText = savedTexts[key];
            } else {
               // Fallback for older saved data
               const allElements = document.querySelectorAll('*');
               for (let i = 0; i < allElements.length; i++) {
                   const el = allElements[i] as HTMLElement;
                   const expectedKey = `${el.tagName}-${el.className.substring(0, 10)}`;
                   if (expectedKey === key) {
                       el.innerText = savedTexts[key];
                       break;
                   }
               }
            }
          });
        };
        
        // Run once immediately
        applySavedTexts();
        // And run again after a slight delay in case of late renders
        setTimeout(applySavedTexts, 500);
      }

      // Apply previously saved images on load
      const savedImages = await getStorageData("admin_edited_images");
      if (savedImages && !Array.isArray(savedImages)) {
        const applySavedImages = () => {
          Object.keys(savedImages).forEach(key => {
            let element = document.querySelector(`[data-editable-id="${key}"]`) as HTMLImageElement;
            if (!element) element = document.getElementById(key) as HTMLImageElement;
            
            if (element) {
              element.src = savedImages[key];
              if (element.hasAttribute('srcset')) {
                element.removeAttribute('srcset');
              }
            } else {
               // Fallback for older saved data
               const allElements = document.querySelectorAll('img');
               for (let i = 0; i < allElements.length; i++) {
                   const el = allElements[i] as HTMLImageElement;
                   const expectedKey = `${el.tagName}-${el.className.substring(0, 10)}`;
                   if (expectedKey === key) {
                       el.src = savedImages[key];
                       if (el.hasAttribute('srcset')) {
                         el.removeAttribute('srcset');
                       }
                       break;
                   }
               }
            }
          });
        };
        
        applySavedImages();
        setTimeout(applySavedImages, 500);
      }
    };
    applyTextsAndImages();
  }, []);

  useEffect(() => {
    if (!isEditMode) return;

    const isEditable = (el: HTMLElement) => {
      if (!el) return false;
      return el.hasAttribute('data-editable-id') || ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'IMG'].includes(el.tagName);
    };

    // A simple visual editor implementation that allows clicking on text elements to edit them
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditable(target)) {
        target.style.outline = '2px dashed #16a34a';
        target.style.cursor = 'text';
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditable(target)) {
        target.style.outline = '';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditable(target)) {
        e.preventDefault();
        e.stopPropagation();
        
        if (target.tagName === 'IMG') {
          // Open Image Editor Modal
          setImageModal({ isOpen: true, target: target as HTMLImageElement });
          setImageUrlInput((target as HTMLImageElement).src);
        } else {
          // Handle Text Editing
          target.contentEditable = "true";
          target.focus();

          const handleBlur = async () => {
            target.contentEditable = "false";
            target.style.outline = '';
            
            // Save to global storage using data-editable-id or fallback
            const elementKey = target.getAttribute('data-editable-id') || target.id || `${target.tagName}-${target.className.substring(0, 10)}`;
            const editedTexts = await getStorageData("admin_edited_texts") || {};
            
            if (Array.isArray(editedTexts)) {
              // handle transition from empty array default
              await setStorageData("admin_edited_texts", { [elementKey]: target.innerText });
            } else {
              await setStorageData("admin_edited_texts", { ...editedTexts, [elementKey]: target.innerText });
            }
            
            target.removeEventListener('blur', handleBlur);
          };
          
          target.addEventListener('blur', handleBlur);
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [isEditMode]);

  const handleImageSave = async (newSrc: string) => {
    if (!imageModal.target) return;
    const target = imageModal.target;
    
    target.src = newSrc;
    if (target.hasAttribute('srcset')) {
      target.removeAttribute('srcset');
    }
    
    const elementKey = target.getAttribute('data-editable-id') || target.id || `${target.tagName}-${target.className.substring(0, 10)}`;
    const editedImages = await getStorageData("admin_edited_images") || {};
    
    if (Array.isArray(editedImages)) {
      await setStorageData("admin_edited_images", { [elementKey]: newSrc });
    } else {
      await setStorageData("admin_edited_images", { ...editedImages, [elementKey]: newSrc });
    }
    
    setImageModal({ isOpen: false, target: null });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.url) {
          handleImageSave(data.url);
        }
      } else {
        alert("Upload failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {isEditMode && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-green-600 text-white px-6 py-2 rounded-full shadow-2xl font-medium text-sm flex items-center gap-2 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Live Edit Mode Active. Click on any text or image to edit!
        </div>
      )}

      {imageModal.isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Edit Image</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input 
                  type="text" 
                  value={imageUrlInput} 
                  onChange={e => setImageUrlInput(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-700"
                />
                <button 
                  onClick={() => handleImageSave(imageUrlInput)}
                  className="mt-2 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Save URL
                </button>
              </div>
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-400">Or upload from device</span>
                </div>
              </div>
              
              <div>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer transition-colors"
                />
                {isUploading && <p className="text-sm text-green-600 mt-2 font-medium">Uploading...</p>}
              </div>
            </div>
            
            <button 
              onClick={() => setImageModal({ isOpen: false, target: null })}
              className="mt-6 w-full px-4 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {children}
    </>
  );
}

export default function LiveEditorProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <LiveEditorInner>{children}</LiveEditorInner>
    </Suspense>
  );
}
