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
    <section id="education" className="relative py-24 bg-white/60">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-stone-800 text-center mb-14"
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
              className="relative rounded-2xl border border-amber-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-amber-100/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-amber-100 border border-amber-200/80 flex items-center justify-center text-amber-800">
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">{edu.institution}</h3>
                  <p className="text-lg text-amber-800 font-semibold mb-2">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-stone-500 mb-4">
                    <span className="flex items-center gap-2">
                      <span className="text-amber-600">📍</span>
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-amber-600">📅</span>
                      {edu.period}
                    </span>
                    {edu.cgpa && (
                      <span className="flex items-center gap-2">
                        <span className="text-amber-600">⭐</span>
                        {edu.cgpa}
                      </span>
                    )}
                  </div>
                  
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-4">
                      <p className="text-stone-600 font-semibold mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-amber-100/80 border border-amber-200/60 text-sm text-stone-600"
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
