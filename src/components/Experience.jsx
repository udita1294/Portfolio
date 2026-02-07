import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "All India Council for Technical Education (AICTE)",
      position: "Frontend Web Development Intern",
      location: "Remote",
      period: "Aug 2024 – Sep 2024",
      description: "Completed 6 week internship focused on React.js, HTML5, and modern frontend development practices",
      icon: <FaBriefcase className="text-2xl" />
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-amber-50/50">
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
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
                  <div className="w-16 h-16 rounded-xl bg-amber-100 border border-amber-200/80 flex items-center justify-center text-amber-600">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">{exp.position}</h3>
                  <p className="text-lg text-amber-700 font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-stone-500 mb-4">
                    <span className="flex items-center gap-2">
                      <span className="text-amber-500">📍</span>
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-amber-500">📅</span>
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
