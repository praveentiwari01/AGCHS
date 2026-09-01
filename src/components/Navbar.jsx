import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSchool, FaUserGraduate, FaUserPlus, FaUserShield } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
  { name: 'Disclosure', href: '#/disclosure' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (href.startsWith('#/')) {
      e.preventDefault();
      navigate(href.slice(1));
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.slice(1);
      const el = document.getElementById(sectionId);
      if (el) {
        window.history.replaceState(null, '', `#${sectionId}`);
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-navy-500 dark:bg-gold-500 rounded-lg flex items-center justify-center">
              <FaSchool className="text-white dark:text-navy-900 text-lg" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm lg:text-base font-bold text-navy-500 dark:text-white leading-tight">
                A.G.C.H.S Badkadih
              </h1>
              <p className="text-[10px] text-gold-600 dark:text-gold-400 font-medium">
                Assembly of God Church High School
              </p>
            </div>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="hidden lg:flex items-center gap-2">
              {isAdmin ? (
                <motion.button
                  onClick={() => navigate('/admin')}
                  className="px-4 py-2 text-sm font-medium text-white gold-gradient rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUserShield /> Admin Panel
                </motion.button>
              ) : (
                <>
                  <motion.button
                    onClick={() => navigate('/admin/login')}
                    className="px-4 py-2 text-sm font-medium text-navy-500 dark:text-gold-400 border-2 border-navy-500 dark:border-gold-400 rounded-lg hover:bg-navy-500 hover:text-white dark:hover:bg-gold-400 dark:hover:text-navy-900 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUserGraduate /> Sign In
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 text-sm font-medium text-white gold-gradient rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUserPlus /> Sign Up
                  </motion.button>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-navy-500 dark:text-white hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-navy-900 border-t dark:border-navy-700 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { handleNavClick(e, link.href); setMobileOpen(false); }}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-navy-50 dark:hover:bg-navy-800 rounded-lg transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                {isAdmin ? (
                  <button
                    onClick={() => { navigate('/admin'); setMobileOpen(false); }}
                    className="flex-1 px-4 py-3 text-sm font-medium text-white gold-gradient rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaUserShield /> Admin Panel
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => { navigate('/admin/login'); setMobileOpen(false); }}
                      className="flex-1 px-4 py-3 text-sm font-medium text-navy-500 dark:text-gold-400 border-2 border-navy-500 dark:border-gold-400 rounded-lg flex items-center justify-center gap-2"
                    >
                      <FaUserGraduate /> Sign In
                    </button>
                    <button className="flex-1 px-4 py-3 text-sm font-medium text-white gold-gradient rounded-lg flex items-center justify-center gap-2">
                      <FaUserPlus /> Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
