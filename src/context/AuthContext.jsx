import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_PASSWORD = 'admin123';

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('adminAuth') === 'true';
  });

  const [adminPassword, setAdminPassword] = useState(() => {
    return localStorage.getItem('adminPassword') || DEFAULT_PASSWORD;
  });

  useEffect(() => {
    localStorage.setItem('adminAuth', isAdmin);
  }, [isAdmin]);

  const login = (password) => {
    if (password === adminPassword) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  const changePassword = (oldPass, newPass) => {
    if (oldPass === adminPassword) {
      setAdminPassword(newPass);
      localStorage.setItem('adminPassword', newPass);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, changePassword }}>
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
