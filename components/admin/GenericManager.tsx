"use client";

import React, { useState, useEffect } from "react";
import { getStorageData, setStorageData, generateId } from "@/lib/admin/storage";
import { Plus, Edit2, Trash2, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Field {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "select" | "date";
  options?: string[];
}

interface GenericManagerProps {
  title: string;
  storageKey: string;
  fields: Field[];
}

export default function GenericManager({ title, storageKey, fields }: GenericManagerProps) {
  const [items, setItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<any | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getStorageData(storageKey);
      setItems(data);
    };
    fetchItems();
  }, [storageKey]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newItem: any = {};
    fields.forEach(f => {
      newItem[f.name] = formData.get(f.name);
    });

    let updatedItems = [...items];
    if (currentItem?.id) {
      newItem.id = currentItem.id;
      updatedItems = updatedItems.map(item => item.id === newItem.id ? newItem : item);
    } else {
      newItem.id = generateId();
      newItem.createdAt = new Date().toISOString();
      updatedItems.push(newItem);
    }

    setItems(updatedItems);
    await setStorageData(storageKey, updatedItems);
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      await setStorageData(storageKey, updatedItems);
    }
  };

  const openEdit = (item: any) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const openNew = () => {
    setCurrentItem(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} /> Add New
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-500 uppercase tracking-wider">
                {fields.slice(0, 3).map(f => (
                  <th key={f.name} className="px-6 py-4 font-semibold">{f.label}</th>
                ))}
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                    No items found. Create your first one!
                  </td>
                </tr>
              ) : (
                items.map(item => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    {fields.slice(0, 3).map(f => (
                      <td key={f.name} className="px-6 py-4 text-gray-700 max-w-xs truncate">
                        {item[f.name]}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEdit(item)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{currentItem ? "Edit Item" : "Create New Item"}</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-5">
                {fields.map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                    {f.type === "textarea" ? (
                      <textarea
                        name={f.name}
                        defaultValue={currentItem?.[f.name] || ""}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all min-h-[100px]"
                      />
                    ) : f.type === "select" ? (
                      <select
                        name={f.name}
                        defaultValue={currentItem?.[f.name] || ""}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        {f.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input
                        type={f.type}
                        name={f.name}
                        defaultValue={currentItem?.[f.name] || ""}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      />
                    )}
                  </div>
                ))}

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Check size={18} />
                    Save Item
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
