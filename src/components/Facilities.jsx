import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
  FaRunning,
  FaFlask,
  FaBus,
} from 'react-icons/fa';
import { useData } from '../context/DataContext';

const iconMap = {
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
  FaRunning,
  FaFlask,
  FaBus,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Facilities() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { schoolData } = useData();
  const facilities = schoolData.facilities;

  return (
    <section
      id="facilities"
      className="py-20 lg:py-28 bg-navy-50 dark:bg-navy-800/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            Our Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mt-3">
            World-Class{' '}
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            We provide modern facilities that create an optimal learning
            environment for our students.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {facilities.map((facility) => {
            const IconComp = iconMap[facility.iconName] || FaChalkboardTeacher;
            return (
              <motion.div
                key={facility.title}
                className="bg-white dark:bg-navy-900 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl card-hover border border-gray-100 dark:border-navy-700 group"
                variants={cardVariants}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComp className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-navy-500 dark:text-white mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {facility.desc}
                </p>
                <motion.div
                  className="mt-4 h-1 gold-gradient rounded-full w-0 group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
