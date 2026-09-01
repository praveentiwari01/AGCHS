import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaAward } from 'react-icons/fa';
import { useData } from '../context/DataContext';

const iconMap = {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTrophy,
  FaAward,
};

function Counter({ end, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView]);

  return <>{count}{suffix}</>;
}

export default function Statistics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const { schoolData } = useData();
  const stats = schoolData.stats;

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our School in{' '}
            <span className="text-gold-400">Numbers</span>
          </h2>
          <div className="w-20 h-1 bg-gold-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const IconComp = iconMap[stat.iconName] || FaUserGraduate;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-6 lg:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                  <IconComp className="text-gold-400 text-2xl" />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="text-sm text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
