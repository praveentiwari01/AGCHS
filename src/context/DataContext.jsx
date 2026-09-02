import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { ref, get, set } from 'firebase/database';
import { db } from '../config/firebase';
import defaultData from '../data/defaultData';

const DataContext = createContext(null);

const STORAGE_KEY = 'schoolData';
const FIREBASE_PATH = 'schoolData';

function saveToLocal(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
}

function loadFromLocal() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // ignore parse errors
  }
  return null;
}

export function DataProvider({ children }) {
  const [schoolData, setSchoolData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [firebaseAvailable, setFirebaseAvailable] = useState(true);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const dbRef = ref(db, FIREBASE_PATH);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const firebaseData = snapshot.val();
          setSchoolData({ ...defaultData, ...firebaseData });
          saveToLocal(firebaseData);
        } else {
          const localData = loadFromLocal();
          if (localData) {
            setSchoolData({ ...defaultData, ...localData });
            await set(dbRef, localData);
          } else {
            await set(dbRef, defaultData);
          }
        }
      } catch (error) {
        console.warn('Firebase unavailable, using localStorage:', error);
        setFirebaseAvailable(false);
        const localData = loadFromLocal();
        if (localData) {
          setSchoolData({ ...defaultData, ...localData });
        }
      } finally {
        isInitialLoad.current = false;
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (isInitialLoad.current || loading) return;

    saveToLocal(schoolData);

    if (firebaseAvailable) {
      const dbRef = ref(db, FIREBASE_PATH);
      set(dbRef, schoolData).catch((error) => {
        console.error('Failed to save to Firebase:', error);
      });
    }
  }, [schoolData, firebaseAvailable, loading]);

  const updateSection = useCallback((sectionKey, newData) => {
    setSchoolData((prev) => ({
      ...prev,
      [sectionKey]: newData,
    }));
  }, []);

  const resetToDefault = useCallback(async () => {
    setSchoolData(defaultData);
    saveToLocal(defaultData);

    if (firebaseAvailable) {
      try {
        const dbRef = ref(db, FIREBASE_PATH);
        await set(dbRef, defaultData);
      } catch (error) {
        console.error('Failed to reset Firebase:', error);
      }
    }
  }, [firebaseAvailable]);

  const resetSection = useCallback((sectionKey) => {
    setSchoolData((prev) => ({
      ...prev,
      [sectionKey]: defaultData[sectionKey],
    }));
  }, []);

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
