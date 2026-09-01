import { createContext, useContext, useState, useEffect } from 'react';
import defaultData from '../data/defaultData';

const DataContext = createContext(null);

const STORAGE_KEY = 'schoolData';

export function DataProvider({ children }) {
  const [schoolData, setSchoolData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultData, ...JSON.parse(saved) };
      }
    } catch {
      // ignore parse errors
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schoolData));
  }, [schoolData]);

  const updateSection = (sectionKey, newData) => {
    setSchoolData((prev) => ({
      ...prev,
      [sectionKey]: newData,
    }));
  };

  const resetToDefault = () => {
    setSchoolData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const resetSection = (sectionKey) => {
    setSchoolData((prev) => ({
      ...prev,
      [sectionKey]: defaultData[sectionKey],
    }));
  };

  return (
    <DataContext.Provider value={{ schoolData, updateSection, resetToDefault, resetSection }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
