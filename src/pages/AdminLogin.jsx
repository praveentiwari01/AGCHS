import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock, FaEye, FaEyeSlash, FaSchool } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Invalid password. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient rounded-t-2xl" />

          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaSchool className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">Admin Panel</h2>
            <p className="text-sm text-white/60">AGCHS Badkadih</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                className="text-red-400 text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              className="w-full py-3.5 gold-gradient text-navy-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </form>

          <p className="text-center text-xs text-white/40 mt-6">
            Default password: admin123
          </p>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <a
              href="#/"
              className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
            >
              Back to Website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
