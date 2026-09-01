import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact({ setToast }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ show: true, message: 'Message sent successfully! We will get back to you soon.' });
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setToast({ show: false, message: '' }), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-navy-900 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-navy-50 dark:bg-navy-800 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mt-3">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            {[
              {
                icon: FaMapMarkerAlt,
                title: 'Address',
                content: 'Assembly of God Church High School\nBadkadih, Jharkhand',
                color: 'from-red-400 to-red-600',
              },
              {
                icon: FaPhone,
                title: 'Phone',
                content: '+91 98765 43210\n+91 87654 32100',
                color: 'from-green-400 to-green-600',
              },
              {
                icon: FaEnvelope,
                title: 'Email',
                content: 'info@agchsbadkadih.edu.in\nadmissions@agchsbadkadih.edu.in',
                color: 'from-blue-400 to-blue-600',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-navy-50 dark:bg-navy-800/50 border border-gray-100 dark:border-navy-700 card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <item.icon className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-500 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              className="p-6 rounded-2xl bg-gold-50 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-navy-500 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                  { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
                  { icon: FaYoutube, href: '#', color: 'hover:bg-red-600' },
                  { icon: FaTwitter, href: '#', color: 'hover:bg-blue-400' },
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    className={`w-12 h-12 bg-white dark:bg-navy-800 rounded-xl flex items-center justify-center text-navy-500 dark:text-gold-400 shadow-md ${social.color} hover:text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            className="bg-navy-50 dark:bg-navy-800/50 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-navy-700"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-navy-500 dark:text-white mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 gold-gradient text-navy-900 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-8 sm:mt-12 rounded-2xl overflow-hidden shadow-xl h-48 sm:h-64 lg:h-80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117213.9516276171!2d85.29659195396778!3d23.351759914874497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104c5e5e5e5%3A0x0!2zMjPCsDIxJzA2LjMiTiA4NcKwMTgnMTEuNyJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
