import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      institution: "KIET Group of Institutions",
      degree: "Bachelor of Technology in Computer Science",
      location: "Ghaziabad, India",
      period: "Aug 2023 – May 2027",
      cgpa: "CGPA: 8.1/10.0",
      coursework: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems"],
      icon: <FaUniversity className="text-2xl" />
    },
    {
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      degree: "BS in Data Science and Applications — Foundation Level (Completed)",
      location: "Online",
      period: "Sep 2023 – Dec 2024",
      coursework: ["Mathematics for Data Science", "Statistics", "Computational Thinking", "Python", "English"],
      icon: <FaGraduationCap className="text-2xl" />
    },
    {
      institution: "Delhi Public School, Varanasi - CBSE",
      degree: "Senior Secondary Certificate (Class 12th), Science Stream",
      location: "Varanasi, India",
      period: "2023",
      cgpa: null,
      coursework: [],
      icon: <FaSchool className="text-2xl" />
    },
    {
      institution: "Delhi Public School, Varanasi - CBSE",
      degree: "Secondary Certificate (Class 10th)",
      location: "Varanasi, India",
      period: "2021",
      cgpa: "90.2%",
      coursework: [],
      icon: <FaSchool className="text-2xl" />
    }
  ];

  return (
    <section id="education" className="relative py-24 bg-neutral-950">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-lg text-blue-400 font-semibold mb-2">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">📍</span>
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">📅</span>
                      {edu.period}
                    </span>
                    {edu.cgpa && (
                      <span className="flex items-center gap-2">
                        <span className="text-gray-500">⭐</span>
                        {edu.cgpa}
                      </span>
                    )}
                  </div>
                  
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-4">
                      <p className="text-gray-300 font-semibold mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
