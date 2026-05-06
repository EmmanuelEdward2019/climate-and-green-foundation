export const getStorageData = (key: string) => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setStorageData = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
