import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaSchool,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowUp,
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
  { name: 'Mandatory Disclosure', href: '#/disclosure' },
];

function handleFooterNavClick(e, href, navigate) {
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
      window.location.hash = '/';
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }
}

export default function Footer() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-900 dark:bg-navy-950 text-white pt-16 pb-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <FaSchool className="text-navy-900 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gold-400">AGCHS Badkadih</h3>
                <p className="text-xs text-white/60">Est. 1985</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Nurturing young minds with quality education rooted in Christian
              values. Empowering students to excel academically and grow
              holistically.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-gold-400 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleFooterNavClick(e, link.href, navigate)}
                    className="text-sm text-white/70 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-gold-400 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="text-gold-400 mt-1 shrink-0" />
                Assembly of God Church High School, Badkadih, Jharkhand
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <FaPhone className="text-gold-400 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <FaEnvelope className="text-gold-400 shrink-0" />
                info@agchsbadkadih.edu.in
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-gold-400 mb-4">Follow Us</h4>
            <p className="text-sm text-white/70 mb-4">
              Stay connected with us on social media
            </p>
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
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 ${social.color} hover:text-white transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Assembly of God Church High School Badkadih. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#/disclosure" onClick={(e) => { e.preventDefault(); navigate('/disclosure'); }} className="hover:text-gold-400 transition-colors">
              Mandatory Disclosure
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shadow-xl z-40"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp className="text-navy-900" />
      </motion.button>
    </footer>
  );
}
