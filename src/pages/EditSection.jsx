import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaSave, FaUndo, FaPlus, FaTrash, FaUpload, FaImage, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { useData } from '../context/DataContext';
import defaultData from '../data/defaultData';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const sectionMeta = {
  schoolProfile: { title: 'School Profile', type: 'keyvalue' },
  managementDetails: { title: 'Management Details', type: 'keyvalue' },
  infrastructure: { title: 'Infrastructure', type: 'keyvalue' },
  teachingStaff: { title: 'Teaching Staff', type: 'table', columns: ['designation', 'sanctioned', 'existing'] },
  nonTeachingStaff: { title: 'Non-Teaching Staff', type: 'table', columns: ['designation', 'sanctioned', 'existing'] },
  feeStructure: { title: 'Fee Structure', type: 'table', columns: ['class', 'admission', 'tuition', 'annual', 'total'] },
  documents: { title: 'Documents & Certificates', type: 'list', fields: ['name', 'status'] },
  academicInfo: { title: 'Academic Information', type: 'keyvalue' },
  facilities: { title: 'Facilities', type: 'list', fields: ['title', 'desc', 'color'] },
  galleryCategories: { title: 'Gallery Categories', type: 'list', fields: ['id', 'label'] },
  galleryImages: { title: 'Gallery Images', type: 'gallery' },
  stats: { title: 'Statistics', type: 'list', fields: ['value', 'suffix', 'label'] },
  contactInfo: { title: 'Contact Info', type: 'keyvalue' },
  admissionInfo: { title: 'Admission Section', type: 'keyvalue' },
};

function KeyValueEditor({ data, onChange }) {
  return (
    <div className="space-y-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange({ ...data, [key]: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 focus:border-transparent transition-all text-sm"
          />
        </div>
      ))}
    </div>
  );
}

function TableEditor({ data, onChange, columns }) {
  const addRow = () => {
    const newRow = {};
    columns.forEach((col) => { newRow[col] = ''; });
    onChange([...data, newRow]);
  };

  const removeRow = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateRow = (index, col, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [col]: col === 'sanctioned' || col === 'existing' || col === 'value' ? Number(value) || 0 : value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-200 dark:border-navy-700">
              {columns.map((col) => (
                <th key={col} className="text-left py-3 text-gray-500 dark:text-gray-400 font-medium capitalize">
                  {col.replace(/([A-Z])/g, ' $1').trim()}
                </th>
              ))}
              <th className="py-3 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-navy-700">
                {columns.map((col) => (
                  <td key={col} className="py-2 pr-2">
                    <input
                      type={col === 'sanctioned' || col === 'existing' || col === 'value' ? 'number' : 'text'}
                      value={row[col]}
                      onChange={(e) => updateRow(i, col, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 text-sm"
                    />
                  </td>
                ))}
                <td className="py-2">
                  <button
                    onClick={() => removeRow(i)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <FaTrash size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={addRow}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy-500 dark:text-gold-400 border border-dashed border-navy-300 dark:border-gold-400/50 rounded-xl hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
      >
        <FaPlus /> Add Row
      </button>
    </div>
  );
}

function ListEditor({ data, onChange, fields }) {
  const addItem = () => {
    const newItem = {};
    fields.forEach((f) => { newItem[f] = ''; });
    if (fields.includes('id')) newItem.id = Date.now();
    if (fields.includes('color')) newItem.color = 'from-blue-400 to-blue-600';
    onChange([...data, newItem]);
  };

  const removeItem = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: field === 'value' || field === 'id' ? Number(value) || 0 : value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <div key={i} className="bg-gray-50 dark:bg-navy-700/50 rounded-xl p-4 border border-gray-100 dark:border-navy-600">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Item {i + 1}</span>
            <button
              onClick={() => removeItem(i)}
              className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <FaTrash size={12} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {fields.map((field) => (
              <div key={field}>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'value' || field === 'id' ? 'number' : 'text'}
                  value={item[field] || ''}
                  onChange={(e) => updateItem(i, field, e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 text-sm"
                  placeholder={field}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={addItem}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy-500 dark:text-gold-400 border border-dashed border-navy-300 dark:border-gold-400/50 rounded-xl hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
      >
        <FaPlus /> Add Item
      </button>
    </div>
  );
}

function GalleryEditor({ data, onChange, categories }) {
  const [error, setError] = useState('');

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      src: '',
      category: categories.length > 0 ? categories[0].id : '',
      title: '',
    };
    onChange([...data, newItem]);
  };

  const removeItem = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const handleFileSelect = (index, file) => {
    setError('');
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPG, PNG, GIF, etc.).');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(`Image is too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)}MB.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      updateItem(index, 'src', e.target.result);
    };
    reader.onerror = () => {
      setError('Failed to read the file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const isDataUrl = (src) => src && src.startsWith('data:');

  return (
    <div className="space-y-4">
      {error && (
        <div className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {data.map((item, i) => (
        <div key={item.id || i} className="bg-gray-50 dark:bg-navy-700/50 rounded-xl p-4 border border-gray-100 dark:border-navy-600">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Image {i + 1}</span>
            <button
              onClick={() => removeItem(i)}
              className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <FaTrash size={12} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-40 shrink-0">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 dark:bg-navy-600 border border-gray-200 dark:border-navy-500 flex items-center justify-center">
                {item.src ? (
                  <img src={item.src} alt={item.title || 'Preview'} className="w-full h-full object-cover" />
                ) : (
                  <FaImage className="text-gray-400 dark:text-gray-500 text-2xl" />
                )}
              </div>
              <label className="mt-2 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-navy-500 dark:text-gold-400 border border-dashed border-navy-300 dark:border-gold-400/50 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors cursor-pointer">
                <FaUpload size={12} />
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileSelect(i, e.target.files[0])}
                />
              </label>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Image URL (or upload above)
                </label>
                <input
                  type="text"
                  value={isDataUrl(item.src) ? '' : item.src}
                  onChange={(e) => updateItem(i, 'src', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 text-sm"
                />
                {isDataUrl(item.src) && (
                  <p className="mt-1 text-xs text-green-600 dark:text-green-400">
                    Local image uploaded ({Math.round(item.src.length * 0.75 / 1024)}KB)
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Category
                </label>
                <select
                  value={item.category}
                  onChange={(e) => updateItem(i, 'category', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 text-sm"
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(i, 'title', e.target.value)}
                  placeholder="Image title"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-400 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addItem}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy-500 dark:text-gold-400 border border-dashed border-navy-300 dark:border-gold-400/50 rounded-xl hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
      >
        <FaPlus /> Add Image
      </button>
    </div>
  );
}

export default function EditSection() {
  const { section } = useParams();
  const navigate = useNavigate();
  const { schoolData, updateSection, resetSection } = useData();
  const meta = sectionMeta[section];

  const [localData, setLocalData] = useState(() => {
    if (schoolData[section]) {
      return JSON.parse(JSON.stringify(schoolData[section]));
    }
    return null;
  });

  const [toast, setToast] = useState({ show: false, message: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, message: '' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  if (!meta || localData === null) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-navy-900 flex items-center justify-center">
        <p className="text-gray-500">Section not found.</p>
      </div>
    );
  }

  const handleSave = () => {
    setSaving(true);
    try {
      updateSection(section, localData);
      setToast({ show: true, message: `${meta.title} saved successfully!` });
      setTimeout(() => navigate('/admin'), 1500);
    } catch (error) {
      console.error('Save failed:', error);
      setToast({ show: true, message: `Failed to save ${meta.title}. Please try again.` });
      setSaving(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset this section to defaults?')) {
      resetSection(section);
      setLocalData(JSON.parse(JSON.stringify(defaultData[section])));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900">
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-4 sm:right-6 z-[70] max-w-[calc(100vw-2rem)] sm:max-w-sm"
          >
            <div className="bg-white dark:bg-navy-800 rounded-xl shadow-2xl border border-green-200 dark:border-green-500/30 p-4 flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-xl mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-white font-medium">Success!</p>
                <p className="text-xs text-gray-500 dark:text-gray-300 mt-0.5">{toast.message}</p>
              </div>
              <button
                onClick={() => setToast({ show: false, message: '' })}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white dark:bg-navy-800 border-b border-gray-200 dark:border-navy-700 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin')}
              className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-navy-700 rounded-lg transition-colors"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-lg font-bold text-navy-500 dark:text-white">{meta.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-navy-600 rounded-lg hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors flex items-center gap-2"
            >
              <FaUndo /> Reset
            </button>
            <motion.button
              onClick={handleSave}
              disabled={saving}
              className={`px-4 sm:px-6 py-2 text-sm font-medium text-white gold-gradient rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 ${saving ? 'opacity-60 cursor-not-allowed' : ''}`}
              whileHover={saving ? {} : { scale: 1.02 }}
              whileTap={saving ? {} : { scale: 0.98 }}
            >
              <FaSave /> {saving ? 'Saving...' : 'Save'}
            </motion.button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="bg-white dark:bg-navy-800 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-navy-700 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {meta.type === 'keyvalue' && (
            <KeyValueEditor data={localData} onChange={setLocalData} />
          )}
          {meta.type === 'table' && (
            <TableEditor data={localData} onChange={setLocalData} columns={meta.columns} />
          )}
          {meta.type === 'list' && (
            <ListEditor data={localData} onChange={setLocalData} fields={meta.fields} />
          )}
          {meta.type === 'gallery' && (
            <GalleryEditor
              data={localData}
              onChange={setLocalData}
              categories={schoolData.galleryCategories || []}
            />
          )}
        </motion.div>
      </main>
    </div>
  );
}
