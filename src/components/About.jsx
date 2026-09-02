import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBullseye,
  FaStar,
  FaQuoteLeft,
  FaGraduationCap,
} from 'react-icons/fa';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AnimatedSection({ children, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { schoolData } = useData();
  const { aboutSection, managementDetails, schoolProfile } = schoolData;

  const yearsLegacy = Math.floor((new Date().getFullYear() - parseInt(schoolProfile.yearOfEstablishment || 1985)) / 5) * 5;

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-navy-900 relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-navy-50 dark:bg-navy-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-50 dark:bg-navy-800 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            {aboutSection.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mt-3">
            {aboutSection.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{aboutSection.title.split(' ').slice(-1)}</span>
          </h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <AnimatedSection>
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutSection.schoolImageUrl}
                  alt="School Building"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 gold-gradient rounded-2xl flex flex-col items-center justify-center shadow-xl text-white"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <span className="text-2xl sm:text-3xl font-bold">{yearsLegacy}+</span>
                <span className="text-[10px] font-medium">Years</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-500 dark:text-white">
                {aboutSection.legacyTitle.split(' & ')[0]}{' '}
                <span className="text-gold-500">& {aboutSection.legacyTitle.split(' & ')[1]}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutSection.description1}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutSection.description2}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 bg-navy-100 dark:bg-navy-700 flex items-center justify-center text-xs font-bold text-navy-500 dark:text-gold-400"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {aboutSection.teacherCount}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission & Vision */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              icon: FaBullseye,
              title: aboutSection.missionTitle,
              desc: aboutSection.missionDesc,
              color: 'from-navy-500 to-navy-700',
              bg: 'bg-navy-50 dark:bg-navy-800/50',
            },
            {
              icon: FaStar,
              title: aboutSection.visionTitle,
              desc: aboutSection.visionDesc,
              color: 'from-gold-400 to-gold-600',
              bg: 'bg-gold-50 dark:bg-gold-500/10',
            },
            {
              icon: FaGraduationCap,
              title: aboutSection.academicTitle,
              desc: aboutSection.academicDesc,
              color: 'from-green-400 to-green-600',
              bg: 'bg-green-50 dark:bg-green-500/10',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className={`${item.bg} rounded-2xl p-8 border border-gray-100 dark:border-navy-700 card-hover`}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: i * 0.15 }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
              >
                <item.icon className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-bold text-navy-500 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Principal Message */}
        <AnimatedSection>
          <div className="relative bg-gradient-to-br from-navy-500 to-navy-700 dark:from-navy-800 dark:to-navy-900 rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

            <div className="relative flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-gold-400 shadow-xl shrink-0">
                <img
                  src={aboutSection.principalImageUrl}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <FaQuoteLeft className="text-gold-400 text-3xl mb-4 opacity-60" />
                <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6 italic">
                  {aboutSection.principalQuote}
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {managementDetails.principalName}
                  </h4>
                  <p className="text-gold-400 text-sm">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
