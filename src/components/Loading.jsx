import { motion, AnimatePresence } from 'framer-motion';
import { FaSchool } from 'react-icons/fa';

export default function Loading({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-2xl mb-6"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaSchool className="text-navy-900 text-3xl" />
          </motion.div>

          <motion.h2
            className="text-white text-2xl font-bold mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            AGCHS Badkadih
          </motion.h2>
          <p className="text-gold-400 text-sm">Loading...</p>

          <div className="flex gap-1.5 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gold-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
