"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ── Storage helpers (inlined to avoid import issues) ──
/**
 * A saved override. `original` is what the element contained at the moment the
 * edit was made; it is how we detect that the page has since been changed in
 * code and the override no longer belongs to this element.
 */
type SavedOverride = string | { value: string; original: string };

const storageGet = async (key: string): Promise<Record<string, SavedOverride> | null> => {
  try {
    const res = await fetch(`/api/admin/storage?key=${key}&t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || Array.isArray(data)) return null;
    if (typeof data === "object" && Object.keys(data).length > 0) return data;
    return null;
  } catch {
    return null;
  }
};

const storageSet = async (key: string, data: unknown): Promise<boolean> => {
  try {
    const res = await fetch("/api/admin/storage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, data }),
    });
    return res.ok;
  } catch {
    return false;
  }
};

const SAFE_TAGS = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "A", "IMG"];

function readOverrideValue(entry: SavedOverride): string {
  return typeof entry === "string" ? entry : entry.value;
}

function readOverrideOriginal(entry: SavedOverride): string | null {
  return typeof entry === "string" ? null : entry.original;
}

function currentContent(el: HTMLElement): string {
  return el.tagName === "IMG" ? (el as HTMLImageElement).getAttribute("src") || "" : el.innerText;
}

/**
 * Guards against the "page turns into something else on refresh" bug.
 *
 * Positional keys ("<path>|<TAG>|<index>") point at whatever element happens to
 * sit at that index today. Once the page markup changes, a stale override lands
 * on an unrelated heading or paragraph. So a positional override is only
 * reapplied when the element still holds either the text it was saved from, or
 * the text it was saved as. Anything else means the page moved on, and the
 * override is dropped. Keyed overrides (explicit id / data-editable-id) are
 * stable and always apply.
 */
function isOverrideStillValid(key: string, entry: SavedOverride, el: HTMLElement): boolean {
  if (!key.includes("|")) return true;

  const original = readOverrideOriginal(entry);
  if (original === null) return false; // legacy positional entry, provenance unknown

  const current = currentContent(el).trim();
  return current === original.trim() || current === readOverrideValue(entry).trim();
}

// ── Build a key that is unique to one element on one page ──
// Elements without an explicit id are addressed by "<pathname>|<TAG>|<index>" so an
// edit saved on one page can never be re-applied to a similar element on another page.
function buildEditableKey(el: HTMLElement): string {
  const explicit = el.getAttribute("data-editable-id") || el.id;
  if (explicit) return explicit;

  const tag = el.tagName;
  const siblings = document.getElementsByTagName(tag);
  let index = -1;
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] === el) {
      index = i;
      break;
    }
  }

  return `${window.location.pathname}|${tag}|${index}`;
}

// ── Safely find an element by editable key ──
function findEditableElement(key: string): HTMLElement | null {
  // Positional key: only valid on the page it was saved from
  if (key.includes("|")) {
    const [pathname, tag, rawIndex] = key.split("|");
    if (pathname !== window.location.pathname) return null;
    if (!SAFE_TAGS.includes(tag)) return null;

    const index = Number(rawIndex);
    if (!Number.isInteger(index) || index < 0) return null;

    const candidates = document.getElementsByTagName(tag);
    return (candidates[index] as HTMLElement) || null;
  }

  // Try data-editable-id first
  const byAttr = document.querySelector(`[data-editable-id="${CSS.escape(key)}"]`) as HTMLElement | null;
  if (byAttr) return byAttr;

  // Try by id
  return document.getElementById(key);
}

// ── Apply saved overrides AFTER hydration is complete ──
function useSavedOverrides() {
  const [hydrated, setHydrated] = useState(false);

  // Wait for hydration to fully complete before touching the DOM
  useEffect(() => {
    const timer = setTimeout(() => setHydrated(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const applyOverrides = async () => {
      // Theme overrides
      try {
        const overrides = await storageGet("admin_theme_overrides");
        if (overrides) {
          const primaryColor = overrides.primaryColor && readOverrideValue(overrides.primaryColor);
          const secondaryColor = overrides.secondaryColor && readOverrideValue(overrides.secondaryColor);
          const fontFamily = overrides.fontFamily && readOverrideValue(overrides.fontFamily);
          if (primaryColor) {
            document.documentElement.style.setProperty("--forest-green", primaryColor);
          }
          if (secondaryColor) {
            document.documentElement.style.setProperty("--lime-green", secondaryColor);
          }
          if (fontFamily) {
            document.documentElement.style.fontFamily = fontFamily;
          }
        }
      } catch (e) {
        console.warn("[LiveEditor] Failed to apply theme overrides:", e);
      }

      // Saved text edits
      try {
        const savedTexts = await storageGet("admin_edited_texts");
        if (savedTexts) {
          for (const [key, entry] of Object.entries(savedTexts)) {
            try {
              const el = findEditableElement(key);
              if (!el || el.tagName === "IMG") continue;
              if (!isOverrideStillValid(key, entry, el)) continue;
              el.innerText = readOverrideValue(entry);
            } catch {
              // Skip this element silently
            }
          }
        }
      } catch (e) {
        console.warn("[LiveEditor] Failed to apply saved texts:", e);
      }

      // Saved image edits
      try {
        const savedImages = await storageGet("admin_edited_images");
        if (savedImages) {
          for (const [key, entry] of Object.entries(savedImages)) {
            try {
              const el = findEditableElement(key) as HTMLImageElement | null;
              if (!el || el.tagName !== "IMG") continue;
              if (!isOverrideStillValid(key, entry, el)) continue;
              el.src = readOverrideValue(entry);
              el.removeAttribute("srcset");
            } catch {
              // Skip this element silently
            }
          }
        }
      } catch (e) {
        console.warn("[LiveEditor] Failed to apply saved images:", e);
      }
    };

    applyOverrides();
  }, [hydrated]);
}

// ── The inner component that reads search params ──
function LiveEditorInner() {
  const searchParams = useSearchParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean;
    target: HTMLImageElement | null;
  }>({ isOpen: false, target: null });
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Apply saved overrides (deferred until after hydration)
  useSavedOverrides();

  useEffect(() => {
    if (searchParams?.get("editMode") === "true") {
      setIsEditMode(true);
    }
  }, [searchParams]);

  // ── Edit mode event handlers ──
  useEffect(() => {
    if (!isEditMode) return;

    const isEditable = (el: HTMLElement) => {
      if (!el) return false;
      return (
        el.hasAttribute("data-editable-id") ||
        ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "A", "IMG"].includes(el.tagName)
      );
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditable(target)) {
        target.style.outline = "2px dashed #16a34a";
        target.style.cursor = "text";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditable(target)) {
        target.style.outline = "";
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!isEditable(target)) return;

      e.preventDefault();
      e.stopPropagation();

      if (target.tagName === "IMG") {
        setImageModal({ isOpen: true, target: target as HTMLImageElement });
        setImageUrlInput((target as HTMLImageElement).src);
        return;
      }

      // Text editing
      const originalText = target.innerText;
      target.contentEditable = "true";
      target.focus();

      const handleBlur = async () => {
        target.contentEditable = "false";
        target.style.outline = "";

        const elementKey = buildEditableKey(target);

        try {
          const editedTexts = (await storageGet("admin_edited_texts")) || {};
          await storageSet("admin_edited_texts", {
            ...editedTexts,
            [elementKey]: { value: target.innerText, original: originalText },
          });
        } catch (err) {
          console.error("[LiveEditor] Failed to save text edit:", err);
        }

        target.removeEventListener("blur", handleBlur);
      };

      target.addEventListener("blur", handleBlur);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [isEditMode]);

  // ── Image save handler ──
  const handleImageSave = useCallback(
    async (newSrc: string) => {
      if (!imageModal.target) return;
      const target = imageModal.target;

      const originalSrc = target.getAttribute("src") || "";
      target.src = newSrc;
      target.removeAttribute("srcset");

      const elementKey = buildEditableKey(target);

      try {
        const editedImages = (await storageGet("admin_edited_images")) || {};
        await storageSet("admin_edited_images", {
          ...editedImages,
          [elementKey]: { value: newSrc, original: originalSrc },
        });
      } catch (err) {
        console.error("[LiveEditor] Failed to save image edit:", err);
      }

      setImageModal({ isOpen: false, target: null });
    },
    [imageModal.target]
  );

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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
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
                  <span className="px-2 bg-white text-gray-400">
                    Or upload from device
                  </span>
                </div>
              </div>

              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer transition-colors"
                />
                {isUploading && (
                  <p className="text-sm text-green-600 mt-2 font-medium">
                    Uploading...
                  </p>
                )}
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
    </>
  );
}

export default function LiveEditorProvider() {
  return (
    <Suspense fallback={null}>
      <LiveEditorInner />
    </Suspense>
  );
}
