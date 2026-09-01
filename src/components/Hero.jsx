import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaArrowRight,
  FaPhone,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-gold-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900" />
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-300 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-300 rounded-full blur-[120px]" />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="hidden sm:block absolute top-1/4 left-[15%] w-4 h-4 bg-gold-400 rounded-full"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden sm:block absolute top-1/3 right-[20%] w-6 h-6 bg-navy-300 rounded-full"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-1/4 left-[25%] w-3 h-3 bg-gold-500 rounded-full"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 dark:bg-gold-500/20 rounded-full mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gold-700 dark:text-gold-400 uppercase tracking-wider">
                Admissions Open for 2026-27
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <span className="text-navy-500 dark:text-white">
                Assembly of God Church
              </span>
              <br />
              <span className="gradient-text">High School Badkadih</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Empowering students with knowledge, faith, and character since
              1985. Where academic excellence meets holistic development in a
              nurturing Christian environment.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <motion.button
                className="px-6 py-3 sm:px-8 sm:py-4 bg-navy-500 text-white rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-navy-600 shadow-lg shadow-navy-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGraduationCap /> Explore More <FaArrowRight />
              </motion.button>
              <motion.button
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-navy-500 dark:border-gold-400 text-navy-500 dark:text-gold-400 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-navy-500 hover:text-white dark:hover:bg-gold-400 dark:hover:text-navy-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone /> Contact Us
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-navy-700"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              {[
                { value: '35+', label: 'Years Legacy' },
                { value: '1200+', label: 'Students' },
                { value: '50+', label: 'Teachers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-navy-500 dark:text-gold-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Login Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gold-300 dark:bg-gold-500/20 rounded-full blur-[2px]" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-navy-300 dark:bg-navy-500/20 rounded-full blur-[2px]" />

              <div className="glass-dark dark:glass rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Card header decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Welcome to AGCHS
                  </h3>
                  <p className="text-sm text-white/70">
                    Sign in to your portal
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: FaUserGraduate,
                      label: 'Student Login',
                      desc: 'Access your academic portal',
                      color: 'from-blue-400 to-blue-600',
                    },
                    {
                      icon: FaChalkboardTeacher,
                      label: 'Teacher Login',
                      desc: 'Manage classes & grades',
                      color: 'from-green-400 to-green-600',
                    },
                    {
                      icon: FaUserShield,
                      label: 'Admin Login',
                      desc: 'School administration panel',
                      color: 'from-purple-400 to-purple-600',
                      onClick: () => navigate('/admin/login'),
                    },
                  ].map((item, i) => (
                    <motion.button
                      key={item.label}
                      onClick={item.onClick}
                      className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 text-left group"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className="text-white text-sm" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-white/60">{item.desc}</p>
                      </div>
                      <FaArrowRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all text-xs" />
                    </motion.button>
                  ))}
                </div>

                <p className="text-center text-xs text-white/50 mt-6">
                  New here?{' '}
                  <a href="#admissions" className="text-gold-400 hover:underline font-medium">
                    Apply for Admission
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
