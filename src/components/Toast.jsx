import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

export default function Toast({ toast, setToast }) {
  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-24 right-4 sm:right-6 z-[70] max-w-sm"
        >
          <div className="bg-white dark:bg-navy-800 rounded-xl shadow-2xl border border-green-200 dark:border-green-500/30 p-4 flex items-start gap-3">
            <FaCheckCircle className="text-green-500 text-xl mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-800 dark:text-white font-medium">
                Success!
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-0.5">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => setToast({ show: false, message: '' })}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
