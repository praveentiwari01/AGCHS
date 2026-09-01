import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-7 rounded-full bg-navy-100 dark:bg-navy-700 flex items-center px-1 transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-navy-500 dark:bg-gold-400 flex items-center justify-center"
        animate={{ x: darkMode ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {darkMode ? (
          <HiSun className="text-white text-xs" />
        ) : (
          <HiMoon className="text-white text-xs" />
        )}
      </motion.div>
    </motion.button>
  );
}
