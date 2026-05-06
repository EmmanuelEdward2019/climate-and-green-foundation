"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getStorageData, setStorageData } from "@/lib/admin/storage";

// This component can be placed at the root of the application (e.g. layout.tsx)
// to enable live visual editing when ?editMode=true is present in the URL.
export default function LiveEditorProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [themeOverrides, setThemeOverrides] = useState<any>({});

  useEffect(() => {
    if (searchParams?.get("editMode") === "true") {
      setIsEditMode(true);
    }
  }, [searchParams]);

  useEffect(() => {
    // Load theme overrides from local storage
    const overrides = getStorageData("admin_theme_overrides");
    if (overrides && !Array.isArray(overrides) && Object.keys(overrides).length > 0) {
      setThemeOverrides(overrides);
      
      // Apply CSS variables
      if (overrides.primaryColor) {
        document.documentElement.style.setProperty('--primary', overrides.primaryColor);
      }
      if (overrides.secondaryColor) {
        document.documentElement.style.setProperty('--secondary', overrides.secondaryColor);
      }
      if (overrides.fontFamily) {
        document.documentElement.style.fontFamily = overrides.fontFamily;
      }
    }
  }, []);

  useEffect(() => {
    if (!isEditMode) return;

    // A simple visual editor implementation that allows clicking on text elements to edit them
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A'].includes(target.tagName)) {
        target.style.outline = '2px dashed #16a34a';
        target.style.cursor = 'text';
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A'].includes(target.tagName)) {
        target.style.outline = '';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A'].includes(target.tagName)) {
        e.preventDefault();
        e.stopPropagation();
        
        target.contentEditable = "true";
        target.focus();

        const handleBlur = () => {
          target.contentEditable = "false";
          target.style.outline = '';
          
          // Save to local storage using a rudimentary path as key
          // In a real app, elements should have unique IDs
          const elementKey = target.id || `${target.tagName}-${target.className.substring(0, 10)}`;
          const editedTexts = getStorageData("admin_edited_texts") || {};
          if (Array.isArray(editedTexts)) {
            // handle transition from empty array default
            setStorageData("admin_edited_texts", { [elementKey]: target.innerText });
          } else {
            setStorageData("admin_edited_texts", { ...editedTexts, [elementKey]: target.innerText });
          }
          
          target.removeEventListener('blur', handleBlur);
        };
        
        target.addEventListener('blur', handleBlur);
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

  return (
    <>
      {isEditMode && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-green-600 text-white px-6 py-2 rounded-full shadow-2xl font-medium text-sm flex items-center gap-2 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Live Edit Mode Active
        </div>
      )}
      {children}
    </>
  );
}
