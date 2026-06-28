export const getStorageData = async (key: string) => {
  try {
    const res = await fetch(`/api/admin/storage?key=${key}`);
    if (res.ok) {
      const data = await res.json();
      return data || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching storage data:", error);
    return [];
  }
};

export const setStorageData = async (key: string, data: any) => {
  try {
    await fetch('/api/admin/storage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, data }),
    });
  } catch (error) {
    console.error("Error setting storage data:", error);
  }
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
