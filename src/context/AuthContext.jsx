import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ref, get, set } from 'firebase/database';
import { db } from '../config/firebase';

const AuthContext = createContext(null);

const DEFAULT_PASSWORD = 'admin@agchs124';
const FIREBASE_AUTH_PATH = 'adminAuth';
const LOCAL_STORAGE_AUTH = 'adminAuth';
const LOCAL_STORAGE_PASSWORD = 'adminPassword';

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem(LOCAL_STORAGE_AUTH) === 'true';
  });

  const [adminPassword, setAdminPassword] = useState(DEFAULT_PASSWORD);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPassword = async () => {
      try {
        const dbRef = ref(db, FIREBASE_AUTH_PATH);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.password) {
            setAdminPassword(data.password);
            localStorage.setItem(LOCAL_STORAGE_PASSWORD, data.password);
          }
        } else {
          await set(dbRef, { password: DEFAULT_PASSWORD });
        }
      } catch (error) {
        console.warn('Firebase unavailable for auth, using localStorage:', error);
        const saved = localStorage.getItem(LOCAL_STORAGE_PASSWORD);
        if (saved) {
          setAdminPassword(saved);
        }
      } finally {
        setLoading(false);
      }
    };

    loadPassword();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_AUTH, isAdmin);
  }, [isAdmin]);

  const login = useCallback((password) => {
    if (password === adminPassword) {
      setIsAdmin(true);
      return true;
    }
    return false;
  }, [adminPassword]);

  const logout = useCallback(() => {
    setIsAdmin(false);
  }, []);

  const changePassword = useCallback(async (oldPass, newPass) => {
    if (oldPass === adminPassword) {
      setAdminPassword(newPass);
      localStorage.setItem(LOCAL_STORAGE_PASSWORD, newPass);

      try {
        const dbRef = ref(db, FIREBASE_AUTH_PATH);
        await set(dbRef, { password: newPass });
      } catch (error) {
        console.error('Failed to save password to Firebase:', error);
      }

      return true;
    }
    return false;
  }, [adminPassword]);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, changePassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
