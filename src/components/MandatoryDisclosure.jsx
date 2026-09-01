import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaSchool,
  FaBuilding,
  FaChalkboardTeacher,
  FaUsers,
  FaMoneyBillWave,
  FaFileAlt,
  FaBookOpen,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUserTie,
  FaFlask,
  FaBookReader,
  FaLaptop,
  FaFutbol,
} from 'react-icons/fa';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AnimatedSection({ children, className, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function DisclosureCard({ icon: Icon, title, children, color }) {
  return (
    <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-navy-700 card-hover h-[420px] flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
          <Icon className="text-white text-xl" />
        </div>
        <h3 className="text-xl font-bold text-navy-500 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="overflow-y-auto flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-100 dark:border-navy-700 last:border-0">
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 shrink-0 sm:w-1/3">
        {label}
      </span>
      <span className="text-sm font-semibold text-navy-500 dark:text-white min-w-0 sm:w-2/3">
        {value}
      </span>
    </div>
  );
}

export default function MandatoryDisclosure() {
  const { schoolData } = useData();
  const { schoolProfile, managementDetails, infrastructure, teachingStaff, nonTeachingStaff, feeStructure, documents, academicInfo, contactInfo } = schoolData;

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-navy-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            Mandatory Public Disclosure
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mt-3">
            School <span className="gradient-text">Information</span>
          </h1>
          <div className="w-20 h-1 gold-gradient rounded-full mx-auto mt-4" />
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            As per CBSE/JAC guidelines, all affiliated schools must publicly disclose
            their information on the school website.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatedSection delay={0.1}>
            <DisclosureCard icon={FaSchool} title="School Profile" color="from-navy-500 to-navy-700">
              <InfoRow label="School Name" value={schoolProfile.schoolName} />
              <InfoRow label="Affiliation Number" value={schoolProfile.affiliationNumber} />
              <InfoRow label="School Code" value={schoolProfile.schoolCode} />
              <InfoRow label="Address" value={schoolProfile.address} />
              <InfoRow label="Pin Code" value={schoolProfile.pinCode} />
              <InfoRow label="Contact Number" value={schoolProfile.contactNumber} />
              <InfoRow label="Email" value={schoolProfile.email} />
              <InfoRow label="Website" value={schoolProfile.website} />
              <InfoRow label="Year of Establishment" value={schoolProfile.yearOfEstablishment} />
              <InfoRow label="Affiliated Board" value={schoolProfile.affiliatedBoard} />
              <InfoRow label="Medium of Instruction" value={schoolProfile.mediumOfInstruction} />
              <InfoRow label="Senior Secondary (XI-XII)" value={schoolProfile.seniorSecondaryStreams} />
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <DisclosureCard icon={FaUserTie} title="Management Details" color="from-gold-400 to-gold-600">
              <InfoRow label="Name of Management" value={managementDetails.managementName} />
              <InfoRow label="Chairman / Manager" value={managementDetails.chairmanManager} />
              <InfoRow label="Manager Contact" value={managementDetails.managerContact} />
              <InfoRow label="Principal Name" value={managementDetails.principalName} />
              <InfoRow label="Principal Qualification" value={managementDetails.principalQualification} />
              <InfoRow label="Principal Experience" value={managementDetails.principalExperience} />
              <InfoRow label="Vice Principal" value={managementDetails.vicePrincipal} />
              <InfoRow label="Vice Principal Qualification" value={managementDetails.vicePrincipalQualification} />
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisclosureCard icon={FaBuilding} title="School Infrastructure" color="from-green-400 to-green-600">
              <InfoRow label="Campus Area" value={infrastructure.campusArea} />
              <InfoRow label="Built-up Area" value={infrastructure.builtUpArea} />
              <InfoRow label="Total Class Rooms" value={infrastructure.classRooms} />
              <InfoRow label="Science Laboratories" value={infrastructure.scienceLabs} />
              <InfoRow label="Computer Laboratory" value={infrastructure.computerLab} />
              <InfoRow label="Library" value={infrastructure.library} />
              <InfoRow label="Activity Room" value={infrastructure.activityRoom} />
              <InfoRow label="Sports Ground" value={infrastructure.sportsGround} />
              <InfoRow label="Auditorium" value={infrastructure.auditorium} />
              <InfoRow label="Medical Room" value={infrastructure.medicalRoom} />
              <InfoRow label="Canteen" value={infrastructure.canteen} />
              <InfoRow label="Drinking Water" value={infrastructure.drinkingWater} />
              <InfoRow label="Rain Water Harvesting" value={infrastructure.rainWaterHarvesting} />
              <InfoRow label="Solar Energy" value={infrastructure.solarEnergy} />
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <DisclosureCard icon={FaChalkboardTeacher} title="Teaching Staff" color="from-purple-400 to-purple-600">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-navy-700">
                      <th className="text-left py-3 text-gray-500 dark:text-gray-400 font-medium">Designation</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Sanctioned</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Existing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachingStaff.map((row) => (
                      <tr key={row.designation} className="border-b border-gray-100 dark:border-navy-700 last:border-0">
                        <td className="py-3 text-navy-500 dark:text-white font-medium">{row.designation}</td>
                        <td className="py-3 text-center text-navy-500 dark:text-white">{row.sanctioned}</td>
                        <td className="py-3 text-center text-green-600 dark:text-green-400 font-semibold">{row.existing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisclosureCard icon={FaUsers} title="Non-Teaching Staff" color="from-orange-400 to-orange-600">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-navy-700">
                      <th className="text-left py-3 text-gray-500 dark:text-gray-400 font-medium">Designation</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Sanctioned</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Existing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nonTeachingStaff.map((row) => (
                      <tr key={row.designation} className="border-b border-gray-100 dark:border-navy-700 last:border-0">
                        <td className="py-3 text-navy-500 dark:text-white font-medium">{row.designation}</td>
                        <td className="py-3 text-center text-navy-500 dark:text-white">{row.sanctioned}</td>
                        <td className="py-3 text-center text-green-600 dark:text-green-400 font-semibold">{row.existing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <DisclosureCard icon={FaMoneyBillWave} title="School Fee Structure (Annual)" color="from-emerald-400 to-emerald-600">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                *Fee structure is subject to revision. All amounts in INR.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-navy-700">
                      <th className="text-left py-3 text-gray-500 dark:text-gray-400 font-medium">Class</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Admission</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Tuition/mo</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Annual</th>
                      <th className="text-center py-3 text-gray-500 dark:text-gray-400 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((row) => (
                      <tr key={row.class} className="border-b border-gray-100 dark:border-navy-700 last:border-0">
                        <td className="py-3 text-navy-500 dark:text-white font-medium">{row.class}</td>
                        <td className="py-3 text-center text-navy-500 dark:text-white">{row.admission}</td>
                        <td className="py-3 text-center text-navy-500 dark:text-white">{row.tuition}</td>
                        <td className="py-3 text-center text-navy-500 dark:text-white">{row.annual}</td>
                        <td className="py-3 text-center text-gold-600 dark:text-gold-400 font-semibold">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisclosureCard icon={FaFileAlt} title="Documents & Certificates" color="from-red-400 to-red-600">
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex flex-wrap items-center justify-between gap-2 py-3 border-b border-gray-100 dark:border-navy-700 last:border-0"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FaFileAlt className="text-navy-400 dark:text-gold-400 text-sm shrink-0" />
                      <span className="text-sm font-medium text-navy-500 dark:text-white truncate">
                        {doc.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-3 py-1 rounded-full shrink-0">
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <DisclosureCard icon={FaBookOpen} title="Academic Information" color="from-cyan-400 to-cyan-600">
              <InfoRow label="Curriculum" value={academicInfo.curriculum} />
              <InfoRow label="Classes Run" value={academicInfo.classesRun} />
              <InfoRow label="Medium of Instruction" value={academicInfo.mediumOfInstruction} />
              <InfoRow label="Second Language" value={academicInfo.secondLanguage} />
              <InfoRow label="Third Language (VI-X)" value={academicInfo.thirdLanguage} />
              <InfoRow label="Session" value={academicInfo.session} />
              <InfoRow label="School Timing" value={academicInfo.schoolTiming} />
              <InfoRow label="Office Timing" value={academicInfo.officeTiming} />
              <InfoRow label="Examination System" value={academicInfo.examinationSystem} />
              <InfoRow label="Result Declaration" value={academicInfo.resultDeclaration} />
              <InfoRow label="Annual Report" value={academicInfo.annualReport} />
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <DisclosureCard icon={FaMapMarkerAlt} title="Contact Details" color="from-pink-400 to-pink-600">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-gold-500 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-navy-500 dark:text-white">Address</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gold-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-500 dark:text-white">Phone</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{contactInfo.phone1}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gold-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-500 dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{contactInfo.email1}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-gold-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-500 dark:text-white">Website</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{schoolProfile.website}</p>
                  </div>
                </div>
              </div>
            </DisclosureCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <DisclosureCard icon={FaFutbol} title="Facilities Overview" color="from-amber-400 to-amber-600">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FaFlask, label: 'Science Labs' },
                  { icon: FaLaptop, label: 'Computer Lab' },
                  { icon: FaBookReader, label: 'Library' },
                  { icon: FaFutbol, label: 'Sports Ground' },
                  { icon: FaBuilding, label: 'Auditorium' },
                  { icon: FaSchool, label: 'Smart Classes' },
                ].map((facility) => (
                  <div
                    key={facility.label}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-navy-700/50 rounded-xl"
                  >
                    <facility.icon className="text-gold-500" />
                    <span className="text-sm font-medium text-navy-500 dark:text-white">
                      {facility.label}
                    </span>
                  </div>
                ))}
              </div>
            </DisclosureCard>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12">
          <div className="bg-navy-500 dark:bg-navy-800 rounded-2xl p-6 lg:p-8 text-center">
            <p className="text-white/80 text-sm">
              This information is published as per CBSE/JAC Mandatory Public Disclosure guidelines.
              <br />
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
