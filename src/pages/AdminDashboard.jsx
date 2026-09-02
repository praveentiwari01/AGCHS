import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaSchool,
  FaUserTie,
  FaBuilding,
  FaChalkboardTeacher,
  FaUsers,
  FaMoneyBillWave,
  FaFileAlt,
  FaBookOpen,
  FaCogs,
  FaImages,
  FaChartBar,
  FaPhoneAlt,
  FaClipboardList,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const sections = [
  { key: 'schoolProfile', title: 'School Profile', desc: 'Name, affiliation, address, contact', icon: FaSchool, color: 'from-navy-500 to-navy-700' },
  { key: 'managementDetails', title: 'Management Details', desc: 'Chairman, principal, vice principal', icon: FaUserTie, color: 'from-gold-400 to-gold-600' },
  { key: 'infrastructure', title: 'Infrastructure', desc: 'Campus, labs, rooms, facilities', icon: FaBuilding, color: 'from-green-400 to-green-600' },
  { key: 'teachingStaff', title: 'Teaching Staff', desc: 'Staff table with sanctioned/existing', icon: FaChalkboardTeacher, color: 'from-purple-400 to-purple-600' },
  { key: 'nonTeachingStaff', title: 'Non-Teaching Staff', desc: 'Support staff table', icon: FaUsers, color: 'from-orange-400 to-orange-600' },
  { key: 'feeStructure', title: 'Fee Structure', desc: 'Class-wise fee breakdown', icon: FaMoneyBillWave, color: 'from-emerald-400 to-emerald-600' },
  { key: 'documents', title: 'Documents & Certificates', desc: 'Recognition, safety certificates', icon: FaFileAlt, color: 'from-red-400 to-red-600' },
  { key: 'academicInfo', title: 'Academic Information', desc: 'Curriculum, timings, exams', icon: FaBookOpen, color: 'from-gold-400 to-gold-600' },
  { key: 'facilities', title: 'Facilities', desc: 'Facility cards on homepage', icon: FaCogs, color: 'from-blue-400 to-blue-600' },
  { key: 'galleryImages', title: 'Gallery Images', desc: 'School photos and events', icon: FaImages, color: 'from-pink-400 to-pink-600' },
  { key: 'stats', title: 'Statistics', desc: 'Counter numbers on homepage', icon: FaChartBar, color: 'from-gold-400 to-gold-600' },
  { key: 'contactInfo', title: 'Contact Info', desc: 'Address, phones, emails, social', icon: FaPhoneAlt, color: 'from-teal-400 to-teal-600' },
  { key: 'admissionInfo', title: 'Admission Section', desc: 'Why choose, session info', icon: FaClipboardList, color: 'from-indigo-400 to-indigo-600' },
];

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900">
      {/* Header */}
      <header className="bg-white dark:bg-navy-800 border-b border-gray-200 dark:border-navy-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <FaSchool className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-navy-500 dark:text-white">Admin Panel</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">AGCHS Badkadih</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#/"
              className="inline-flex px-4 py-2 text-sm font-medium text-navy-500 dark:text-gold-400 border border-navy-500 dark:border-gold-400 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
            >
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <FaSignOutAlt /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-navy-500 dark:text-white mb-2">
            Manage School Data
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Click on a section to edit its information. Changes are saved automatically.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {sections.map((section, i) => (
            <motion.button
              key={section.key}
              onClick={() => navigate(`/admin/edit/${section.key}`)}
              className="text-left bg-white dark:bg-navy-800 rounded-2xl p-6 border border-gray-100 dark:border-navy-700 hover:shadow-xl card-hover group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                  <section.icon className="text-white text-lg" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-navy-500 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {section.desc}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}
