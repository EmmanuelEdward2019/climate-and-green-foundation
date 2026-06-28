"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getStorageData, setStorageData } from "@/lib/admin/storage";

// The inner component using useSearchParams
function LiveEditorInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [themeOverrides, setThemeOverrides] = useState<any>({});

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
    const applyTexts = async () => {
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
    };
    applyTexts();
  }, []);

  useEffect(() => {
    if (!isEditMode) return;

    const isEditable = (el: HTMLElement) => {
      if (!el) return false;
      return el.hasAttribute('data-editable-id') || ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A'].includes(el.tagName);
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
          Live Edit Mode Active. Click on any text to edit!
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
