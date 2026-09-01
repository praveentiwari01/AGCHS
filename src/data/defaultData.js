const defaultData = {
  schoolProfile: {
    schoolName: 'Assembly of God Church High School',
    affiliationNumber: '2030123',
    schoolCode: '32456',
    address: 'Badkadih, Jharkhand, India',
    pinCode: '828109',
    contactNumber: '+91 98765 43210',
    email: 'info@agchsbadkadih.edu.in',
    website: 'www.agchsbadkadih.edu.in',
    yearOfEstablishment: '1985',
    affiliatedBoard: 'Jharkhand Academic Council (JAC)',
    mediumOfInstruction: 'English',
    seniorSecondaryStreams: 'Science, Commerce, Arts',
  },

  managementDetails: {
    managementName: 'Assembly of God Church, Jharkhand',
    chairmanManager: 'Rev. Dr. Samuel Kerketta',
    managerContact: '+91 98765 11111',
    principalName: 'Mrs. Mahasagari Toppo',
    principalQualification: 'M.A., B.Ed., M.Ed.',
    principalExperience: '25+ Years',
    vicePrincipal: 'Mr. John Lakra',
    vicePrincipalQualification: 'M.Sc., B.Ed.',
  },

  infrastructure: {
    campusArea: '5 Acres',
    builtUpArea: '25,000 sq. meters',
    classRooms: '28',
    scienceLabs: '3 (Physics, Chemistry, Biology)',
    computerLab: '1 (40 Systems)',
    library: '1 (5,000+ Books)',
    activityRoom: '1',
    sportsGround: '1 (Basketball, Football, Cricket)',
    auditorium: '1 (500 Capacity)',
    medicalRoom: '1',
    canteen: '1',
    drinkingWater: 'RO Purified Water Available',
    rainWaterHarvesting: 'Yes',
    solarEnergy: 'Yes (Partial)',
  },

  teachingStaff: [
    { designation: 'Principal', sanctioned: 1, existing: 1 },
    { designation: 'Vice Principal', sanctioned: 1, existing: 1 },
    { designation: 'PGT (Post Graduate Teacher)', sanctioned: 12, existing: 10 },
    { designation: 'TGT (Trained Graduate Teacher)', sanctioned: 18, existing: 16 },
    { designation: 'PRT (Primary Teacher)', sanctioned: 15, existing: 14 },
    { designation: 'PET (Physical Education)', sanctioned: 3, existing: 2 },
    { designation: 'Librarian', sanctioned: 1, existing: 1 },
    { designation: 'Art & Craft Teacher', sanctioned: 2, existing: 2 },
    { designation: 'Music Teacher', sanctioned: 1, existing: 1 },
  ],

  nonTeachingStaff: [
    { designation: 'Office Superintendent', sanctioned: 1, existing: 1 },
    { designation: 'Accountant', sanctioned: 1, existing: 1 },
    { designation: 'Clerk', sanctioned: 3, existing: 2 },
    { designation: 'Lab Attendant', sanctioned: 3, existing: 3 },
    { designation: 'Librarian Assistant', sanctioned: 1, existing: 1 },
    { designation: 'Peon', sanctioned: 4, existing: 4 },
    { designation: 'Guard', sanctioned: 4, existing: 4 },
    { designation: 'Sweeper', sanctioned: 3, existing: 3 },
  ],

  feeStructure: [
    { class: 'Nursery - UKG', admission: '2,000', tuition: '1,200', annual: '3,000', total: '6,200' },
    { class: 'I - V', admission: '2,500', tuition: '1,500', annual: '3,500', total: '7,500' },
    { class: 'VI - VIII', admission: '3,000', tuition: '1,800', annual: '4,000', total: '8,800' },
    { class: 'IX - X', admission: '3,500', tuition: '2,200', annual: '4,500', total: '10,200' },
    { class: 'XI - XII', admission: '4,000', tuition: '2,500', annual: '5,000', total: '11,500' },
  ],

  documents: [
    { name: 'Recognition Certificate', status: 'Valid up to 2027' },
    { name: 'Building Safety Certificate', status: 'Valid up to 2026' },
    { name: 'Fire Safety Certificate', status: 'Valid up to 2026' },
    { name: 'Extension of Recognition', status: 'Renewed' },
    { name: 'Society Registration Certificate', status: 'Active' },
    { name: 'NOC from State Government', status: 'Obtained' },
  ],

  academicInfo: {
    curriculum: 'CBSE / JAC Prescribed Curriculum',
    classesRun: 'Nursery to Class XII',
    mediumOfInstruction: 'English',
    secondLanguage: 'Hindi',
    thirdLanguage: 'Sanskrit / Hindi',
    session: 'April to March',
    schoolTiming: '7:30 AM - 2:30 PM',
    officeTiming: '8:00 AM - 3:00 PM',
    examinationSystem: 'Periodic Tests, Half-Yearly, Annual',
    resultDeclaration: 'Within 30 days of examination',
    annualReport: 'Published on school website',
  },

  facilities: [
    {
      title: 'Smart Classrooms',
      desc: 'Interactive digital classrooms equipped with smart boards and modern teaching aids for engaging learning experiences.',
      color: 'from-blue-400 to-blue-600',
      iconName: 'FaChalkboardTeacher',
    },
    {
      title: 'Library',
      desc: 'Well-stocked library with over 10,000 books, reference materials, and digital resources for students and staff.',
      color: 'from-gold-400 to-gold-600',
      iconName: 'FaBook',
    },
    {
      title: 'Computer Lab',
      desc: 'Modern computer lab with 40+ systems, high-speed internet, and latest software for digital education.',
      color: 'from-green-400 to-green-600',
      iconName: 'FaLaptopCode',
    },
    {
      title: 'Sports Facilities',
      desc: 'Extensive sports grounds for cricket, football, basketball, volleyball, and indoor games including table tennis.',
      color: 'from-red-400 to-red-600',
      iconName: 'FaRunning',
    },
    {
      title: 'Science Lab',
      desc: 'Fully equipped physics, chemistry, and biology laboratories for practical learning and experiments.',
      color: 'from-purple-400 to-purple-600',
      iconName: 'FaFlask',
    },
    {
      title: 'Transportation',
      desc: 'Safe and reliable school bus service covering all major routes in and around Badkadih area.',
      color: 'from-orange-400 to-orange-600',
      iconName: 'FaBus',
    },
  ],

  galleryCategories: [
    { id: 'annual', label: 'Annual Function' },
    { id: 'sports', label: 'Sports Day' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'events', label: 'Events' },
  ],

  galleryImages: [
    { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&q=80', category: 'events', title: 'Graduation Ceremony' },
    { id: 2, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80', category: 'classroom', title: 'Digital Classroom' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', category: 'classroom', title: 'Computer Lab Session' },
    { id: 4, src: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&q=80', category: 'sports', title: 'Sports Day Celebration' },
    { id: 5, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', category: 'annual', title: 'Annual Day Function' },
    { id: 6, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', category: 'events', title: 'Science Exhibition' },
    { id: 7, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', category: 'annual', title: 'Cultural Program' },
    { id: 8, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80', category: 'classroom', title: 'Group Discussion' },
  ],

  stats: [
    { value: 1200, suffix: '+', label: 'Total Students', iconName: 'FaUserGraduate' },
    { value: 55, suffix: '+', label: 'Teachers', iconName: 'FaChalkboardTeacher' },
    { value: 35, suffix: '+', label: 'Years of Excellence', iconName: 'FaTrophy' },
    { value: 85, suffix: '+', label: 'Awards Won', iconName: 'FaAward' },
  ],

  contactInfo: {
    address: 'Assembly of God Church High School\nBadkadih, Jharkhand',
    phone1: '+91 98765 43210',
    phone2: '+91 87654 32100',
    email1: 'info@agchsbadkadih.edu.in',
    email2: 'admissions@agchsbadkadih.edu.in',
    facebook: '#',
    instagram: '#',
    youtube: '#',
    twitter: '#',
  },

  admissionInfo: {
    badge: 'Admissions Open for 2026-27',
    whyChooseTitle: 'Why Choose AGCHS?',
    whyChooseList: [
      'Highly qualified and experienced faculty',
      'Modern teaching methods with smart classrooms',
      'Focus on holistic development',
      'Excellent academic results',
      'Safe and disciplined environment',
      'Affordable fee structure',
    ],
    sessionTitle: 'Academic Session 2026-27',
    sessionDescription: 'Classes from Nursery to Class X | Registration in progress for the upcoming academic year.',
  },
};

export default defaultData;
