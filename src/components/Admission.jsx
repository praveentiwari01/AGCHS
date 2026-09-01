import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClipboardList,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Admission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="admissions"
      className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-200 dark:bg-gold-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-200 dark:bg-navy-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            Admissions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mt-3">
            Join{' '}
            <span className="gradient-text">AGCHS Badkadih</span>
          </h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
        </motion.div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left - Info */}
          <div className="space-y-6">
            <motion.div
              className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-navy-700"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase">
                  Admissions Open for 2026-27
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-500 dark:text-white mb-4">
                Why Choose AGCHS?
              </h3>

              <ul className="space-y-4">
                {[
                  'Highly qualified and experienced faculty',
                  'Modern teaching methods with smart classrooms',
                  'Focus on holistic development',
                  'Excellent academic results',
                  'Safe and disciplined environment',
                  'Affordable fee structure',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-gold-50 dark:bg-gold-500/10 rounded-2xl p-6 border border-gold-200 dark:border-gold-500/20"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <FaCalendarAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-500 dark:text-white mb-1">
                    Academic Session 2026-27
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Classes from Nursery to Class X | Registration in progress
                    for the upcoming academic year.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Apply Card */}
          <motion.div
            className="bg-white dark:bg-navy-900 rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-navy-700 md:sticky top-28"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl flex items-center justify-center shadow-lg">
              <FaClipboardList className="text-gold-400 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-navy-500 dark:text-white text-center mb-2">
              Apply for Admission
            </h3>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8">
              Take the first step towards quality education
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Full name of the student"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Class Applying For
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm">
                  <option>Select Class</option>
                  <option>Nursery</option>
                  <option>KG</option>
                  <option>Class I - V</option>
                  <option>Class VI - VIII</option>
                  <option>Class IX - X</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  placeholder="Parent or guardian name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Contact number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 bg-gray-50 dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 gold-gradient text-navy-900 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaBookOpen /> Apply Now <FaArrowRight />
              </motion.button>
            </form>

            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
              We'll contact you within 48 hours for further process
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
