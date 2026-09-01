import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Toast from './components/Toast';
import MandatoryDisclosure from './components/MandatoryDisclosure';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import EditSection from './pages/EditSection';

function HomePage({ darkMode, setDarkMode, toast, setToast, loading }) {
  return (
    <>
      <Loading isLoading={loading} />
      <Toast toast={toast} setToast={setToast} />
      <div className={`min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300 ${loading ? 'overflow-hidden' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Facilities />
          <Statistics />
          <Gallery />
          <Admission />
          <Contact setToast={setToast} />
        </main>
        <Footer />
      </div>
    </>
  );
}

function DisclosurePage({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20">
        <MandatoryDisclosure />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <DataProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  toast={toast}
                  setToast={setToast}
                  loading={loading}
                />
              }
            />
            <Route
              path="/disclosure"
              element={
                <DisclosurePage
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/edit/:section" element={<EditSection />} />
            </Route>
          </Routes>
        </HashRouter>
      </DataProvider>
    </AuthProvider>
  );
}
