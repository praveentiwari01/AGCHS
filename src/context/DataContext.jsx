import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ref, get, set } from 'firebase/database';
import { db } from '../config/firebase';
import defaultData from '../data/defaultData';

const DataContext = createContext(null);

const STORAGE_KEY = 'schoolData';
const FIREBASE_PATH = 'schoolData';

export function DataProvider({ children }) {
  const [schoolData, setSchoolData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [firebaseAvailable, setFirebaseAvailable] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const dbRef = ref(db, FIREBASE_PATH);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const firebaseData = snapshot.val();
          setSchoolData({ ...defaultData, ...firebaseData });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(firebaseData));
        } else {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            const localData = JSON.parse(saved);
            setSchoolData({ ...defaultData, ...localData });
            await set(dbRef, localData);
          } else {
            await set(dbRef, defaultData);
          }
        }
      } catch (error) {
        console.warn('Firebase unavailable, using localStorage:', error);
        setFirebaseAvailable(false);
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            setSchoolData({ ...defaultData, ...JSON.parse(saved) });
          }
        } catch {
          // ignore parse errors
        }
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  const updateSection = useCallback(async (sectionKey, newData) => {
    const updatedData = (prev) => ({
      ...prev,
      [sectionKey]: newData,
    });

    setSchoolData((prev) => {
      const next = updatedData(prev);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

      if (firebaseAvailable) {
        const dbRef = ref(db, FIREBASE_PATH);
        set(dbRef, next).catch((error) => {
          console.error('Failed to save to Firebase:', error);
        });
      }

      return next;
    });
  }, [firebaseAvailable]);

  const resetToDefault = useCallback(async () => {
    setSchoolData(defaultData);
    localStorage.removeItem(STORAGE_KEY);

    if (firebaseAvailable) {
      try {
        const dbRef = ref(db, FIREBASE_PATH);
        await set(dbRef, defaultData);
      } catch (error) {
        console.error('Failed to reset Firebase:', error);
      }
    }
  }, [firebaseAvailable]);

  const resetSection = useCallback(async (sectionKey) => {
    setSchoolData((prev) => {
      const next = {
        ...prev,
        [sectionKey]: defaultData[sectionKey],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

      if (firebaseAvailable) {
        const dbRef = ref(db, FIREBASE_PATH);
        set(dbRef, next).catch((error) => {
          console.error('Failed to save to Firebase:', error);
        });
      }

      return next;
    });
  }, [firebaseAvailable]);

  return (
    <DataContext.Provider value={{ schoolData, updateSection, resetToDefault, resetSection, loading }}>
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
